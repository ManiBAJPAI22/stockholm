import Spline from "@splinetool/react-Spline";
import Header from "./header/header"; // Adjust the import path based on your actual file structure

export default function Home() {
  return (
    <div>
      <Header />
      <div style={{ position: "relative", width: "100%", height: "100vh" }}>
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
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h1>Welcome to stockholmn</h1>
        </div>
      </div>
    </div>
  );
}
