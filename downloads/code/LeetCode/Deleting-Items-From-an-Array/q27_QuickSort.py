class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        if len(nums) == 0:
            return 0
        else:
            i = 0
            j = len(nums)-1
            while i != j:
                while nums[i] != val and i < j:
                    i += 1
                while nums[j] == val and i < j:
                    j -= 1
                if i < j:
                    nums[i], nums[j] = nums[j], nums[i]
        if nums[i] == val:
            return i
        else:
            return i+1
                
                