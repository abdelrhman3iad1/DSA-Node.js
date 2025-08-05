const LinkedList = require('../Linked-List/single_implementation');

class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }
    peek(){
        return this.first;
    }
    enqueue(value){
        const newNode = new LinkedList.Node(value);
        if(this.length == 0){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }
    dequeue(){
        if(this.length == 0) this.last = null ;
        if(this.first == null) return null ;
        this.first = this.first.next;
        this.length--;
        return this.first;
    }
}

const myQueue = new Queue;
myQueue.enqueue(5);
myQueue.enqueue(2);
myQueue.enqueue(1);
myQueue.enqueue(3);
myQueue.dequeue();
console.log(myQueue.peek());
console.log(myQueue);