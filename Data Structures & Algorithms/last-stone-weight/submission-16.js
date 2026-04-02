// Solution 3

class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxHeap = new MyHeap(stones, (a, b) => a - b)
        while(maxHeap.getLength() > 1) {
            const max1 = maxHeap.pop()
            const max2 = maxHeap.pop()
            const newStoneWeight = max1 - max2
            if (newStoneWeight) maxHeap.push(newStoneWeight)
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
    if (!this.heap[idxA]) return false
    if (!this.heap[idxB]) return true
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