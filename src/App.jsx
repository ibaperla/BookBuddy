import { useEffect, useState } from "react";
import Navigations from "./components/Navigations/Navigations";
import Books from "./pages/Books"
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import Login from "./components/Login/Login";
import {Routes, Route} from "react-router-dom";
import Register from "/components/Register/Register";
import "./App.css";
import Account from "./components/Account/Account";

function App() {
  const [books, setBooks] = useState([]);
  const [booksToDisplay, setBooksToDisplay] = useState([]);
  const [token, setToken] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    if (localCart) {
      setCart(JSON.parse(localCart));
    }
  }, []); 

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      setToken(localToken);
    }
  }, []);
  return (
    <>
      <Navigations
        books={books} 
        setBooks={setBooks}
        setBooksToDisplay={setBooksToDisplay}
        token={token}
        setToken={setToken}
      />
      <Routes>
         <Route 
          path="/"
          element={
            <Books
              setBooks={setBooks} 
              books={books} 
              booksToDisplay={booksToDisplay}
              setBooksToDisplay={setBooksToDisplay}
            />
          }
        />
        <Route 
         path="/book/details/:id"
         element={<Details token={token} cart={cart} setCart={setCart} />}
        />
        <Route 
          path="/login" 
          element={<Login setToken={setToken} token={token} />} 
        />
        <Route 
        path="/account"
        element={<Account/>}
        />
        <Route
        path="/register"
        element={<Register/>}
        />
        <Route 
          path="*" 
          element={
            <Books 
              setBooks={setBooks} 
              books={books} 
              booksToDisplay={booksToDisplay}
              setBooksToDisplay={setBooksToDisplay}
            />
          }
        /> 
      </Routes>
    </>
  );
}

export default App;
