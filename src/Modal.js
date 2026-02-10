const Modal = ({ close }) => {
  return (
    <div style={overlay}>
      <div style={popup}>
        <h3>🎉 Login Successful</h3>
        <p>Welcome to the Employee Dashboard</p>

        <button style={btn} onClick={close}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;

/* ---------- STYLES ---------- */

const overlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const popup = {
  background: "white",
  padding: "30px",
  borderRadius: "10px",
  textAlign: "center",
  width: "300px"
};

const btn = {
  marginTop: "15px",
  padding: "8px",
  width: "100%",
  background: "#667eea",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};
