import React, { useEffect, useState, useRef } from 'react';

export const InteractiveCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [targetPos, setTargetPos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);
  const requestRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTargetPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'BUTTON' ||
          target.tagName === 'A' ||
          target.closest('button') ||
          target.closest('a') ||
          target.getAttribute('role') === 'button' ||
          target.classList.contains('interactive-target'))
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
      setRipples((prev) => [...prev.slice(-4), newRipple]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
      }, 700);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      setPos((prev) => ({
        x: prev.x + (targetPos.x - prev.x) * 0.18,
        y: prev.y + (targetPos.y - prev.y) * 0.18,
      }));
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [targetPos]);

  return (
    <>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="pointer-events-none fixed z-50 rounded-full border border-cyan-400 animate-ping"
          style={{
            left: ripple.x - 20,
            top: ripple.y - 20,
            width: 40,
            height: 40,
            animationDuration: '600ms',
          }}
        />
      ))}

      <div
        className={`pointer-events-none fixed z-50 rounded-full transition-all duration-150 ease-out will-change-transform ${
          isHovering
            ? 'border-2 border-cyan-400 bg-cyan-400/10 scale-150'
            : isClicking
            ? 'border border-pink-400 scale-75'
            : 'border border-white/40'
        }`}
        style={{
          transform: `translate3d(${pos.x - 18}px, ${pos.y - 18}px, 0)`,
          width: 36,
          height: 36,
          opacity: pos.x < 0 ? 0 : 0.85,
        }}
      />

      <div
        className={`pointer-events-none fixed z-50 rounded-full will-change-transform ${
          isHovering ? 'bg-cyan-300 scale-125' : 'bg-white'
        }`}
        style={{
          transform: `translate3d(${targetPos.x - 3}px, ${targetPos.y - 3}px, 0)`,
          width: 6,
          height: 6,
          opacity: targetPos.x < 0 ? 0 : 1,
        }}
      />
    </>
  );
};
