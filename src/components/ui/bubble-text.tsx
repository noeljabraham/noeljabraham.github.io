import React, { useState } from "react";

interface BubbleTextProps {
  text?: string;
  className?: string;
}

export const BubbleText = ({
  text = "Bubbbbbbbble text",
  className = ""
}: BubbleTextProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <h2
      onMouseLeave={() => setHoveredIndex(null)}
      className={className}
    >
      {text.split("").map((char, idx) => {
        const distance = hoveredIndex !== null ? Math.abs(hoveredIndex - idx) : null;

        let classes = "transition-all duration-300 ease-in-out cursor-default";

        switch (distance) {
          case 0:
            classes += " font-black text-indigo-500";
            break;
          case 1:
            classes += " font-semibold text-indigo-400";
            break;
          case 2:
            classes += " font-medium";
            break;
          default:
            break;
        }

        return (
          <span
            key={`${char}-${idx}`}
            onMouseEnter={() => setHoveredIndex(idx)}
            className={classes}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        );
      })}
    </h2>
  );
};
