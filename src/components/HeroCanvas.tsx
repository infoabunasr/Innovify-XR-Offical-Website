import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const HeroCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 24;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Objects Group
    const group = new THREE.Group();
    scene.add(group);

    // Outer 3D Icosahedron Wireframe (Spatial Computing)
    const geoOuter = new THREE.IcosahedronGeometry(7, 2);
    const matOuter = new THREE.MeshBasicMaterial({
      color: 0x2563eb,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const outerMesh = new THREE.Mesh(geoOuter, matOuter);
    group.add(outerMesh);

    // Inner Core Geometry (AI Neural Core)
    const geoInner = new THREE.OctahedronGeometry(4, 1);
    const matInner = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.7,
    });
    const innerMesh = new THREE.Mesh(geoInner, matInner);
    group.add(innerMesh);

    // Glowing Particle Nodes
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 28;
      positions[i + 1] = (Math.random() - 0.5) * 28;
      positions[i + 2] = (Math.random() - 0.5) * 28;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0x60a5fa,
      size: 0.25,
      transparent: true,
      opacity: 0.9,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    group.add(particles);

    // Ambient & Point Lighting
    const light = new THREE.PointLight(0x387bff, 3, 50);
    light.position.set(10, 10, 10);
    scene.add(light);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((event.clientX - rect.left) / container.clientWidth - 0.5) * 2;
      mouseY = ((event.clientY - rect.top) / container.clientHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth rotation
      outerMesh.rotation.x += 0.0015;
      outerMesh.rotation.y += 0.0025;

      innerMesh.rotation.x -= 0.003;
      innerMesh.rotation.y -= 0.002;

      particles.rotation.y += 0.0008;

      // Gentle mouse response
      group.rotation.y += (mouseX * 0.2 - group.rotation.y) * 0.05;
      group.rotation.x += (-mouseY * 0.2 - group.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geoOuter.dispose();
      matOuter.dispose();
      geoInner.dispose();
      matInner.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[420px] lg:min-h-[560px] flex items-center justify-center">
      {/* 3D WebGL Canvas Mount */}
      <div ref={mountRef} className="absolute inset-0 w-full h-full z-0 cursor-grab active:cursor-grabbing" />

      {/* Floating HUD Badges to reinforce AR/VR/AI Convergence */}
      <div className="absolute top-6 left-4 sm:left-8 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3 shadow-md z-10 flex items-center gap-3 animate-float">
        <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
        <div>
          <div className="text-[10px] font-mono tracking-wider uppercase text-slate-500 font-semibold">Spatial Engine</div>
          <div className="text-xs font-bold text-slate-900">Spatial Compute v4.2</div>
        </div>
      </div>

      <div className="absolute bottom-8 right-4 sm:right-8 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl p-3.5 shadow-md z-10 flex items-center gap-3">
        <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div>
          <div className="text-[10px] font-mono tracking-wider uppercase text-slate-500 font-semibold">AI Convergence</div>
          <div className="text-xs font-bold text-slate-900">Live Computer Vision Active</div>
        </div>
      </div>
    </div>
  );
};
