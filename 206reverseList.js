/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let pre = null;
  let curr = head;
  while(curr!==null) { //current！== null
    [curr.next,pre,curr] = [pre,curr,curr.next]
  }
  return pre;
};