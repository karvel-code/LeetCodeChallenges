/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let dummy = new ListNode(-Infinity)
    dummy.next = head
    let prev = dummy
    let curr = head
    while(curr) {
        if (curr.val === prev.val) {
            while(curr && curr.val === prev.val) {
              curr = curr.next  
            }
            prev.next = curr            
        } else {
            prev = curr
            curr = curr.next
        }
    }
    return dummy.next
    
};