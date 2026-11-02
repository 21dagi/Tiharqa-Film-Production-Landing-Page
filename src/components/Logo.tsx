import { useId } from "react";
import { cn } from "@/utils/cn";

/* Tiharqa Film Production cinematic monogram geometry
   Echoes the original diagonal-cut styling:
   Primary navy (#060630) and signal red (#F50406) forming a stylized 'T' film emblem */
const T_LEFT_POINTS = "210,217 480,217 440,327 355,327 355,655 245,655 245,327 210,327";
const T_RIGHT_POINTS = "505,217 880,217 795,327 495,327 495,655 385,655 385,327 465,327";

export function Monogram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="205 212 685 448"
      className={cn("block h-auto", className)}
      aria-hidden="true"
      focusable="false"
    >
      <polygon points={T_LEFT_POINTS} fill="#060630" />
      <polygon points={T_RIGHT_POINTS} fill="#F50406" />
    </svg>
  );
}

/** Compact horizontal lockup: monogram + wordmark (+ tagline). Used in the navigation. */
export function LogoLockup({
  className,
  showTagline = true,
}: {
  className?: string;
  showTagline?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <Monogram className="w-11 shrink-0 sm:w-12" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[0.95rem] font-extrabold tracking-[0.03em] text-navy sm:text-[1.05rem]">
          TIHARQA FILM
        </span>
        {showTagline && (
          <span className="mt-1 hidden font-display text-[0.48rem] font-bold tracking-[0.14em] text-signal xs:block sm:text-[0.52rem]">
            ETHIOPIAN CINEMA & STORYTELLING
          </span>
        )}
      </span>
    </span>
  );
}

/** Full stacked lockup with the arched tagline, used in the footer. */
export function LogoStacked({ className }: { className?: string }) {
  const pathId = useId();
  return (
    <svg
      viewBox="0 0 760 600"
      className={cn("block h-auto", className)}
      role="img"
      aria-label="Tiharqa Film Production, Stories That Move. Cinema That Connects."
    >
      <g transform="translate(-57 -153.6) scale(0.8)">
        <polygon points={T_LEFT_POINTS} fill="#060630" />
        <polygon points={T_RIGHT_POINTS} fill="#F50406" />
      </g>
      <text
        x="380"
        y="478"
        textAnchor="middle"
        fontFamily="Montserrat, Inter, sans-serif"
        fontWeight={800}
        fontSize="48"
        fill="#060630"
        textLength="690"
        lengthAdjust="spacingAndGlyphs"
      >
        TIHARQA FILM PRODUCTION
      </text>
      <defs>
        <path id={pathId} d="M 40 520 Q 380 590 720 520" fill="none" />
      </defs>
      <text
        fontFamily="Montserrat, Inter, sans-serif"
        fontWeight={700}
        fontSize="30"
        letterSpacing="1.2"
        fill="#F50406"
        textAnchor="middle"
      >
        <textPath href={`#${pathId}`} startOffset="50%">
          STORIES THAT MOVE · CINEMA THAT CONNECTS
        </textPath>
      </text>
    </svg>
  );
}
