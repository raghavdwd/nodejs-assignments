// start creating server here
import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/user" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ name: "john" }));
  } else if (req.url === "/user" && req.method === "POST") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ msg: "created dummy user" }));
  } else {
    res.writeHead(404);
    res.end();
  }
});

export default server;
