const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

app.use(cors());

let contacts = [];

io.on("connection", (socket) => {
  console.log("A user connected");
  socket.emit("updateContacts", contacts);

  socket.on("addContact", (contact) => {
    const newContact = { id: Date.now(), ...contact };
    contacts.push(newContact);
    io.emit("updateContacts", contacts);
  });

  socket.on("deleteContact", (id) => {
    contacts = contacts.filter(contact => contact.id !== id);
    io.emit("updateContacts", contacts);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(4000, () => {
  console.log("Server running on port 4000");
});
