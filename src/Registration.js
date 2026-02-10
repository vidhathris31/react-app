import { useState } from "react";
import { Link } from "react-router-dom";

function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const handleRegister = () => {
    let newErrors = {};

    if (!name) newErrors.name = "Name is required*";
    if (!email) newErrors.email = "Email is required*";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setShowPopup(true); 
    }
  };

  return (
    <div style={container}>
      <div style={card}>
        <h2>Employee Registration</h2>

        {/* Name */}
        <input
          style={input}
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && (
          <p style={{ color: "red", fontSize: "13px", marginTop: "0px" }}>
            {errors.name}
          </p>
        )}

        {/* Email */}
        <input
          style={input}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && (
          <p style={{ color: "red", fontSize: "13px", marginTop: "0px" }}>
            {errors.email}
          </p>
        )}

        <button style={button} onClick={handleRegister}>
          Register
        </button>

        <p>
          Already registered? <Link to="/">Login</Link>
        </p>
      </div>

      {showPopup && (
        <div style={overlay}>
          <div style={popup}>
            <h3>🎉 Registered Successfully</h3>
            <p>Please login to continue</p>

            <button
              style={popupBtn}
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Registration;

const container = {
  minHeight: "100vh",
  background: "linear-gradient(120deg,#89f7fe,#66a6ff)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const card = {
  background: "white",
  padding: 25,
  width: 320,
  borderRadius: 10
};

const input = {
  width: 300,
  padding: 10,
  margin: "8px 0"
};

const button = {
  width: "100%",
  padding: 10,
  background: "#764ba2",
  color: "white",
  border: "none"
};

const overlay = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const popup = {
  background: "white",
  padding: 30,
  borderRadius: 10,
  textAlign: "center"
};

const popupBtn = {
  marginTop: 10,
  padding: 8,
  width: "100%",
  background: "#9cfd88"
};