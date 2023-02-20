
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
let findMedianSortedArrays = function (nums1, nums2) {
  const length1 = nums1.length;
  const length2 = nums2.length;
  const sumLength = length1 + length2;
  const targetMap = [];
  const result = [];
  if (sumLength % 2 === 0) {
    targetMap.push((sumLength >> 1) - 1, sumLength >> 1);
  } else {
    targetMap.push(sumLength >> 1);
  }
  const targetMapLen = targetMap.length;
  if (!length1 && !length2) {
    return 0;
  }
  if (!length1 || !length2) {
    const targetNums = !length1 ? nums2 : nums1;
    if (targetMapLen % 2 === 0) {
      return (targetNums[targetMap[0]] + targetNums[targetMap[1]]) / 2;
    }
    return targetNums[targetMap[0]];
  }
  const divideHeight = (start, end, array, target) => {
    let mid = (start + end) >> 1;
    if (start > end - 1) {
      if (array[start] > target) {
        return start;
      }
      return start + 1;
    }
    if (array[mid] > target) {
      return divideHeight(start, mid, array, target);
    } 
    return divideHeight(mid + 1, end, array, target);
    
  };
  const divideLow = (start, end, array, target) => {
    let mid = (start + end) >> 1;
    if (start >= end - 1) {
      if (array[start] < target) {
        return end;
      }
      return start;
    }
    if (array[mid] >= target) {
      return divideLow(start, mid, array, target);
    } 
    return divideLow(mid, end, array, target);
    
  };
  const divideMain = (l1, l2, length, targetArr, curArr, target) => {
    while (l1 <= l2) {
      const mid = (l1 + l2) >> 1;
      const index = divideHeight(0, length - 1, targetArr, curArr[mid]);
      const lowIndex = divideLow(0, length - 1, targetArr, curArr[mid]);
      if (mid + index === target || nums1[mid] === nums2[index - 1] && targetArr[index - 1] === targetArr[lowIndex] && mid + index >= target && mid + lowIndex <= target) {
        result.push(curArr[mid]);
        return true;
      } else if (mid + index > target) {
        l2 = mid - 1;
      } else {
        l1 = mid + 1;
      }
    }
    return false;
  };
  for (let i = 0; i < targetMapLen; ++i) {
    const target = targetMap[i];
    if (divideMain(0, length1 - 1, length2, nums2, nums1, target)) {
      continue;
    }
    divideMain(0, length2 - 1, length1, nums1, nums2, target);
  }
  if (result.length === 0 || sumLength === 2 && nums1[0] === nums2[0]) {
    return nums1[0] ?? nums2[0];
  }
  if (targetMapLen % 2 === 0) {
    return (result[0] + result[1]) / 2;
  }
  return result[0];
};