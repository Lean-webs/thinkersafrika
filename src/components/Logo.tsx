import { Link } from "react-router-dom";
import "./Logo.css";

type LogoProps = {
  variant?: "light" | "dark";
  compact?: boolean;
};

export function Logo({ variant = "light", compact = false }: LogoProps) {
  // light = cream/red mark for dark page chrome
  // dark = black/red mark for light surfaces
  const src =
    variant === "dark"
      ? "/images/thinkers-logo.png"
      : "/images/thinkers-logo-nav.png";

  return (
    <Link
      to="/"
      className={`logo logo--${variant}${compact ? " logo--compact" : ""}`}
      aria-label="Thinkers Afrika home"
    >
      <img
        className="logo__img"
        src={src}
        alt="Thinkers Afrika"
        width={298}
        height={161}
        decoding="async"
      />
    </Link>
  );
}
