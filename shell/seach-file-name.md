# rg 搜索文件名

<https://github.com/BurntSushi/ripgrep/issues/193#issuecomment-513201558>

```conf
# ~/.zshrc
rgf () {
  rg --files $1 | rg $2
}
```
