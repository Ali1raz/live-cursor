import { connections, users } from "./constants.js";

export const broadcast = () => {
  Object.keys(connections).forEach((uuid) => {
    const connection = connections[uuid];
    const message = JSON.stringify(users);
    connection.send(message);
  });
};

export function handleMessage(bytes, uuid) {
  const message = JSON.parse(bytes.toString());
  users[uuid].state = message;

  broadcast();

  console.log(
    `${users[uuid].username} updated their state: ${JSON.stringify(
      users[uuid].state
    )}.`
  );
}

export function handleClose(uuid) {
  console.log(`${users[uuid].username} disconnected.`);
  delete connections[uuid];
  delete users[uuid];
  broadcast();
}
