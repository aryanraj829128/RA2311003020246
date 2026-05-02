import React from "react";
import { Log } from "./loggin_middleware/log";

function App() {
  const [status, setStatus] = React.useState("");

  const sendLog = async () => {
    try {
      await Log("frontend", "info", "test", "Button clicked!");
      setStatus("✅ Log sent successfully!");
    } catch {
      setStatus("❌ Failed due to CORS (API restriction)");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#121212",
        color: "white",
      }}
    >
      <h1>🚀 Notification App</h1>

      <button
        onClick={sendLog}
        style={{
          padding: "12px 24px",
          fontSize: "16px",
          borderRadius: "8px",
          border: "none",
          background: "#4CAF50",
          color: "white",
          cursor: "pointer",
        }}
      >
        Send Log
      </button>

      <p style={{ marginTop: "20px" }}>{status}</p>
    </div>
  );
}

export default App;