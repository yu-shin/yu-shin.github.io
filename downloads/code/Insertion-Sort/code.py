def insertion_sort(collection: list) -> list:
    # 依序從collection[1:]開始往前插入
    for insert_index, insert_value in enumerate(collection[1:]):
        temp_index = insert_index
        # 檢查到index=0停止 and 一個一個往前比
        while insert_index >= 0 and insert_value < collection[insert_index]:
            # 往後移一個index
            collection[insert_index + 1] = collection[insert_index]
            # 繼續往前
            insert_index -= 1
        # 有改變index
        if insert_index != temp_index:
            # 前面while最後一行insert_index -= 1
            collection[insert_index + 1] = insert_value
    return collection


if __name__ == "__main__":
    from doctest import testmod

    testmod()

    user_input = input("Enter numbers separated by a comma:\n").strip()
    unsorted = [int(item) for item in user_input.split(",")]
    print(f"{insertion_sort(unsorted) = }")
