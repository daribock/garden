---
draft: true
tags: 
- seed
---
created at: [[2022-08-04]]

---

# Git

Git is a version control system used in software development.

## Commands

### `git add`

source: https://stackoverflow.com/questions/572549/difference-between-git-add-a-and-git-add

#### Git Version 1.x

| Command       | New Files | Modified Files | Deleted Files | Description                                         |
| ------------- | --------- | -------------- | ------------- | --------------------------------------------------- |
| `git add -A`  | ✅        | ✅             | ✅            | Stage all (new, modified, deleted) files            |
| `git add .`   | ✅        | ✅             | ❌            | Stage new and modified files only in current folder |
| `git add - u` | ❌        | ✅             | ✅            | Stage modified and deleted files only               |

### Git Version 2.x

| Command                     | New Files | Modified Files | Deleted Files | Description                                         |
| --------------------------- | --------- | -------------- | ------------- | --------------------------------------------------- |
| `git add -A`                | ✅        | ✅             | ✅            | Stage all (new, modified, deleted) files            |
| `git add .`                 | ✅        | ✅             | ❌            | Stage new and modified files only in current folder |
| `git add - u`               | ❌        | ✅             | ✅            | Stage modified and deleted files only               |
| git add -- ignore-removal . | ✅        | ✅             | ❌            | Stage modified and deleted files only               |

#### Long-form flags:

- `git add -A` is equivalent to `git add --all`
- `git add -u` is equivalent to `git add --update`

## Config

In my [dotfiles](https://github.com/daribock/dotfiles) repo you can see the config I am using for dev.

### Tools

- [[Delta]] #takealookat
- [[vim]]

### Aliases

- [delete local branches that are merged on remote](https://blog.objektkultur.de/quick-git-delete-local-branches-without-remote/)
