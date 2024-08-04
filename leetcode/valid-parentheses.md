```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const n = s.length;
  if (n % 2 === 1) {
    return false;
  }
  const pairs = new Map([
    // 哈希表
    [')', '('], // 键值对
    [']', '['],
    ['}', '{'],
  ]);
  const stk = []; // 堆栈
  for (let ch of s) {
    // 循环迭代
    if (pairs.has(ch)) {
      if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
        return false;
      }
      stk.pop();
    } else {
      stk.push(ch);
    }
  }
  return !stk.length;
};
console.log(isValid(']['));
```
