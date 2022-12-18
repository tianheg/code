
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function (numbers, target) {
  let [left, right] = [0, numbers.length - 1];
  // 定义左右双指针
  while (left < right) {
    if (numbers[left] + numbers[right] > target) {
      right--; // 太大，右指针左移
    } else if (numbers[left] + numbers[right] < target) {
      left++; // 太小，左指针右移
    } else {
      return [left + 1, right + 1]; // 各自+1 返回
    }
  }
};