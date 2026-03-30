"use client";

import { useEffect, useRef } from "react";

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    const orbs = [
      { x: W * 0.75, y: H * 0.35, r: Math.min(W, H) * 0.22, vx: 0.18, vy: 0.12, color: [201, 169, 110] },
      { x: W * 0.65, y: H * 0.65, r: Math.min(W, H) * 0.15, vx: -0.12, vy: 0.18, color: [92, 61, 46] },
      { x: W * 0.85, y: H * 0.55, r: Math.min(W, H) * 0.10, vx: 0.20, vy: -0.15, color: [201, 169, 110] },
    ];

    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    let frame = 0;
    let animId: number;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      frame++;

      // Orbs
      orbs.forEach((orb, i) => {
        orb.x += orb.vx * Math.sin(frame * 0.008 + i);
        orb.y += orb.vy * Math.cos(frame * 0.006 + i);
        if (orb.x < -orb.r) orb.x = W + orb.r;
        if (orb.x > W + orb.r) orb.x = -orb.r;
        if (orb.y < -orb.r) orb.y = H + orb.r;
        if (orb.y > H + orb.r) orb.y = -orb.r;

        const pulseFactor = 1 + Math.sin(frame * 0.02 + i) * 0.06;
        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r * pulseFactor);
        const [r, g, b] = orb.color;
        gradient.addColorStop(0, `rgba(${r},${g},${b},0.55)`);
        gradient.addColorStop(0.5, `rgba(${r},${g},${b},0.18)`);
        gradient.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.r * pulseFactor, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,169,110,${p.alpha})`;
        ctx.fill();
      });

      // Grid lines
      ctx.strokeStyle = "rgba(201,169,110,0.04)";
      ctx.lineWidth = 1;
      for (let x = 0; x < W; x += 80) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += 80) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.85 }}
    />
  );
}
