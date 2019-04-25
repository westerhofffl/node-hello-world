/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function ListNode(data){
    this.val = data;
    this.next = null;
}
var swapPairs = function(head) {
    var cNode = head;

    while(cNode.next.next){
        let nextNode = cNode.next.next;
        let nodeA = cNode.val;
        nodeA.next = nextNode;
        let nodeB = cNode.next
        cNode.val = nodeB;
        cNode.next = nodeA
        cNode = nextNode;
    }
    return head

};

let headS = new ListNode(1);
headS.next = new ListNode(2);
headS.next.next = new ListNode(3);
headS.next.next.next = new ListNode(4);
swapPairs(headS);