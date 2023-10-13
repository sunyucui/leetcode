/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  const hair = new ListNode();
  hair.next = head;
  let pre = hair;

  while(head){
    let tail = pre;
    for(let i=0;i<k;i++){
      tail = tail.next;
      if(!tail){
        return hair.next;
      }
    }
    const nex = tail.next;
    [head,tail] = listReverse(head,tail);
    
    tail.next = nex;
    
    pre.next = head;
    pre = tail;
    head = tail.next;
    
  }
  return hair.next;
};
var listReverse = function(head, tail) {
  let pre = tail.next;
  let curr = head;
  while(pre !== tail) {
    [curr.next, pre, curr]=[pre,curr,curr.next]
  }
  return [tail,head];
}