const https = require("https");

function getStatusCode(url) {
  new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        res.on("data", () => {});
        res.on("end", () => resolve(res.statusCode));
      })
      .on("error", reject);
  });
}

async function ping() {
  const result = await getStatusCode("https://uol.com.br");
  console.log("Status code do site: " + result);
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
}

ping();
