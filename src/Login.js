import { useState } from "react";

const Login = () => {

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    console.log("Changed:", e.target.name);
    console.log("Changed:", e.target.value);

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form method="POST">
      <h2>Login Form</h2>

      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Login</button>
    </form>
  );
};

export default Login;