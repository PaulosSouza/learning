class Node {
  data: unknown;
  next: Node | null;

  constructor() {
    this.data = 0;
    this.next = null;
  }
}

function findList(first: Node | null, second: Node | null) {
  let ptr1 = first,
    ptr2 = second;

  // If both linked lists are empty,
  // return true
  if (first === null && second === null) {
    return true;
  }

  // Else if one is empty and
  // other is not, return false
  if (first === null || (first !== null && second === null)) {
    return false;
  }

  while (second !== null) {
    // Initialize ptr2 with
    // current node of second
    ptr2 = second;

    while (ptr1 !== null) {
      // If second list becomes empty and
      // first not then return false
      if (ptr2 === null) {
        return false;
      }

      // If data part is same, go to next
      // of both lists
      else if (ptr1.data === ptr2.data) {
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
      } else break;
    }

    // Return true if first list gets traversed
    // completely that means it is matched
    if (ptr1 === null) {
      return true;
    }

    // Initialize ptr1 with first again
    ptr1 = first;

    // and go to next node of second list
    second = second.next;
  }
}

// Function to print nodes in a given linked list
export function printList(node: Node) {
  let nodeLinked: Node | null = node;
  while (nodeLinked != null) {
    console.log(nodeLinked.data);
    nodeLinked = nodeLinked.next;
  }
}

// Function to add new node to linked lists
export function newNode(key: unknown): Node {
  const tmp = new Node();
  tmp.data = key;
  tmp.next = null;
  return tmp;
}

const head = newNode(1);
head.next = newNode(2);
head.next.next = newNode(3);
head.next.next.next = newNode(4);

const head2 = newNode(1);
head2.next = newNode(2);
head2.next.next = newNode(1);
head2.next.next.next = newNode(2);
head2.next.next.next.next = newNode(3);
head2.next.next.next.next.next = newNode(4);

// const isSublist = findList(head, head2);

// console.log(isSublist);
