class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

// 迭代
function reverseList1(head: ListNode | null): ListNode | null {
  let pre: ListNode | null = null
  let curr = head
  
  while(curr) {
    const next = curr.next
    curr.next = pre
    pre = curr
    curr = next
  }

  return pre
};

// 递归
function reverseList2(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
      return head
  }
  const p = reverseList2(head.next)
  head.next.next = head;
  head.next = null
  return p
};