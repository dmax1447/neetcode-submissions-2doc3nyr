class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.heap = ['X']
        this.heap_size = k + 1
        for(const num of nums) {
            this.add(num)
        }
    }
    getParentIdx(childIdx) {
        return Math.floor(childIdx /2)
    }
    getLeftChildIdx(parentIdx) {
        return parentIdx * 2
    }
    getRightChildIdx(parentIdx) {
        return parentIdx * 2 + 1
    }
    push(val) {
        this.heap.push(val)
        let childIdx = this.heap.length - 1
        let parentIdx = this.getParentIdx(childIdx)
        while(childIdx >= 2 && this.heap[parentIdx] > this.heap[childIdx]) {
            const tmp = this.heap[parentIdx]
            this.heap[parentIdx] = this.heap[childIdx]
            this.heap[childIdx] = tmp
            childIdx = parentIdx
            parentIdx = this.getParentIdx(childIdx)
        }
    }
    pop() {
        const el = this.heap.pop()
        this.heap[1] = el
        let idx = 1
        let leftChildIdx = this.getLeftChildIdx(idx)
        let rightChildIdx = this.getRightChildIdx(idx)
        while(leftChildIdx < this.heap.length) {
            const parent = this.heap[idx]
            const leftChild = typeof this.heap[leftChildIdx] === 'number' ? this.heap[leftChildIdx] : Infinity
            const rightChild = typeof this.heap[rightChildIdx] === 'number' ? this.heap[rightChildIdx] : Infinity
            if (leftChild <= rightChild && leftChild < parent) {
                this.heap[idx] = leftChild
                this.heap[leftChildIdx] = parent
                idx = leftChildIdx
            } else if (rightChild < leftChild && rightChild < parent) {
                this.heap[idx] = rightChild
                this.heap[rightChildIdx] = parent
                idx = rightChildIdx
            } else {
                break
            }
            leftChildIdx = this.getLeftChildIdx(idx)
            rightChildIdx = this.getRightChildIdx(idx)
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        // console.log('\n\nadd start')
        this.push(val)
        if(this.heap.length > this.heap_size) {
            this.pop()
        }
        // console.log('add finish')
        return this.heap[1] ?? 0
    }
}


