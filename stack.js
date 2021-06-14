function Stack(array) {
    this.array = [];
    if (array) this.array = array;
}
Stack.prototype.push = function (value) {
    this.array.push(value);
}
Stack.prototype.pop = function () {
    return this.array.pop();
}
Stack.prototype.peek = function () {
    return this.array[this.array.length - 1];
}
function access(array, n) {
    if (n <= 0) throw 'error';
    bufferArray = array.getBuffer(array);
    bufferStack = new Stack(bufferArray);

    while (--n !== 0) {
        bufferStack.pop();
    }
    return bufferStack.pop();
}
function search(array, value) {
    bufferArray = array.getBuffer();
    bufferStack = new Stack(bufferArray);

    while (!bufferStack.isEmpty()) {
        if(bufferStack.pop() === value) {
            return true;
        }
    }
    return false;
}
Stack.prototype.getBuffer = function() {
    return this.array.slice();
}
Stack.prototype.isEmpty = function() {
    return this.array.length === 0;
}

var stack = new Stack();
console.log("-------------push-----------");
stack.push(10);
console.log(stack.peek()); // 10
stack.push(5);
console.log(stack.peek()); // 5
stack.push(3);
console.log(stack.peek()); // 3

console.log("--------------pop-----------");
console.log(stack.peek()); // 3
stack.pop();
console.log(stack.peek()); // 5
stack.pop();
console.log(stack.peek()); // 10
stack.pop();

console.log("-------------access----------");
stack.push(1);
stack.push(2);
stack.push(3);
console.log(access(stack, 1));

console.log("--------------search-----------");
console.log(search(stack, 1));
console.log(search(stack, 2));
console.log(search(stack, 3));
console.log(search(stack, 4));