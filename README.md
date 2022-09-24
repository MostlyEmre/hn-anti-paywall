![A screenshot of the script in action](https://i.imgur.com/YFkP8qW.png)

## page

you need to select `.itemlist` `tbody` to access all posts.

## posts

top line class `tr.athing`

- from the topline, you'll get the raw url via `span.sitestr` class.
  bottom line doesn't have a class. the element is `tr`.
- you will add by `.innerHTML += ...` :
  - If paywalled: `| Paywalled | Archive URL`
  - If not: nothing

## Paywall destroyers

Main: `https://archive.ph/`
Alternative 1: `https://12ft.io/`
Alternative 2: `archive.org`

## paywall list

https://raw.githubusercontent.com/iamadamdev/bypass-paywalls-chrome/780c7854a0249ce366262348e0967459b3a1d6d2/src/js/sites.js
