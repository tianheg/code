# 批量删除 Pypi 包

```sh
# https://stackoverflow.com/a/9406259
pip freeze | grep SOMETHING | xargs pip uninstall -y
```
