function Heap() {
    this.array = [];
}
Heap.prototype.swap = function (index1, index2) {
    var temp = this.array[index1];
    this.array[index1] = this.array[index2];
    this.array[index2] = temp;
}
Heap.prototype.parentIndex = function (current) {
    return Math.floor((current - 1) / 2);
}
Heap.prototype.leftChildIndex = function (current) {
    return current * 2 + 1;
}
Heap.prototype.rightChildIndex = function (current) {
    return current * 2 + 2;
}
Heap.prototype.parent = function (current) {
    return this.array[this.parentIndex(current)];
}
Heap.prototype.leftChild = function (current) {
    return this.array[this.leftChildIndex(current)];
}
Heap.prototype.rightChild = function (current) {
    return this.array[this.rightChildIndex(current)];
}
Heap.prototype.peek = function () {
    return this.array[0];
}
Heap.prototype.size = function () {
    return this.array.length();
}
Heap.prototype.add = function (value) {
    this.array[this.array.length] = value;
    this.heapifyUp();
}
Heap.prototype.poll = function () {
    var value = this.array[0];
    this.array[0] = this.array[this.array.length - 1];
    this.array.pop();
    this.heapifyDown();
    return value;
}
/* Max Heap */
function MaxHeap() {
    this.array = [];
}
MaxHeap.prototype = Object.create(Heap.prototype);
MaxHeap.prototype.heapifyDown = function () {
    var current = 0;
    while (this.leftChild(current) && this.leftChild(current) > this.array[current]) {
        var biggest = this.leftChildIndex(current);
        if (this.rightChild(current) && this.rightChild(current) > this.array[biggest]) {
            biggest = this.rightChildIndex(current);
        }
        this.swap(biggest, current);
        current = biggest;
    }
}
MaxHeap.prototype.heapifyUp = function () {
    var current = this.array.length - 1;
    while (this.parent(current) && this.parent(current) < this.array[current]) {
        var smaller = this.parentIndex(current);
        this.swap(smaller, current);
        current = smaller;
    }
}
/* Min Heap */
function MinHeap() {
    this.array = [];
}
MinHeap.prototype = Object.create(Heap.prototype);
MinHeap.prototype.heapifyDown = function () {
    var current = 0;
    while (this.leftChild(current) && this.leftChild(current) < this.array[current]) {
        var smallest = this.leftChildIndex(current);
        if (this.rightChild(current) && this.rightChild(current) < this.array[smallest]) {
            smallest = this.rightChildIndex(current);
        }
        this.swap(smallest, current);
        current = smallest;
    }
}
MinHeap.prototype.heapifyUp = function () {
    var current = this.array.length - 1;
    while (this.parent(current) && this.parent(current) > this.array[current]) {
        var bigger = this.parentIndex(current);
        this.swap(bigger, current);
        current = bigger;
    }
}

var maxHeap = new MaxHeap();

maxHeap.add(1);
maxHeap.add(2);
maxHeap.add(3);
maxHeap.add(4);
maxHeap.add(5);
console.log(maxHeap);
/* Heap { array: [ 5, 4, 2, 1, 3 ] } */

maxHeap.poll() // 5
maxHeap.poll() // 4
maxHeap.poll() // 3
maxHeap.poll() // 2
maxHeap.poll() // 1
git

var minHeap = new MinHeap();

minHeap.add(5);
minHeap.add(4);
minHeap.add(3);
minHeap.add(2);
minHeap.add(1);
console.log(minHeap);
/* Heap { array: [ 1, 2, 4, 5, 3 ] } */

minHeap.poll() // 5
minHeap.poll() // 4
minHeap.poll() // 3
minHeap.poll() // 2
minHeap.poll() // 1