const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve everything inside "Public" folder (index.html + style.css)
app.use(express.static("Public"));

// Map to store connected users { socket.id: username }
const users = new Map();

// Runs when a client connects
io.on("connection", (socket) => {
  console.log("User with Id:-" + socket.id + " connected");
  io.emit("users-count", users.size); // update everyone immediately

  // New user joined
  socket.on("new-user-joined", (username) => {
    users.set(socket.id, username);
    io.emit("users-count", users.size); // broadcast updated count
  });

  // Handle chat messages
  socket.on("send-message", (message) => {
    const username = users.get(socket.id); // get username
    io.emit("receive-message", { username, message }); // send to all
  });

  // User is typing
  socket.on("typing", () => {
    const username = users.get(socket.id);
    socket.broadcast.emit("start-typing", username); // inform others only
  });

  // User stopped typing
  socket.on("stop-typing", () => {
    io.emit("stop-typing"); // tell everyone to reset placeholder
  });

  // User disconnected
  socket.on("disconnect", () => {
    console.log("User with Id:-" + socket.id + " Disconnected");
    users.delete(socket.id); // remove user
    io.emit("users-count", users.size); // broadcast new count
  });
});

// Start server at port 4000
server.listen(4000, () => {
  console.log("Server is listening on port 4000");
});
