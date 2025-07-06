class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }
    push(value) {
        this.data[this.length] = value;
        this.length++;
        return this.length;
    }
    pop() {
        delete this.data[this.length - 1];
        this.length--;
        return this.length;
    }
    delete(index) {
        delete this.data[index];
        this.shiftItems(index);
        return this.length;
    }
    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

arr = new MyArray();
console.log("********************");
arr.push(5);
arr.push(2);
arr.push(10);
arr.push(99);
arr.push(120);
arr.delete(1);
arr.pop();
console.log(arr);
console.log(arr.get(0));
console.log("********************");
