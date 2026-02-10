import { useEffect, useState } from "react";

const Dashboard = () => {
  const [empName, setEmpName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("empName");
    setEmpName(storedName);
  }, []);

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2>Welcome back 👋 {empName}</h2>
        <h3>Employee Dashboard</h3>

        <div style={empCard}>
          <strong>{empName}</strong>
          <span style={{ color: "green" }}>● Active</span>
        </div>
      </div>
    </div>
  );
};


export default Dashboard;

const containerStyle = {
  background: "linear-gradient(120deg,#84fab0,#8fd3f4)",
  minHeight: "80vh",
  padding: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const cardStyle = {
  background: "white",
  padding: "25px",
  borderRadius: "8px",
  width: "400px"
};

const empCard = {
  display: "flex",
  justifyContent: "space-between",
  padding: "8px",
  margin: "5px 0",
  borderBottom: "1px solid #ddd"
};
