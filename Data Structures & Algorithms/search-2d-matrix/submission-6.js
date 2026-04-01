function binarySearch(nums, target) {
    let l = 0
    let r = nums.length - 1 // 5
    
    while(l <= r) { 
        const mid = Math.floor((l+r) / 2) 
        if (target === nums[mid]) return mid
        console.log({mid, target})
        if (target < nums[mid]) {
            r = mid - 1
            continue
        }
        if (target > nums[mid]) {
            l = mid + 1
            continue
        }
    }
    return -1
}


class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */


    searchMatrix(matrix, target) {
        const size = matrix.length
        let l = 0
        let r = size -1
        let targetRow
        while(l<=r) {
            const mid = Math.floor((l+r)/2)
            const row = matrix[mid]
            const rowFirst = row[0]
            const rowLast = row[row.length - 1]

            if(rowFirst === target || rowLast === target) return true
            if (target < rowFirst) {
                r = mid - 1
                continue
            }
            if (target > rowLast) {
                l = mid + 1
                continue
            }
            
            targetRow = row
            break 
        }
        if (!targetRow) return false
        return binarySearch(targetRow, target) !== -1 
    }
}
