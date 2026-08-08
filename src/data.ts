import { SolutionItem, CaseStudy, IndustryItem, ProcessStep, ArticleItem, FAQItem } from './types';

export const PRIMARY_SOLUTIONS: SolutionItem[] = [
  {
    id: 'ar-development',
    title: 'AR Development',
    shortDesc: 'Create interactive augmented reality experiences for products, marketing, visualization, retail, and real-world applications.',
    fullDesc: 'Innovify XR crafts high-precision Augmented Reality solutions that blend digital intelligence seamlessly into real-world environments. From spatial retail try-ons to industrial visual assistance and interactive marketing campaigns.',
    category: 'primary',
    badge: 'Spatial Computing',
    iconName: 'Eye',
    features: [
      '3D Object & Surface Tracking',
      'Markerless & Location-Based AR',
      'Interactive Product Configurators',
      'Cross-Platform iOS (ARKit) & Android (ARCore)'
    ],
    useCases: ['Retail & E-commerce Try-on', 'Industrial Field Maintenance', 'Interactive Spatial Marketing'],
    ctaText: 'Explore AR Development',
    route: '/solutions/ar-development'
  },
  {
    id: 'vr-development',
    title: 'VR Development',
    shortDesc: 'Build immersive VR experiences for training, simulation, education, healthcare, and enterprise applications.',
    fullDesc: 'High-fidelity Virtual Reality environments engineered for hands-on enterprise training, medical simulation, and safe industrial practice. We build immersive multi-user VR simulations with realistic physics and spatial audio.',
    category: 'primary',
    badge: 'Full Immersion',
    iconName: 'Headphones',
    features: [
      'High-Fidelity 3D Physics Simulation',
      'Multi-User Collaborative VR Environments',
      'Haptic Feedback & Motion Controller Tracking',
      'Meta Quest, HTC Vive, Pico & VisionOS Compatibility'
    ],
    useCases: ['Surgical & Orthopaedic Training', 'Hazardous Industrial Safety Simulation', 'Virtual Showrooms & Design Reviews'],
    ctaText: 'Explore VR Development',
    route: '/solutions/vr-development'
  },
  {
    id: 'webar-development',
    title: 'WebAR Development',
    shortDesc: 'Deliver browser-based augmented reality experiences without requiring users to install an application.',
    fullDesc: 'Instant, frictionless Augmented Reality accessible directly through Safari, Chrome, and Edge on any modern smartphone. Eliminate app-store drop-off and maximize engagement with instant WebXR scanning.',
    category: 'primary',
    badge: 'Frictionless WebXR',
    iconName: 'Globe',
    features: [
      'Zero App Download Requirement',
      'QR Code & Web Trigger Activation',
      'Lightweight 3D WebGL Optimization',
      'Universal iOS & Android Browser Support'
    ],
    useCases: ['E-Commerce Product Placement', 'Interactive Event Packaging', 'Real Estate Web Spatial Tours'],
    ctaText: 'Explore WebAR Development',
    route: '/solutions/webar-development'
  },
  {
    id: 'ai-integration',
    title: 'AI Integration',
    shortDesc: 'Integrate AI into applications and digital experiences to automate workflows, personalize experiences, analyze information, and improve decision-making.',
    fullDesc: 'Embed state-of-the-art artificial intelligence models, computer vision, and predictive analytics into core enterprise workflows to automate complex visual tasks and deliver intelligent personalized user experiences.',
    category: 'primary',
    badge: 'Intelligent Systems',
    iconName: 'Cpu',
    features: [
      'Computer Vision & Object Recognition',
      'Generative AI & LLM Workflow Automation',
      'Predictive Analytics & Sensor Integration',
      'Custom API & Cloud AI Pipelines'
    ],
    useCases: ['Automated Visual Quality Inspection', 'Intelligent Customer Assistance', 'Real-time Spatial Data Analysis'],
    ctaText: 'Explore AI Integration',
    route: '/solutions/ai-integration'
  },
  {
    id: 'ai-xr-solutions',
    title: 'AI + XR Solutions',
    shortDesc: 'Combine artificial intelligence with AR and VR to create intelligent immersive experiences.',
    fullDesc: 'The convergence of Spatial Computing and Artificial Intelligence. We build self-learning 3D virtual avatars, adaptive training environments that adjust to trainee proficiency, and intelligent computer-vision augmented reality overlays.',
    category: 'primary',
    badge: 'Next-Gen Convergence',
    iconName: 'Sparkles',
    features: [
      'AI-Powered Conversational Virtual Avatars',
      'Adaptive Training Difficulty Engines',
      'Real-Time Computer Vision AR Overlays',
      'Intelligent Spatial Data Visualizations'
    ],
    useCases: ['Adaptive Medical Simulation Coaching', 'Intelligent Industrial Repair Guidance', 'Smart Virtual Sales Agents'],
    ctaText: 'Explore AI + XR',
    route: '/solutions/ai-xr-solutions'
  }
];

export const SECONDARY_SOLUTIONS: SolutionItem[] = [
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    shortDesc: 'High-performance native and cross-platform mobile applications for iOS and Android.',
    fullDesc: 'Scalable mobile engineering tailored for spatial computing integration, connected devices, and enterprise workflows.',
    category: 'secondary',
    badge: 'Mobile Systems',
    iconName: 'Smartphone',
    features: ['React Native & Flutter', 'Native iOS/Android', 'IoT & Bluetooth Integration'],
    useCases: ['Enterprise Field Apps', 'Connected Wearable Utilities'],
    ctaText: 'Learn More',
    route: '/solutions/mobile-app-development'
  },
  {
    id: 'web-development',
    title: 'Web Development',
    shortDesc: 'Modern, high-performance web applications and interactive spatial web platforms.',
    fullDesc: 'Robust web engineering leveraging React, Next, WebGL, and cloud infrastructure for fast visual web applications.',
    category: 'secondary',
    badge: 'Web Architecture',
    iconName: 'Monitor',
    features: ['React & Next.js Platforms', 'WebGL & Shader Optimization', 'Enterprise Security & APIs'],
    useCases: ['Interactive 3D Web Portals', 'Enterprise SaaS Dashboards'],
    ctaText: 'Learn More',
    route: '/solutions/web-development'
  },
  {
    id: 'game-development',
    title: 'Game Development',
    shortDesc: 'Interactive 3D games and gamified simulation environments built in Unity and Unreal Engine.',
    fullDesc: 'Leverage game engine mechanics to create highly engaging simulation, educational, and interactive experiences.',
    category: 'secondary',
    badge: 'Interactive Engines',
    iconName: 'Gamepad2',
    features: ['Unity 3D Development', 'Unreal Engine 5', 'Multiplayer Networking'],
    useCases: ['Gamified Training Systems', 'Brand Experience Worlds'],
    ctaText: 'Learn More',
    route: '/solutions/game-development'
  },
  {
    id: 'blockchain-development',
    title: 'Blockchain Development',
    shortDesc: 'Secure decentralized architecture, smart contracts, and digital asset authentication systems.',
    fullDesc: 'Enterprise blockchain infrastructure for verifying digital ownership, asset provenance, and secure decentralized transactions.',
    category: 'secondary',
    badge: 'Distributed Systems',
    iconName: 'ShieldCheck',
    features: ['Smart Contract Architecture', 'Digital Asset Verification', 'Decentralized Identity'],
    useCases: ['Digital Asset Provenance', 'Enterprise Security Authentication'],
    ctaText: 'Learn More',
    route: '/solutions/blockchain-development'
  }
];

