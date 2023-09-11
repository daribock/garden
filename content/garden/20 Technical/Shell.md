---
draft: true
tags: 
- seed
---

# Shell

created at: [[2022-08-11]]

---

## How to change shell

Reference: https://www.howtogeek.com/444596/how-to-change-the-default-shell-to-bash-in-macos-catalina/

List all available shells:

```sh
cat /etc/shells
```

Chose one you like and then switch to the one you chose. For example Bash:

```sh
chsh -s /bin/bash
```