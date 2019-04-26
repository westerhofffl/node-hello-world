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

const swapPairs = (head) => {
    if (!head){
        return null;
    }
    if (!head.next){
        return head;
    }
    const node = swapPairs(head.next.next);
    const p2 = head.next;
    p2.next = head;
    head.next = node;
    return p2;
};

let headS = new ListNode(1);
headS.next = new ListNode(2);
headS.next.next = new ListNode(3);
headS.next.next.next = new ListNode(4);
headS.next.next.next.next = new ListNode(5);
headS.next.next.next.next.next = new ListNode(6);
headS.next.next.next.next.next.next = new ListNode(7);
headS.next.next.next.next.next.next.next = new ListNode(8);
let result = swapPairs(headS);
console.log(result);