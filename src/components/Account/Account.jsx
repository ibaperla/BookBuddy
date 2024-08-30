import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Account({ apiUrl, isLoggedIn }) {
  const navigate = useNavigate();
  const [accountData, setAccoutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
     const localToken=localStorage.getitem("token");
     if (isLoggedIn && localToken) {

      fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me",{headers:{
        "Content-Type": "string",
        "Authorization": `Bearer ${localToken}`,

      }})
        .then((res) => res.json())
        .then((data) => {
          setAccoutData(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err);
          setLoading(false);
        });
     if (isLoggedIn) {
      navigate("/");
     }

     return (
      <div className="account-container">
        <p style={{ color: "red", marginBottom: "10px" }}>
          Please log in or create an account.
        </p>
      </div>
     ) 
  }})
}









/* TODO - add your code to create a functional 
React component that renders account details 
for a logged in user. 
Fetch the account data from the provided API.
 You may consider conditionally rendering a 
 message for other users 
that prompts them to log in or 
create an account.  */


// 1. create react functional component
// 2. render account details for account user
// 3. fetch account data from the api
// 4. render a message about logging in or creating account
// 5. include login button
// 6. include account/register button

// looks a lot like login.jsx