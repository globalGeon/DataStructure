function Queue(array) {
    this.array = [];
    if (array) this.array = array;
}
Queue.prototype.getBuffer = function () {
    return this.array.slice();
}
Queue.prototype.isEmpty = function () {
    return this.array.length === 0;
}
Queue.prototype.enqueue = function (value) {
    this.array.push(value);
}
Queue.prototype.dequeue = function () {
    return this.array.shift();
}
Queue.prototype.peek = function () {
    return this.array[0];
}
function access(queue, n) {
    if (n <= 0) throw 'error';
    bufferArray = queue.getBuffer();
    bufferQueue = new Queue(bufferArray);

    while (--n) {
        bufferQueue.dequeue();
    }

    return bufferQueue.dequeue();
}

function search(queue, value) {
    bufferArray = queue.getBuffer();
    bufferQueue = new Queue(bufferArray);

    while (!bufferQueue.isEmpty()) {
        if (bufferQueue.dequeue() === value) {
            return true;
        }
    }
    return false;
}

var queue = new Queue();

console.log("----------enqueue-----------");
queue.enqueue(1); // [1]
console.log(queue.peek());
queue.enqueue(2); // [1,2]
console.log(queue.peek());
queue.enqueue(3); // [1,2,3]
console.log(queue.peek());
queue.enqueue(4); // [1,2,3,4]
console.log(queue.peek());
console.log(queue);

console.log("----------dequeue-----------");
queue.dequeue(); // [2,3,4]
queue.dequeue(); // [3,4,]
queue.dequeue(); // [4]
queue.dequeue(); // []
console.log(queue);

queue.enqueue(1); // [1]
queue.enqueue(2); // [1,2]
queue.enqueue(3); // [1,2,3]
queue.enqueue(4); // [1,2,3,4]
console.log("----------access-----------");
console.log(access(queue, 3)); // Queue[4], 4 반환

console.log("----------search-----------");
console.log(search(queue, 1)); // true
console.log(search(queue, 2)); // t
console.log(search(queue, 3)); // t
console.log(search(queue, 4)); // t
console.log(search(queue, 5)); // false