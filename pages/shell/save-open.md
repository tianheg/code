# 保存当前目录

```sh
#!/usr/bin/env bash

currDir=null
saveCurrDir() {
  currDir=$(pwd)
  echo $currDir
}
openThatCurrDir() {
  cd $currDir
  pwd
}
```
