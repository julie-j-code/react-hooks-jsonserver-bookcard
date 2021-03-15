import React, { useState, useEffect } from "react";
import axios from "axios";

export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/products").then(res => {
      const books = res.data;
      setBooks(books);
    });
  }, []);
  return (
    <>
      <h3>Livres</h3>
      {books.length === 0 ? (
        <div>loading...</div>
      ) : (
        <pre>
          <code>{JSON.stringify(books, null, 4)}</code>
        </pre>
      )}
    </>
  );
}
