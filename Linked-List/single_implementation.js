/**
 * Linked list : consists of several nodes all over the memory and unorderd
 * nodes : each has its data and pointer to the next item 
 * last item called tail its pointer refers to null
 * first item called head is the only known one to you to start performing actions on it
 * 
 * 
 * Prepend : O(1)
 * Append : O(1)
 * Lookup : O(n)
 * Insert : O(n)
 * Delete : O(n)
 */

/**
 * space comlexity of linkedlist and array of type int32
 * 
 * linked list : 32bit (4bytes) + 1 pointer (usually 8 bits and depends on os) = 40 bit = 5 bytes
 * double linked list : 32bit (4bytes) + 2 pointer  = 48bit = 6 bytes
 * array: 32bit (4bytes) = 32bit = 4 bytes
 */
class Node {
    constructor(value){
        this.value = value,
        this.next = null
    }
}
class LinkedList {
    constructor(value){
        this.head = {
            value:value,
            next:null,
        };
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++
    }

    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
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
                currentNode.next = newNode;
            }
            else if(currentIndex == index){
                currentNode = newNode;
                currentNode.next = nextNode;
            }

            currentNode = currentNode.next;
            currentIndex++;
        }
        this.length++;
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
        }
        else {
            let beforeSelected = this.traverse(index-1);
            if(index == (this.length-1) ){
                this.tail = beforeSelected;
            }
            beforeSelected.next = afterSelected;
        }
        this.length--;
        return this.printList();
    }
}
const MyLinkedList = new LinkedList(1);
MyLinkedList.append(5);
MyLinkedList.append(10);
// MyLinkedList.append(50);
MyLinkedList.prepend(155);
MyLinkedList.insert(1,555);

MyLinkedList.remove(5);

console.log(MyLinkedList.printList());
console.log(MyLinkedList);