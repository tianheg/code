# Bash 脚本获取第 3 行文本，并输出特定位置的字符

```sh
sed '3q;d' Dockerfile | cut -c18-23
# https://stackoverflow.com/a/6022431/12539782
# https://stackoverflow.com/a/46097022/12539782
```
