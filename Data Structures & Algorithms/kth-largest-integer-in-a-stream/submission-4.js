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
        console.log(`\nINIT finish k:"${k}", `, this.heap)

    }
    getParentIdx(childIdx) {
        return Math.floor(childIdx /2)
    }

    getParentVal(childIdx) {
        return this.heap[this.getParentIdx(childIdx)] 
    }
    getLeftChildIdx(parentIdx) {
        return parentIdx * 2
    }
    getRightChildIdx(parentIdx) {
        return parentIdx * 2 + 1
    }
    push(val) {
        // console.log(`\nPUSH "${val}" start`, this.heap)
        this.heap.push(val)
        // console.log('added to tail:', this.heap)
        let childIdx = this.heap.length - 1
        let parentIdx = this.getParentIdx(childIdx)
        while(childIdx >= 2 && this.heap[parentIdx] > this.heap[childIdx]) {
            console.log({childIdx, parentIdx})
            const tmp = this.heap[parentIdx]
            this.heap[parentIdx] = this.heap[childIdx]
            this.heap[childIdx] = tmp
            childIdx = parentIdx
            parentIdx = this.getParentIdx(childIdx)
        }
        // console.log('PUSH finish', this.heap)
    }
    pop() {
            console.log('----')
    console.log('\nPOP start', this.heap)
    const el = this.heap.pop()
    this.heap[1] = el
    console.log('initial swap', this.heap)
    let idx = 1
    let leftChildIdx = this.getLeftChildIdx(idx)
    let rightChildIdx = this.getRightChildIdx(idx)
    while(leftChildIdx < this.heap.length) {
      const parent = this.heap[idx]
      const leftChild = typeof this.heap[leftChildIdx] === 'number' ? this.heap[leftChildIdx] : Infinity
      const rightChild = typeof this.heap[rightChildIdx] === 'number' ? this.heap[rightChildIdx] : Infinity
      console.log('loop start', {parent, leftChild, rightChild})
      if (leftChild <= rightChild && leftChild < parent) {
        console.log('swap parent and leftChild')
        this.heap[idx] = leftChild
        this.heap[leftChildIdx] = parent
        idx = leftChildIdx
      } else if (rightChild < leftChild && rightChild < parent) {
        console.log('swap parent and rightChild')
        this.heap[idx] = rightChild
        this.heap[rightChildIdx] = parent
        idx = rightChildIdx
      } else {
        console.log('nothing to swap, break')
        break
      }
        leftChildIdx = this.getLeftChildIdx(idx)
        rightChildIdx = this.getRightChildIdx(idx)
        console.log('loop end', this.heap, {idx, leftChildIdx, rightChildIdx})
        }
        console.log('POP finish', this.heap)
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


