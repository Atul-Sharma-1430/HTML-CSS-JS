const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static("public"));

let hrs = 0;
let mins = 0;
let secs = 0;
let interval = null;

function start() {
  if (!interval) {
    interval = setInterval(() => {
      secs++;
      if (secs == 60) {
        secs = 0;
        mins++;
        if (mins == 60) {
          mins = 0;
          hrs++;
        }
      }
      io.emit("timer", { hrs, mins, secs });
    }, 1000);
  }
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  stop();
  hrs = 0;
  mins = 0;
  secs = 0;
  io.emit("timer", { hrs, mins, secs });
}

io.on("connection", (socket) => {
  console.log("User with ID:-", socket.id, " is connected");

  // Send current time to new client
  socket.emit("timer", { hrs, mins, secs });

  socket.on("start", () => {
    start();
    console.log("Stopwatch started by user with ID:-", socket.id);
  });

  socket.on("stop", () => {
    stop();
  });

  socket.on("reset", () => {
    reset();
  });

  socket.on("disconnect", () => {
    console.log("User with ID:-", socket.id, " is disconnected");
  });
});

server.listen(4000, () => {
  console.log("Server is running on port 4000");
});