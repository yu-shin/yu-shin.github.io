import math

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        temp = -math.inf
        count = 0
        for i in range(len(nums)):
            if nums[i] > temp:
                temp = nums[i]
                nums[count] = temp
                count += 1
        return count