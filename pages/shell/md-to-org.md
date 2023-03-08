# md to org

```sh
#!/usr/bin/env bash

for file in $(find ./content/posts -name "*.md"); do
  name=${file%.md}
  pandoc -o "$name.org" "$file"
  rm "$file"
done
```
