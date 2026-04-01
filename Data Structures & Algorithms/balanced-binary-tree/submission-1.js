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
        const [leftHeight, isLeftBalanced] = this.calcHeight(root.left, 1)
        const [rightHeight, isRightBalanced] = this.calcHeight(root.right, 1)
        const diff = Math.abs(leftHeight - rightHeight)
        return isLeftBalanced && isRightBalanced && diff <=1
    }
    
    
    calcHeight(tree, height) {
        if (!tree) return [height, true]
        const [leftHeight, isLeftBalanced] = this.calcHeight(tree.left, height + 1)
        const [rightHeight, isRightBalanced] = this.calcHeight(tree.right, height + 1)
        const maxSubTreeHeight = Math.max(leftHeight, rightHeight)
        const diff = Math.abs(leftHeight - rightHeight)
        const isNodeBalanced = isLeftBalanced && isRightBalanced && diff <=1
        return [maxSubTreeHeight, isNodeBalanced]
    }
}
