import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';

// Corporate 3D Box Model
function CardboardBox({ length = 16, width = 12, height = 10, color = 'kraft', foldPercent = 100, boxType = 'rsc' }) {
  const groupRef = useRef();

  // Scale dimensions to ThreeJS units
  const scaleX = length * 0.16;
  const scaleY = height * 0.16;
  const scaleZ = width * 0.16;

  // Gentle rotation animation
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  // Material selection
  const boxMaterial = useMemo(() => {
    let baseColor = '#C89758';
    if (color === 'kraft') baseColor = '#B8864E';
    if (color === 'white') baseColor = '#F1F5F9';
    if (color === 'navy') baseColor = '#1E293B';
    if (color === 'emerald') baseColor = '#047857';

    return new THREE.MeshStandardMaterial({
      color: baseColor,
      roughness: color === 'white' ? 0.3 : 0.75,
      metalness: 0.05,
    });
  }, [color]);

  const tapeMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: '#D97706',
      roughness: 0.3,
      metalness: 0.1,
      transparent: true,
      opacity: foldPercent > 70 ? 0.9 : 0.0,
    });
  }, [foldPercent]);

  return (
    <group ref={groupRef} position={[0, scaleY / 2, 0]}>
      {/* Box Outer Body */}
      <mesh material={boxMaterial} castShadow receiveShadow>
        <boxGeometry args={[scaleX, scaleY, scaleZ]} />
      </mesh>

      {/* Top Sealing Tape Bar */}
      {foldPercent > 50 && (
        <mesh position={[0, scaleY / 2 + 0.005, 0]} material={tapeMaterial}>
          <boxGeometry args={[scaleX + 0.02, 0.008, 0.2 * scaleZ]} />
        </mesh>
      )}

      {/* Edge Crease Wireframe Accent */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(scaleX, scaleY, scaleZ)]} />
        <lineBasicMaterial color={color === 'navy' ? '#38BDF8' : '#475569'} linewidth={1.5} opacity={0.3} transparent />
      </lineSegments>

      {/* Corporate Logo Placeholder Stamp on Front */}
      <mesh position={[0, 0, scaleZ / 2 + 0.008]}>
        <planeGeometry args={[scaleX * 0.5, scaleY * 0.35]} />
        <meshBasicMaterial color={color === 'navy' ? '#ffffff' : '#0F172A'} transparent opacity={0.12} />
      </mesh>
    </group>
  );
}

export default function Box3DCanvas({
  length = 16,
  width = 12,
  height = 10,
  color = 'kraft',
  foldPercent = 100,
  boxType = 'rsc',
  autoRotate = true
}) {
  return (
    <div className="w-full h-full min-h-[400px] relative rounded-2xl overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200 border border-slate-300 shadow-inner">
      
      {/* Corporate Watermark Badge */}
      <div className="absolute top-4 left-4 z-10 flex items-center space-x-2 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-white text-[11px] font-mono shadow-sm">
        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
        <span>PAKCORP CAD 3D ENGINE</span>
      </div>

      {/* Spec Info Top Right */}
      <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-md text-slate-800 text-xs font-mono font-bold px-3 py-1.5 rounded-lg border border-slate-300 shadow-sm">
        {length}" × {width}" × {height}"
      </div>

      {/* ThreeJS Canvas */}
      <Canvas shadows camera={{ position: [4.5, 4.5, 5.5], fov: 42 }}>
        <color attach="background" args={['#E2E8F0']} />
        <ambientLight intensity={0.85} />
        <directionalLight
          position={[8, 12, 8]}
          intensity={1.3}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[-8, 6, -6]} intensity={0.4} color="#F8FAFC" />

        <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.2}>
          <CardboardBox
            length={length}
            width={width}
            height={height}
            color={color}
            foldPercent={foldPercent}
            boxType={boxType}
          />
        </Float>

        <ContactShadows
          position={[0, -0.02, 0]}
          opacity={0.45}
          scale={10}
          blur={1.5}
          far={4}
        />

        <OrbitControls
          enableZoom={true}
          maxPolarAngle={Math.PI / 2 + 0.1}
          minDistance={3.5}
          maxDistance={12}
          autoRotate={autoRotate}
          autoRotateSpeed={1.0}
        />
      </Canvas>

      {/* Controls Overlay */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 z-10 pointer-events-none text-[11px] font-semibold text-slate-600 bg-white/80 backdrop-blur-sm px-3.5 py-1 rounded-full border border-slate-300 shadow-sm">
        Click & Drag 360° • Scroll to Zoom
      </div>
    </div>
  );
}
