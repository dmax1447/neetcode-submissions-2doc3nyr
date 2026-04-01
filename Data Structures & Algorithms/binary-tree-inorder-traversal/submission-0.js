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
     * @return {number[]}
     */
    inorderTraversal(treeRoot) {
        function inorder(root) {
            if (root == null) {
                return [];
            }
            return [...inorder(root.left), root.val, ...inorder(root.right)]
        }

        return inorder(treeRoot)
    }
}
