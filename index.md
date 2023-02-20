## rg 搜索文件名

<https://github.com/BurntSushi/ripgrep/issues/193#issuecomment-513201558>

``` example
# ~/.zshrc
rgf () {
  rg --files $1 | rg $2
}
```

## 重命名后缀 .md.org to .org

``` {.bash org-language="sh"}
#!/bin/bash

for f in */*/*.md.org
do
  # pandoc -f markdown -t org -o ${f}.org ${f};
  mv "$f" "${f/.md.org/.org}"
done
# rename *.md.org to .org
```

## 批量删除 Pypi 包

``` {.bash org-language="sh"}
pip freeze | grep SOMETHING | xargs pip uninstall -y
# https://stackoverflow.com/a/9406259
```

## 批量删除 Pacman 包

``` {.bash org-language="sh"}
sudo pacman -Rs $(pacman -Qq | grep some_words)
# https://bbs.archlinux.org/viewtopic.php?pid=1533162#p1533162
```

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

``` {.bash org-language="sh"}
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

``` {.bash org-language="sh"}
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

在 \`\~/.zshrc\` 文件中创建以下函数：

``` example
mkcd () {
  mkdir "$1"
  cd "$1"
}
```

使用：

``` {.bash org-language="sh"}
~ mkcd demo
~/demo
```

## Node.js 操作文件

``` {.javascript org-language="js"}
// https://github.com/tianheg/note/blob/b03bc9a02bb4729ba60c2150de8af85351536686/scripts/fix-date.mjs
import path from 'path'
import fs from 'fs-extra'

const postsFolder = path.resolve('/home/archie/repo/note/content/posts')
/**
 * Step 1: Insert date
 * run perfact!
 */

// try {
//   const files = await fs.readdir(postsFolder)
//   for (const file of files) {
//     // get date through filename
//     // console.log(file.slice(0, 10))
//     fs.readFile(postsFolder + '/' + file, 'utf-8', (err, data) => {
//       if (err) throw err
//       let newData = data.replace(
//         data.slice(4, 16),
//         'date: ' + file.slice(0, 10),
//       )
//       fs.writeFile(postsFolder + '/' + file, newData, 'utf-8', (err) => {
//         if (err) throw err
//         console.log('filelistAsync complete');
//       })
//     })
//   }
// } catch (err) {
//   console.error(err)
// }

/**
 * Step 2: Rename file
 * run perfact!
 */

// try {
//   const files = await fs.readdir(postsFolder)
//   for (const file of files) {
//     // get date through filename
//     console.log(file.slice(11))
//     fs.rename(postsFolder + '/' + file, postsFolder + '/' + file.slice(11))
//   }
// } catch (err) {
//   console.error(err)
// }

/**
 * Step 3: Insert slug
 * run perfact!
 */

try {
  const files = await fs.readdir(postsFolder)
  for (const file of files) {
    // get date through filename
    fs.readFile(postsFolder + '/' + file, 'utf-8', (err, data) => {
      if (err) throw err
      console.log(data.replace(
    data.slice(0, 4), '---' + '\n' + 'slug: ' + file.slice(0, -3) + '\n',
      ))

      let newData = data.replace(
    data.slice(0, 4), '---' + '\n' + 'slug: ' + file.slice(0, -3) + '\n',
      )
      fs.writeFile(postsFolder + '/' + file, newData, 'utf-8', (err) => {
    if (err) throw err
    console.log('filelistAsync complete');
      })
    })
  }
} catch (err) {
  console.error(err)
}
```

## Bash 脚本获取第 3 行文本，并输出特定位置的字符

``` {.bash org-language="sh"}
sed '3q;d' Dockerfile | cut -c18-23
# https://stackoverflow.com/a/6022431/12539782
# https://stackoverflow.com/a/46097022/12539782
```

## 修改文档

``` {.javascript org-language="js"}
import path from 'path'
import fs from 'fs-extra'

const postsFolder = path.resolve('/home/archie/repo/note/content/posts')
/**
 * Step 1: Insert date
 * run perfact!
 */

// try {
//   const files = await fs.readdir(postsFolder)
//   for (const file of files) {
//     // get date through filename
//     // console.log(file.slice(0, 10))
//     fs.readFile(postsFolder + '/' + file, 'utf-8', (err, data) => {
//       if (err) throw err
//       let newData = data.replace(
//         data.slice(4, 16),
//         'date: ' + file.slice(0, 10),
//       )
//       fs.writeFile(postsFolder + '/' + file, newData, 'utf-8', (err) => {
//         if (err) throw err
//         console.log('filelistAsync complete');
//       })
//     })
//   }
// } catch (err) {
//   console.error(err)
// }

/**
 * Step 2: Rename file
 * run perfact!
 */

// try {
//   const files = await fs.readdir(postsFolder)
//   for (const file of files) {
//     // get date through filename
//     console.log(file.slice(11))
//     fs.rename(postsFolder + '/' + file, postsFolder + '/' + file.slice(11))
//   }
// } catch (err) {
//   console.error(err)
// }

/**
 * Step 3: Insert slug
 * run perfact!
 */

try {
  const files = await fs.readdir(postsFolder)
  for (const file of files) {
    // get date through filename
    fs.readFile(postsFolder + '/' + file, 'utf-8', (err, data) => {
      if (err) throw err
      console.log(data.replace(
    data.slice(0, 4), '---' + '\n' + 'slug: ' + file.slice(0, -3) + '\n',
      ))

      let newData = data.replace(
    data.slice(0, 4), '---' + '\n' + 'slug: ' + file.slice(0, -3) + '\n',
      )
      fs.writeFile(postsFolder + '/' + file, newData, 'utf-8', (err) => {
    if (err) throw err
    console.log('filelistAsync complete');
      })
    })
  }
} catch (err) {
  console.error(err)
}
```

## 使用欧路词典 API 为 curl 添加 user-agent

``` {.bash org-language="sh"}
curl -H "Authorization: ${{ secrets.EUDIC_TOKEN }}" -A "Mozilla/5.0 (X11; Linux x86_64; rv:100.0) Gecko/20100101 Firefox/100.0" https://api.frdic.com/api/open/v1/studylist/words?language=en
```

## 复制新文件

``` {.bash org-language="sh"}
cp file.txt{,.bak} # 创建一个文件 file.txt.bak
```

# 环境变量按行显示

``` {.bash org-language="sh"}
echo $PATH | tr ':' '\n' # 让环境变量按行显示
```
