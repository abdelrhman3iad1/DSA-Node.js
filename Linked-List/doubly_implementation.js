class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class DoubleLinkedList {
    constructor(value){
        this.head = {
            value:value,
            next:null,
            prev:null,
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);

        this.tail.next = newNode;
        /* Double */ newNode.prev = this.tail;
        this.tail = newNode;
        this.length++
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        /* Double */ this.head.prev = newNode
        this.head = newNode;
        this.length++;
        
    }

    printList(){
        let currentNode = this.head;
        const arr = [];
        while (currentNode !== null){
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr ;
    }

    insert(index , value){

        if (index >= this.length){
            return this.append(value);
        }else if(index == 0){
            return this.prepend(value);
        }

        let currentNode = this.head;
        let currentIndex = 0;
        let nextNode = null;
        let newNode = new Node(value);

        while (currentNode !== null){


            if(currentIndex == index-1){
                nextNode = currentNode.next;
                /* Double */ newNode.prev = currentNode ;
                currentNode.next = newNode;
            }
            else if(currentIndex == index){
                currentNode = newNode;
                /* Double */ nextNode.prev = currentNode;
                currentNode.next = nextNode;
            }

            currentNode = currentNode.next;
            currentIndex++;
        }
        this.length++;
        return this;
    }
    traverse(index){
        let currentIndex = 0;
        let currentNode = this.head;
        while (currentIndex !== index){
            currentNode = currentNode.next;
            currentIndex++;
        }
        return currentNode;
    }

    remove(index){
        if(index >= this.length) index = this.length-1;
        let selectedIndex = this.traverse(index);

        let afterSelected = selectedIndex.next;

        if(index == 0){
            this.head = afterSelected;
            /* Double */ this.head.prev = null;
        }
        else {
            let beforeSelected = this.traverse(index-1);
            if(index == (this.length-1) ){
                this.tail = beforeSelected;
            }
            beforeSelected.next = afterSelected;
            /* Double */ afterSelected.prev = beforeSelected ;
        }
        this.length--;
        return this.printList();
    }
}
const MyLinkedList = new DoubleLinkedList(1);
MyLinkedList.append(5);
MyLinkedList.append(10);
// MyLinkedList.append(50);
MyLinkedList.prepend(155);
MyLinkedList.insert(1,555);

MyLinkedList.remove(3);

console.log(MyLinkedList.printList());
console.log(MyLinkedList);