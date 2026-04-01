// Итеративный вариант

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [[]]
        for (const num of nums) {
            result.forEach(el => {
                const newEl = [...el]
                newEl.push(num)
                result.push(newEl)
            })
        }
        return result
    }
    
}
