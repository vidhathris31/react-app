import { useState } from "react";

const Registration = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    gender: "",
    hobbies: []
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      let updatedHobbies = [...form.hobbies];

      if (checked) {
        updatedHobbies.push(value);
      } else {
        updatedHobbies = updatedHobbies.filter(h => h !== value);
      }

      setForm({ ...form, hobbies: updatedHobbies });
      setErrors({ ...errors, hobbies: "" });
    } else {
      setForm({ ...form, [name]: value });
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validate = () => {
    const nextErrors = {};

    if (!form.email.trim()) {
      nextErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email";
    }

    if (!form.password.trim()) {
      nextErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      nextErrors.password = "Password must be at least 6 characters";
    }

    if (!form.firstName.trim()) {
      nextErrors.firstName = "First name is required";
    }

    if (!form.lastName.trim()) {
      nextErrors.lastName = "Last name is required";
    }

    if (!form.gender) {
      nextErrors.gender = "Gender is required";
    }

    if (form.hobbies.length === 0) {
      nextErrors.hobbies = "Select at least one hobby";
    }

    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Registration Data:", form);
      alert("Registration Successful");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>

      <div>
        <label>Email</label><br />
        <input type="text" name="email" value={form.email} onChange={handleChange} />
        <br />
        {errors.email}
      </div>

      <br />

      <div>
        <label>Password</label><br />
        <input type="password" name="password" value={form.password} onChange={handleChange} />
        <br />
        {errors.password}
      </div>

      <br />

      <div>
        <label>First Name</label><br />
        <input type="text" name="firstName" value={form.firstName} onChange={handleChange} />
        <br />
        {errors.firstName}
      </div>

      <br />

      <div>
        <label>Last Name</label><br />
        <input type="text" name="lastName" value={form.lastName} onChange={handleChange} />
        <br />
        {errors.lastName}
      </div>

      <br />

      <div>
        <label>Gender</label><br />
        <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male<br />
        <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female<br />
        {errors.gender}
      </div>

      <br />

      <div>
        <label>Hobbies</label><br />
        <input type="checkbox" value="Reading" onChange={handleChange} /> Reading<br />
        <input type="checkbox" value="Travelling" onChange={handleChange} /> Travelling<br />
        <input type="checkbox" value="Music" onChange={handleChange} /> Music<br />
        <input type="checkbox" value="Sports" onChange={handleChange} /> Sports<br />
        {errors.hobbies}
      </div>

      <br />

      <button type="submit">Register</button>
    </form>
  );
};

export default Registration;
