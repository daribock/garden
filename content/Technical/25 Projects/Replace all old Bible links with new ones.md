---
draft: false
tags: 
- seed
---

# Replace all old Bible links with new ones

created at: [[2022-08-15]]

---

Trying to replace all old bible links I created (e.g.: [[1. Mose 1,1]]) with the new technique: [[Gen 1#1]]

This could help:
[- [How to Replace a String in a File in Bash](https://linuxhint.com/replace_string_in_file_bash/)](<- [How to Replace a String in a File in Bash](https://linuxhint.com/replace_string_in_file_bash/)

- [Practical Bash](https://www.youtube.com/watch?v=nyoZ8VeMEq0&list=PLShDm2AZYnK1SdG3dufPdCqk08sOahUBP&index=10)
- https://www.youtube.com/watch?v=TFq5YxN7pE0

Also use `rename` to rename every file (e.g.: John to Johannes)

- https://askubuntu.com/questions/1095759/rename-command-not-found-when-running-a-script
- [List of Bibelabkürzungen](https://www.die-bibel.de/bibeln/wissen-zur-bibel/inhalt-und-aufbau-der-bibel/abkuerzungen-der-bibel/)
  Test-run with following command:

```sh
rename 's/Johannes/Joh/' *.md
```

✅ Worked well
