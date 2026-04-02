class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        console.log('k:', k)
        const maxHeap = new MyHeap(nums, (a, b) => a - b)
        console.log('intial heap', maxHeap.getData())
        
        let i = 1
        while (k > 1) {
            maxHeap.pop()
            console.log(`iter ${i}, current peek:`,  maxHeap.peek())
            k--
            i++
        }
        return maxHeap.peek()
    }
}

class MyHeap {
  constructor(arr, priorityFn) {
    //
    /*
    * функция определения приоритета, более самый приоритетный идет наверх кучи.
    * Как сортировка, если a приоритетнее b то ожидается положительное значение, если нет - отрицательное
    * MaxHeap: (a, b) => a - b
    * MinHeap: (a, b) => b - a
    * */
    this.priorityFn = priorityFn
    this.heapify(arr)
  }

  getData() {
    return this.heap.slice(1)
  }

  isHigherPriority(idxA, idxB) {
    if (this.heap[idxA] === undefined) return false
    if (this.heap[idxB] === undefined) return true
    return this.priorityFn(this.heap[idxA], this.heap[idxB]) > 0
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
      i--
    }
  }

  percolateUp(idx) {
    while(idx > 1 && this.isHigherPriority(idx, Math.floor(idx / 2))) {
      this.swap(Math.floor(idx / 2), idx)
      idx = Math.floor(idx / 2)
    }
  }

  percolateDown(i) {
    while((i * 2) < this.heap.length) {
      const maxChildIdx = this.isHigherPriority(i * 2, i * 2 + 1) ? i * 2 : i * 2 + 1
      if (this.isHigherPriority(maxChildIdx, i)) {
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