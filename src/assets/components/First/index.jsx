import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";

function Birinchi() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Foydalanuvchilarni olishda xato:", error);
      });
  }, []);

  function validate() {
    if (name.length < 3) {
      alert("Ism juda qisqa");
      return false;
    }
    if (email.length < 7) {
      alert("Email juda qisqa");
      return false;
    }
    return true;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!validate()) {
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
    };

    setUsers([...users, newUser]);
    setName("");
    setEmail("");
  }

  return (
    <div className="container">
      <div className="cards">
        <h2>Yangi foydalanuvchi qo'shish</h2>
        <form onSubmit={handleSave}>
          <input
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Foydalanuvchi nomi"
          />
          <br />
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Foydalanuvchi email"
          />
          <br />
          <button type="submit">Saqlash</button>
        </form>
        <h1>Foydalanuvchilar</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Birinchi;