"use client";

import { useEffect, useRef } from "react";

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const SPACING = 40;
    const BEAM_SPREAD = 260;
    const BEAM_SPEED = 1.8;
    let W = 0;
    let H = 0;
    let beamT = 0;
    let raf: number;

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = rect.width;
      H = rect.height;
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Start beam mid-canvas on first load
      if (beamT === 0) beamT = (W + H) * 0.3;
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      const cols = Math.ceil(W / SPACING) + 1;
      const rows = Math.ceil(H / SPACING) + 1;
      const maxT = (W + H) * 1.2;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * SPACING;
          const y = r * SPACING;

          // Diagonal beam: line x + y = beamT
          // Perpendicular distance: |x + y - beamT| / √2
          const dist = Math.abs(x + y - beamT) / Math.SQRT2;
          const proximity = Math.max(0, 1 - dist / BEAM_SPREAD);
          const glow = proximity * proximity * proximity; // cubic falloff

          ctx.beginPath();
          ctx.arc(x, y, glow > 0.05 ? 1.3 : 1, 0, Math.PI * 2);

          if (glow > 0.01) {
            ctx.fillStyle = `rgba(37, 99, 235, ${0.04 + glow * 0.32})`;
          } else {
            ctx.fillStyle = "rgba(255, 255, 255, 0.035)";
          }
          ctx.fill();
        }
      }

      beamT = (beamT + BEAM_SPEED) % maxT;
      raf = requestAnimationFrame(draw);
    }

    resize();
    draw();

    window.addEventListener("resize", resize, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
}
