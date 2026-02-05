import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import Registration from "./Registration";

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