export const ALL_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'vr-orthopaedic-trauma-training',
    slug: 'vr-orthopaedic-trauma-training',
    route: '/case-studies/vr-orthopaedic-trauma-training',
    title: 'VR Orthopaedic Trauma Training Experience',
    category: 'Healthcare / VR Training',
    industry: 'Healthcare',
    technology: 'Virtual Reality',
    tags: ['VR', 'Healthcare', 'Training', 'Simulation'],
    description: 'An immersive VR training experience designed around orthopaedic trauma scenarios, providing users with a controlled virtual environment for learning, practicing, and experiencing realistic training situations.',
    longDescription: 'Recreates complex surgical operating rooms and acute bone trauma stabilization procedures in a zero-risk 3D environment. Trainees utilize haptic motion controllers to handle specialized surgical instruments, align bone structures, and practice fixation techniques with real-time feedback.',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80'
    ],
    challenge: 'Traditional orthopaedic surgical training faces OR scheduling bottlenecks, high costs of cadaver labs, and limited opportunities for trainees to practice rare trauma stabilization cases in high-stakes environments.',
    solution: 'Innovify XR built a high-fidelity VR surgical training module featuring haptic force feedback, millimeter-accurate 3D anatomy models, and step-by-step procedural guidance.',
    experience: 'Surgeons and residents wear standalone VR headsets with calibrated controllers. They navigate realistic virtual ORs, select surgical tools (drills, plates, bone clamps), perform alignment procedures, and review spatial analytics post-session.',
    outcome: 'Delivered a scalable, repeatable virtual surgical training application enabling medical institutions to augment clinical learning without risk to real patients.',
    deliverables: ['Custom VR Simulation Software', 'Haptic Force-Feedback Calibration', 'Instructor Analytics Dashboard', 'Standalone VR Headset Build'],
    technologies: ['Unity 3D', 'Meta XR Interaction SDK', 'Haptic API', 'C#', 'Medical Spatial Analytics'],
    demoType: '3d-vr',
    ctaText: 'View Case Study',
    isFeaturedHomepage: true,
    isFeaturedPortfolio: true,
    developmentProcess: [
      'Clinical consultation & surgical workflow mapping',
      'High-fidelity 3D medical asset & bone physics modeling',
      'Haptic feedback integration & spatial controller calibration',
      'User testing with surgical residents & performance analytics dashboard'
    ]
  },
  {
    id: 'ar-furniture-items-showcase',
    slug: 'ar-furniture-showcase',
    route: '/case-studies/ar-furniture-showcase',
    title: 'AR Furniture Items Showcase',
    category: 'Retail / AR Product Visualization',
    industry: 'Retail',
    technology: 'Augmented Reality',
    tags: ['AR', 'Retail', 'E-commerce', 'Product Visualization'],
    description: 'An AR product visualization experience that allows users to explore furniture and visualize products within their real-world surroundings.',
    longDescription: 'Allows shoppers to preview true-to-scale, photorealistic 3D furniture items in their living rooms or commercial offices using mobile WebAR and smartphone cameras. Uses real-time plane detection, shadow projection, and PBR material rendering.',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80'
    ],
    challenge: 'E-commerce furniture customers struggle to visualize how items fit into their personal space, leading to cart abandonment and product return risks due to sizing or style mismatches.',
    solution: 'Innovify XR engineered an instant WebAR product showcase that requires zero mobile app download, allowing shoppers to project, rotate, and customize 3D furniture directly through standard web browsers.',
    experience: 'Shoppers click "View in Your Room" on a retailer web page, scan their floor with their smartphone camera, instantly see the 3D furniture model in 1:1 scale, change upholstery finishes in real time, and tap to order.',
    outcome: 'Successfully deployed frictionless web-based AR product visualization that bridges online shopping with real-world spatial preview.',
    deliverables: ['WebAR Frictionless Browser Viewer', 'iOS & Android Native App SDK', 'PBR 3D Asset Pipeline', 'E-Commerce Analytics Integration'],
    technologies: ['WebXR API', 'Three.js', 'ARKit', 'ARCore', 'USDZ / GLTF Optimization'],
    demoType: '3d-ar',
    ctaText: 'View Case Study',
    isFeaturedHomepage: true,
    isFeaturedPortfolio: true,
    developmentProcess: [
      'E-commerce catalog audit & 3D asset optimization',
      'PBR material shader engineering for realistic wood/fabric textures',
      'WebXR surface plane tracking & environmental lighting estimation',
      'Cross-browser optimization for instant mobile loading'
    ]
  },
  {
    id: 'vr-welding-training-experience',
    slug: 'vr-welding-training',
    route: '/case-studies/vr-welding-training',
    title: 'VR Welding Training Experience',
    category: 'Manufacturing / Industrial Training',
    industry: 'Manufacturing',
    technology: 'Virtual Reality',
    tags: ['VR', 'Manufacturing', 'Training', 'Simulation'],
    description: 'An immersive VR welding training experience designed to provide a controlled environment for practicing and experiencing industrial welding procedures.',
    longDescription: 'Recreates industrial metal fabrication bays and welding stations in virtual reality. Trainees practice MIG, TIG, and stick welding with sub-millimeter torch tracking, real-time arc physics, and instant weld seam quality evaluation.',
    imageUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80'
    ],
    challenge: 'Industrial welding onboarding consumes expensive metals, gases, and torch wires while exposing novice trainees to heat, sparks, and eye hazards during initial skill development.',
    solution: 'Innovify XR built a physics-based VR welding simulator with custom torch controllers and real-time telemetry analyzing angle, speed, distance, and weld puddle consistency.',
    experience: 'Trainees don VR headsets and hold calibrated physical torch proxies. They adjust gas flow and voltage settings, execute bead passes along virtual steel joints, and review instant graphical feedback on seam penetration.',
    outcome: 'Delivered a zero-hazard industrial training tool that enables repetitive motor-skill acquisition prior to actual shop floor operation.',
    deliverables: ['Industrial Torch Controller Integration', 'Physics-based Arc & Plasma Shader', 'Multi-user Classroom Sync', 'Performance Scorecard Engine'],
    technologies: ['Unreal Engine 5', 'Custom Shader Graph', 'Sub-mm Controller Tracking', 'C++', 'Industrial Telemetry API'],
    demoType: '3d-vr',
    ctaText: 'View Case Study',
    isFeaturedHomepage: true,
    isFeaturedPortfolio: true,
    developmentProcess: [
      'Industrial metallurgy & welding parameter mapping',
      'Real-time spark, arc plasma & bead formation shader modeling',
      'Hardware integration with physical torch handles',
      'Classroom telemetry scoring engine & instructor controls'
    ]
  },
  {
    id: 'ar-restaurant-menu',
    slug: 'ar-restaurant-menu',
    route: '/case-studies/ar-restaurant-menu',
    title: 'AR Restaurants Menu',
    category: 'Hospitality / Digital Menu',
    industry: 'Hospitality',
    technology: 'AR / WebAR',
    tags: ['AR', 'WebAR', 'Hospitality', 'Restaurant', '3D'],
    description: 'An interactive AR restaurant menu concept designed to allow customers to explore food items digitally and visualize dishes using immersive technology.',
    longDescription: 'Transforms paper menus into interactive WebAR dining experiences. Guests scan a QR code at their dining table to view photorealistic 3D models of signature dishes, inspect ingredient layers, and preview exact portion sizes before ordering.',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80'
    ],
    challenge: 'Diners often struggle to visualize unfamiliar dishes, portion sizes, or presentation from text-only menus, leading to hesitance or ordering dissatisfaction.',
    solution: 'Innovify XR developed a lightweight WebAR interactive menu platform that renders photogrammetry-scanned 3D dishes right above the dining table in real time.',
    experience: 'Guests open their mobile browser via tabletop QR code, select menu items, view steam and lighting effects on 3D culinary models, toggle dietary allergen filters, and place orders with elevated confidence.',
    outcome: 'Created an engaging culinary visualization concept demonstrating how spatial technology enhances hospitality guest interaction.',
    deliverables: ['Tabletop QR Code Trigger System', 'Browser-based WebGL 3D Viewer', '3D Food Photogrammetry Pipeline', 'Allergen & Nutritional Overlay'],
    technologies: ['WebXR', 'Three.js', 'Photogrammetry 3D Scanning', 'WebGL', 'HTML5 / React'],
    demoType: '3d-ar',
    ctaText: 'View Case Study',
    isFeaturedHomepage: false,
    isFeaturedPortfolio: false,
    isConcept: true,
    disclaimer: 'Concept / Demonstration Project created for hospitality spatial innovation showcase.'
  },
  {
    id: 'vr-ambulance-emergency-training',
    slug: 'vr-ambulance-emergency-training',
    route: '/case-studies/vr-ambulance-emergency-training',
    title: 'VR Ambulance Emergency Training Experience',
    category: 'Healthcare / Emergency Training',
    industry: 'Healthcare',
    technology: 'Virtual Reality',
    tags: ['VR', 'Healthcare', 'Emergency Training', 'Simulation'],
    description: 'An immersive VR emergency training experience designed around ambulance and emergency-response scenarios.',
    longDescription: 'Simulates high-pressure paramedic environments inside a moving ambulance compartment. First responders practice triage, airway management, cardiac resuscitation, and emergency equipment operation under simulated motion and auditory stress.',
    imageUrl: 'https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1587745416684-47953f16f02f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80'
    ],
    challenge: 'Paramedic trainees require realistic exposure to cramped, turbulent ambulance interiors and intense emergency protocol execution without taking real emergency vehicles out of service.',
    solution: 'Innovify XR designed a 1:1 scale VR ambulance compartment simulation with spatialized siren audio, patient vitals monitoring, and multi-step trauma protocols.',
    experience: 'Trainees strap into VR headsets, navigate cramped spatial quarters, interact with defibrillators and oxygen systems, and make rapid clinical decisions while receiving automated protocol guidance.',
    outcome: 'Engineered an immersive training demonstration module for paramedic education and emergency response preparation.',
    deliverables: ['1:1 Ambulance Interior 3D Environment', 'Interactive Medical Equipment System', 'Spatialized Siren Audio Engine', 'Trauma Assessment Analytics'],
    technologies: ['Unity 3D', 'Meta XR SDK', 'Spatial Audio API', 'C#', 'Medical Protocol Engine'],
    demoType: '3d-vr',
    ctaText: 'View Case Study',
    isFeaturedHomepage: false,
    isFeaturedPortfolio: false,
    isConcept: true,
    disclaimer: 'Concept / Demonstration Project. Note: Innovify XR software simulations are designed for educational and skill-enhancement purposes. They do not claim medical certification, clinical effectiveness, regulatory approval, or real-world safety outcomes.'
  },
  {
    id: 'vr-fire-extinguisher-training',
    slug: 'vr-fire-extinguisher-training',
    route: '/case-studies/vr-fire-extinguisher-training',
    title: 'VR Fire Extinguisher Training Experience',
    category: 'Safety / Corporate Training',
    industry: 'Safety',
    technology: 'Virtual Reality',
    tags: ['VR', 'Safety', 'Training', 'Simulation'],
    description: 'An immersive VR training experience designed to simulate fire extinguisher training scenarios in a controlled virtual environment.',
    longDescription: 'Simulates office, warehouse, and factory fire emergencies. Trainees practice the PASS method (Pull, Aim, Squeeze, Sweep) with physical extinguisher proxies, virtual smoke physics, and realistic fire propagation.',
    imageUrl: 'https://images.unsplash.com/photo-1599422314077-f4dfdaa4cd09?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1599422314077-f4dfdaa4cd09?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80'
    ],
    challenge: 'Traditional fire safety training often relies on passive video lectures or expensive outdoor live-burn events that cannot be conducted frequently inside workplace environments.',
    solution: 'Innovify XR developed a VR safety module that renders dynamic thermal flame behavior, chemical agent discharge physics, and automated compliance scoring.',
    experience: 'Employees put on headsets in an office room, identify fire hazards (electrical, chemical, paper), select the correct extinguisher type (Class A, B, C, D), and extinguish virtual blazes using realistic sweep mechanics.',
    outcome: 'Built a safe, clean, and repeatable workplace safety training simulation environment.',
    deliverables: ['Fire Physics & Agent Particle Shader', 'PASS Technique Scoring System', 'Multi-Hazard Scenario Generator', 'Enterprise Compliance Portal'],
    technologies: ['Unreal Engine 5', 'Niagara Particle System', 'C++', 'VR Motion Controller Tracking'],
    demoType: '3d-vr',
    ctaText: 'View Case Study',
    isFeaturedHomepage: false,
    isFeaturedPortfolio: false,
    isConcept: true,
    disclaimer: 'Concept / Demonstration Project. Note: Designed for workplace safety education and general awareness. Does not claim actual reductions in workplace incidents unless verified in formal corporate audits.'
  },
  {
    id: 'vr-it-room-training',
    slug: 'vr-it-room-training',
    route: '/case-studies/vr-it-room-training',
    title: 'VR IT Room Training Experience',
    category: 'IT / Corporate Training',
    industry: 'IT & Corporate',
    technology: 'Virtual Reality',
    tags: ['VR', 'IT', 'Training', 'Simulation'],
    description: 'An immersive VR environment designed to simulate an IT room and provide an interactive training environment for technical or operational learning.',
    longDescription: 'Recreates high-density server rack infrastructure and data center networking environments. Technical trainees learn server rack installation, cable management color coding, hardware troubleshooting, and thermal airflow optimization.',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80'
    ],
    challenge: 'Training data center technicians on live production server racks risks costly accidental downtime, electrostatic discharge damage, and physical security breach risks.',
    solution: 'Innovify XR built a 1:1 digital twin of an enterprise server room with interactive rack units, hot-swappable power supplies, and network diagnostic HUDs.',
    experience: 'Technicians enter the virtual server room, inspect LED status indicators, trace fiber optic cabling paths, replace faulty blade servers, and practice emergency power-down sequences safely.',
    outcome: 'Delivered a risk-free technical onboarding and server architecture simulation tool for corporate IT teams.',
    deliverables: ['Server Room Digital Twin Environment', 'Interactive Cable & Blade Hardware Models', 'Diagnostic HUD Overlay', 'Technician Evaluation Scoring'],
    technologies: ['Unity 3D', 'C#', 'OpenXR API', 'Spatial UI Components'],
    demoType: '3d-vr',
    ctaText: 'View Case Study',
    isFeaturedHomepage: false,
    isFeaturedPortfolio: false,
    isConcept: true,
    disclaimer: 'Concept / Demonstration Project designed for corporate IT training showcase.'
  },
  {
    id: 'ar-ecommerce-try-on',
    slug: 'ar-ecommerce-try-on',
    route: '/case-studies/ar-ecommerce-try-on',
    title: 'AR Try-on for E-commerce',
    category: 'Retail / Virtual Try-on',
    industry: 'Retail',
    technology: 'Augmented Reality',
    tags: ['AR', 'E-commerce', 'Virtual Try-on', 'Retail'],
    description: 'An AR-based try-on experience designed to allow customers to interact with products digitally before making a purchase.',
    longDescription: 'Delivers real-time facial and body tracking for virtual try-on of eyewear, jewelry, watches, and fashion accessories across iOS, Android, and Web browsers.',
    imageUrl: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80'
    ],
    challenge: 'Online fashion and accessory retailers experience high cart hesitation and return rates due to customer uncertainty regarding sizing, frame fit, and style compatibility.',
    solution: 'Innovify XR built a high-precision facial mesh anchor AR try-on viewer that renders realistic metallic reflections, lens transparency, and automatic pupil distance alignment.',
    experience: 'Shoppers select eyewear or accessories on a retailer website, activate their front camera, immediately see photorealistic accessories locked to their face in motion, switch color finishes, and complete checkout.',
    outcome: 'Developed an interactive virtual try-on experience bridging digital retail with personalized spatial try-on.',
    deliverables: ['Facial Mesh Anchor SDK', 'Web-based Camera VTO Engine', 'PBR Metallic & Lens Shaders', 'E-Commerce Widget Integration'],
    technologies: ['WebAR', 'MediaPipe Face Mesh', 'Three.js', 'WebGL', 'GLTF Shader Optimization'],
    demoType: '3d-ar',
    ctaText: 'View Case Study',
    isFeaturedHomepage: false,
    isFeaturedPortfolio: false,
    isConcept: true,
    disclaimer: 'Demonstration Project. Note: Designed to demonstrate spatial retail capabilities. Does not claim specific numerical conversion increases unless measured in client-specific analytics deployments.'
  }
];

