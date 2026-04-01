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
     * @return {boolean}
     */
    isBalanced(root) {
        if (!root) return true
        const [leftHeight, isLeftBalanced] = this.getNodeHeightAndBalance(root.left, 1)
        const [rightHeight, isRightBalanced] = this.getNodeHeightAndBalance(root.right, 1)
        const diff = Math.abs(leftHeight - rightHeight)
        return isLeftBalanced && isRightBalanced && diff <=1
    }
    
    getNodeHeightAndBalance(tree, height) {
        if (!tree) return [height, true]
        const [leftHeight, isLeftBalanced] = this.getNodeHeightAndBalance(tree.left, height + 1)
        const [rightHeight, isRightBalanced] = this.getNodeHeightAndBalance(tree.right, height + 1)
        const maxSubTreeHeight = Math.max(leftHeight, rightHeight)
        const diff = Math.abs(leftHeight - rightHeight)
        const isNodeBalanced = isLeftBalanced && isRightBalanced && diff <=1
        return [maxSubTreeHeight, isNodeBalanced]
    }
}
