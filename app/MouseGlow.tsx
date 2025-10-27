"use client";

import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    }

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  // estilo:
  // - posição fixa
  // - pointerEvents: "none" pra não bloquear clique
  // - mixBlendMode: "screen" ou "plus-lighter" pra dar aquele brilho
  // - degrade dourado/transparente
  // - blur forte

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 5, // fica acima do background, mas abaixo do conteúdo do site
        mixBlendMode: "screen",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: pos.x - 150, // centralizar
          top: pos.y - 150,
          width: 300,
          height: 300,
          borderRadius: "999px",
          background:
            "radial-gradient(circle at 50% 50%, rgba(246,226,122,0.28) 0%, rgba(199,146,47,0.05) 40%, rgba(0,0,0,0) 70%)",
          filter: "blur(40px)",
          opacity: 0.6,
          transition: "transform 0.08s linear",
          transform: "translateZ(0)",
        }}
      />
    </div>
  );
}
