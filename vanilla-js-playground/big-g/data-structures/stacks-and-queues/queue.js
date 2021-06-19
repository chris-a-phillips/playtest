// ARRAY IMPLEMENTATION

class Node {
    constructor (val) {
        this.val = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    // add element
    enqueue(val) {
        const newNode = new Node(val)
        if(!this.first) {
            this.first = newNode
            this.last = newNode
        } else {
            this.last.next = newNode
            this.last = newNode
        }

        return ++this.size
    }

    // remove element
    dequeue() {
        if (!this.first) {
            return null
        }

        let temp = this.first
        if(this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next

        this.size--
        return temp.val
    }
}

const queue = new Queue

queue.enqueue('FIRST');
queue.enqueue('SECOND');
queue.enqueue('THIRD');
queue.enqueue('FOURTH');
queue.enqueue('FIFTH');

console.log(queue.dequeue());