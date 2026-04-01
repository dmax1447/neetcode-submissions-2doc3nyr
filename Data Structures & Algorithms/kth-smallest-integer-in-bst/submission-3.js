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
        // return this.getSmallestV1(root, k)
        return this.getSmallestV2(root, k)

    }
    // simple, with convert to arr
    getSmallestV1(root, k) {
        const inorderArr = this.convertToArrByInoderTraverse(root)        
        return inorderArr[k-1]
    }

    getSmallestV2(root, k) {
        let count = 0
        let result
        function inorderTraverseCheck(root) {
            if (!root || result) return
            inorderTraverseCheck(root.left)
            count += 1
            if (result) return
            if (!result && count === k) {
                console.log('FOUND!', root.val)
                result = root.val
                return root.val
            }
            inorderTraverseCheck(root.right)
        }
        
        inorderTraverseCheck(root)
        return result
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
