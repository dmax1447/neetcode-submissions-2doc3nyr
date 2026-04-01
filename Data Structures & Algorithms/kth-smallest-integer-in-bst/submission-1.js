/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const inorderArr = this.convertToArrByInoderTraverse(root)        
        return inorderArr[k-1]

    }


    inorderTraverse(root, cb) {
        if (!root) return
        this.inorderTraverse(root.left, cb)
        cb(root)
        this.inorderTraverse(root.right, cb)
    }
    convertToArrByInoderTraverse(root) {
        const arr = []
        const callback = (node) => arr.push(node.val)
        this.inorderTraverse(root, callback)
        return arr
    }

}
