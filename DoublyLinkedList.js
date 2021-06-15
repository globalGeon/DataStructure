function DoublyLinkedList() {
    this.head = null;
    this.tail = null;
    this.size = 0;
}
function Node(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
}
DoublyLinkedList.prototype.isEmpty = function () {
    return this.size == 0;
}
DoublyLinkedList.prototype.insertAtHead = function(value) {
    if (this.head == null) {
        this.head = new Node(value);
        this.tail = this.head;
    } else if (this.head != null) {
        var _new = new Node(value);
        _new.next = this.head;
        this.head.prev = _new;
        this.head = _new;
    }
    this.size++;
}
DoublyLinkedList.prototype.insertAtTail = function (value) {
    if (this.tail == null) {
        this.tail = new Node(value);
        this.head = this.tail;
    } else if (this.tail != null) {
        var _new = new Node(value);
        _new.prev = this.tail;
        this.tail.next = _new;
        this.tail = _new;
    }
    this.size++;
}
DoublyLinkedList.prototype.findStartingHead = function (value) {
    var current = this.head;
    while (current.next) {
        if (current.value == value) {
            return true;
        }
        current = current.next;
    }
    return false;
}
DoublyLinkedList.prototype.findStartingTail = function (value) {
    var current = this.tail;
    while (current.prev) {
        if (current.value == value) {
            return true;
        }
        current = current.prev;
    }
    return false;
}
DoublyLinkedList.prototype.deleteAtHead = function () {
    var value = null;
    if (this.head !== null) {
        value = this.head.value;
        if (this.head == this.tail) {
            this.head = null;
            this.tail = null;
        } else if (this.head !== null) {
            this.head = this.head.next;
            this.head.prev = null;
        }
    }
    this.size--;
    return value;
}
DoublyLinkedList.prototype.deleteAtTail = function () {
    var value = null;
    if (this.tail !== null) {
        value = this.tail.value;
        if (this.tail == this.head) {
            this.tail = null;
            this.head = null;
        } else if (this.tail !== this.head) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
    }
    this.size--;
    return value;
}


var dll = new DoublyLinkedList();

/* insertAtHead */
console.log("------insertAtHead---------");
dll.insertAtHead(1); // { head: 1, tail: 1, size: 1 }
dll.insertAtHead(2); // { head: 2->1, tail: 1->2, size: 2 }
console.log(dll);

/* insertAtTail */
console.log("------insertAtTail---------");
dll.insertAtTail(3); // { head: 2->1->3, tail: 3->1->2, size: 3 }
dll.insertAtTail(4); // { head: 2->1->3->4 , tail: 4->3->1->2, size: 4 }
console.log(dll);

/* findStartinHead, findStartinTail */
console.log("------findStartinHead, findStartinTail---------");
console.log(dll.findStartingHead(3)); // true
console.log(dll.findStartingHead(5)); // false
console.log(dll.findStartingTail(1)); // true
console.log(dll.findStartingTail(5)); // false

/* deleteAtHead */
console.log("------deleteAtHead---------");
dll.deleteAtHead(); // { head: 1->3->4 , tail: 4->3->1, size: 3 }
dll.deleteAtHead(); // { head: 3->4 , tail: 4->3, size: 2 }
console.log(dll);

/* deleteAtTail */
console.log("------deleteAtTail---------");
dll.deleteAtTail(); // { head: 3 , tail: 3, size: 1 }
dll.deleteAtTail(); // { head: null, tail: null, size: 0 }
console.log(dll);





