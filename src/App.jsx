import { useEffect, useState } from "react";
import Navigations from "./components/Navigations/Navigations";
import Books from "./pages/Books";
import Details from "./pages/Details";
import Checkout from "./pages/Checkout";
import Login from "./components/Login/Login";
import {Routes, Route} from "react-router-dom";
import Register from "./components/Register/Register";
import "./App.css";
import Account from "./components/Account/Account";
// import Authenticate from "./components/Authenticate/Authenticate";
function App() {
  const [books, setBooks] = useState([]);
  const [booksToDisplay, setBooksToDisplay] = useState([]);
  const [token, setToken] = useState(null);
  const [checkout, setCheckout] = useState([]);

  useEffect(() => {
    const localCheckout = localStorage.getItem("checkout");
    if (localCheckout) {
      setCheckout(JSON.parse(localCheckout));
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
         element={<Details token={token} checkout={checkout} setCheckout={setCheckout} />}
        />
        <Route 
          path="/login" 
          element={<Login setToken={setToken} token={token} />} 
        />
        <Route 
        path="/account"
        element={<Account/>}
        />

        {/* <Authenticate/> */}

        <Route path="/checkout" element={<Checkout checkout={checkout}
        setCheckout={setCheckout}/>}
        />
        <Route
        path="users/register"
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
