#!/bin/bash

for f in */*/*.md.org; do
  # pandoc -f markdown -t org -o ${f}.org ${f};
  mv "$f" "${f/.md.org/.org}"
done
# rename *.md.org to .org

```sh
for x in **/*.md; do mv "$x" "${x%.md}.mdx"; done
# https://www.emmanuelgautier.com/blog/snippets/shell-script-rename-file-extensions
```
