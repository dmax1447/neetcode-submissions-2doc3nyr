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

        console.log('target', target)
        console.log('parent', parent)
        console.log('-------processing------')
        

        if (target.left && target.right) {
            const replacementNode = findMinNode(target.right)
            console.log('replacementNode', replacementNode)
            this.deleteNode(target, replacementNode.val)
            target.val = replacementNode.val

        } else  {
            console.log('deleteing node without 2 link:\n', target)
            console.log('parent before:\n', parent)
            const nodeForReplace = target.left || target.right


            if (parent.left === target) {
                console.log('delete left child:\n')
                parent.left = nodeForReplace
            } else if (parent.right === target) {
                console.log('delete right child:\n')
                parent.right = nodeForReplace
            } else {
                return nodeForReplace
            } 
            console.log('parent after:\n', parent)
        }

        return root
    }
}
