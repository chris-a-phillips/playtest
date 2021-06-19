class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}

		this.length++;
		return this;
	}

    get(index) {
        if (index < 0 || index >= this.length) {
            return null
        }

        let counter = 0
        let current = this.head;
        while(counter !== index) {
            current = current.next
            counter ++
        }

        return current
    }
}

const list = new SinglyLinkedList();

list.push('hello');
list.push('goodbye');
list.push('wassup');

console.log(list.get(0));