export const FEATURED_CASE_STUDIES: CaseStudy[] = ALL_CASE_STUDIES.slice(0, 3);


export const INDUSTRIES: IndustryItem[] = [
  {
    id: 'healthcare',
    title: 'Healthcare',
    description: 'Realistic surgical training, medical device visualization, patient therapy, and anatomical simulations.',
    imageUrl: 'https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80',
    iconName: 'HeartPulse',
    keyApplications: ['Surgical VR Training', '3D Anatomy Visualization', 'Patient Rehabilitation'],
    route: '/industries/healthcare'
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    description: 'Industrial safety training, AR machine maintenance overlay, assembly line simulation, and equipment operations.',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    iconName: 'Factory',
    keyApplications: ['AR Maintenance Overlays', 'Hazard Simulation Training', 'Digital Twin Visualizations'],
    route: '/industries/manufacturing'
  },
  {
    id: 'retail',
    title: 'Retail & E-commerce',
    description: 'WebAR product placement, virtual try-on experiences, interactive 3D catalogs, and immersive retail showrooms.',
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    iconName: 'ShoppingBag',
    keyApplications: ['Virtual Try-On (VTO)', 'WebAR Product Showcase', 'Interactive 3D Configurator'],
    route: '/industries/retail'
  },
  {
    id: 'education',
    title: 'Education',
    description: 'Interactive STEM learning, spatial virtual labs, historical reconstructions, and accessible immersive classrooms.',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    iconName: 'GraduationCap',
    keyApplications: ['Interactive Virtual Science Labs', 'Historical Spatial Reconstructions', 'STEM AR Textbooks'],
    route: '/industries/education'
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    description: 'Unbuilt architectural walkthroughs, spatial virtual open houses, interior staging, and interactive master plans.',
    imageUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    iconName: 'Building2',
    keyApplications: ['3D Architectural VR Walkthroughs', 'WebAR Property Staging', 'Masterplan Spatial Visualizer'],
    route: '/industries/real-estate'
  },
  {
    id: 'tourism',
    title: 'Tourism & Hospitality',
    description: 'Virtual destination previews, cultural heritage AR overlays, interactive hotel spatial tours, and landmark guides.',
    imageUrl: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
    iconName: 'Compass',
    keyApplications: ['AR Cultural Heritage Guides', 'Virtual Resort Previews', 'Spatial Interactive Maps'],
    route: '/industries/tourism'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Understand objectives, users, requirements, and business challenges.',
    details: ['Stakeholder alignment workshops', 'Target user personas & technical readiness', 'Key Performance Indicator (KPI) definition']
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Define technology, product direction, scope, and implementation approach.',
    details: ['Platform evaluation (VR vs WebAR vs Native)', '3D spatial UX architecture', 'Technical roadmap & milestone scoping']
  },
  {
    number: '03',
    title: 'UX/UI & Prototyping',
    description: 'Design the experience and validate the concept.',
    details: ['Spatial ergonomic UI wireframing', 'Interactive 3D graybox prototyping', 'User testing & ergonomic validation']
  },
  {
    number: '04',
    title: 'Development',
    description: 'Build the product using the appropriate technologies.',
    details: ['Agile sprint development in Unity / Unreal / WebGL', 'AI pipeline & API integration', 'High-performance 3D asset optimization']
  },
  {
    number: '05',
    title: 'Testing & Optimization',
    description: 'Test usability, performance, compatibility, and reliability.',
    details: ['Multi-device hardware testing', 'Frame-rate & latency optimization (90 FPS VR)', 'Cross-browser & accessibility verification']
  },
  {
    number: '06',
    title: 'Launch & Support',
    description: 'Deploy the solution and provide ongoing improvements when required.',
    details: ['Enterprise app store / web deployment', 'Team onboarding & documentation', 'Ongoing maintenance & analytics monitoring']
  }
];

