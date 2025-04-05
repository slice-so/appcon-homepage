'use client';

import { useEffect, useRef } from 'react';

export function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Array<{
      x: number;
      y: number;
      dx: number;
      dy: number;
      size: number;
      baseSpeed: number;
    }> = [];
    const mousePosition = { x: 0, y: 0 };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      const numberOfParticles = Math.floor(
        (canvas.width * canvas.height) / 10000,
      );

      for (let i = 0; i < numberOfParticles; i++) {
        const baseSpeed = 0.5;
        const dx = (Math.random() - 0.5) * baseSpeed;
        const dy = (Math.random() - 0.5) * baseSpeed;
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          dx,
          dy,
          baseSpeed: Math.sqrt(dx * dx + dy * dy),
          size: Math.random() * 2 + 0.5,
        });
      }
    };

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        // Calculate distance from mouse
        const dx = mousePosition.x - particle.x;
        const dy = mousePosition.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Apply repulsion force if mouse is close
        const repulsionRadius = 150;
        if (distance < repulsionRadius) {
          const force = (1 - distance / repulsionRadius) * 0.15;
          particle.dx -= (dx / distance) * force;
          particle.dy -= (dy / distance) * force;

          // Limit maximum velocity to prevent excessive speed
          const maxSpeed = 2;
          const currentSpeed = Math.sqrt(
            particle.dx * particle.dx + particle.dy * particle.dy,
          );
          if (currentSpeed > maxSpeed) {
            particle.dx = (particle.dx / currentSpeed) * maxSpeed;
            particle.dy = (particle.dy / currentSpeed) * maxSpeed;
          }
        }

        // Gradually return to base speed when moving too fast
        const currentSpeed = Math.sqrt(
          particle.dx * particle.dx + particle.dy * particle.dy,
        );
        if (currentSpeed > particle.baseSpeed) {
          const normalizeForce = 0.01;
          const speedDiff = currentSpeed - particle.baseSpeed;
          const slowdown = Math.min(normalizeForce * speedDiff, speedDiff);
          particle.dx *= (currentSpeed - slowdown) / currentSpeed;
          particle.dy *= (currentSpeed - slowdown) / currentSpeed;
        }

        // Natural motion (original movement)
        particle.x += particle.dx;
        particle.y += particle.dy;

        // Wrap around screen edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Calculate opacity based on distance from cursor
        const baseOpacity = 0.15;
        const maxExtraOpacity = 0.4;
        const glowRadius = 200;
        const extraOpacity =
          distance < glowRadius
            ? (1 - distance / glowRadius) * maxExtraOpacity
            : 0;
        const opacity = Math.min(baseOpacity + extraOpacity, 1);

        // Calculate color based on distance from cursor
        const baseColor = '0, 0, 0'; // black
        const interactionColor = '59, 130, 246'; // blue-500
        const colorMix = distance < glowRadius ? 1 - distance / glowRadius : 0;
        const color = colorMix > 0 ? `${interactionColor}` : `${baseColor}`;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${opacity})`;
        ctx.fill();
      }
    };

    resize();
    animate();

    // Add mouse move event listener
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.x = e.clientX;
      mousePosition.y = e.clientY;
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}

const particleLarge = ({
  color1,
  color2,
  opacity1,
  opacity2,
}: {
  color1: string;
  color2: string;
  opacity1: number;
  opacity2: number;
}) => {
  return (
    <>
      <path
        d="M60.5 267.5L243.5 267.5L108 347.5L60.5 267.5Z"
        fill={color1}
        style={{ opacity: opacity1 }}
      />
      <path
        d="M60.5 267.5L243.5 267.5L108 187.5L60.5 267.5Z"
        fill={color2}
        style={{ opacity: opacity2 }}
      />
    </>
  );
};

const particleSmall = ({
  color1,
  color2,
  opacity1,
  opacity2,
}: {
  color1: string;
  color2: string;
  opacity1: number;
  opacity2: number;
}) => {
  return (
    <>
      <path
        d="M447.628 90.1767L535.541 113.685L397.02 137.079L447.628 90.1767Z"
        fill={color2}
        style={{ opacity: opacity1 }}
      />
      <path
        d="M447.262 90.5165L429.814 0.339844L397.021 137.079L447.262 90.5165Z"
        fill={color1}
        style={{ opacity: opacity2 }}
      />
    </>
  );
};
