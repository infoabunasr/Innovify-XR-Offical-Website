import React, { useState, useEffect, useRef } from 'react';
import { CaseStudy } from '../types';
import { X, CheckCircle2, Cpu, BarChart3, Layers, Sparkles, Box, Eye, ArrowRight } from 'lucide-react';
import * as THREE from 'three';

interface CaseStudyModalProps {
  project: CaseStudy | null;
  onClose: () => void;
  onOpenIntake: (projectName?: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onOpenIntake,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'simulation'>('overview');
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!project || activeTab !== 'simulation' || !canvasRef.current) return;

    const container = canvasRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    // Create unique 3D geometry based on project
    let geometry: THREE.BufferGeometry;
    let material: THREE.Material;

    if (project.id.includes('orthopaedic')) {
      // Bone / Medical Structure Simulation
      geometry = new THREE.TorusKnotGeometry(2, 0.6, 100, 16);
      material = new THREE.MeshStandardMaterial({ color: 0x387bff, wireframe: true });
    } else if (project.id.includes('furniture')) {
      // Chair / Interior Object Simulation
      geometry = new THREE.BoxGeometry(3, 2, 3);
      material = new THREE.MeshStandardMaterial({ color: 0x60a5fa, wireframe: true });
    } else {
      // Industrial Torch / Cylinder Assembly
      geometry = new THREE.CylinderGeometry(1.5, 1.5, 4, 32);
      material = new THREE.MeshStandardMaterial({ color: 0x387bff, wireframe: true });
    }

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const light = new THREE.DirectionalLight(0xffffff, 2);
    light.position.set(5, 5, 5);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040, 2));

    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      mesh.rotation.x += 0.005;
      mesh.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [project, activeTab]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden my-6 text-slate-900">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-600">
            <Sparkles className="w-4 h-4" />
            <span>Case Study Detail</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-900 bg-slate-100 rounded-full transition-colors focus:outline-none"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {/* Title & Category */}
          <div className="space-y-2">
            <span className="px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest bg-blue-50 text-blue-700 border border-blue-100 inline-block">
              {project.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-heading">
              {project.title}
            </h2>
          </div>

          {/* Tab Switcher: Overview vs 3D Simulation */}
          <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-lg border border-slate-200 w-fit">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'overview'
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>Project Overview</span>
            </button>
            <button
              onClick={() => setActiveTab('simulation')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === 'simulation'
                  ? 'bg-blue-600 text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Box className="w-4 h-4" />
              <span>Interactive 3D Preview</span>
            </button>
          </div>

          {/* Media / Simulation Container */}
          <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
            {activeTab === 'overview' ? (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
            ) : (
              <div className="relative w-full h-full flex items-center justify-center">
                <div ref={canvasRef} className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md border border-slate-200 rounded-md px-3 py-1.5 text-[11px] text-slate-600 font-medium">
                  Drag to rotate spatial node model
                </div>
              </div>
            )}
          </div>

          {/* Metrics Strip (if available) */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.metrics.map((metric, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-center">
                  <div className="text-xl sm:text-2xl font-extrabold text-blue-600 font-heading">{metric.value}</div>
                  <div className="text-xs text-slate-500 font-medium mt-1">{metric.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Structured Problem / Solution Breakdown */}
          <div className="space-y-4">
            {project.challenge && (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-blue-600" />
                  The Business / Operational Challenge
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            )}

            {project.solution && (
              <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-900 font-mono flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-600" />
                  Innovify XR Solution Architecture
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}

            {project.experience && (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-mono flex items-center gap-2">
                  <Eye className="w-4 h-4 text-blue-600" />
                  Immersive Spatial Experience
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.experience}
                </p>
              </div>
            )}

            {project.outcome && (
              <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-100 space-y-1.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900 font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Project Outcome & Value Delivered
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {project.outcome}
                </p>
              </div>
            )}
          </div>

          {/* Concept Disclaimer / Note */}
          {project.disclaimer && (
            <div className="p-3.5 rounded-lg bg-slate-100 border border-slate-200 text-xs text-slate-600 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>{project.disclaimer}</span>
            </div>
          )}

          {/* Deliverables & Tech Stack */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Key Deliverables
              </h4>
              <ul className="space-y-2">
                {(project.deliverables || []).map((item, idx) => (
                  <li key={idx} className="text-xs font-medium text-slate-700 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 font-mono flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-600" />
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {(project.technologies || []).map((tech, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500 font-medium">
              Need a similar solution built for your enterprise?
            </p>
            <button
              onClick={() => {
                onClose();
                onOpenIntake(project.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold uppercase tracking-wider text-xs px-6 py-3.5 rounded-full transition-all shadow-xs"
            >
              <span>Schedule Technical Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
