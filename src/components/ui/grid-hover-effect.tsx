"use client";

import React, { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface GridHoverEffectProps {
  gridSize?: number;
  maxOpacity?: number;
  duration?: number;
  hoverColors?: string[];
  className?: string;
  showCursor?: boolean;
  gap?: number;
  externalMousePosition?: { x: number; y: number } | null;
}

interface Pixel {
  id: string;
  row: number;
  col: number;
}

export const GridHoverEffect: React.FC<GridHoverEffectProps> = ({
  gridSize = 30,
  maxOpacity = 0.3,
  duration = 1.5,
  hoverColors = ["#3b82f6", "#8b5cf6", "#ec4899", "#10b981"],
  className,
  showCursor = false,
  gap = 0,
  externalMousePosition = null,
}) => {
  const [animatingPixels, setAnimatingPixels] = useState<Set<string>>(new Set());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Calculate actual grid dimensions based on container size
  const pixelSize = Math.min(dimensions.width || 1000, dimensions.height || 800) / gridSize;
  const cols = Math.ceil((dimensions.width || 1000) / pixelSize);
  const rows = Math.ceil((dimensions.height || 800) / pixelSize);

  // Generate grid pixels
  const pixels = useMemo(() => {
    const pixelArray: Pixel[] = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        pixelArray.push({
          id: `${row}-${col}`,
          row,
          col,
        });
      }
    }
    return pixelArray;
  }, [cols, rows]);

  // Handle resize
  useEffect(() => {
    if (!containerRef.current) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    });

    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  // Handle pixel hover
  const handlePixelHover = useCallback((pixelId: string) => {
    setAnimatingPixels((prev) => new Set(prev).add(pixelId));
  }, []);

  // Calculate which pixel is under mouse position
  const getPixelAtPosition = useCallback((x: number, y: number) => {
    const col = Math.floor(x / pixelSize);
    const row = Math.floor(y / pixelSize);
    if (row >= 0 && row < rows && col >= 0 && col < cols) {
      return `${row}-${col}`;
    }
    return null;
  }, [pixelSize, rows, cols]);

  // Handle animation complete
  const handleAnimationComplete = useCallback((pixelId: string) => {
    setAnimatingPixels((prev) => {
      const newSet = new Set(prev);
      newSet.delete(pixelId);
      return newSet;
    });
  }, []);

  // Track external mouse position
  useEffect(() => {
    if (externalMousePosition && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = externalMousePosition.x - rect.left;
      const y = externalMousePosition.y - rect.top;

      setMousePosition({ x, y });

      // Calculate which pixel should be hovered
      const pixelId = getPixelAtPosition(x, y);
      if (pixelId) {
        handlePixelHover(pixelId);
      }
    }
  }, [externalMousePosition, getPixelAtPosition, handlePixelHover]);

  // Get color for pixel based on ID
  const getPixelColor = (pixelId: string) => {
    const hash = pixelId.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return hoverColors[hash % hoverColors.length];
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full h-full overflow-hidden", className)}
      style={{ cursor: showCursor ? "none" : "default" }}
    >
      {/* Grid Container */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, ${pixelSize}px)`,
          gridTemplateRows: `repeat(${rows}, ${pixelSize}px)`,
          gap: `${gap}px`,
        }}
      >
        {pixels.map((pixel) => (
          <div
            key={pixel.id}
            className="relative"
          >
            <AnimatePresence>
              {animatingPixels.has(pixel.id) && (
                <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: [0, maxOpacity, maxOpacity * 0.7, 0],
                    scale: [0.8, 1, 1.1, 1.2],
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration,
                    ease: "easeOut",
                  }}
                  onAnimationComplete={() => handleAnimationComplete(pixel.id)}
                  style={{
                    backgroundColor: getPixelColor(pixel.id),
                  }}
                />
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Custom Cursor */}
      {showCursor && (
        <motion.div
          className="pointer-events-none fixed w-4 h-4 rounded-full border-2 border-primary"
          animate={{
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 200,
          }}
        />
      )}
    </div>
  );
};

export default GridHoverEffect;
