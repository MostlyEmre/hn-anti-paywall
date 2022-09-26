[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**GreasyFork**: https://greasyfork.org/en/scripts/452024-hacker-news-anti-paywall

- [Usage](#usage)
- [Screenshots](#screenshots)
- [Anti-Paywall Archive Link Providers](#anti-paywall-archive-link-providers)
- [Paywall List](#paywall-list)

## Usage

- Install through [GreasyFork](https://greasyfork.org/en/scripts/452024-hacker-news-anti-paywall)
- Surf the HackerNews
- Click on one of the archive links when you see a paywalled article to read it without paywall.
- If the specific article isn't available, try another archive link.
- If the article is not available in any of the links, please archive it through the `archive.is` link.

## Screenshots

![A screenshot of the script in multiple posts page](https://i.imgur.com/YFkP8qW.png)
![A screenshot of the script on single post page](https://i.imgur.com/BAJnlAF.png)

## Anti-Paywall Archive Link Providers

Main: `https://archive.is/`  
Alternative 1: `https://12ft.io/`  
Alternative 2: `archive.org`

**Feel free to recommend more.** `Archive.is` and `Archive.org` doesn't have all the links archived. `12ft.io` works differently but it doesn't support all websites. I found that majority of paywalled links are available through one of these providers in any given paywall.

**Make the world a better place:** When you click on the `archive.is` URL. If there are no pre-existing archives available, then please click on `archive this url` as this will help other users to see an archived link. Kinda like `BE KIND REWIND`.

## Paywall List

The paywall list (`paywalls.json`) is decoupled from the following URL. At first, I was mindfully fetching the list, but then I just manually inserted the list, way simpler this way.

[iamadamdev/bypass-paywalls-chrome](https://github.com/iamadamdev/bypass-paywalls-chrome/blob/master/src/js/sites.js)

**If you wish to update the paywall list (`paywalls.json`), feel free to edit and send a pull request.**
