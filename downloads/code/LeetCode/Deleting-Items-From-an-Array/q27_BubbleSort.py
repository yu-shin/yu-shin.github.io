class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        l = len(nums)
        count = 0
        for i in range(l-1):
            swapped = False
            for j in range(l-1-i):
                if nums[j] == val:
                    if nums[j] != nums[j+1]:
                        nums[j], nums[j+1] = nums[j+1], nums[j]
                        swapped = True
            if not swapped:
                break
        for v in nums:
            if v != val:
                count += 1
        return count
