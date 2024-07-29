import React from "react";
import { Link } from "react-router-dom";


export default function Account ({ SingleBook, Books, }) {
  const addToCheckout = (item) => {
    let resultIndex = 0;
    let productQty = 0;
    // check if item is in cart...
    const result = checkout.find((product, index)=>{
      resultIndex = index;
      return product.id === item.id;
    });
    if (result) {
      // ...if Yes, then update quantity by 1
      checkout[resultIndex].quantity += 1;
      productQty = checkout[resultIndex].quantity;
      localStorage.setSingleBook("cart", JSON.stringify(checkout));
      setCheckout(checkout)
    }else{
      // if NO, add the item to the cart and set quantity to 1

        Book.quantity = 1;
        BooksQty = 1;
        const updatedCheckout =[Checkout, Book];
        localStorage.setItem("checkout", JSON.stringify(updatedCheckout));

        setCheckout(updatedCheckout);
    }

    alert[
      "Added book! You have " + booksQty + " " + book.title + " books checkedout!"
    ];
  };

  return (
    <>
    <Link to={`/product/details/${item?.id}`} className="product-card">
      <h2>{item?.title}</h2>
      {parent === "details" ? (
        <img src={item?.image} alt={item?.title} height={"500px"} />
      ) : (
        <img src={item?.image} alt={item?.title} />
      )}
      <p>{item?.price?.toFixed(2)}</p>
      {parent === "details" && <p>{item?.description}</p>}
      {parent === "details" && token && (
        <button onClick={()=>addToCart(item)}>Add to Cart </button>
        )}
      {parent === "details" && !token && (
        <></>
        // <Link to="/login">Login or create an account</Link>
      )}
   </Link>
   </>
  );
}










/* TODO - add your code to create a functional 
React component that renders account details 
for a logged in user. 
Fetch the account data from the provided API.
 You may consider conditionally rendering a 
 message for other users 
that prompts them to log in or 
create an account.  */