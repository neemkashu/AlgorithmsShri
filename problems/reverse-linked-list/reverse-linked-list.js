// https://leetcode.com/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : v6al)
 *     this.next = (next===undefined ? null : next)
 * }
 */

export function reverseList(head) {
  let prev = null;
  let curr = head;
  let next = head.next;

  while(next) {
    curr.next = prev;
    prev = curr;
    curr = next;
    next = next.next;
  }
  curr.next = prev;
  return curr;

}
