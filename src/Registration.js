import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleRegister = () => {
    if (name && email) {
      alert("Registered Successfully");
      navigate("/");
    } else {
      alert("Fill all fields");
    }
  };

  return (
    <div>
      <h3>Register</h3>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default Register;
