# 首页

## X.org 下读取文本到剪切板

``` {.bash org-language="sh"}
xclip -sel c < text.txt
```

## 找到字符串中的汉字

<https://stackoverflow.com/a/2718203>

``` example
#!/usr/bin/env python
import rs
sample = "I am from 美国。We should be friends. 朋友。"
for n in re.findall(r'[\u4e00-\u9fff]+', sample):
  print(n)
```

## 新建文章

```sh
#!/bin/bash

CURRENTDATE=`date +"%Y-%m-%d"`
echo -n "Enter the Article Name: "
read -r a
echo "---
layout: post
title:
tags:
  -
description:
---" >> content/posts/"${CURRENTDATE}-$a.md"
# 问题：
# 如果文章名字含有空格，能够新建文章，但同时会新建其他文档
# 如果 文件名字有 /，无法创建
```

另一种需求：

```sh
#!/bin/bash

CURRENTDATE=`date +"%Y-%m-%d"`
echo -n "Enter the Article Name: "
read -r a
echo "---
title: ''
tags:
  -
description: '用几个精确的字词概括文章内容，方便查找使用'
date: $CURRENTDATE
slug: $a
---" > ~/repo/note/content/posts/"$a.md"
emacs -nw ~/repo/note/content/posts/"$a.md"

# 问题：
# 如果文章名字含有空格，能够新建文章，但同时会新建其他文档
# 如果 文件名字有 /，无法创建
```

## pandoc Org to Md

``` {.bash org-language="sh"}
pandoc -f org -t markdown original_org_file -s -o converted_md_file
```

## 创建文件并打开

在 `~/.zshrc` 文件中创建以下函数：

```conf
mkcd () {
  mkdir "$1"
  cd "$1"
}
```

使用：

```sh
$ mkcd demo
/demo $
```

## 使用欧路词典 API 为 curl 添加 user-agent

``` {.bash org-language="sh"}
curl -H "Authorization: ${{ secrets.EUDIC_TOKEN }}" -A "Mozilla/5.0 (X11; Linux x86_64; rv:100.0) Gecko/20100101 Firefox/100.0" https://api.frdic.com/api/open/v1/studylist/words?language=en
```
