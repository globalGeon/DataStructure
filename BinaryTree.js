function BinaryTree() {
    this._root = null;
}
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
BinaryTree.prototype.traversePreOrder = function () {
    return traverse(this._root);

    function traverse(current) {
        if (!current) return;

        console.log(current.value);
        traverse(current.left);
        traverse(current.right);
    }
}
BinaryTree.prototype._traversePreOrder = function () {
    var stack = [];
    stack.push(this._root);

    while (stack.length) {
        var current = stack.pop();

        console.log(current.value);
        if (current.right) stack.push(current.right);
        if (current.left) stack.push(current.left);
    }
}
BinaryTree.prototype.traverseInOrder = function () {
    return traverse(this._root);

    function traverse(current) {
        if (!current) return;

        traverse(current.left);
        console.log(current.value);
        traverse(current.right);
    }
}
BinaryTree.prototype._traverseInOrder = function () {
    var current = this._root;
    var stack = [];
    var done = false;

    while (!done) {
        if (current) {
            stack.push(current);
            current = current.left;
        } else if (!current) {
            if (stack.length) {
                current = stack.pop();
                console.log(current.value);
                current = current.right;
            } else if (!stack.length) {
                done = true;
            }
        }
    }
}
BinaryTree.prototype.traversePostOrder = function () {
    return traverse(this._root);

    function traverse(current) {
        if (!current) return;

        if (current.left) traverse(current.left);
        if (current.right) traverse(current.right);
        console.log(current.value);
    }
}
BinaryTree.prototype._traversePostOrder = function () {
    var stack1 = [];
    var stack2 = [];

    stack1.push(this._root);
    while (stack1.length) {
        var current = stack1.pop();
        stack2.push(current);
        if (current.left) stack1.push(current.left);
        if (current.right) stack1.push(current.right);
    }
    while (stack2.length) {
        var current = stack2.pop();
        console.log(current.value);
    }
}
BinaryTree.prototype.traverseLevelOrder = function () {
    var queue = [];
    
    if(!this._root) return;
    queue.push(this._root);
    while(queue.length) {
        var current = queue.shift();
        console.log(current.value);
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
    }
}

var binarytree = new BinaryTree();

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);
var node6 = new Node(6);
var node7 = new Node(7);

binarytree._root = node1;
node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;

binarytree.traversePreOrder(); // 1-2-4-5-3-6-7
binarytree._traversePreOrder(); // 1-2-4-5-3-6-7

binarytree.traverseInOrder(); // 4-2-5-1-6-3-7
binarytree._traverseInOrder(); // 4-2-5-1-6-3-7

binarytree.traversePostOrder(); // 4-5-2-6-7-3-1
binarytree._traversePostOrder(); // 4-5-2-6-7-3-1

binarytree.traverseLevelOrder(); // 1-2-3-4-5-6-7