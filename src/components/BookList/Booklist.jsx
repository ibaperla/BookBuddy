import React from 'react'
import SingleBook from "../SingleBook/SingleBook";
import "./BookList.css";

export default function BookList({ products }) {
  return (
    <div className="products-container">
        {products.map((item) => (
            <SingleBook item={item} key={item?.id} />
        ))}
    </div>
  );
}
