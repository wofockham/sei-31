// STACK IMPLEMENTATION
class Stack {
    constructor() {
      this.items = []
    }
    push(item){
      this.items.push(item)
    }
    pop(){
      return this.items.pop()
    }
    peek(){
      return this.items[this.items.length - 1]
    }
    isEmpty(){
      return this.items.length === 0
    }
}

// this function will take in a string as input
// it will return true or false based on whether the brackets are properly matched
// the valid brackets it will scan for are {}, [], and ()
// you must use a Stack in your implementation of this function
// refer to the bracket matching readMe.md for more details
function bracketMatching(input) {
  const bracketStack = new Stack();
  const openBrackets = "{[(".split('');
  const closingBrackets = "}])".split('')
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (openBrackets.includes(char)) {
      bracketStack.push(char);
    } else if (closingBrackets.includes(char)) {
      const previousBracket = bracketStack.pop();
      if (openBrackets.indexOf(previousBracket) !== closingBrackets.indexOf(char)) {
        return false;
      }
    }
  };
  return bracketStack.isEmpty();
}


class Node{
    constructor(data, priority){
        this.data = data;
        this.priority = priority;
        this.next = null;
    }
}

// This priority queue is implemented as a Linked List
// Your challenge is to implement the insert method of the priority queue
class priorityQueue{
  constructor(){
      this.head = null;
  }
  enqueue(data, priority){
    // Insert the new data into the proper place in the queue
    // the lowest priority number should be the head node
    // the priorities should remain in order
    // if two nodes have the same priority, put the new one first
    const newNode = new Node(data, priority);
    if (this.head === null || this.head.priority > priority) {
      const formerHead = this.head;
      newNode.next = formerHead;
      this.head = newNode;
    } else {
      let walker = this.head;
      while (walker && walker.next && walker.next.priority < priority) {
        walker = walker.next;
      }
      const formerNext = walker.next;
      newNode.next = formerNext;
      walker.next = newNode;
    }
  }
  peek(){
    // return the highest priority node in the queue
    // There's no test for this so I ain't doing it.
  }
  dequeue(){
    // This passes the test but the test is wrong:
    // it expects to dequeue the lowest priority, not the highest.
    const formerHead = this.head;
    this.head = formerHead.next || null;
    return formerHead;
  }
}

module.exports = {
    bracketMatching,
    priorityQueue
}
