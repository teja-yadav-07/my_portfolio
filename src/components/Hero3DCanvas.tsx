import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { sound } from '../audio/soundEngine';

interface Hero3DCanvasProps {
  speed: number;
  wireframe: boolean;
}

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = ({ speed, wireframe }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0, isHovering: false });
  const shockwavesRef = useRef<{ radius: number; maxRadius: number; x: number; y: number }[]>([]);
  const meshRef = useRef<THREE.Mesh | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(2.2, 32);
    
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x07111e,
      emissive: 0x00f0ff,
      emissiveIntensity: 0.15,
      roughness: 0.1,
      metalness: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: wireframe,
    });

    const mesh = new THREE.Mesh(geometry, material);
    meshRef.current = mesh;
    scene.add(mesh);

    const ringGeo1 = new THREE.TorusGeometry(3.2, 0.02, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.4 });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    scene.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(3.6, 0.015, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0xff007f, transparent: true, opacity: 0.3 });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = Math.PI / 2;
    scene.add(ring2);

    const particleCount = 2200;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cyanColor = new THREE.Color(0x00f0ff);
    const pinkColor = new THREE.Color(0xff007f);
    const violetColor = new THREE.Color(0x8a2be2);

    for (let i = 0; i < particleCount; i++) {
      const radius = 3.5 + Math.random() * 5.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      const mixedColor = i % 3 === 0 ? cyanColor : i % 3 === 1 ? pinkColor : violetColor;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    const ambientLight = new THREE.AmbientLight(0x0a1128, 1.8);
    scene.add(ambientLight);

    const lightCyan = new THREE.PointLight(0x00f0ff, 8, 20);
    lightCyan.position.set(4, 3, 4);
    scene.add(lightCyan);

    const lightPink = new THREE.PointLight(0xff007f, 6, 20);
    lightPink.position.set(-4, -3, 3);
    scene.add(lightPink);

    const lightViolet = new THREE.PointLight(0x8a2be2, 5, 20);
    lightViolet.position.set(0, 5, -2);
    scene.add(lightViolet);

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      mouseRef.current.targetX = x;
      mouseRef.current.targetY = y;
      mouseRef.current.isHovering = true;
    };

    const handlePointerLeave = () => {
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
      mouseRef.current.isHovering = false;
    };

    const handleClick = (e: MouseEvent) => {
      sound.playWarp();
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      shockwavesRef.current.push({
        radius: 0.1,
        maxRadius: 7.0,
        x: x * 4,
        y: y * 4,
      });
    };

    window.addEventListener('mousemove', handlePointerMove);
    container.addEventListener('mouseleave', handlePointerLeave);
    container.addEventListener('click', handleClick);

    const handleResize = () => {
      if (!containerRef.current) return;
      const newW = containerRef.current.clientWidth;
      const newH = containerRef.current.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta() * speed;
      const time = clock.getElapsedTime() * speed;

      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      if (mesh) {
        mesh.rotation.y += 0.25 * delta;
        mesh.rotation.x = Math.sin(time * 0.4) * 0.2 + mouseRef.current.y * 0.6;
        mesh.rotation.z = mouseRef.current.x * 0.6;

        const scalePulse = 1 + Math.sin(time * 1.5) * 0.03;
        mesh.scale.set(scalePulse, scalePulse, scalePulse);
      }

      ring1.rotation.z += 0.35 * delta;
      ring1.rotation.x = Math.cos(time * 0.5) * 0.4;
      ring2.rotation.y += 0.45 * delta;

      lightCyan.position.x = Math.sin(time * 0.8) * 5;
      lightCyan.position.y = Math.cos(time * 0.6) * 4;
      lightPink.position.x = -Math.cos(time * 0.7) * 5;
      lightPink.position.y = -Math.sin(time * 0.9) * 4;

      const posAttr = particleGeometry.attributes.position as THREE.BufferAttribute;
      const currentPos = posAttr.array as Float32Array;

      for (let s = shockwavesRef.current.length - 1; s >= 0; s--) {
        const sw = shockwavesRef.current[s];
        sw.radius += delta * 6;
        if (sw.radius > sw.maxRadius) {
          shockwavesRef.current.splice(s, 1);
        }
      }

      const mx = mouseRef.current.x * 4;
      const my = mouseRef.current.y * 4;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const ox = originalPositions[i3];
        const oy = originalPositions[i3 + 1];
        const oz = originalPositions[i3 + 2];

        const ang = time * 0.08;
        const cosA = Math.cos(ang);
        const sinA = Math.sin(ang);
        const rotX = ox * cosA - oz * sinA;
        const rotZ = ox * sinA + oz * cosA;

        let px = rotX;
        let py = oy;
        let pz = rotZ;

        const dx = px - mx;
        const dy = py - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 2.0 && dist > 0.01) {
          const force = (2.0 - dist) * 0.8;
          px += (dx / dist) * force;
          py += (dy / dist) * force;
        }

        for (const sw of shockwavesRef.current) {
          const swDist = Math.sqrt((px - sw.x) ** 2 + (py - sw.y) ** 2);
          const diff = Math.abs(swDist - sw.radius);
          if (diff < 0.8) {
            const waveForce = (1.0 - diff / 0.8) * 0.9;
            px += (px / (swDist || 1)) * waveForce;
            py += (py / (swDist || 1)) * waveForce;
            pz += waveForce * 0.5;
          }
        }

        currentPos[i3] = px;
        currentPos[i3 + 1] = py;
        currentPos[i3 + 2] = pz;
      }
      posAttr.needsUpdate = true;

      camera.position.x = mouseRef.current.x * 0.8;
      camera.position.y = mouseRef.current.y * 0.8;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mouseleave', handlePointerLeave);
      container.removeEventListener('click', handleClick);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [speed]);

  useEffect(() => {
    if (meshRef.current && meshRef.current.material) {
      (meshRef.current.material as THREE.MeshPhysicalMaterial).wireframe = wireframe;
    }
  }, [wireframe]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full cursor-crosshair overflow-hidden pointer-events-auto"
      title="Click anywhere to trigger a gravitational shockwave"
    />
  );
};
