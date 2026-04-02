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
        return maxHeap.peek()
    }
}

const compare = (a, b) => {

}

class MaxHeap {
    constructor(arr, compareFn) {
        this.compareFn = typeof compareFn === 'function' ? compareFn : (a, b) => a - b
        this.heapify(arr)
    }

    isLarger(idxA, idxB) {
        if (!this.heap[idxA]) return false
        if (!this.heap[idxB]) return true
        return this.compareFn(this.heap[idxA], this.heap[idxB]) > 0
    }

    swap(idxA, idxB) {
        const tmp = this.heap[idxA]
        this.heap[idxA] = this.heap[idxB]
        this.heap[idxB] = tmp
    }

    getLength() {
        return this.heap.length - 1
    }

    peek() {
        return this.heap[1] ?? 0
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

    percolateUp(idx) {
        while(idx > 1 && this.isLarger(idx, Math.floor(idx / 2))) {
            this.swap(Math.floor(idx / 2), idx)
            idx = Math.floor(idx / 2)
        }
    }

    percolateDown(i) {
        while((i * 2) < this.heap.length) {

            const leftChild = this.heap[i * 2] ?? -Infinity
            const rightChild = this.heap[i * 2 + 1] ?? -Infinity
            const maxChildIdx = this.isLarger(i * 2, i * 2 + 1) ? i * 2 : i * 2 + 1
            if (!this.isLarger(i, maxChildIdx)) {
                this.swap(i, maxChildIdx)
                i = maxChildIdx
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
