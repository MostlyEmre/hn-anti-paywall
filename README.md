## page

you need to select `tbody` to access all posts.

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
