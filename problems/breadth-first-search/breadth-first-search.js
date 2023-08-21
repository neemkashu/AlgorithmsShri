// https://ru.wikipedia.org/wiki/Обход_дерева#Поиск_в_ширину

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// class Queue {
//     constructor() {
//         this.stackOne = []
//         this.stackTwo = []
//     }
//     push(value) {
//         this.stackOne.push(value)
//     }
//     pop() {
//         if (this.stackTwo.length < 1) {
//             while (this.stackOne.length > 0) {
//                 this.stackTwo.push(this.stackOne.pop())
//             }
//         }
//         return this.stackTwo.pop()
//     }
// }
// export function bfs(tree) {
//     const result = [];
//     const queue = new Queue();
//     queue.push(tree)
// 
//     while(queue.length > 0) {
//         const node = queue.pop()
//         result.push(node.val)
//         if (node.left) queue.push(node.left)
//         if (node.right) queue.push(node.right)
//     }
//     return result;
// }

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