export const WHY_INNOVIFY_DIFFERENTIATORS = [
  {
    title: 'Business-First Approach',
    description: 'Technology designed around measurable business objectives, cost reduction, and clear return on investment.',
    iconName: 'Target'
  },
  {
    title: 'Immersive Expertise',
    description: 'Specialized deep-tech experience across AR, VR, WebAR, WebXR, and 3D spatial graphics pipelines.',
    iconName: 'Layers'
  },
  {
    title: 'AI-Ready Solutions',
    description: 'Seamlessly integrate artificial intelligence, computer vision, and machine learning into spatial workflows.',
    iconName: 'Brain'
  },
  {
    title: 'Cross-Platform Development',
    description: 'Build robust experiences engineered for Web browsers, iOS, Android, Meta Quest, HTC, and Apple Vision Pro.',
    iconName: 'SmartphoneNfc'
  },
  {
    title: 'Scalable Architecture',
    description: 'Enterprise-grade codebases designed for future capability upgrades, cloud telemetry, and backend API integration.',
    iconName: 'Server'
  },
  {
    title: 'End-to-End Delivery',
    description: 'Complete lifecycle management from initial discovery and spatial design through hardware optimization and deployment.',
    iconName: 'CheckCircle2'
  }
];

export const INSIGHTS_ARTICLES: ArticleItem[] = [
  {
    id: 'ar-vr-webar-ai-changing-digital-experiences',
    slug: 'ar-vr-webar-ai-changing-digital-experiences',
    title: 'How AR, VR, WebAR and AI Are Changing Digital Experiences',
    category: 'Spatial & AI Convergence',
    topic: 'AI + XR',
    contentType: 'Emerging Technology',
    excerpt: 'An executive analysis of how spatial computing frameworks and generative AI models are converging to transform enterprise training, digital commerce, and interactive customer engagement.',
    readTime: '8 min read',
    date: 'August 2026',
    updatedAt: 'August 2026',
    author: {
      name: 'Innovify XR Editorial Team',
      title: 'Spatial Computing & AI Research Practice',
    },
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    tags: ['AR', 'VR', 'WebAR', 'AI', 'Spatial Computing', 'Enterprise Tech'],
    isFeatured: true,
    seoTitle: 'How AR, VR, WebAR and AI Are Changing Digital Experiences | Innovify XR Insights',
    seoDescription: 'Explore how spatial computing, WebXR, and artificial intelligence converge to redefine digital experiences across retail, healthcare, manufacturing, and enterprise workflows.',
    contentSections: [
      {
        id: 'sec-1',
        heading: 'The Paradigm Shift to Spatial Intelligence',
        content: 'For decades, human interaction with digital information has been confined to flat 2D glass screens—laptops, tablets, and smartphones. Today, the rapid convergence of Augmented Reality (AR), Virtual Reality (VR), Web-based AR (WebAR), and Artificial Intelligence (AI) is ushering in a fundamental shift: Spatial Intelligence.',
        keyTakeaways: [
          'Spatial computing turns physical environments into dynamic user interfaces.',
          'AI models act as contextual reasoning engines, predicting user intent within 3D environments.',
          'Frictionless WebAR eliminates app installation hurdles, expanding enterprise reach.'
        ]
      },
      {
        id: 'sec-2',
        heading: 'Comparing the Core Immersive Vectors',
        content: 'Evaluating spatial technology choices requires understanding how AR, VR, WebAR, and AI complement one another across different business workflows and user contexts.',
        tableData: {
          headers: ['Technology', 'Primary Vector', 'Hardware Needed', 'Key Business Metric'],
          rows: [
            ['Augmented Reality (AR)', 'Overlay digital info on real world', 'Mobile / Smart Glasses', 'Product engagement & error reduction'],
            ['Virtual Reality (VR)', '100% Immersive 3D environments', 'VR Headsets (Meta Quest, Pico)', 'Skill retention & zero-hazard safety'],
            ['WebAR', 'Browser-based 3D spatial preview', 'Standard Smartphone Web Browsers', 'E-commerce conversion & zero drop-off'],
            ['AI + XR Convergence', 'Intelligent contextual interaction', 'Cloud AI + Spatial Hardware', 'Automated guidance & adaptive feedback']
          ]
        }
      },
      {
        id: 'sec-3',
        heading: 'How Generative & Vision AI Amplify Spatial Computing',
        content: 'Without artificial intelligence, spatial environments are static 3D models. When computer vision and large language models are integrated into AR/VR engines, virtual avatars gain conversational intelligence, visual inspection algorithms automatically detect assembly errors, and training modules dynamically adjust difficulty based on learner biometrics.',
        quote: 'The true power of next-generation digital experiences lies not just in rendering 3D pixels, but in giving those pixels spatial awareness and cognitive intelligence.'
      },
      {
        id: 'sec-4',
        heading: 'Strategic Recommendations for Enterprise Leaders',
        content: 'Organizations looking to capture commercial and operational advantages from spatial AI should start with high-friction, high-cost operational bottlenecks—such as complex technical onboarding or e-commerce return rates—before scaling to full-spectrum spatial environments.',
        keyTakeaways: [
          'Identify pilot workflows with measurable ROI indicators (e.g. reduced training cycles).',
          'Leverage WebAR for customer-facing channels where frictionless access is paramount.',
          'Implement enterprise VR for high-consequence procedural training.'
        ]
      }
    ],
    relatedServices: [
      { name: 'AI + XR Solutions', route: '/solutions/ai-xr-solutions' },
      { name: 'WebAR Development', route: '/solutions/webar-development' },
      { name: 'VR Development', route: '/solutions/vr-development' }
    ],
    relatedIndustries: [
      { name: 'Healthcare', route: '/industries/healthcare' },
      { name: 'Manufacturing', route: '/industries/manufacturing' }
    ],
    relatedCaseStudyId: 'vr-orthopaedic-trauma-training'
  },
  {
    id: 'what-is-webar',
    slug: 'what-is-webar',
    title: 'What Is WebAR? A Complete Guide to Browser-Based Augmented Reality',
    category: 'WebXR & Web Architecture',
    topic: 'WebAR',
    contentType: 'Technology Guide',
    excerpt: 'Learn how Web-based Augmented Reality works, why it eliminates app store friction, and how top brands leverage WebXR for instant 3D product previews.',
    readTime: '6 min read',
    date: 'July 2026',
    author: {
      name: 'Innovify XR Editorial Team',
      title: 'WebXR Architecture Group',
    },
    imageUrl: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
    tags: ['WebAR', 'WebXR', 'Three.js', 'E-commerce', 'AR'],
    isFeatured: false,
    seoTitle: 'What Is WebAR? Browser Augmented Reality Guide | Innovify XR',
    seoDescription: 'An in-depth guide explaining WebAR (Web Augmented Reality), how it works in iOS Safari & Android Chrome, WebXR standards, and retail applications.',
    contentSections: [
      {
        id: 'webar-1',
        heading: 'Understanding Web-Based Augmented Reality',
        content: 'WebAR stands for Web-based Augmented Reality—technology that delivers interactive 3D augmented reality experiences directly inside standard web browsers like Safari or Chrome, without requiring users to download or install a dedicated mobile app from an app store.',
        keyTakeaways: [
          'Zero app store download required—accessed via link, QR code, or web click.',
          'Instant loading speeds using lightweight WebGL and WebXR technology.',
          'Broad compatibility across modern iOS and Android smartphones.'
        ]
      },
      {
        id: 'webar-2',
        heading: 'Native App AR vs. WebAR: Architectural Comparison',
        content: 'While native AR applications built with iOS ARKit or Android ARCore can access deep hardware GPU pipelines, WebAR has evolved dramatically to deliver photorealistic PBR lighting, surface plane tracking, and instant web checkout.',
        tableData: {
          headers: ['Feature', 'Native Mobile App AR', 'WebAR (WebXR)'],
          rows: [
            ['User Friction', 'High (Requires download & storage)', 'Zero (Instant browser launch)'],
            ['Conversion Rate', 'Limited by app installs', '3x to 5x higher reach'],
            ['Update Velocity', 'App store review cycles', 'Instant web deployment'],
            ['Best Use Case', 'Complex multi-session tools', 'E-commerce, packaging, events']
          ]
        }
      },
      {
        id: 'webar-3',
        heading: 'Core Use Cases for WebAR in E-Commerce & Retail',
        content: 'WebAR allows shoppers to click a "View in Room" button on a product detail page, scan their room with their phone camera, and see a photorealistic 3D item rendered in 1:1 scale with true dimensions.',
        quote: 'WebAR removes the single largest barrier to AR adoption: forced app downloads. When users can preview products instantly, conversion rates surge.'
      }
    ],
    relatedServices: [
      { name: 'WebAR Development', route: '/solutions/webar-development' },
      { name: 'AR Development', route: '/solutions/ar-development' }
    ],
    relatedIndustries: [
      { name: 'Retail & E-commerce', route: '/industries/retail' },
      { name: 'Tourism & Hospitality', route: '/industries/tourism' }
    ],
    relatedCaseStudyId: 'ar-furniture-items-showcase'
  },
  {
    id: 'ar-vs-vr-business-guide',
    slug: 'ar-vs-vr-business-guide',
    title: 'AR vs VR: An Executive Guide to Choosing the Right Immersive Technology',
    category: 'Spatial Strategy',
    topic: 'Business & Strategy',
    contentType: 'Business & Strategy',
    excerpt: 'An executive decision framework comparing Augmented Reality and Virtual Reality across enterprise training, field maintenance, product sales, and investment costs.',
    readTime: '7 min read',
    date: 'July 2026',
    author: {
      name: 'Innovify XR Editorial Team',
      title: 'Strategy & Technology Practice',
    },
    imageUrl: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1200&q=80',
    tags: ['AR', 'VR', 'Executive Guide', 'Digital Transformation', 'ROI'],
    isFeatured: false,
    seoTitle: 'AR vs VR Business Guide: How to Choose | Innovify XR',
    seoDescription: 'Executive decision framework comparing Augmented Reality and Virtual Reality for enterprise applications, training, sales, and technology investment.',
    contentSections: [
      {
        id: 'ar-vr-1',
        heading: 'Defining AR vs. VR for Business Decision-Makers',
        content: 'Augmented Reality (AR) overlays digital information, 3D models, or instructions onto the user\'s real-world environment. Virtual Reality (VR) replaces the physical environment entirely with a fully enclosed, simulated 3D world.',
        keyTakeaways: [
          'Choose AR when workers need to interact with physical machinery or real-world spaces.',
          'Choose VR when simulating dangerous, costly, or geographically inaccessible physical locations.'
        ]
      },
      {
        id: 'ar-vr-2',
        heading: 'Decision Framework: When to Choose AR vs. VR',
        content: 'Use this framework to evaluate your primary business driver against spatial requirements.',
        tableData: {
          headers: ['Business Goal', 'Recommended Tech', 'Primary Reason'],
          rows: [
            ['On-site Equipment Maintenance', 'Augmented Reality (AR)', 'Hands-free visual overlay on real hardware'],
            ['Surgical or Industrial Training', 'Virtual Reality (VR)', 'Zero-risk simulation of high-stakes procedures'],
            ['Consumer E-Commerce Shopping', 'WebAR / AR', 'Shopper previews products in their personal home'],
            ['Remote Design & Architecture Review', 'VR or Collaborative AR', 'Multi-user 3D model walkthroughs']
          ]
        }
      }
    ],
    relatedServices: [
      { name: 'AR Development', route: '/solutions/ar-development' },
      { name: 'VR Development', route: '/solutions/vr-development' }
    ],
    relatedIndustries: [
      { name: 'Manufacturing', route: '/industries/manufacturing' },
      { name: 'Healthcare', route: '/industries/healthcare' }
    ],
    relatedCaseStudyId: 'vr-welding-training-experience'
  },
  {
    id: 'ai-changing-immersive-training',
    slug: 'ai-changing-immersive-training',
    title: 'How AI Is Changing Immersive Training & Simulation',
    category: 'AI + XR',
    topic: 'AI + XR',
    contentType: 'Technology Guide',
    excerpt: 'Explore how integrating artificial intelligence into VR simulations enables adaptive difficulty engines, real-time biometric feedback, and conversational AI instructors.',
    readTime: '7 min read',
    date: 'June 2026',
    author: {
      name: 'Innovify XR Editorial Team',
      title: 'AI + XR R&D Group',
    },
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    tags: ['AI', 'VR', 'Training', 'Healthcare', 'Simulation'],
    isFeatured: false,
    seoTitle: 'How AI Is Transforming VR Training & Simulation | Innovify XR',
    seoDescription: 'Discover how AI algorithms, computer vision, and adaptive feedback engines elevate virtual reality training in healthcare and manufacturing.',
    contentSections: [
      {
        id: 'ai-tr-1',
        heading: 'The Evolution of Static Simulation to Adaptive Intelligence',
        content: 'Early VR training experiences operated on linear, pre-programmed decision trees. By embedding machine learning models into spatial environments, training simulations now react dynamically to trainee behavior in real time.',
        keyTakeaways: [
          'Adaptive algorithms adjust procedure difficulty based on error frequency.',
          'AI-driven virtual actors provide realistic conversational interaction during medical or emergency scenarios.',
          'Automated telemetry scores spatial precision and movement economy.'
        ]
      }
    ],
    relatedServices: [
      { name: 'AI + XR Solutions', route: '/solutions/ai-xr-solutions' },
      { name: 'VR Development', route: '/solutions/vr-development' }
    ],
    relatedIndustries: [
      { name: 'Healthcare', route: '/industries/healthcare' },
      { name: 'Safety', route: '/industries/manufacturing' }
    ],
    relatedCaseStudyId: 'vr-orthopaedic-trauma-training'
  },
  {
    id: 'vr-training-manufacturing-roi',
    slug: 'vr-training-manufacturing-roi',
    title: 'VR Training in Industrial Manufacturing: Safety, Cost & ROI',
    category: 'Industrial Manufacturing',
    topic: 'VR',
    contentType: 'Industry Insight',
    excerpt: 'How leading manufacturers utilize virtual reality welding and assembly simulations to reduce consumable material waste by 75% and eliminate shop-floor hazards.',
    readTime: '6 min read',
    date: 'June 2026',
    author: {
      name: 'Innovify XR Editorial Team',
      title: 'Industrial Solutions Group',
    },
    imageUrl: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1200&q=80',
    tags: ['VR', 'Manufacturing', 'Welding', 'Training', 'ROI'],
    isFeatured: false,
    seoTitle: 'VR Training in Manufacturing: Cost, Safety & ROI | Innovify XR',
    seoDescription: 'Case study insights on how VR welding and assembly training cuts material waste, speeds up onboarding, and ensures zero shop floor hazards.',
    contentSections: [
      {
        id: 'mfg-1',
        heading: 'The Cost of Traditional Industrial Onboarding',
        content: 'Industrial fabrication onboarding consumes substantial steel stock, gas consumables, and expert instructor hours while exposing new workers to thermal and electrical hazards.',
        keyTakeaways: [
          'Up to 75% reduction in raw material consumable costs during initial muscle-memory training.',
          'Zero workplace injury hazards during early skill acquisition stages.',
          'Sub-millimeter torch and tool tracking provides quantitative feedback.'
        ]
      }
    ],
    relatedServices: [
      { name: 'VR Development', route: '/solutions/vr-development' }
    ],
    relatedIndustries: [
      { name: 'Manufacturing', route: '/industries/manufacturing' }
    ],
    relatedCaseStudyId: 'vr-welding-training-experience'
  },
  {
    id: 'webar-product-visualization-ecommerce',
    slug: 'webar-product-visualization-ecommerce',
    title: 'WebAR Product Visualization for E-commerce: Boosting Conversion',
    category: 'Retail & E-commerce',
    topic: 'WebAR',
    contentType: 'Industry Insight',
    excerpt: 'How 3D WebAR product visualization bridges the gap between digital shopping and physical reality, cutting returns and boosting add-to-cart confidence.',
    readTime: '5 min read',
    date: 'May 2026',
    author: {
      name: 'Innovify XR Editorial Team',
      title: 'E-commerce Spatial Practice',
    },
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    tags: ['WebAR', 'E-commerce', 'Retail', 'Product Visualization'],
    isFeatured: false,
    seoTitle: 'WebAR Product Visualization for E-commerce | Innovify XR',
    seoDescription: 'Discover how 3D WebAR product previews increase e-commerce conversion, reduce returns, and enhance customer purchasing confidence.',
    contentSections: [
      {
        id: 'ecom-1',
        heading: 'Bridging the Spatial Gap in Digital Shopping',
        content: 'When shoppers cannot evaluate the true scale, color texture, or dimension of a product in their physical space, cart hesitation increases. WebAR enables instant 1:1 room preview directly from product pages.',
        keyTakeaways: [
          'Increases add-to-cart rates by providing true-to-scale 3D preview.',
          'Reduces product returns caused by sizing mismatches.',
          'Requires zero app downloads, integrating directly into Shopify, Custom React, or Magento.'
        ]
      }
    ],
    relatedServices: [
      { name: 'WebAR Development', route: '/solutions/webar-development' }
    ],
    relatedIndustries: [
      { name: 'Retail & E-commerce', route: '/industries/retail' }
    ],
    relatedCaseStudyId: 'ar-furniture-items-showcase'
  },
  {
    id: 'ar-vr-development-cost-guide',
    slug: 'ar-vr-development-cost-guide',
    title: 'How Much Does AR and VR Development Cost in 2026?',
    category: 'Business & Budgeting',
    topic: 'Business & Strategy',
    contentType: 'Business & Strategy',
    excerpt: 'A transparent breakdown of cost drivers for AR, VR, and WebAR applications, including 3D asset creation, spatial tracking, and backend API integration.',
    readTime: '9 min read',
    date: 'May 2026',
    author: {
      name: 'Innovify XR Editorial Team',
      title: 'Technical Cost Architecture',
    },
    imageUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
    tags: ['AR Cost', 'VR Cost', 'Development Budget', 'Executive Planning'],
    isFeatured: false,
    seoTitle: 'AR & VR Development Cost Guide 2026 | Innovify XR',
    seoDescription: 'An executive breakdown of cost factors, development phases, 3D modeling budgets, and timelines for custom enterprise AR, VR, and WebAR projects.',
    contentSections: [
      {
        id: 'cost-1',
        heading: 'Understanding the Cost Structure of Spatial Projects',
        content: 'Spatial application budgets are determined by three core pillars: 3D Asset Complexity & Modeling, Interaction Logic & Physics Engine, and Hardware Target Platforms.',
        tableData: {
          headers: ['Project Complexity', 'Typical Timeline', 'Primary Scope'],
          rows: [
            ['WebAR Product Viewer / Prototype', '3 - 6 Weeks', 'Lightweight 3D model, plane tracking, WebXR viewer'],
            ['Interactive AR Mobile Application', '6 - 10 Weeks', 'iOS/Android native tracking, backend API, custom UX'],
            ['Enterprise VR Training Suite', '8 - 14 Weeks', 'Multi-step procedural simulation, haptic physics, analytics dashboard'],
            ['Custom AI + XR Spatial Ecosystem', '12 - 20 Weeks', 'AI models, multi-user cloud state, computer vision pipelines']
          ]
        }
      }
    ],
    relatedServices: [
      { name: 'AR Development', route: '/solutions/ar-development' },
      { name: 'VR Development', route: '/solutions/vr-development' },
      { name: 'WebAR Development', route: '/solutions/webar-development' }
    ],
    relatedIndustries: [
      { name: 'Healthcare', route: '/industries/healthcare' },
      { name: 'Manufacturing', route: '/industries/manufacturing' }
    ]
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'AR',
    question: 'What topics does the Innovify XR Insights section cover?',
    answer: 'Our Insights section provides executive analysis, technical breakdowns, and industry guides covering Augmented Reality (AR), Virtual Reality (VR), Web-based AR (WebAR), Artificial Intelligence (AI), and AI + XR spatial computing convergence.'
  },
  {
    id: 'faq-2',
    category: 'AR',
    question: 'Where can I learn about AR development?',
    answer: 'You can explore our AR technology guides and case studies covering 3D surface tracking, markerless spatial overlays, product visualization, and native iOS ARKit and Android ARCore development.'
  },
  {
    id: 'faq-3',
    category: 'VR',
    question: 'Where can I learn about VR development?',
    answer: 'Explore our VR insights focused on hands-on surgical training, industrial welding physics, hazardous emergency response simulations, and multi-user spatial collaboration.'
  },
  {
    id: 'faq-4',
    category: 'WebAR',
    question: 'What can I learn about WebAR?',
    answer: 'Our WebAR guides explain browser-based augmented reality architecture, zero-friction QR activation, WebGL 3D optimization, and e-commerce conversion strategies without app store downloads.'
  },
  {
    id: 'faq-5',
    category: 'AI',
    question: 'Does Innovify XR publish AI and XR insights?',
    answer: 'Yes. We publish research on the convergence of AI and spatial computing, including computer vision, generative avatars, adaptive training feedback engines, and automated visual inspection.'
  },
  {
    id: 'faq-6',
    category: 'Enterprise',
    question: 'Are the Insights articles written for business decision-makers?',
    answer: 'Yes. All content is engineered for CEOs, CTOs, product managers, innovation directors, and operational leaders seeking practical, actionable technology perspective with real ROI metrics.'
  },
  {
    id: 'faq-7',
    category: 'Industries',
    question: 'Where can I find industry-specific immersive technology insights?',
    answer: 'We cover specialized spatial applications for Healthcare, Manufacturing, Retail & E-commerce, Education, Real Estate, and Tourism & Hospitality.'
  },
  {
    id: 'faq-8',
    category: 'Process',
    question: 'Can I contact Innovify XR about a project discussed in an article?',
    answer: 'Yes! You can connect with our senior technical architects anytime by clicking "Start a Project" or scheduling an architectural discovery consultation.'
  }
];

