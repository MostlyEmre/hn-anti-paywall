const paywallList = "https://raw.githubusercontent.com/iamadamdev/bypass-paywalls-chrome/780c7854a0249ce366262348e0967459b3a1d6d2/src/js/sites.js";

fetch(paywallList)
  .then((response) => response.text())
  .then((text) => {
    const dataArray = text.split(`\n`);
    dataArray.splice(dataArray.length - 3, 3);
    dataArray.splice(0, 2);

    let paywalls = [];

    dataArray.map((line, index) => {
      paywalls.push(line.replaceAll(",", "").split(":")[1].trim().replaceAll("'", ""));
    });

    console.log(JSON.stringify(paywalls));
  });
