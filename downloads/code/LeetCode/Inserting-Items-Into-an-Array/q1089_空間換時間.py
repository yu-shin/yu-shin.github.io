class Solution:
    def duplicateZeros(self, arr: List[int]) -> None:
        """
        Do not return anything, modify arr in-place instead.
        """
        len_arr=len(arr)
        rst=[]
        for num in arr:
            if num==0:
                rst.append(0)
                rst.append(0)
            else:rst.append(num)
            if len(rst)>=len_arr:
                arr[:]=rst[:len_arr]
                # arr=rst[:len_arr] this do not work
                break