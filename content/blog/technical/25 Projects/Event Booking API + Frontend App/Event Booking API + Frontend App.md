---
title: Event Booking API + Frontend App
date: "2022-08-26"
draft: false
tags:
  - seed
---

Reference: [Build a Project with GraphQL, Node, MongoDB and React.js](https://www.youtube.com/watch?v=7giZGFDGnkc&list=PL55RiY5tL51rG1x02Yyj93iypUuHYXcB_)

<div class="iframe-container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/7giZGFDGnkc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

Language:

- [[Javascript]]
  Tech stack:
- [[GraphQL]]
- [[Node]]
- [[MongoDB]]
- [[React]]
- [[Tailwindcss]]

## What we'll build

![[Event Booking API + Frontend App 2022-08-25 09.32.00.excalidraw]]

## What is [[GraphQL]]

- Is an alternative for a REST API
- GraphQL is more flexible
  - REST API is limited on your endpoint (e.g. GET/post)
  - GraphQL is flexible because it ==exposes a query language for the frontend==

### How does GraphQL work?

- You always send a POST request -> One singel Endpoint
- POST Request contains Query Expression (to define the Data that should be returned)

### A GraphQL Query

![[Event Booking API + Frontend App 2022-08-25 11.17.04.excalidraw]]

- We don't have to write a query parser there are several for [[Node]], [[Php]]

### Operation Types

- query -> Retrieve Data ("GET")
- mutation -> Manipulate Data ("POST", "PUT", "PATCH", "DELETE")
- subscription -> Set up realtime connection via Websockets

### GraphQL Big Pictures

![[Event Booking API + Frontend App 2022-08-25 11.24.47.excalidraw]]

## API Design & Project Setup

### Desgning the GraphQL API

![[Event Booking API + Frontend App 2022-08-25 11.47.25.excalidraw]]
