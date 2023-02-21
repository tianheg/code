# 处理文件

```js
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
