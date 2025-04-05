'use client';

import React from 'react';

export const AppconLogo = ({ className }: { className?: string }) => {
  const baseColor = '#D1B9FE'; // Light purple color
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const svgRef = React.useRef<SVGSVGElement>(null);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getOpacityForPath = (pathIndex: number) => {
    // Base opacity of 0.5 for the lighter shapes
    return pathIndex % 2 === 0 ? 1 : 0.5;
  };

  return (
    <svg
      ref={svgRef}
      width="536"
      height="543"
      viewBox="0 0 536 543"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className || 'w-full h-full'}
    >
      <title>Appcon Logo</title>
      <path
        d="M267 61L267 244L187 108.5L267 61Z"
        fill={baseColor}
        style={{ opacity: getOpacityForPath(0) }}
      />
      <path
        d="M267 61L267 244L347 108.5L267 61Z"
        fill={baseColor}
        style={{ opacity: getOpacityForPath(1) }}
      />
      <path
        d="M267 474V291L347 426.5L267 474Z"
        fill={baseColor}
        style={{ opacity: getOpacityForPath(2) }}
      />
      <path
        d="M267 474V291L187 426.5L267 474Z"
        fill={baseColor}
        style={{ opacity: getOpacityForPath(3) }}
      />
      <path
        d="M473.5 267.5L290.5 267.5L426 187.5L473.5 267.5Z"
        fill={baseColor}
        style={{ opacity: getOpacityForPath(4) }}
      />
      <path
        d="M473.5 267.5L290.5 267.5L426 347.5L473.5 267.5Z"
        fill={baseColor}
        style={{ opacity: getOpacityForPath(5) }}
      />
      <path
        d="M60.5 267.5L243.5 267.5L108 347.5L60.5 267.5Z"
        fill={baseColor}
        style={{ opacity: getOpacityForPath(6) }}
      />
      <path
        d="M60.5 267.5L243.5 267.5L108 187.5L60.5 267.5Z"
        fill={baseColor}
        style={{ opacity: getOpacityForPath(7) }}
      />
      <path
        d="M87.9126 448.378L0 424.87L138.521 401.476L87.9126 448.378Z"
        fill={baseColor}
        style={{ opacity: getOpacityForPath(8) }}
      />
      <path
        d="M88.2789 448.038L105.727 538.215L138.52 401.476L88.2789 448.038Z"
        fill={baseColor}
        style={{ opacity: getOpacityForPath(9) }}
      />
      <path
        d="M447.628 452.378L535.541 428.87L397.02 405.476L447.628 452.378Z"
        fill={baseColor}
        style={{ opacity: getOpacityForPath(10) }}
      />
      <path
        d="M447.262 452.038L429.814 542.215L397.021 405.476L447.262 452.038Z"
        fill={baseColor}
        style={{ opacity: getOpacityForPath(11) }}
      />
      <path
        d="M87.9126 90.1767L0 113.685L138.521 137.079L87.9126 90.1767Z"
        fill={baseColor}
        style={{ opacity: getOpacityForPath(12) }}
      />
      <path
        d="M88.2789 90.5165L105.727 0.339844L138.52 137.079L88.2789 90.5165Z"
        fill={baseColor}
        style={{ opacity: getOpacityForPath(13) }}
      />
      <path
        d="M447.628 90.1767L535.541 113.685L397.02 137.079L447.628 90.1767Z"
        fill={baseColor}
        style={{ opacity: getOpacityForPath(14) }}
      />
      <path
        d="M447.262 90.5165L429.814 0.339844L397.021 137.079L447.262 90.5165Z"
        fill={baseColor}
        style={{ opacity: getOpacityForPath(15) }}
      />
    </svg>
  );
};
