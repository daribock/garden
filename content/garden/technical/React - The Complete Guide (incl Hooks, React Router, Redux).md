---
title: "React - The Complete Guide (incl Hooks, React Router, Redux)"
date: "2023-05-19"
draft: false
teacher: "Maximilian Schwarzmüller"
tags:
  - seed
categories:
  - udemy
techer: "[[Maximilian Schwarzmüller]]"
---

course materials:
[[https://github.com/academind/react-complete-guide-code/tree/master]]

## Notes

- Why [[React]]?
  - Normally you request every html file from the server
  - with react we run [[Js]] in the browser and manipulate the DOM with it. This
    is how we can reduce load time and don't need to make additionally requests
    to the server once the page is loaded.
  - normally it is very complex to manipulate the DOM with Js but react makes it
    easier for us. With react we work on a higher level and don't have to write
    plain Js code but react converts the react code afterwards in javascript
    code [[JSX]] to [[Js]]
- Why build components?

  - reusability
    - [[DRY]] -> Don't repeat yourself
  - Seperation of concern

- 30 Introducing [[JSX]]
  - JSX -> Javascript [[XML]] -> Tells us that it is Javascript with [[HTML]]
    code which is in the end XML code.
- 31 How does React works?
  - We use the Declaritive Approach
    - We declare the target state within react and react converts it to js 🎉
