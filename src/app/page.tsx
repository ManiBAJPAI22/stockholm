"use client";

import { useEffect, useState } from "react";

import Header from "./Pages/Header/Header";
import LoadingScreen from "./Pages/Loading/LoadingScreen";
import Hero from "./Pages/hero/hero";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <Header />
          <Hero />
        </>
      )}
    </div>
  );
}
