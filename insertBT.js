// https://leetcode.com/problems/insert-into-a-binary-search-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var Node = function(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}
var BinarySearchTree = function() {
    this.root = null;
}

BinarySearchTree.prototype.push = function(val) {
    var root = this.root;
    if (!root) {
        this.root = new Node(val);
    }
    var currentNode = root;
    var newNode = new Node(val);
    while (currentNode) {
        if (val < currentNode.value) {
            if (!currentNode.left) {
                currentNode.left = newNode;
                break;
            } else {
                currentNode = currentNode.left;
            }
        } else {
            if (!currentNode.right) {
                currentNode.right = newNode;
                break
            } else {
                currentNode = currentNode.right;
            }
        }
    }
}

var loadTree = function(arr, tree) {
    var i = 0
    for (i = 0; i < arr.length; i++) {
        tree.push(arr[i]);
    }
}

// var insertIntoBST = function(tree, val) {

//     tree.push(val);
//     return tree;
// };
var startArr = [4, 1, 2, 3, 7]
var startTree = new BinarySearchTree;
loadTree(startArr, startTree);
startTree.push(5);
console.log(startTree);
