import React from "react";

export default function LoadingScreen() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        zIndex: 1000,
      }}
    >
      <div>Loading...</div>
    </div>
  );
}
