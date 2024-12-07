import React, { useState } from "react";
import "./index.css";

function Second() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [books, setBooks] = useState([]);

  function validate() {
    if (name.length < 2) {
      alert("Kitob nomi juda qisqa");
      return false;
    }
    if (author.length < 4) {
      alert("Muallif nomi juda qisqa");
      return false;
    }
    return true;
  }

  function handleSave(event) {
    event.preventDefault();
    if (!validate()) {
      return;
    }
    const newBook = {
      id: Date.now(),
      name: name,
      author: author,
      status: "O'qilmagan",
    };
    setBooks([...books, newBook]);
    setName("");
    setAuthor("");
  }

  function bookRead(id) {
    const updatedBooks = books.map((book) =>
      book.id === id
        ? {
            ...book,
            status: book.status === "O'qilgan" ? "O'qilmagan" : "O'qilgan",
          }
        : book
    );
    setBooks(updatedBooks);
  }

  return (
    <div>
      <div className="container">
        <div className="wrap">
          <h2>Kitob qo'shish</h2>
          <form onSubmit={handleSave}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Kitob nomi"
            />
            <br />
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Muallif nomi"
            />
            <br />
            <button type="submit">Saqlash</button>
          </form>

          <h2>Kitoblar</h2>
          <ul>
            {books.map((book) => (
              <li
                key={book.id}
                className={
                  book.status === "Oqilgan" ? (
                    <p className="read">read</p>
                  ) : (
                    <p className="unread">unread</p>
                  )
                }
              >
                {book.name} - {book.author} ({book.status})
                <button onClick={() => bookRead(book.id)}>Oqilgan</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Second;
