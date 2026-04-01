class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxHeap = new MaxHeap(stones)
        while(maxHeap.getLength() > 1) {
            const max1 = maxHeap.pop()
            const max2 = maxHeap.pop()
            const newStoneWeight = max1 - max2
            if (newStoneWeight) maxHeap.push(newStoneWeight)
        }
        return maxHeap.getHeapPeak()
    }
}

class MaxHeap {
    constructor(arr) {
        this.heapify(arr)
    }

    getLength() {
        return this.heap.length - 1
    }

    getHeapPeak() {
        return this.heap[1] ?? 0
    }

    getLeftChild(i) {
        return i * 2
    }
    getRightChild(i) {
        return i * 2 + 1
    }

    heapify(arr) {
        this.heap = arr.slice()
        this.heap.push(this.heap[0])
        this.heap[0] = 0
        let i = Math.floor((this.heap.length - 1) / 2)
        while(i > 0) {    
            this.percolateDown(i)
            console.log
            i--
        }
    }
    percolateUp(startIdx) {
        let idx = startIdx
        let parentIdx = Math.floor(idx / 2)
        while(idx > 1 && this.heap[idx] > this.heap[parentIdx]) {
            const tmp = this.heap[parentIdx]
            this.heap[parentIdx] = this.heap[idx]
            this.heap[idx] = tmp
            idx = parentIdx
            parentIdx = Math.floor(idx / 2)
        }
    }

    percolateDown(startIdx) {
        let i = startIdx
        let leftChildIdx = this.getLeftChild(i)
        let rightChildIdx = this.getRightChild(i)
        while(leftChildIdx < this.heap.length) {
            const leftChild = this.heap[leftChildIdx] ?? -Infinity
            const rightChild = this.heap[rightChildIdx] ?? -Infinity
            const maxChildIdx = leftChild > rightChild ? leftChildIdx : rightChildIdx
            if (this.heap[i] < this.heap[maxChildIdx]) {
                const tmp = this.heap[i]
                this.heap[i] = this.heap[maxChildIdx]
                this.heap[maxChildIdx] = tmp
                i = maxChildIdx
                leftChildIdx = this.getLeftChild(i)
                rightChildIdx = this.getRightChild(i)
            } else {
                break
            }
        }
    }
    pop() {
        if (this.getLength() === 1) return this.heap.pop()
        const max = this.heap[1]
        const el = this.heap.pop()
        this.heap[1] = el
        this.percolateDown(1)
        return max
    }
    push(val) {
        this.heap.push(val)
        this.percolateUp(this.heap.length - 1)
    }
}
