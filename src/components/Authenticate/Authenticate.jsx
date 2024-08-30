import React, {useState} from 'react';

export default function Authenticate({ token }) {
  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  async function handleCick() {
    try{
      const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations", 
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const result = await response.json();
  setSuccessMessage(result.message);
 } catch (error) {
  setError(error.message);
 }
}
  return (
    <div>
          <h2>Authenticate</h2>
          {successMessage && <p>{successMessage}</p>}
          {error && <p>{error}</p>}
          <button onClick={handleClick}>Authenticate Token!</button>
    </div>
  );
}
