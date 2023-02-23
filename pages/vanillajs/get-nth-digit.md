# 获取个位、十位数字

```js
function getNthDigit(n, number){
    return ((number % 10**n) - (number % 10**(n-1))) / 10**(n-1);
}
getNthDigit(2, 23)
```

https://stackoverflow.com/a/72487607/12539782
