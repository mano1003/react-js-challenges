import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:4000");

const AddressBook = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    socket.on("updateContacts", (updatedContacts) => {
      setContacts(updatedContacts);
    });

    return () => socket.off("updateContacts");
  }, []);

  const addContact = () => {
    if (name && email && phone) {
      socket.emit("addContact", { name, email, phone });
      setName("");
      setEmail("");
      setPhone("");
    }
  };

  const deleteContact = (id) => {
    socket.emit("deleteContact", id);
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Address Book</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 m-1"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 m-1"
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border p-2 m-1"
        />
        <button onClick={addContact} className="bg-blue-500 text-white p-2 rounded">Add</button>
      </div>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id} className="border p-2 flex justify-between">
            <span>{contact.name} - {contact.email} - {contact.phone}</span>
            <button onClick={() => deleteContact(contact.id)} className="bg-red-500 text-white p-1 rounded">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddressBook;
