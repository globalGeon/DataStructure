function SinglyLinkedList() {
    this.head = null;
    this.size = 0;
}
function Node(value) {
    this.value = value;
    this.next = null;
}
SinglyLinkedList.prototype.isEmpty = function () {
    return this.size === 0;
}
SinglyLinkedList.prototype.insert = function (value) {
    if (this.head == null) {
        this.head = new Node(value);
    } else if (this.head != null) {
        var temp = this.head;
        this.head = new Node(value);
        this.head.next = temp;
    }
    this.size++;
}
SinglyLinkedList.prototype.remove = function (value) {
    var current = this.head;

    if (current.value == value) {
        this.head = current.next;
        this.size--;
    } else if (current != value) {
        var previous = current;
        while (current.next) {
            if (current.value == value) {
                previous.next = current.next;
                previoust = current;
                current = current.next;
            } else if (current.value != value) {
                previous = current;
                current = current.next;
            }
        }
        if (current.value == value) {
            previous.next = null;
        }
        this.size--;
    }
}
SinglyLinkedList.prototype.deleteAtHead = function () {
    var value = null;
    if (this.head) {
        value = this.value;
        this.head = this.head.next;
        this.size--;
    }
    return value;
}
SinglyLinkedList.prototype.find = function (value) {
    var current = this.head;
    while (current.next) {
        if (current.value == value) return true;
        current = current.next;
    }
    return false;
}

var sll = new SinglyLinkedList();

console.log("-------insert---------------")
sll.insert(1); // 1, size 1
sll.insert(2); // 2 -> 1, size 2
sll.insert(3); // 3 -> 2 -> 1, size 3
sll.insert(4); // 4 -> 3 -> 2 -> 1, size 4
console.log(sll);

console.log("-------remove---------------");
sll.remove(1); // 4 -> 3 -> 2, size 3
sll.remove(2); // 4 -> 3, size 2
sll.remove(3); // 4, size 1
sll.remove(4); // null, size 0
console.log(sll);

sll.insert(1); // 1, size 1
sll.insert(2); // 2 -> 1, size 2
sll.insert(3); // 3 -> 2 -> 1, size 3
sll.insert(4); // 4 -> 3 -> 2 -> 1, size 4
console.log("-------deleteAtHead---------------");
sll.deleteAtHead(); // 3 -> 2 -> 1, size 3
sll.deleteAtHead(); // 2 -> 1, size 2
sll.deleteAtHead(); // 1, size 1
console.log(sll);

sll.insert(1); // 1, size 1
sll.insert(2); // 2 -> 1, size 2
sll.insert(3); // 3 -> 2 -> 1, size 3
sll.insert(4); // 4 -> 3 -> 2 -> 1, size 4
console.log("-------find---------------");
console.log(sll.find(1)); // true
console.log(sll.find(2)); // t
console.log(sll.find(3)); // t
console.log(sll.find(4)); // t
console.log(sll.find(5)); // false