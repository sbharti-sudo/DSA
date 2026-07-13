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
// left,right, root
function postorderTraversal(root: TreeNode | null): number[] {
    let output: number[] = []

    function traverse(node: TreeNode | null) {
        if (node === null) return;
        traverse(node.left);
        traverse(node.right);
        output.push(node.val)
    }

    traverse(root);// starts here 
    return output;


};