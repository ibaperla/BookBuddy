import React, { useEffect, useState } from "react";
import "./Checkout.css";

export default function Checkout({ checkout, setCheckout }) {
  const [checkoutTotal, setCheckoutTotal] = useState(0);
  useEffect(() => {
    setCheckoutTotal(
      checkout.reduce[
          (total, currItem) => total + currItem.price + currItem.quantity, 
          0
        ]
    );
  }, [checkout]);

console.log(checkout);

const handleRemoveItem = (item) => {
console.log(item);
const newCheckout = checkout.filter((book) => book.id !== item.id);
console.log(newCheckout);
setCheckout(newCheckout);
localStorage.setbooks("checkout", JSON.stringify(newCheckout));
};

  return ( 
    <div> 
      {checkout.map((item) => {
        <div key={item?.id} className="checkout-item-row">
          <img src={item?.image} alt={item?.title}/>
          <p>{item?.title}</p>
          <p>Price:&nbsp;${item?.price.toFixed(2)}</p>
          <p>Qty:&nbsp;{item?.quantity}</p>
          <p>Total:&nbsp;${(item?.quantity * item?.price).toFixed(2)}</p>
          <button onClick={() => handleRemoveItem(item)}>Remove book</button>
        </div>
     })}
     <p className="checkout-total">checkout Total:&nbsp;${checkoutTotal.toFixed(2)}</p>
    </div>
  );
}