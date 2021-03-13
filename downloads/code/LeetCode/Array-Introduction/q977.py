class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        i = 0
        j = len(nums) - 1
        k = 0
        ans = [0] * len(nums)
        for _ in range(len(nums)):
            nums[_] = nums[_] ** 2
        while i <= j:
            if nums[i] > nums[j]:
                ans[k] = nums[i]
                i += 1
            else:
                ans[k] = nums[j]
                j -= 1
            k += 1
        for i in range(len(nums)):
            nums[i] = ans[len(nums)-1-i]
        return nums