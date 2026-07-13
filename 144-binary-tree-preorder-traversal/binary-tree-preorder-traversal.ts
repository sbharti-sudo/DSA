/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
// root, left , right
function preorderTraversal(root: TreeNode | null): number[] {
    let output: number[] = []

    function traverse(node:TreeNode | null) : void {
        if(node === null) return;
        output.push(node.val);
        traverse(node.left);
        traverse(node.right)
    }

    traverse(root) // starts here 
    return output;
    
};