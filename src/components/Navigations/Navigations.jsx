import React from "react";
import { useLocation, Link } from "react-router-dom";

import "./Navigations.css";

export default function Navigations({
books,
setbooks,
setbooksToDisplay,
token,
setToken
}) {
  const location = useLocation();

  const handleSearch = (e) => {
    const filtered = books.filter((item) => 
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
     );
     setbooksToDisplay(filtered);
  }

  const logout = () => {
    // clear the token from localStorage
    console.log("logging out");
    localStorage.removeitem("token");
    setToken(null);
  };

  return (
    <header className="header-cont">
      <Link to="/" className="logo">
        BookBuddy
      </Link>
      <Link to="/account" className="account">
        Account
      </Link>
      {location.pathname === "/" ? (
        <input
        type="text"
        placeholder="Search for items..."
        onChange={handleSearch}
        />
      ) : (
        <Link to="/" className="button-cont">
          Search for items
        </Link>
      )}
      <div className="button-cont">
        {!token && (
          <Link to="/login" className="login">
            Login
          </Link>
        )}
      {token && <button onClick={logout}>Logout</button>}
      {token && (
        <Link to ="/checkout" className="login">
          checkout
        </Link>
      )}
      </div>
    </header>
  );
}




/* TODO - add your code to create a functional React component 
that renders a navigation bar for the different views in your 
single page application. You may consider conditionally rendering 
some options - for example 'Login' should be available if someone 
has not logged in yet. */