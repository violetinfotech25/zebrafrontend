import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from '../assets/images/zebra-elevation2.png';

export default function PageTransition({ duration = 1500 }) {
  const { pathname } = useLocation();
  const [loading, setLoading] = useState(true);
  const [bgColor, setBgColor] = useState("#fff");

  // Map route -> background color
  const pageBackgrounds = {
    "/": "#ffffff",      // Home
    "/About": "#f9fafb", // light gray
    "/Project": "#f0fdf4", // light green
    "/Service": "#fef9c3", // light yellow
    "/Contact": "#f3e8ff", // light purple
  };

  useEffect(() => {
    setLoading(true);
    document.body.style.overflow = "hidden";

    // set background dynamically
    setBgColor(pageBackgrounds[pathname] || "#ffffff");

    // always scroll to top
    try {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      window.scrollTo(0, 0);
    }

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, duration);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, [pathname, duration]);

  return (
    <>
      <style>{`
        @keyframes glow {
          0%   { filter: drop-shadow(0 0 6px #3b82f6) drop-shadow(0 0 12px #3b82f6); }
          50%  { filter: drop-shadow(0 0 20px #2563eb) drop-shadow(0 0 40px #2563eb); }
          100% { filter: drop-shadow(0 0 6px #3b82f6) drop-shadow(0 0 12px #3b82f6); }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to   { opacity: 0; visibility: hidden; }
        }
      `}</style>

      {loading && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: bgColor, // 🔥 dynamic background
            zIndex: 99999,
            animation: `fadeOut 0.5s ease-out forwards`,
            animationDelay: `${duration - 500}ms`,
          }}
        >
          <img
            src={Logo} // 👈 replace with your logo
            alt="Logo"
            style={{
              width: "120px",
              height: "120px",
              objectFit: "contain",
              animation: "glow 1.5s infinite ease-in-out",
            }}
          />
        </div>
      )}
    </>
  );
}