class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        function getDistanseFromOrigin(point) {
            const [x, y] = point
            return Math.sqrt(x**2 + y**2)
        }
        function compareByDistance(a, b) {
            const distA = getDistanseFromOrigin(a)
            const distB = getDistanseFromOrigin(b)
            return distA - distB
        }
        const pointsHeap = new MaxHeap(points, compareByDistance)
        while(pointsHeap.getLength() > k) {
            pointsHeap.pop()
        }
        return pointsHeap.getData()
    }
}

class MaxHeap {
    constructor(arr, compareFn) {
        this.compareFn = typeof compareFn === 'function' ? compareFn : (a, b) => a - b
        this.heapify(arr)
    }

    getData() {
        return this.heap.slice(1)
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
            const maxChildIdx = this.isLarger(i * 2, i * 2 + 1) ? i * 2 : i * 2 + 1
            if (this.isLarger(maxChildIdx, i)) {
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
