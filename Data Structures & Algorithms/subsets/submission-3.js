// рекурсивный вариант с backtrack (сначала добавляем эелмент, выполняем рекурсивные вызовы, потом возвращаемся - убираем элемент и снова выполняем рекурсивные вызовы)

class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let result = []
        function dfs(i, subset) {
            if (i === nums.length) {
                result.push(subset.slice()) // внимание: кладем копию текущего набора, тк он передается по ссылке и модифицируется
                return
            }
            const el = nums[i]
            subset.push(el)
            dfs(i+1, subset)
            subset.pop()
            dfs(i+1, subset)
        }

        dfs(0, [])
        return result
    }
}
