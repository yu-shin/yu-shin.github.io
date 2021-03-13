class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        if n == 0:
            return
        elif m == 0:
            nums1[:n] = nums2[:]
            return
        else:
            temp = [0] * m
            temp[:] = nums1[:m]
            i, j, k = 0, 0, 0
            while k < m+n:
                if temp[i] < nums2[j]:
                    nums1[k] = temp[i]
                    k += 1
                    i += 1
                    if i == m:
                        break
                else:
                    nums1[k] = nums2[j]
                    k += 1
                    j += 1
                    if j == n:
                        break
            if i == m:
                nums1[k:] = nums2[j:]
            else:
                nums1[k:] = temp[i:]