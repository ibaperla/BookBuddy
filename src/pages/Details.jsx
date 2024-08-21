import React, {useEffect, useState} from 'react';
import SingleBook from "../components/SingleBook/SingleBook";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Details({item, token, cart, setCart}) {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    console.log(product)
    useEffect(()=> {
      axios(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
},   []);
  return (
    <div>
        <SingleBook
        item={product}
        parent={"details"}
        token={token}
        cart={cart}
        setCart={setCart}
        />
    </div>
  );
}
