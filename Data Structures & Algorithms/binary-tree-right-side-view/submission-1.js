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
    rightSideView(root) {
        if (!root) return []
        return this.bfs(root)
    }
    bfs(root) {
        const result = []
        const queue = []
        queue.push(root)
        while(queue.length) {
            const levelLength = queue.length
            for(let i = 0; i < levelLength; i++) {
                const node = queue.shift()
                if (i === levelLength - 1) result.push(node.val)
                if(node.left) queue.push(node.left)
                if(node.right)queue.push(node.right)
            }
        }
        return result
    }   
}
