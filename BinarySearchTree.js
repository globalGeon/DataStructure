function BinarySearchTree() {
    this._root = null;
}
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
BinarySearchTree.prototype.insert = function (value) {
    if (!this._root) {
        this._root = new Node(value);
    } else if (this._root) {
        var current = this._root;
        while (true) {
            if (current.value == value) {
                console.log("삽입 불가");
                break;
            } else if (current.value > value) {
                if (!current.left) {
                    current.left = new Node(value);
                    break;
                } else if (current.left) {
                    current = current.left;
                }
            } else if (current.value < value) {
                if (!current.right) {
                    current.right = new Node(value);
                    break;
                } else if (current.right) {
                    current = current.right;
                }
            }
        }
    }
}
BinarySearchTree.prototype.remove = function (value) {
    return _remove(this._root, value);

    function _remove(current, value) {
        if (current == null) {
            return null;
        } else if (current.value > value) {
            current.left = this._remove(current.left, value);
        } else if (current.value < value) {
            current.right = this._remove(current.right, value);
        } else if (current.value == value) {
            if (!current.left && !current.right) {
                return null;
            } else if (!current.left) {
                current = current.right;
                return current;
            } else if (!current.right) {
                current = current.left;
                return current;
            } else if (current.left && current.right) {
                var min = findMin(current.right);
                current.value = min.value;
                current.right = _remove(current.right, min.value);
                return current;
            }
        }
        return current;
    }

    function findMin(current, value) {
        while (current.left) {
            current = current.left;
        }
        return current;
    }
}
BinarySearchTree.prototype.find = function(value) {
    var current = this._root;
    
    while(current) {
        if(current.value == value) {
            return true;
        } else if(current.value > value) {
            current = current.left;
        } else if(current.value < value) {
            current = current.right;
        }
    }
    return false;
}

var bst = new BinarySearchTree();

bst.insert(5);
bst.insert(3);
bst.insert(8);
bst.insert(1);
bst.insert(4);
bst.insert(11);
console.log(bst);
/*
 BinarySearchTree {
  _root: Node {
    value: 5,
    left: Node { value: 3, left: [Node], right: [Node] },
    right: Node { value: 8, left: null, right: [Node] }
  }
}
   */

bst.remove(5);
console.log(bst.find(4)); // true
console.log(bst.find(5)); // false