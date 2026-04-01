class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = [[]]
        for (const num of nums) {
            const elements = [...result]
            elements.forEach(el => {
                const newEl = [...el]
                newEl.push(num)
                result.push(newEl)
            })
        }
        return result
    }
    
}
