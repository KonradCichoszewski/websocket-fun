const express = require("express");
const webSocket = require("ws");

const app = express();

const webSocketServer = new webSocket.Server({ noServer: true });

webSocketServer.on("connection", (socket) => {
  socket.on("message", (message) => {
    console.log(message);
  });
});

const server = app.listen(3000);

server.on("upgrade", (request, socket, head) => {
  webSocketServer.handleUpgrade(request, socket, head, (socket) => {
    webSocketServer.emit("connection", socket, request);
  });
});
