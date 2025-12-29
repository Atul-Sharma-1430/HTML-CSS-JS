const socket = io(); // Connect to our server

document
  .getElementById("message-input")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      sendMessage();
    }
  });
// Hide chat UI until user logs in
document.getElementById("chat-box").style.display = "none";
document.getElementById("message-box").style.display = "none";

// When user clicks "Join the Chat"
function joinChat() {
  const username = document.getElementById("username").value;
  socket.emit("new-user-joined", username); // tell server new user joined
  document.getElementById("login-box").style.display = "none";
  document.getElementById("chat-box").style.display = "block";
  document.getElementById("message-box").style.display = "block";
}

// Server sends updated user count
socket.on("users-count", (count) => {
  document.querySelector("h1 span").innerText = count;
});

// Send chat message to server
function sendMessage() {
  const message = document.getElementById("message-input").value;
  socket.emit("send-message", message);
  document.getElementById("message-input").value = "";
}

// Emit typing events
function startTyping() {
  socket.emit("typing");
}

socket.on("start-typing", (username) => {
  // Show placeholder “username is typing…”
  document.getElementById(
    "message-input"
  ).placeholder = `${username} is typing...`;
});

function stopTyping() {
  socket.emit("stop-typing");
}

socket.on("stop-typing", () => {
  // Reset placeholder back
  document.getElementById("message-input").placeholder =
    "Type your message here...";
});

// Receive messages from server
socket.on("receive-message", (data) => {
  const p = document.createElement("p");
  const username = document.getElementById("username").value;
  // Add different CSS classes for sent vs received
  if (data.username === username) {
    p.classList.add("sent");
  } else {
    p.classList.add("received");
  }
  p.innerText = `${data.username}: ${data.message}`;
  document.getElementById("message-box").appendChild(p);
});
