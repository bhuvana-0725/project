import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LostAndFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Enter") {
        navigate("/signup");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  return (
    <div
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{
        background: "linear-gradient(to right, #FFE5E5, #FFF8DC, #E2FFD9)",
      }}
    >
      {/* Background Glow Circles */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-60 blur-3xl"
          style={{
            backgroundColor: "#FFE5E5",
            top: "10%",
            left: "15%",
          }}
        ></div>
        <div
          className="absolute w-[300px] h-[300px] rounded-full opacity-50 blur-2xl"
          style={{
            backgroundColor: "#FFF8DC",
            top: "30%",
            right: "20%",
          }}
        ></div>
        <div
          className="absolute w-[350px] h-[350px] rounded-full opacity-50 blur-3xl"
          style={{
            backgroundColor: "#E2FFD9",
            bottom: "10%",
            left: "35%",
          }}
        ></div>
      </div>

      {/* Large Circle with Pink Background */}
      <div className="relative z-10 w-[500px] h-[500px] rounded-full bg-pink-200 flex flex-col items-center justify-center text-center shadow-2xl p-8">
        <div className="w-12 h-12 bg-blue-900 text-white flex items-center justify-center rounded-full text-xl mb-4">
          ?
        </div>
        <h1 className="text-4xl font-semibold text-blue-900">Lost something?</h1>
        <p className="text-blue-800 mt-2">Let us know and we'll look around.</p>
        <button
          className="mt-5 px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-800 transition"
          onClick={() => navigate("/signup")}
        >
          Get started
        </button>
        <p className="text-sm text-blue-700 mt-3">
          Press <span className="font-semibold">Enter ↵</span>
        </p>
      </div>
    </div>
  );
}

export default LostAndFound;








