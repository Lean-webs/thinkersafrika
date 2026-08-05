import { useEffect, useRef } from "react";

/**
 * Animated wireframe light-field overlay (TIHLO-style mesh motion)
 * drawn over the home hero photograph.
 */
export function HeroLightField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let raf = 0;
    let running = true;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let t = 0;

    const cols = 42;
    const rows = 28;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const project = (x: number, y: number, z: number) => {
      const fov = 520;
      const scale = fov / (fov + z);
      return {
        x: width * 0.5 + x * scale,
        y: height * 0.58 + y * scale,
      };
    };

    const heightAt = (xi: number, zi: number, time: number) => {
      const nx = (xi / cols) * Math.PI * 2;
      const nz = (zi / rows) * Math.PI * 2;
      return (
        Math.sin(nx * 1.4 + time * 0.9) * 18 +
        Math.cos(nz * 1.8 - time * 1.15) * 14 +
        Math.sin((nx + nz) * 0.9 + time * 0.55) * 10
      );
    };

    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);

      const spanX = width * 1.35;
      const depth = height * 1.55;
      const startZ = 40;
      const points: { x: number; y: number; glow: number }[][] = [];

      for (let zi = 0; zi <= rows; zi++) {
        const row: { x: number; y: number; glow: number }[] = [];
        const z = startZ + (zi / rows) * depth;
        for (let xi = 0; xi <= cols; xi++) {
          const x = -spanX / 2 + (xi / cols) * spanX;
          const y = heightAt(xi, zi, t);
          const wave =
            (Math.sin(xi * 0.35 + zi * 0.22 + t * 1.8) + 1) * 0.5;
          const pulse =
            (Math.sin(t * 0.7 + zi * 0.18 - xi * 0.08) + 1) * 0.5;
          row.push({ ...project(x, y, z), glow: wave * 0.55 + pulse * 0.45 });
        }
        points.push(row);
      }

      ctx.lineJoin = "round";
      ctx.lineCap = "round";

      // Horizontal mesh lines
      for (let zi = 0; zi <= rows; zi++) {
        const fade = 0.18 + (zi / rows) * 0.72;
        for (let xi = 0; xi < cols; xi++) {
          const a = points[zi][xi];
          const b = points[zi][xi + 1];
          const g = (a.glow + b.glow) * 0.5;
          const alpha = (0.08 + g * 0.38) * fade;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle =
            g > 0.72
              ? `rgba(255, 120, 110, ${alpha * 0.95})`
              : `rgba(244, 241, 236, ${alpha})`;
          ctx.lineWidth = g > 0.75 ? 1.35 : 0.85;
          ctx.stroke();
        }
      }

      // Vertical mesh lines
      for (let xi = 0; xi <= cols; xi++) {
        for (let zi = 0; zi < rows; zi++) {
          const a = points[zi][xi];
          const b = points[zi + 1][xi];
          const g = (a.glow + b.glow) * 0.5;
          const fade = 0.14 + (zi / rows) * 0.7;
          const alpha = (0.06 + g * 0.32) * fade;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(244, 241, 236, ${alpha})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }

      // Moving light nodes along crest
      for (let zi = 0; zi <= rows; zi += 2) {
        for (let xi = 0; xi <= cols; xi += 2) {
          const p = points[zi][xi];
          if (p.glow < 0.78) continue;
          const r = 1.2 + p.glow * 2.2;
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 4);
          grad.addColorStop(0, `rgba(255, 255, 255, ${0.35 * p.glow})`);
          grad.addColorStop(0.35, `rgba(225, 6, 0, ${0.18 * p.glow})`);
          grad.addColorStop(1, "rgba(225, 6, 0, 0)");
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, r * 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Sweeping light ribbon across the field
      const sweep = ((t * 0.12) % 1.4) - 0.2;
      const ribbonX = width * sweep;
      const ribbon = ctx.createLinearGradient(
        ribbonX - 120,
        0,
        ribbonX + 120,
        height,
      );
      ribbon.addColorStop(0, "rgba(255,255,255,0)");
      ribbon.addColorStop(0.45, "rgba(255,255,255,0.06)");
      ribbon.addColorStop(0.5, "rgba(225,6,0,0.1)");
      ribbon.addColorStop(0.55, "rgba(255,255,255,0.06)");
      ribbon.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = ribbon;
      ctx.fillRect(0, height * 0.25, width, height * 0.7);

      if (!reduceMotion) {
        t += 0.016;
        raf = requestAnimationFrame(draw);
      }
    };

    resize();
    draw();
    if (reduceMotion) {
      // Still paint one static frame
    }

    const onResize = () => {
      resize();
      if (reduceMotion) draw();
    };
    window.addEventListener("resize", onResize);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="home-hero__field"
      aria-hidden="true"
    />
  );
}
