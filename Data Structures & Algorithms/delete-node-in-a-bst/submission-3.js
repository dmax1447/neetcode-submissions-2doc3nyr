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
function findMinNode(root) {
    if (!root.left) return root
    return findMinNode(root.left)
}

function findNode(root, val) {
    let node = root
    let parent = root
    while (node.val !== val) {
        parent = node
        if(val < node.val) {
            if(!node.left) return null
            node = node.left
        } else {
            if (!node.right) return null
            node = node.right
        }

    }
    return {target: node, parent}
}


class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        const result = findNode(root, key)
        if (!result) return root
        const {target, parent} = result

        if (target.left && target.right) {
            const replacementNode = findMinNode(target.right)
            this.deleteNode(target, replacementNode.val)
            target.val = replacementNode.val
        } else  {
            const nodeForReplace = target.left || target.right
            if (parent.left === target) {
                parent.left = nodeForReplace
            } else if (parent.right === target) {
                parent.right = nodeForReplace
            } else {
                return nodeForReplace
            } 
        }
        return root
    }
}
