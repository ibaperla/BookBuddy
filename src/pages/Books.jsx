import React, { useEffect, useState } from "react";
import Details from "../pages/Details";
import BookList from "../components/BookList/BookList";
import axios from "axios";
import "./Books.css";

export default function Books({ 
  products, 
  setProducts, 
  productsToDisplay, 
  setProductsToDisplay, 
}) {
  useEffect(() => {
    // call api here 
    axios("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books") 
      .then((res) => {
        console.log("----------", res.data)
        setProducts(res.data);
        setProductsToDisplay(res.data);
      })
        .catch((err) => console.log(err));
  }, []);

  const handleCategoryClick = (category) => {
    if (category === "") {
      setProductsToDisplay(products);
    } else {
    const filtered = products.filter(
      (product) => product.category.toLowerCase() === category 
    );
    console.log(filtered);
    setProductsToDisplay(filtered);
  }
};

  return (
    <div>
      <div className="filter-menu">
        <span>Filter by Category:</span>
        <div className="filter-buttons">
          <p 
            onClick={() => {
              handleCategoryClick("men's clothing");
            }}
          >
            Men's Clothing
          </p>
          <p 
            onClick={() => {
              handleCategoryClick("women's clothing");
            }}
          >
            Women's Clothing
          </p>
          <p 
            onClick={() => {
              handleCategoryClick("electronics");
            }}
          >
            Electronics
          </p>
          <p 
            onClick={() => {
              handleCategoryClick("jewelery");
            }}
          >
            Jewelery
          </p>
          <p 
            onClick={() => {
              handleCategoryClick("");
            }}
          >
            Reset
          </p>
        </div>
      </div>
      <BookList products={productsToDisplay} />
    </div> 
  );
}



/* TODO - add your code to create a functional React
 component that displays 
all of the available books in the library's catalog.
 Fetch the book data from the provided API. Users 
 should be able to click on an individual book to 
 navigate to the SingleBook component and view 
 its details. */