/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (!list1) return list2
        if (!list2) return list1
        let head1 = list1
        let head2 = list2
        let merged
  
        if (head1.val < head2.val) {
            merged = new ListNode(head1.val, null)
            head1 = head1.next
        } else {
            merged = new ListNode(head2.val, null)
            head2 = head2.next
        }
        let current = merged

        while (head1 || head2) {
            if (!head1) {
                current.next = head2
                break
            }
            if (!head2) {
                current.next = head1
                break
            }
            if (head1.val < head2.val) {
                current.next = new ListNode(head1.val, null)
                head1 = head1.next
            } else {
                current.next = new ListNode(head2.val, null)
                head2 = head2.next
            }
            current = current.next
        }
        return merged
    }
}
