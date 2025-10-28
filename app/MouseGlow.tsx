"use client";

import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      if (!glowRef.current) return;
      const size = 260;
      glowRef.current.style.opacity = "1";
      glowRef.current.style.left = `${e.clientX - size / 2}px`;
      glowRef.current.style.top = `${e.clientY - size / 2}px`;
    }
    window.addEventListener("pointermove", handleMove);
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "260px",
        height: "260px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle at 50% 50%, rgba(255,220,130,0.18) 0%, rgba(0,0,0,0) 70%)",
        filter: "blur(50px)",
        opacity: 0,
        pointerEvents: "none",
        zIndex: 5,
        mixBlendMode: "screen",
      }}
    />
  );
}
