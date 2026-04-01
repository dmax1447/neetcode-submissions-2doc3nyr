class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxHeap = new MaxHeap(stones)
        console.log('run with heap', maxHeap.heap)
        while(maxHeap.getLength() > 1) {
            const max1 = maxHeap.pop()
            console.log('aft max1', maxHeap.heap)
            const max2 = maxHeap.pop()
            console.log('aft max2', maxHeap.heap)

            console.log({max1, max2, currentHeap: maxHeap.heap})
            const newStoneWeight = Math.abs(max1 - max2)
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
        console.log(this.heap)
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
        console.log('heapify end:', this.heap)
        console.log('\n')
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
            console.log('percolateDown step:', {i, current: this.heap[i], childs: [leftChild, rightChild], maxChild: this.heap[maxChildIdx] })
            if (this.heap[i] < this.heap[maxChildIdx]) {
                console.log(`swap ${this.heap[i]} and ${this.heap[maxChildIdx]}`)
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
        console.log('pop start')
        if (this.heap.length === 2) {
            return this.heap.pop()
        }
        const max = this.heap[1]
        console.log(1, this.heap)
        const el = this.heap.pop()
        console.log(2, this.heap)
        this.heap[1] = el
        console.log(3, this.heap)

        this.percolateDown(1)
        console.log(4, this.heap)
        console.log('pop end')
        return max
    }
    push(val) {
        console.log(`\npush ${val}`)
        console.log('before push:', this.heap)
        this.heap.push(val)
        this.percolateUp(this.heap.length - 1)
        console.log('after push:', this.heap)
    }
}
