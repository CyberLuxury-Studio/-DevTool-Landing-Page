"use client"

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-[#0F0F13]/50 border border-[#00F0FF]/20 relative overflow-hidden backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#00F0FF]/10 to-transparent animate-pulse" />
      <span className="font-mono text-[#00F0FF]/50 text-sm tracking-widest z-10 animate-pulse">
        INITIALIZING_3D_ENVIRONMENT...
      </span>
    </div>
  ),
});

interface SplineSceneProps {
  scene?: string;
  className?: string;
}

export function SplineScene({
  scene = "https://prod.spline.design/qBvV-8f83m62h-wH/scene.splinecode", // Abstract cyber particle node
  className
}: SplineSceneProps) {
  return (
    <div className={className}>
      <Suspense fallback={<div className="w-full h-full animate-pulse bg-white/5" />}>
        <Spline scene={scene} />
      </Suspense>
    </div>
  );
}
