export class LinkedNode {
  data: unknown;
  next: LinkedNode | null;

  constructor(dataToStore: unknown) {
    this.data = dataToStore;
    this.next = null;
  }
}

export function printList(headNode: LinkedNode) {
  let currentNode: LinkedNode | null = headNode;

  while (currentNode !== null) {
    console.log(currentNode.data);
    currentNode = currentNode.next;
  }
}

// const head = new LinkedNode("Hello World");
// const second = new LinkedNode(2);
// const third = new LinkedNode({
//   message: "Hello world",
// });
//
// head.next = second;
// second.next = third;
//
// printList(head);
