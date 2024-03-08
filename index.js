const http = require("node:http");
const hostname = "0.0.0.0";
const port = 3000;
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  let url = "";

  if (req.url === "/") {
    console.log("res/index.html");
    url = "res/index.html";
  } else {
    console.log(`res${req.url}`);
    url = `res${req.url}`;
  }

  res.setHeader("Content-Type", "text/plain");

  fs.readFile(url, "utf-8", (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end(`404\n\n${err}`);
      return;
    }

    console.log(data);
    res.statusCode = 200;
    res.end(data);
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
