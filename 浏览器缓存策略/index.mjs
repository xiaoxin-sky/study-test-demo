import http from "http";
import fs from "fs";
import { resolve, relative } from "path";

const server = http.createServer();
const readStaticFile = (path) => {
  return fs.createReadStream("./public" + path);
};
server.on("request", (req, res) => {
  res.setHeader("Cache-control", "max-age=86400");
  switch (req.url) {
    case "/":
      readStaticFile("/index.html").pipe(res);
      break;
    default:
      readStaticFile(req.url).pipe(res);
  }
});

server.listen(3000, () => {
  console.log("启动成功:http://localhost:3000/");
});
