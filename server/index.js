import http from "http";
import { WebSocketServer } from "ws";

const server = http.createServer();

const wsServer = new WebSocketServer({ server });

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`Websockets server is running on port ${PORT}`);
});
