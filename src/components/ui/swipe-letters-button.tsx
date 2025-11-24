"use client";

import React, { useState, useMemo } from "react";
import { cn } from "@/lib/utils";

interface SwipeLettersButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  direction?: "top" | "bottom" | "alternate";
  duration?: number;
  stagger?: number;
  icon?: React.ReactNode;
}

export const SwipeLettersButton: React.FC<SwipeLettersButtonProps> = ({
  label,
  onClick,
  className,
  direction = "top",
  duration = 300,
  stagger = 30,
  icon,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Split label into characters, preserving spaces
  const characters = useMemo(() => label.split(""), [label]);

  const getTransform = (index: number) => {
    if (!isHovered) return "translateY(0%)";

    let dir: "top" | "bottom";
    if (direction === "alternate") {
      dir = index % 2 === 0 ? "top" : "bottom";
    } else {
      dir = direction;
    }

    return dir === "top" ? "translateY(-100%)" : "translateY(100%)";
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "group relative overflow-hidden rounded-full px-8 py-3",
        "bg-primary text-primary-foreground font-light",
        "hover:bg-primary/90 transition-colors duration-200",
        "inline-flex items-center justify-center gap-2",
        className
      )}
    >
      <div className="flex items-center gap-2">
        {icon && <span className="relative z-10">{icon}</span>}
        <span className="relative inline-flex overflow-hidden">
          {characters.map((char, index) => (
            <span
              key={index}
              className="relative inline-block"
              style={{
                transition: `transform ${duration}ms cubic-bezier(0.4, 0, 0.2, 1) ${index * stagger}ms`,
                transform: getTransform(index),
              }}
            >
              <span className="inline-block">{char === " " ? "\u00A0" : char}</span>
              <span
                className="absolute inset-0 inline-block"
                style={{
                  transform: direction === "top" ? "translateY(100%)" : "translateY(-100%)",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            </span>
          ))}
        </span>
      </div>
    </button>
  );
};

export default SwipeLettersButton;
