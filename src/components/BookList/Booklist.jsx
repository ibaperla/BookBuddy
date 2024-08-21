import React from 'react'
import SingleBook from "..//SingleBook/SingleBook";
import "./BookList.css";

export default function BookList({ books }) {
  return (
    <div className="books-container">
        {books.map((item) => (
            <SingleBook item={book} key={book?.id} />
        ))}
    </div>
  );
}
