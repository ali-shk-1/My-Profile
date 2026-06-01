import { useEffect, useRef } from "react";

export function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      t += 0.003;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Deep dark background
      ctx.fillStyle = "oklch(0.08 0.02 280)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const blobs = [
        { x: 0.2, y: 0.3, r: 0.45, color: "oklch(0.45 0.2 290 / 0.35)", speed: 1 },
        { x: 0.7, y: 0.6, r: 0.4, color: "oklch(0.5 0.22 250 / 0.3)", speed: 0.7 },
        { x: 0.5, y: 0.15, r: 0.35, color: "oklch(0.55 0.18 200 / 0.25)", speed: 1.3 },
        { x: 0.85, y: 0.2, r: 0.3, color: "oklch(0.5 0.2 320 / 0.2)", speed: 0.9 },
      ];

      blobs.forEach((blob) => {
        const x = (blob.x + Math.sin(t * blob.speed) * 0.1) * canvas.width;
        const y = (blob.y + Math.cos(t * blob.speed * 0.8) * 0.1) * canvas.height;
        const r = blob.r * Math.max(canvas.width, canvas.height);
        const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
        grad.addColorStop(0, blob.color);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
}
