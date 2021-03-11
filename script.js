let counter = 1;

let button = document.createElement("button");
button.innerText = "Create a new websocket";
button.addEventListener("click", () => {
  let number = counter++;
  let div = document.createElement("div");
  div.innerText = "I am frontend lolz " + number;
  let socket = new WebSocket("ws://localhost:3000");
  socket.addEventListener("open", () => {
    socket.send("Joł from nr " + number);
  });
  div.addEventListener("click", () => {
    socket.send("Joł from nr " + number);
  });
  document.body.append(div);
});
document.body.append(button);
