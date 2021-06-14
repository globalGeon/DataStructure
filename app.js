function Stack(array) {
    this.array = [];
    if (array) this.array = array;
}
Stack.prototype.getBuffer = function() {
    return this.array.slice();
}
Stack.prototype.isEmpty = function() {
    return this.array.length == 0;
}
//instance of the stack class
var stack1 = new Stack();
console.log(stack1); // {array: []}
Stack.prototype.peek = function() {
    return this.array[this.array.length - 1];
}
stack1.push(10);
console.log(stack1.peek()); // 10
stack1.push(5);
console.log(stack1.peek()); // 5
Stack.prototype.push = function(value) {
    this.array.push(value);
}
stack1.push(1);
stack1.push(2);
stack1.push(3);
console.log(stack1); // {array: [1,2,3]}
Stack.prototype.pop = function() {
    return this.array.pop();
};
stack1.pop(1);
stack1.pop(2);
stack1.pop(3);
console.log(stack1); // {array: []}


function stackAccessNthTopNode(stack, n) {
    var bufferArray = stack.getBuffer();
    if (n <= 0) throw 'error'


    var bufferArray = stack.getBuffer();
    var bufferStack = new Stack(bufferArray);

    while (--n !== 0) {
        bufferStack.pop();
    }
    return bufferStack.pop();
}
var stack2 = new Stack();
stack2.push(1);
stack2.push(2);
stack2.push(3);
stackAccessNthTopNode(stack2, 2); // 2
function stackSearch(stack, element){
    var bufferArray = stack.getBuffer();
    var bufferStack = new Stack(bufferArray);
    while(!bufferStack.isEmpty()){
        if(bufferStack.pop()==element){
            return true;
        }
    }
    return false;
}
var stack3 = new Stack();
stack3.push(1);
stack3.push(2);
stack3.push(3);
stackSearch(stack3,3); // true