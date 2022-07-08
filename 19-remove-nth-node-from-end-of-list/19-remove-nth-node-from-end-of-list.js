/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummyHead = new ListNode(-Infinity);
    dummyHead.next = head;
    
    //set variables for slow and fast pointers
    let slow = dummyHead
    let fast = dummyHead
    
    //set fast node to point to index at n
    for(let i = 0; i <= n; i++) {
        fast = fast.next
    }
    
    // set slow n nodes behind fast.
    while(fast) {
        fast = fast.next
        slow = slow.next
    }
    //set slow to point to two nodes ahead of slow
    slow.next = slow.next.next
    return dummyHead.next
    
};