class Stack {

    constructor(){
        this.array= [];
    }

    peek(){
        const length = this.array.length-1;
        return this.array[length] ;
    }
    push(value){
        this.array.push(value);
        return this;
    }
    pop(){
        this.array.pop();
        return this;
    }
}
const myStack = new Stack;

myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.pop();
console.log(myStack.peek());
console.log(myStack);