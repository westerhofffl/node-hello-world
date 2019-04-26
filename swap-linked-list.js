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
    const swap = (head) =>{
        if(!head.next){
            return head;
        }else {
            let nA = head.val;
            let nB = head.next.val;
            head.val = nB;
            head.next.val = nA;
    
            if(head.next.next){
                head.next.next = swap(head.next.next);
                return head
                
            }else{
                return head;
            }
        }
    }
    let A = null;
    let B = null;
    if(!head.next){
        return head;
    }else {
        A = head.val;
        B = head.next.val;
        head.next.val = A;
        head.val = B;

        if (!head.next.next){
            return head;
        }else {
            let subList = swap(head.next.next);
            head.next.next = subList;
            return head;
        }   
    }


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