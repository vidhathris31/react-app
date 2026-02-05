import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>This is Header Component</h1>
      <Link to="/login">Login</Link> |{" "}
      <Link to="/registration">Registration</Link>
      <hr />
    </div>
  );
}

export default Header;
