import React from "react";
import Spline from "@splinetool/react-Spline";

export default function Hero() {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, position: "relative" }}>
        <Spline
          scene="https://prod.spline.design/MV6P2SivMz9IlChr/scene.splinecode"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
        <div
          style={{
            position: "relative",
            top: "45%",
            left: "57%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="font-mono text-[40px] leading-none text-black px-8">
            Trading real-world <br /> assets on chain made easy
          </div>
        </div>
        <div
          style={{
            position: "relative",
            top: "45%",
            left: "58%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div className="font-mono text-[80px] leading-none text-black px-4">
            Stockholm.
          </div>
        </div>
      </div>
    </div>
  );
}
