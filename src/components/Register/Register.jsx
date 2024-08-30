import useState from 'react';
import axios from 'axios';

export default function Register( onRegister ) {
const [firstname, setFirstname] = useState("");
const [lastname, setLastname] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [registerError, setRegisterError] = useState(false);

const handleRegister = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations")
    const result = response.data;
    console.log(result);
    localStorage.setItem("token", result.token);
    onRegister(result.user);
  } catch (error) {
    console.log("Registration failed:", error.response.data.message)
  }
}

  return (
  <div className="register-form">
      <form onSubmit={handleRegister} className="register-form">
        {registerError && (
          <p style={{ color: "red", marginBottom: "10px" }}>
              Registration failed. Please try again.
          </p>
        )}
         <input
           type="text"
           placeholder="First Name"
           value={firstname}
           onChange={(e) => setFirstname(e.target.value)}
          />
           <input
           type="text"
           placeholder="Last Name"
           value={lastname}
           onChange={(e) => setLastname(e.target.value)}
          />
           <input
           type="text"
           placeholder="Email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
          />
          <input
           type="password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
          />
        <button>Submit</button> 
      </form>
  </div>  
  ); 
}





/* TODO - add your code to create a functional React component 
that renders a registration form */