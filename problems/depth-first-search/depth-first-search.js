// https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/
// https://ru.wikipedia.org/wiki/Обход_дерева#Поиск_в_глубину

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

export function dfs(root) {
  const result = [];

  function dfsInner(tree) {
    if (tree === null) {
      return;
    }
    result.push(tree.val)
    dfsInner(tree.left)
    dfsInner(tree.right)
  }
  dfsInner(root)

  return result;
}
