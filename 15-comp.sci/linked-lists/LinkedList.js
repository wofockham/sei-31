// This implementation passes almost all the provided tests.
// That doesn't mean it's complete and perfect and bug free!

class Node{
  constructor(data){
    // a Node starts with a given data property
    this.data = data;
    // a Node also has a .next property initialized as null
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    // a Linked List starts with a "head" property initialized as null
    this.head = null;
  }
  appendNode(data){
    // creates a new node with the given data and adds it to back of the list
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode; // Empty list so the new node is now the head.
    } else {
      // Iterate over the list until we reach the end (no .next)
      let walker = this.head;
      while (walker && walker.next) {
        walker = walker.next;
      }
      // The new node is the .next of the former last node.
      walker.next = newNode;
    }
  }
  prependNode(data) {
    // creates a new node with the given data and adds it to the front of the list
    const newHead = new Node(data);
    if (this.head === null) {
      this.head = newHead;
    } else {
      const formerHead = this.head;
      newHead.next = formerHead;
      this.head = newHead;
    }
  }
  pop(){
    // removes the last node from the list and returns it
    if (this.head === null) {
      // nothing to pop
      return this.head;
    } else if (this.head.next === null) {
      // pop head
      const poppedNode = this.head;
      this.head = null;
      return poppedNode;
    } else {
      // traverse and pop the last node
      let walker = this.head;
      while (walker && walker.next && walker.next.next) {
        walker = walker.next;
      }
      const poppedNode = walker.next;
      walker.next = null;
      return poppedNode;
    }
  }
  removeFromFront(){
    // remove the head node from the list and return it
    // the next node in the list is the new head node
    if (this.head === null) {
      return this.head; // Nothing to remove.
    } else {
      const formerHead = this.head;
      this.head = formerHead.next;
      return formerHead;
    }
  }
  insertAt(X, data){
    // insert a new node into the list with the given data
    // place it after X nodes in the list
    // if X exceeds the bounds of the list, put the node at the end
    // insertAt(0, 7) would add the new node as the head
    const newNode = new Node(data);
    if (X === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let walker = this.head;
      let steps = 0;
      while (walker && walker.next && ++steps < X) {
        walker = walker.next;
      }
      newNode.next = walker.next;
      walker.next = newNode;
    }
  }
  removeAt(X){
    // remove the Xth node from the list, considering 0 to be the first node
    // return the node that has been removed
    if (X === 0) {
      const formerHead = this.head;
      this.head = formerHead.next || null;
      return formerHead;
    } else {
      let walker = this.head;
      let steps = 0;
      while (walker && walker.next && walker.next.next && ++steps < X) {
        walker = walker.next;
      }
      const removedNode = walker.next;
      walker.next = removedNode.next;
      return removedNode;

    }

  }
  search(data){
    // searches the list for a node with the given data
    // if it is found, return the "index" of the node, considering 0 to be the first node
    // if not, return false
    if (this.head === null) {
      return false;
    } else {
      let walker = this.head;
      let index = 0;
      while (walker) {
        if (walker.data === data) {
          return index;
        } else {
          walker = walker.next;
          index++;
        }
      }
      return false;
    }
  }
  sort(){
    // sort the Linked List in ascending order of data values
    // TODO: The implementation of sort() is an exercise for the rabidly
    // enthusiastic reader. I'm not doing it.
  }
}

module.exports = {
    Node,
    LinkedList
}
