import http from "http";
import { WebSocketServer } from "ws";
import url from "url";
import { v4 as uuidv4 } from "uuid";
import { handleClose, handleMessage } from "./eventHandlers.js";
import { connections, users } from "./constants.js";

const server = http.createServer();

const wsServer = new WebSocketServer({ server });

const PORT = 8000;

wsServer.on("connection", (connection, req) => {
  // ws://localhost:PORT?username=ali
  const { username } = url.parse(req.url, true).query;
  console.log(username);

  const uuid = uuidv4();

  connections[uuid] = connection;
  users[uuid] = {
    username: username,
    state: {},
  };

  connection.on("message", (message) => handleMessage(message, uuid));

  connection.on("close", () => handleClose(uuid));
});

server.listen(PORT, () => {
  console.log(`Websockets server is running on port ${PORT}`);
});
