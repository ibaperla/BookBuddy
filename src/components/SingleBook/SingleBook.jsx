import React from 'react';
import { Link } from "react-router-dom";
import "./SingleBook.css";

export default function SingleBook({item, parent, token, checkout, setCheckout}) {
  const addToCheckout = (item) => {
    let resultIndex =0;
    let productQty = 0;
    // check if item is in checkout...
    const result = checkout.find((product, index)=>{
      resultIndex = index;
      return product.id === item.id;
    });
    if (result) {
      // ...if Yes, then update quantity by 1
      checkout[resultIndex].quantity += 1;
      productQty = checkout[resultIndex].quantity;
      localStorage.setItem("checkout", JSON.stringify(checkout));
      setCheckout(checkout)
    }else{
      // if NO, add item to the checkout and set quantity to 1

      item.quantity = 1;
      productQty = 1;
      const updatedCheckout =[...checkout, item];
      localStorage.setitem("checkout", JSON.stringify(updatedCheckout));

      setCheckout(updatedCheckout);
    }

    alert[
      "Added item! You have" + productQty + " " + item.title + "in your checkout!"
    ];
  };
  
  return (
    <>
    <Link to={`api/books/${book?.id}`} 
className="single-book">
    <h2>{book?.title}</h2>
    {parent === "details" ? (
      <img src={book?.image} alt={book?.title} height={"500px"} />
    ) : (
      <img src={book?.image} alt={book?.title} />
    )}
    <p>{book?.price?.toFixed(2)}</p>
    {parent === "details" && <p>{book?.description}</p>}
    {parent === "details" && token && (
      <button onClick={()=>addToCheckout(item)}>Add to checkout</button>
      )}
    {parent === "details" && !token && (
      <Link to="/login">Login to Add to checkout</Link>
      )}
   </Link>
   </>
  );
}





/* TODO - add your code to create a functional React component 
that renders details for a single book. Fetch the book data 
from the provided API. You may consider conditionally rendering 
a 'Checkout' button for logged in users. */