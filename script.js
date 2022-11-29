const paywalls = []; // Add paywall domains from paywalls.json here
let titles = document.querySelectorAll("table tr.athing");
let postTitle = document.querySelector("tbody table.fatitem tr.athing");

// The main function that updates the UI with the links.
const passTheButter = (node) => {
  let meta = node.nextSibling.querySelector(".subtext");
  let link = node.querySelector(".titleline a").href;
  let domain = node.querySelector("span.sitestr") ? node.querySelector("span.sitestr").innerText : "";
  let paywall = paywalls.find((paywall) => domain.includes(paywall));

  if (paywall) {
    let paywallSpan = document.createElement("span");
    // Add archive.is / 12ft.io / archive.org links
    paywallSpan.innerHTML += `
    | 💰 
    | <a href="https://archive.is/${link}" target="_blank">Archive.is</a> 
    | <a href="https://12ft.io/${link}" target="_blank">12ft.io</a> 
    | <a href="https://web.archive.org/web/${link}" target="_blank">Archive.org</a> 
    | <a href="https://github.com/MostlyEmre/hn-anti-paywall" target="_blank">ℹ</a> 
    `;

    meta.appendChild(paywallSpan);
  }
};

titles &&
  titles.forEach((title) => {
    passTheButter(title);
  });

postTitle && passTheButter(postTitle);
