// For any index of an array n...
// The left child is stored at 2n + 1
// The right child is stored at 2n + 2

// For any child node at index n...
// Its parent is at index (n - 1) / 2 "floored"

class MaxHeap {
    constructor() {
        this.values = []
    }

    insert(element) {
        this.values.push(element)
        this.bubbleUp()
    }

    bubbleUp() {
        let idx = this.values.length - 1
        const element = this.values[idx]

        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1)/ 2)
            let parent = this.values[parentIdx]
            if(element <= parent) break
            this.values[parentIdx] = element
            this.values[idx] = parent
            idx = parentIdx
        }
    }
}

const heap = new MaxHeap

heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)
heap.insert(55)
heap.insert(54)
heap.insert(99)
heap.insert(117)

console.log(heap)