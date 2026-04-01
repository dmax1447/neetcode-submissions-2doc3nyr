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
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        if (!head) return head
        let i = 0
        let prev = null //предыдущая
        let current = head //текущая
        let linkToNext = current.next // ссылка на следующюю

        current.next = prev
        prev = current

        while(linkToNext) {
            current = linkToNext
            linkToNext = current.next
            current.next = prev
            prev = current
            console.log(2, {current, linkToNext, prev})
        }
        // current = linkToNext
        // linkToNext = current.next
        // current.next = prev
        // prev = current
        // console.log(2, {current, linkToNext, prev})

        // current = linkToNext
        // linkToNext = current.next
        // current.next = prev
        // prev = current
        // console.log(3, {current, linkToNext, prev})


        // while (i<1) {
        //     console.log(`1-${i}`, {prev, current, next})
        //     next = current.next
        //     console.log(`2-${i}`, {prev, current, next})
        //     current.next = prev
        //     console.log(`3-${i}`, {prev, current, next})
        //     prev = current
        //     console.log(`4-${i}`, {prev, current, next})
        //     // current = next
        //     // console.log(`5-${i}`, {prev, current, next})
        //     i++
        // }
        
        return current
    }
}
