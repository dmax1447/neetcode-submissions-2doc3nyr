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
            console.log(`count: ${count}, node: ${root?.val ?? null},`)
            if (!root) {
                console.log('no node, return')
                return
            }
            console.log('increment count')
            console.log('go left')
            inorderTraverseCheck(root.left)
            count += 1
            console.log('check current', {count, k, val: root.val})
            if (count === k) {
                console.log('target', root.val)
                result = root.val
                return
            }
            console.log('go right')
            inorderTraverseCheck(root.right)
        }
        
        inorderTraverseCheck(root)
        console.log('result', result)
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
