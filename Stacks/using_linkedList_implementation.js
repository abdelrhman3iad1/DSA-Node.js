const LinkedList = require('../Linked-List/single_implementation');
class Stack {

    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        return this.top ;
    }
    push(value){
        const newNode = new LinkedList.Node(value);
        if(this.top == null){
            this.top = newNode;
            this.bottom = newNode;
        }else{
            let holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer;
        }
        this.length++ ;
        return this;
    }
    pop(){
        if(this.length == 0) this.bottom = null;
        if(this.top == null) return this;
        this.top = this.top.next;
        this.length--;
        return this;
    }
}
const myStack = new Stack;

myStack.push('smart');
myStack.push('vision');
myStack.push('eco');
myStack.pop();
console.log(myStack);