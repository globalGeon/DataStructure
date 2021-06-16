
function Node(value) {
    this.value = value;
    this.depth = 1;
    this.left = null;
    this.right = null;
}
Node.prototype.setDepth = function () {
    var root = this;
    if (root == null) {
        root.depth = 0;
    } else if (root != null) {
        root.depth = 1;
    }

    if (root.left != null) {
        root.depth = root.left.depth + 1;
    } else if (root.right != null && root.depth <= root.right.depth) {
        root.depth = root.right.depth + 1;
    }
}
Node.prototype.rotateLL = function () {
    var root = this;
    var rootValue = root.value;
    var rootRight = root.right;
    root.value = this.left.value;

    root.right = root.left;
    root.left = root.left.left;
    root.right.left = root.right.right;
    root.right.right = rootRight;
    root.right.value = rootValue;

    root.right.setDepth();
    root.setDepth();
}
Node.prototype.rotateRR = function () {
    var root = this;
    var rootLeft = root.Left;
    var rootValue = root.value;
    root.value = root.right.value;

    root.left = root.right;
    root.right = root.right.right;
    root.left.right = root.left.left;
    root.left.left = rootLeft;
    root.left.value = rootValue;

    root.left.setDepth();
    root.setDepth();
}
Node.prototype.balance = function () {
    var root = this;
    var lDepth = root.left != null ? root.left.depth : 0;
    var rDepth = root.right != null ? root.right.depth : 0;

    if (lDepth > rDepth + 1) {
        var llDepth = root.left.left != null ? root.left.left.depth : 0;
        var lrDepth = root.left.right != null ? root.left.right.depth : 0;

        if (lrDepth > llDepth) {
            root.left.rotateRR();
        }
        root.rotateLL();
    } else if (rDepth > lDepth + 1) {
        var rlDepth = root.right.left ? root.right.left.depth : 0;
        var rrDepth = root.right.right ? root.right.right.depth : 0;

        if (rlDepth > rrDepth) {
            root.right.rotateLL();
        }
        root.rotateRR();
    }
}
Node.prototype.insert = function (value) {
    var root = this;
    var inserted = false;

    if (root.value == value) {
        return false;
    } else if (root.value > value) {
        if (root.left == null) {
            root.left = new Node(value);
            inserted = true;
        } else if (root.left != null) {
            inserted = root.left.insert(value);
            if (inserted == true) root.balance();
        }
    } else if (root.value < value) {
        if (root.right == null) {
            root.right = new Node(value);
            inserted = true;
        } else if (root.right != null) {
            inserted = root.right.insert(value);
            if (inserted == true) root.balance();
        }
    }

    if (inserted == true) root.setDepth();
    return inserted;
}
Node.prototype.remove = function (value) {
    return _delete(this, value);

    function _delete(root, value) {
        if (!root) {
            return null;
        } else if (root.value > value) {
            root.left = _delete(root.left, value);
        } else if (root.value < value) {
            root.right = _delete(root.right, value);
        } else if (root.value == value) {
            if (!root.left && !root.right) {
                return null;
            } else if (!root.left) {
                root = root.right;
                return root;
            } else if (!root.right) {
                root = root.left;
                return root;
            } else if (root.left && root.right) {
                var min = findMin(root.right);
                root.value = min.value;
                root.right = _delete(root.right, min.value);
                return root;
            }
        }
        root.setDepth();
        return root;
    }

    function findMin(root, value) {
        while (root.left) {
            root = root.left;
        }
        return root;
    }
}

var node = new Node(6, '');

node.insert(5);
node.insert(2);
/* Node {
  value: 5,
  depth: 2,
  left: Node { value: 2, depth: 1, left: null, right: null },
  right: Node { value: 6, depth: 1, left: null, right: null }
} */
node.remove(5);
node.remove(2);
/* Node { value: 6, depth: 1, left: null, right: null } */

