const projects = [
  {
    name: "Archive.is",
    url: "https://archive.is/",
  },
  {
    name: "12ft.io",
    url: "https://12ft.io/",
  },
  {
    name: "Archive.org",
    url: "https://web.archive.org/web/",
  },
];

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
    paywallSpan.appendChild(document.createTextNode(" | 💰"));

    projects.forEach((project) => {
      const anchor = document.createElement("a");
      const line = document.createElement("span");
      line.textContent = " | ";
      anchor.setAttribute("href", `${project.url}${link}`);
      anchor.setAttribute("target", "_blank");
      anchor.setAttribute("rel", "noopener noreferrer");
      anchor.textContent = project.name;
      paywallSpan.appendChild(line);
      paywallSpan.appendChild(anchor);
    });
    paywallSpan.appendChild(document.createTextNode(" | "));
    paywallSpan.appendChild(
      Object.assign(document.createElement("a"), {
        href: `https://github.com/MostlyEmre/hn-anti-paywall`,
        target: "_blank",
        rel: "noopener noreferrer",
        textContent: "ℹ",
      })
    );

    meta.appendChild(paywallSpan);
  }
};

postTitle
  ? passTheButter(postTitle)
  : titles.forEach((title) => {
      passTheButter(title);
    });
