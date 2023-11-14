---
title: Fix imports
date: "2023-10-18"
draft: false
tags:
  - seed
---

```ts
/* eslint-disable no-console */

import { readdir, readFile, writeFile } from "fs"

import { join } from "path"

const replaceTextInFiles = (
  directoryPath: string,

  fileExtensions: string[],

  replacements: Record<string, string>,
): void => {
  // Increase the listener limit for the process object

  process.setMaxListeners(15)

  readdir(directoryPath, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.log(`❌ Error reading directory: ${err}`)

      return
    }

    files.forEach((file) => {
      const filePath = join(directoryPath, file.name)

      if (file.isDirectory()) {
        replaceTextInFiles(filePath, fileExtensions, replacements)
      } else if (
        file.isFile() &&
        fileExtensions.some((ext) => file.name.endsWith(ext))
      ) {
        readFile(filePath, "utf-8", (err, data) => {
          if (err) {
            console.log(`❌ Error reading file: ${err}`)

            return
          }

          let modifiedContent: string = data

          Object.keys(replacements).forEach((searchPattern) => {
            const replacement = replacements[searchPattern]

            const regex = new RegExp(searchPattern, "g")

            const numReplacements = (modifiedContent.match(regex) || []).length

            if (numReplacements > 0) {
              if (!/#src\/types\.d/.test(modifiedContent)) {
                modifiedContent = modifiedContent.replace(
                  new RegExp(searchPattern, "g"),
                  replacement,
                )

                console.log(file.name)
              }
            }
          })

          writeFile(filePath, modifiedContent, "utf-8", (err) => {
            if (err) {
              console.log(`❌ Error writing file, ${filePath}: ${err}`)
            }
          })
        })
      }
    })
  })
}

const directoryPath = "./src" // Set your directory path here

const fileExtensions = [".ts", ".tsx", ".js"] // Set the file extensions to target

// Key will be replaced by value

const replacements = {
  "#root/src": "#src",

  "#root/pages": "#pages",

  "#root/components": "#components",

  "#root/hoc": "#hoc",

  "#root/utils": "#utils",

  "#root/recoil": "#recoil",

  "#root/assets": "#assets",

  "#root/queries": "#queries",

  "#root/hook": "#hook",

  "#root/elements": "#elements",

  "#src/types": "#src/types.d",
}

replaceTextInFiles(directoryPath, fileExtensions, replacements)
```
