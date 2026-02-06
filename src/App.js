import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/home" element={<Home />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
