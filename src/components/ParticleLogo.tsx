"use client";

import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// --- Particle Logo Scene ---
function ParticleScene({
  imageUrl,
  onComplete,
}: {
  imageUrl: string;
  onComplete: () => void;
}) {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const { viewport } = useThree();

  const [particleData, setParticleData] = useState<{
    positions: THREE.Vector3[];
    colors: THREE.Color[];
  } | null>(null);

  const [isFormed, setIsFormed] = useState(false);

  // Load and sample the image
  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      // We don't want too many particles, so we limit the sampling resolution
      const width = 120;
      const height = (img.height / img.width) * width;

      canvas.width = width;
      canvas.height = height;

      ctx.drawImage(img, 0, 0, width, height);
      const imgData = ctx.getImageData(0, 0, width, height);
      const data = imgData.data;

      const positions: THREE.Vector3[] = [];
      const colors: THREE.Color[] = [];

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const i = (y * width + x) * 4;
          const alpha = data[i + 3];

          // Threshold for transparency
          if (alpha > 128) {
            // Map x, y to centered 3D coordinates.
            // Invert Y because canvas Y goes down, Three Y goes up.
            const posX = (x / width - 0.5) * 8; // Scale factor 8
            const posY = -(y / height - 0.5) * (8 * (height / width));

            // Extract color from original image (most likely white or brand color)
            const r = data[i] / 255;
            const g = data[i + 1] / 255;
            const b = data[i + 2] / 255;

            positions.push(new THREE.Vector3(posX, posY, 0));
            colors.push(new THREE.Color(r, g, b));
          }
        }
      }

      setParticleData({ positions, colors });
    };
  }, [imageUrl]);

  // Initial random positions and targets
  const { initialPositions, targetPositions, initialColors } = useMemo(() => {
    if (!particleData)
      return { initialPositions: [], targetPositions: [], initialColors: [] };

    const count = particleData.positions.length;
    const ip = [];
    const tp = particleData.positions;
    const ic = particleData.colors;

    for (let i = 0; i < count; i++) {
      // Spawn randomly in a sphere
      const r = 20;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi) + (Math.random() * 10 - 5); // Some depth

      ip.push(new THREE.Vector3(x, y, z));
    }

    return { initialPositions: ip, targetPositions: tp, initialColors: ic };
  }, [particleData]);

  // To track animation state
  const currentPositions = useRef<THREE.Vector3[]>([]);
  // We need a dummy object to set matrix for InstancedMesh
  const dummy = useMemo(() => new THREE.Object3D(), []);
  
  // Custom easing function
  const easeOutExpo = (x: number): number => {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  };

  const timeRef = useRef(0);
  const duration = 4.0; // Seconds to form

  useFrame((state, delta) => {
    if (!meshRef.current || targetPositions.length === 0) return;

    timeRef.current += delta;
    let t = Math.min(timeRef.current / duration, 1.0);
    let easeT = easeOutExpo(t);

    if (currentPositions.current.length === 0) {
      // Initialize current positions
      currentPositions.current = initialPositions.map((p) => p.clone());
    }

    let allReached = true;

    for (let i = 0; i < targetPositions.length; i++) {
      const current = currentPositions.current[i];
      const target = targetPositions[i];
      const start = initialPositions[i];

      // Interpolate
      current.lerpVectors(start, target, easeT);

      // Add a slight sine wave floating effect even as they assemble
      current.y += Math.sin(timeRef.current * 2 + i) * 0.02 * (1 - easeT);
      current.x += Math.cos(timeRef.current * 1.5 + i) * 0.02 * (1 - easeT);

      if (current.distanceTo(target) > 0.05) {
        allReached = false;
      }

      dummy.position.copy(current);
      // Optional: rotate particles slightly as they fly in
      dummy.rotation.set(
        timeRef.current * 0.5 + i,
        timeRef.current * 0.3 + i,
        0
      );
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
      meshRef.current.setColorAt(i, initialColors[i]);
    }

    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) {
      meshRef.current.instanceColor.needsUpdate = true;
    }

    if (t >= 0.9 && !isFormed) {
      setIsFormed(true);
      onComplete(); // Trigger the glow/text sequence in the parent
    }
    
    // Slow camera pan for cinematic feel
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, 10, 0.01);
    state.camera.lookAt(0, 0, 0);
  });

  if (!particleData) return null;

  return (
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, targetPositions.length]}
    >
      {/* Small spheres or planes for particles. Planes look more techy/glowy when additive. */}
      <planeGeometry args={[0.08, 0.08]} />
      <meshBasicMaterial
        color="#ffffff"
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </instancedMesh>
  );
}

export default function ParticleLogo({
  imageUrl,
  onComplete,
}: {
  imageUrl: string;
  onComplete: () => void;
}) {
  return (
    <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        {/* Soft ambient lighting, though basic material doesn't use it, 
            it's good if we switch to standard materials */}
        <ambientLight intensity={0.5} />
        <ParticleScene imageUrl={imageUrl} onComplete={onComplete} />
      </Canvas>
    </div>
  );
}
