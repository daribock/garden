---
title: "MongoDB 🍃"
date: "2023-09-26"
draft: false
tags: 
- seed
---

## Warum MongoDB?

- alles zusammen Speichern was zusammen gehört
- ! bei großen Arrays (zum Beispiel Coupons) splitten
- ist Dokumenten basiert
	- einfacher
	- performanter weil kein Join
	- Developer freundlich

## Sharding architecture

- scale horizontal
- scale in Nirvana

![[MongoDB at MediaMarktSaturn 26.09.2023🍃 2023-09-26 10.09.36.excalidraw]]

## Cluster creation

- nodes in different regions
- read-only nodes
- Analytics nodes for Analytics Team
- ! MongoDB mit Terraform aufsetzen 
- nothing is set in Stone

## Atlas search and vector search

### Vector search

- better search

### Atlas search

#### Why do I Care about search?

- Application needs Google-like experience

Common search Features

- fuzzy search
- highlighting
- search facets
- weighting scoring

#### How devs build App search today?

1. database
2. Search engine

#### What do we offer?

- Full Text search
- All in one place

#### How to start

1. Create search Index
2. Test in Aggregation with search query

## Real time App examples

### Database triggers

1. A document is changed
2. The Trigger fires
3. Data transfare

## Atlas charts

- Fast to start

## Learnings

learn.mongodb.com/dashboard
Learnathon






