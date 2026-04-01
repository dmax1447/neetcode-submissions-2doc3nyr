class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const bucket = (new Array(3)).fill(0)
        for(let i = 0; i < nums.length; i++) {
            const num = nums[i]
            bucket[num] += 1
        }
        console.log('bucket', bucket)
        
        
        let i = 0
        let start_position = 0
        let tmp = 0
        while(i < bucket.length) {
            console.log({i, start_position})
            const num = i
            const num_count = bucket[i]
            if (!num_count) {
                i++
                continue
            }
            let shift = 0
            while(shift < num_count) {
                const position = start_position + shift
                nums[position] = num
                shift++
            }
            start_position += shift
            i++
        }
        
        
    }
}
