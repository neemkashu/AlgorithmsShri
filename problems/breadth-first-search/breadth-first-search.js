// https://ru.wikipedia.org/wiki/Обход_дерева#Поиск_в_ширину

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

export function bfs(tree) {
    const result = [];
    const queue = [];
    queue.unshift(tree)

    while(queue.length > 0) {
        const node = queue.pop()
        result.push(node.val)
        if (node.left) queue.unshift(node.left)
        if (node.right) queue.unshift(node.right)
    }
    return result;
}
