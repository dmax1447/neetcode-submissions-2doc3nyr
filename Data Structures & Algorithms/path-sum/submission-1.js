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
function getSum(path){
    return path.reduce((acc, item) => acc + item, 0)
}


class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {
        const sumPath = []
        const isPathExist = this.getSumPath(root, sumPath, targetSum)
        return isPathExist
    }
    getSumPath(root, path, target){
        if (!root) return false
        path.push(root.val) // [1] |
        const currentSum = getSum(path) // 1 |
        if (!root.left && !root.right && currentSum === target) return true
        if (this.getSumPath(root.left, path, target)) return true
        if (this.getSumPath(root.right, path, target)) return true
        path.pop()
        return false
    }
    
}
