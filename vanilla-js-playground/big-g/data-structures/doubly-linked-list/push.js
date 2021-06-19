class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

    push(val) {
        const newNode = new Node(val)

        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }

        this.length ++
        return this
    }
}

const list = new DoublyLinkedList

list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)

console.log(list)