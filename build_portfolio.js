const fs = require('fs');
const path = require('path');

// Read profile base64
let base64Image = '';
try {
  base64Image = fs.readFileSync(path.join(__dirname, 'profile_base64.txt'), 'utf8').trim();
} catch (e) {
  console.log('No base64 file found, using relative profile.jpg');
}

const imageSrc = base64Image ? `data:image/jpeg;base64,${base64Image}` : 'profile.jpg';

const htmlContent = `<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Suryadev K L | Full-Stack & App Developer Portfolio</title>
  <meta name="description" content="Portfolio of Suryadev K L - Full-Stack Developer, Mobile App Creator & UI/UX Craftsman. Building high-performance web applications and fluid mobile experiences.">
  <meta name="keywords" content="Suryadev, Suryadev K L, Full Stack Developer, Flutter Developer, Web Developer, Portfolio, Duox, UI/UX, React, Next.js">
  <meta name="author" content="Suryadev K L">
  <meta name="theme-color" content="#0c0b10">

  <!-- Open Graph / Social Media -->
  <meta property="og:title" content="Suryadev K L | Full-Stack Developer & App Architect">
  <meta property="og:description" content="Crafting immersive, high-performance web applications and fluid mobile experiences. Explore projects, skills, and interactive showcases.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://github.com/SDev-P/Duox">

  <!-- Favicon (SVG Autumn Leaf) -->
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23F59E0B'%3E%3Cpath d='M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z'/%3E%3C/svg%3E">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;1,400&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">

  <style>
    /* ==========================================================================
       CSS RESET & VARIABLES
       ========================================================================== */
    :root {
      /* Autumn Theme Palette */
      --amber: #F59E0B;
      --amber-light: #FBBF24;
      --amber-glow: rgba(245, 158, 11, 0.45);
      --orange: #EA580C;
      --orange-glow: rgba(234, 88, 12, 0.4);
      --crimson: #BE123C;
      --crimson-glow: rgba(190, 18, 60, 0.35);
      --gold: #D97706;
      --russet: #92400E;

      /* Dark Backgrounds */
      --bg-dark: #0A090E;
      --bg-surface: #121018;
      --bg-surface-elevated: #181522;

      /* Text Colors */
      --text-main: #FDF6EC;
      --text-muted: #B8B5C4;
      --text-dim: #7C788A;

      /* Glassmorphism */
      --glass-bg: rgba(255, 255, 255, 0.04);
      --glass-bg-hover: rgba(255, 255, 255, 0.08);
      --glass-border: rgba(255, 255, 255, 0.09);
      --glass-border-hover: rgba(245, 158, 11, 0.4);
      --glass-blur: blur(16px);
      --glass-shadow: 0 12px 40px 0 rgba(0, 0, 0, 0.45);
      --glass-glow-card: 0 0 25px rgba(245, 158, 11, 0.12);

      /* Gradients */
      --gradient-autumn: linear-gradient(135deg, #F59E0B 0%, #EA580C 50%, #BE123C 100%);
      --gradient-warm: linear-gradient(135deg, #FBBF24 0%, #F59E0B 50%, #EA580C 100%);
      --gradient-text: linear-gradient(120deg, #FFFFFF 20%, #FDE68A 60%, #F59E0B 100%);
      --gradient-glow: radial-gradient(circle at center, rgba(245, 158, 11, 0.15) 0%, transparent 70%);

      /* Typography */
      --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      --font-display: 'Space Grotesk', sans-serif;
      --font-serif: 'Playfair Display', Georgia, serif;

      /* Animation Speeds */
      --transition-smooth: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
      --transition-spring: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
      background-color: var(--bg-dark);
      color: var(--text-main);
      font-family: var(--font-sans);
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    body {
      background-color: transparent;
      min-height: 100vh;
      line-height: 1.6;
      position: relative;
      overflow-x: hidden;
    }

    /* Custom Smooth Scrollbar */
    ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: #0d0c12;
    }
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(to bottom, #EA580C, #F59E0B, #BE123C);
      border-radius: 9999px;
      border: 2px solid #0d0c12;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(to bottom, #FBBF24, #EA580C);
    }

    /* Selection Color */
    ::selection {
      background: rgba(245, 158, 11, 0.3);
      color: #FFF;
    }

    /* ==========================================================================
       BACKGROUND & CANVASES
       ========================================================================== */
    #ambient-background {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      background: 
        radial-gradient(circle at 18% 22%, rgba(245, 158, 11, 0.16) 0%, rgba(234, 88, 12, 0.06) 35%, transparent 60%),
        radial-gradient(circle at 82% 60%, rgba(190, 18, 60, 0.14) 0%, rgba(159, 18, 57, 0.05) 30%, transparent 55%),
        radial-gradient(circle at 50% 92%, rgba(217, 119, 6, 0.12) 0%, transparent 50%),
        radial-gradient(circle at 75% 15%, rgba(251, 191, 36, 0.08) 0%, transparent 40%),
        linear-gradient(180deg, #09080E 0%, #100D18 45%, #08070C 100%);
      pointer-events: none;
    }

    #autumn-canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      pointer-events: none;
    }

    /* Subtle grid overlay for tech vibe */
    .bg-grid-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-size: 40px 40px;
      background-image: 
        linear-gradient(to right, rgba(255, 255, 255, 0.015) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255, 255, 255, 0.015) 1px, transparent 1px);
      z-index: 0;
      pointer-events: none;
      mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
      -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 80%);
    }

    main, header, footer, section, .hero-section, .about-section, .skills-section, .projects-section, .showcase-section, .experience-section, .contact-section {
      position: relative;
      z-index: 2;
    }



    /* ==========================================================================
       CUSTOM CURSOR
       ========================================================================== */
    .cursor-dot, .cursor-ring {
      pointer-events: none;
      position: fixed;
      top: 0;
      left: 0;
      border-radius: 50%;
      z-index: 9999;
      transform: translate(-50%, -50%);
      transition: opacity 0.3s ease, transform 0.1s ease;
      display: none;
    }
    @media (hover: hover) and (pointer: fine) {
      .cursor-dot, .cursor-ring { display: block; }
    }
    .cursor-dot {
      width: 8px;
      height: 8px;
      background-color: var(--amber-light);
      box-shadow: 0 0 10px var(--amber);
    }
    .cursor-ring {
      width: 36px;
      height: 36px;
      border: 1.5px solid rgba(245, 158, 11, 0.5);
      background: rgba(245, 158, 11, 0.05);
      transition: width 0.25s ease, height 0.25s ease, border-color 0.25s ease, transform 0.08s ease-out;
    }
    .cursor-ring.active {
      width: 54px;
      height: 54px;
      border-color: var(--orange);
      background: rgba(234, 88, 12, 0.12);
      box-shadow: 0 0 20px rgba(234, 88, 12, 0.4);
    }

    /* ==========================================================================
       REUSABLE UTILITIES & GLASSMORPHISM
       ========================================================================== */
    .container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1.5rem;
    }

    .glass-panel {
      background: var(--glass-bg);
      backdrop-filter: var(--glass-blur);
      -webkit-backdrop-filter: var(--glass-blur);
      border: 1px solid var(--glass-border);
      box-shadow: var(--glass-shadow);
      border-radius: 20px;
      position: relative;
      overflow: hidden;
      transition: var(--transition-smooth);
    }

    .glass-panel:hover {
      border-color: rgba(245, 158, 11, 0.3);
      box-shadow: var(--glass-shadow), 0 0 25px rgba(245, 158, 11, 0.1);
    }

    /* 3D tilt card glow sweep */
    .glow-sheen::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 60%);
      opacity: 0;
      transition: opacity 0.4s ease;
      pointer-events: none;
      transform: translate(var(--mouse-x, 0px), var(--mouse-y, 0px));
    }
    .glow-sheen:hover::after {
      opacity: 1;
    }

    .text-gradient {
      background: var(--gradient-warm);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .text-gradient-shimmer {
      background: linear-gradient(
        90deg, 
        #FFFFFF 0%, 
        #FDE68A 25%, 
        #F59E0B 50%, 
        #EA580C 75%, 
        #FFFFFF 100%
      );
      background-size: 200% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      animation: shimmerText 6s linear infinite;
    }
    @keyframes shimmerText {
      to { background-position: 200% center; }
    }

    .badge-pill {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.35rem 0.9rem;
      border-radius: 9999px;
      background: rgba(245, 158, 11, 0.1);
      border: 1px solid rgba(245, 158, 11, 0.25);
      color: var(--amber-light);
      font-size: 0.85rem;
      font-weight: 500;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      backdrop-filter: blur(8px);
    }

    .section-title-wrap {
      text-align: center;
      margin-bottom: 3.5rem;
    }
    .section-title {
      font-family: var(--font-display);
      font-size: clamp(2rem, 4vw, 2.75rem);
      font-weight: 700;
      letter-spacing: -0.02em;
      margin-top: 0.75rem;
      color: var(--text-main);
    }
    .section-desc {
      color: var(--text-muted);
      max-width: 600px;
      margin: 0.75rem auto 0 auto;
      font-size: 1.05rem;
    }

    /* Buttons */
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.6rem;
      padding: 0.85rem 1.8rem;
      border-radius: 14px;
      font-weight: 600;
      font-size: 0.95rem;
      text-decoration: none;
      cursor: pointer;
      border: 1px solid transparent;
      transition: var(--transition-smooth);
      position: relative;
      overflow: hidden;
      z-index: 1;
    }

    .btn-primary {
      background: var(--gradient-warm);
      color: #0A090E;
      box-shadow: 0 4px 20px rgba(245, 158, 11, 0.35);
    }
    .btn-primary:hover {
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 8px 30px rgba(245, 158, 11, 0.55);
      color: #000;
    }

    .btn-glass {
      background: rgba(255, 255, 255, 0.06);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: var(--text-main);
    }
    .btn-glass:hover {
      background: rgba(255, 255, 255, 0.12);
      border-color: rgba(245, 158, 11, 0.5);
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4), 0 0 15px rgba(245, 158, 11, 0.2);
    }

    .btn-sm {
      padding: 0.55rem 1.1rem;
      font-size: 0.85rem;
      border-radius: 10px;
    }

    /* Scroll Reveal Animations */
    .reveal {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
      will-change: opacity, transform;
    }
    .reveal.active {
      opacity: 1;
      transform: translateY(0);
    }
    .delay-1 { transition-delay: 0.1s; }
    .delay-2 { transition-delay: 0.2s; }
    .delay-3 { transition-delay: 0.3s; }
    .delay-4 { transition-delay: 0.4s; }
    .delay-5 { transition-delay: 0.5s; }

    /* ==========================================================================
       NAVBAR
       ========================================================================== */
    .navbar-wrap {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      padding: 1.25rem 0;
      transition: padding 0.3s ease, background-color 0.3s ease, backdrop-filter 0.3s ease;
    }
    .navbar-wrap.scrolled {
      padding: 0.75rem 0;
      background: rgba(10, 9, 14, 0.75);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    }

    .nav-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .nav-brand {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      text-decoration: none;
      color: var(--text-main);
      font-family: var(--font-display);
      font-size: 1.35rem;
      font-weight: 700;
      letter-spacing: -0.01em;
    }
    .brand-leaf-icon {
      width: 26px;
      height: 26px;
      fill: var(--amber);
      filter: drop-shadow(0 0 8px var(--amber-glow));
      transition: transform 0.4s ease;
    }
    .nav-brand:hover .brand-leaf-icon {
      transform: rotate(25deg) scale(1.15);
    }
    .brand-dot {
      color: var(--amber);
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 2rem;
      list-style: none;
    }
    .nav-link {
      color: var(--text-muted);
      text-decoration: none;
      font-size: 0.95rem;
      font-weight: 500;
      transition: color 0.25s ease;
      position: relative;
      padding: 0.3rem 0;
    }
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--gradient-warm);
      border-radius: 9999px;
      transition: width 0.3s ease;
    }
    .nav-link:hover, .nav-link.active {
      color: var(--text-main);
    }
    .nav-link:hover::after, .nav-link.active::after {
      width: 100%;
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .hamburger-btn {
      display: none;
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      padding: 0.5rem;
      color: var(--text-main);
      cursor: pointer;
      font-size: 1.25rem;
    }

    /* Mobile Menu Drawer */
    .mobile-menu {
      position: fixed;
      top: 0;
      right: -100%;
      width: 280px;
      height: 100vh;
      background: rgba(15, 13, 21, 0.95);
      backdrop-filter: blur(25px);
      -webkit-backdrop-filter: blur(25px);
      border-left: 1px solid rgba(255, 255, 255, 0.1);
      padding: 5rem 2rem 2rem 2rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      z-index: 999;
      transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .mobile-menu.open {
      right: 0;
    }
    .mobile-menu-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(4px);
      z-index: 998;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
    }
    .mobile-menu-overlay.open {
      opacity: 1;
      pointer-events: auto;
    }
    .mobile-menu-close {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      background: none;
      border: none;
      color: var(--text-muted);
      font-size: 1.75rem;
      cursor: pointer;
    }

    /* ==========================================================================
       HERO SECTION
       ========================================================================== */
    .hero-section {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 7.5rem 0 4rem 0;
      position: relative;
    }

    .hero-content-grid {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      position: relative;
      z-index: 2;
    }

    /* Avatar Orbit System */
    .avatar-wrapper {
      position: relative;
      width: 210px;
      height: 210px;
      margin-bottom: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .avatar-orbit-ring {
      position: absolute;
      inset: -16px;
      border-radius: 50%;
      border: 2px dashed rgba(245, 158, 11, 0.35);
      animation: rotateOrbit 25s linear infinite;
      pointer-events: none;
    }
    .avatar-orbit-ring::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--amber);
      box-shadow: 0 0 12px var(--amber-glow);
      transform: translate(-50%, -50%);
    }

    .avatar-glow-ring {
      position: absolute;
      inset: -6px;
      border-radius: 50%;
      background: var(--gradient-warm);
      padding: 3px;
      animation: pulseGlow 4s ease-in-out infinite alternate;
      box-shadow: 0 0 35px rgba(245, 158, 11, 0.4), 0 0 60px rgba(234, 88, 12, 0.2);
    }
    @keyframes rotateOrbit {
      to { transform: rotate(360deg); }
    }
    @keyframes pulseGlow {
      0% {
        box-shadow: 0 0 25px rgba(245, 158, 11, 0.3), 0 0 45px rgba(234, 88, 12, 0.2);
        filter: brightness(1);
      }
      100% {
        box-shadow: 0 0 45px rgba(245, 158, 11, 0.6), 0 0 75px rgba(234, 88, 12, 0.4);
        filter: brightness(1.2);
      }
    }

    .avatar-frame {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      overflow: hidden;
      background: var(--bg-surface);
      position: relative;
      z-index: 1;
      border: 3px solid rgba(255, 255, 255, 0.15);
    }
    .avatar-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
      transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .avatar-wrapper:hover .avatar-image {
      transform: scale(1.08);
    }

    .avatar-status-badge {
      position: absolute;
      bottom: 6px;
      right: 6px;
      z-index: 2;
      background: rgba(18, 16, 24, 0.85);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 9999px;
      padding: 0.3rem 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.78rem;
      font-weight: 600;
      color: #10B981;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
    }
    .status-dot-pulse {
      width: 8px;
      height: 8px;
      background-color: #10B981;
      border-radius: 50%;
      box-shadow: 0 0 8px #10B981;
      animation: pulseGreen 2s infinite;
    }
    @keyframes pulseGreen {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(0.8); }
    }

    /* Floating Badges in Hero */
    .floating-pill {
      position: absolute;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 9999px;
      padding: 0.5rem 1rem;
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--text-main);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
      display: flex;
      align-items: center;
      gap: 0.5rem;
      pointer-events: none;
      animation: floatBadge 6s ease-in-out infinite alternate;
    }
    .floating-pill-left {
      top: 20%;
      left: 8%;
      animation-delay: 0s;
    }
    .floating-pill-right {
      top: 28%;
      right: 8%;
      animation-delay: 2s;
    }
    @keyframes floatBadge {
      0% { transform: translateY(0px) rotate(0deg); }
      100% { transform: translateY(-16px) rotate(2deg); }
    }

    /* Hero Text Details */
    .hero-greeting {
      font-size: 1.1rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--amber);
      margin-bottom: 0.5rem;
    }

    .hero-name {
      font-family: var(--font-display);
      font-size: clamp(2.5rem, 6vw, 4.5rem);
      font-weight: 800;
      letter-spacing: -0.03em;
      line-height: 1.1;
      margin-bottom: 1rem;
    }

    .hero-roles-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      min-height: 2.2rem;
      margin-bottom: 1.25rem;
      font-size: clamp(1.15rem, 2.5vw, 1.5rem);
      font-weight: 500;
      color: var(--text-muted);
    }
    .typewriter-text {
      color: var(--amber-light);
      font-weight: 600;
      position: relative;
    }
    .typewriter-cursor {
      display: inline-block;
      width: 2px;
      height: 1.2em;
      background-color: var(--amber);
      margin-left: 2px;
      animation: blinkCursor 0.8s infinite;
      vertical-align: middle;
    }
    @keyframes blinkCursor {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }

    .hero-tagline {
      max-width: 650px;
      font-size: 1.15rem;
      color: var(--text-muted);
      margin-bottom: 2.5rem;
      line-height: 1.6;
    }

    .hero-cta-group {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 1.25rem;
      margin-bottom: 3.5rem;
    }

    /* Scroll Down Indicator */
    .scroll-indicator {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      color: var(--text-dim);
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      text-decoration: none;
      transition: color 0.3s ease;
    }
    .scroll-indicator:hover {
      color: var(--amber);
    }
    .mouse-icon {
      width: 22px;
      height: 36px;
      border: 2px solid rgba(255, 255, 255, 0.25);
      border-radius: 9999px;
      position: relative;
    }
    .mouse-wheel {
      width: 4px;
      height: 8px;
      background-color: var(--amber);
      border-radius: 9999px;
      position: absolute;
      top: 6px;
      left: 50%;
      transform: translateX(-50%);
      animation: mouseScroll 1.8s ease-in-out infinite;
    }
    @keyframes mouseScroll {
      0% { opacity: 1; transform: translate(-50%, 0); }
      100% { opacity: 0; transform: translate(-50%, 14px); }
    }

    /* ==========================================================================
       ABOUT SECTION
       ========================================================================== */
    .section-padding {
      padding: 6rem 0;
      position: relative;
    }

    .about-grid {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: 2.5rem;
      align-items: stretch;
    }

    .about-bio-card {
      padding: 2.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .about-lead {
      font-size: 1.25rem;
      font-weight: 500;
      color: var(--text-main);
      margin-bottom: 1.25rem;
      line-height: 1.5;
    }

    .about-paragraph {
      color: var(--text-muted);
      margin-bottom: 1.75rem;
      font-size: 1rem;
      line-height: 1.7;
    }

    .quick-facts-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.25rem;
      margin-top: 1.5rem;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
    }
    .fact-item {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }
    .fact-label {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--text-dim);
    }
    .fact-val {
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--text-main);
    }

    /* Stats Grid */
    .stats-card-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
    }
    .stat-box {
      padding: 2rem 1.5rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }
    .stat-icon {
      width: 32px;
      height: 32px;
      fill: var(--amber);
      margin-bottom: 0.25rem;
    }
    .stat-number {
      font-family: var(--font-display);
      font-size: 2.75rem;
      font-weight: 700;
      color: var(--text-main);
      line-height: 1;
    }
    .stat-title {
      font-size: 0.9rem;
      color: var(--text-muted);
      font-weight: 500;
    }

    /* ==========================================================================
       SKILLS SECTION
       ========================================================================== */
    .skills-category-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
    }

    .skill-category-card {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .category-header {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }
    .category-icon {
      width: 24px;
      height: 24px;
      fill: var(--amber);
    }
    .category-title {
      font-family: var(--font-display);
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--text-main);
    }

    .skills-list {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .skill-item {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }
    .skill-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.9rem;
      font-weight: 500;
    }
    .skill-name {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--text-main);
    }
    .skill-percent {
      color: var(--amber-light);
      font-family: var(--font-display);
      font-weight: 600;
    }

    .progress-bar-track {
      width: 100%;
      height: 7px;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 9999px;
      overflow: hidden;
      position: relative;
    }
    .progress-bar-fill {
      height: 100%;
      width: 0%;
      background: var(--gradient-autumn);
      border-radius: 9999px;
      transition: width 1.4s cubic-bezier(0.16, 1, 0.3, 1);
      box-shadow: 0 0 10px var(--amber-glow);
    }

    /* Icon chips */
    .tech-chips-cloud {
      display: flex;
      flex-wrap: wrap;
      gap: 0.6rem;
      margin-top: 0.5rem;
    }
    .tech-chip {
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      padding: 0.35rem 0.75rem;
      font-size: 0.8rem;
      color: var(--text-muted);
      display: flex;
      align-items: center;
      gap: 0.4rem;
      transition: var(--transition-smooth);
    }
    .tech-chip:hover {
      background: rgba(245, 158, 11, 0.12);
      border-color: rgba(245, 158, 11, 0.35);
      color: var(--text-main);
      transform: translateY(-2px);
    }

    /* ==========================================================================
       PROJECTS SECTION
       ========================================================================== */
    .filter-tabs {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-bottom: 3rem;
    }
    .filter-btn {
      padding: 0.6rem 1.4rem;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 9999px;
      color: var(--text-muted);
      font-size: 0.9rem;
      font-weight: 500;
      cursor: pointer;
      backdrop-filter: blur(8px);
      transition: var(--transition-smooth);
    }
    .filter-btn:hover {
      background: rgba(255, 255, 255, 0.08);
      color: var(--text-main);
    }
    .filter-btn.active {
      background: var(--gradient-warm);
      color: #0A090E;
      font-weight: 600;
      border-color: transparent;
      box-shadow: 0 4px 15px rgba(245, 158, 11, 0.35);
    }

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 2rem;
    }

    .project-card {
      display: flex;
      flex-direction: column;
      height: 100%;
      transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
      will-change: transform;
      perspective: 1000px;
    }
    .project-card.hidden {
      display: none;
    }

    .project-visual {
      height: 200px;
      position: relative;
      overflow: hidden;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      background: linear-gradient(135deg, #1f1b2c 0%, #151221 100%);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .project-visual-pattern {
      position: absolute;
      inset: 0;
      opacity: 0.3;
      background-size: 24px 24px;
      background-image: radial-gradient(circle, rgba(245, 158, 11, 0.25) 1px, transparent 1px);
    }
    .project-logo-badge {
      width: 72px;
      height: 72px;
      border-radius: 18px;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(10px);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-display);
      font-size: 1.75rem;
      font-weight: 700;
      color: var(--amber-light);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
      transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      z-index: 1;
    }
    .project-card:hover .project-logo-badge {
      transform: scale(1.12) rotate(-5deg);
    }

    .project-tag-pill {
      position: absolute;
      top: 1rem;
      right: 1rem;
      z-index: 2;
      background: rgba(18, 16, 24, 0.8);
      backdrop-filter: blur(8px);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 9999px;
      padding: 0.25rem 0.75rem;
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--amber);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .project-body {
      padding: 1.75rem;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      justify-content: space-between;
    }

    .project-header-info {
      margin-bottom: 1.25rem;
    }
    .project-title {
      font-family: var(--font-display);
      font-size: 1.35rem;
      font-weight: 700;
      color: var(--text-main);
      margin-bottom: 0.5rem;
    }
    .project-desc {
      color: var(--text-muted);
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 1.25rem;
    }

    .project-tech-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
      margin-bottom: 1.75rem;
    }
    .tech-pill {
      font-size: 0.75rem;
      padding: 0.2rem 0.6rem;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.08);
      color: var(--text-muted);
    }

    .project-actions {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      padding-top: 1.25rem;
    }

    /* ==========================================================================
       SHOWCASE CAROUSEL
       ========================================================================== */
    .showcase-slider-wrap {
      position: relative;
      margin-top: 1rem;
    }

    .showcase-track-container {
      overflow: hidden;
      border-radius: 20px;
      cursor: grab;
    }
    .showcase-track-container:active {
      cursor: grabbing;
    }

    .showcase-track {
      display: flex;
      gap: 1.75rem;
      transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .showcase-card {
      flex: 0 0 calc(50% - 0.875rem);
      min-width: 320px;
      padding: 2.25rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 380px;
    }
    @media (max-width: 768px) {
      .showcase-card {
        flex: 0 0 100%;
        height: auto;
        min-height: 350px;
      }
    }

    .showcase-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      color: var(--amber);
      font-size: 0.8rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      margin-bottom: 0.75rem;
    }

    .showcase-title {
      font-family: var(--font-display);
      font-size: 1.6rem;
      font-weight: 700;
      color: var(--text-main);
      margin-bottom: 0.75rem;
    }

    .showcase-desc {
      color: var(--text-muted);
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 1.5rem;
    }

    .showcase-features {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }
    .showcase-feature-item {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      color: var(--text-main);
      font-size: 0.9rem;
    }
    .feature-check-icon {
      width: 16px;
      height: 16px;
      fill: var(--amber);
    }

    .carousel-controls {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 2rem;
    }
    .carousel-dots {
      display: flex;
      gap: 0.5rem;
    }
    .carousel-dot {
      width: 12px;
      height: 6px;
      border-radius: 9999px;
      background: rgba(255, 255, 255, 0.2);
      border: none;
      cursor: pointer;
      transition: var(--transition-smooth);
    }
    .carousel-dot.active {
      width: 32px;
      background: var(--amber);
      box-shadow: 0 0 10px var(--amber-glow);
    }

    .carousel-nav-btns {
      display: flex;
      gap: 0.75rem;
    }
    .nav-arrow-btn {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.06);
      border: 1px solid rgba(255, 255, 255, 0.12);
      color: var(--text-main);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      backdrop-filter: blur(8px);
      transition: var(--transition-smooth);
    }
    .nav-arrow-btn:hover {
      background: rgba(245, 158, 11, 0.15);
      border-color: rgba(245, 158, 11, 0.4);
      color: var(--amber-light);
      transform: scale(1.05);
    }

    /* ==========================================================================
       TIMELINE SECTION
       ========================================================================== */
    .timeline-wrap {
      position: relative;
      max-width: 860px;
      margin: 0 auto;
      padding: 2rem 0;
    }
    .timeline-wrap::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      width: 2px;
      background: linear-gradient(180deg, transparent, #F59E0B 15%, #EA580C 85%, transparent);
      transform: translateX(-50%);
    }
    @media (max-width: 768px) {
      .timeline-wrap::before {
        left: 20px;
      }
    }

    .timeline-item {
      position: relative;
      margin-bottom: 3.5rem;
      width: 50%;
    }
    .timeline-item:nth-child(odd) {
      left: 0;
      padding-right: 3rem;
      text-align: right;
    }
    .timeline-item:nth-child(even) {
      left: 50%;
      padding-left: 3rem;
      text-align: left;
    }
    @media (max-width: 768px) {
      .timeline-item {
        width: 100% !important;
        left: 0 !important;
        padding-left: 50px !important;
        padding-right: 0 !important;
        text-align: left !important;
      }
    }

    .timeline-node {
      position: absolute;
      top: 1.5rem;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--bg-surface);
      border: 3px solid var(--amber);
      box-shadow: 0 0 15px var(--amber-glow);
      z-index: 2;
    }
    .timeline-item:nth-child(odd) .timeline-node {
      right: -10px;
    }
    .timeline-item:nth-child(even) .timeline-node {
      left: -10px;
    }
    @media (max-width: 768px) {
      .timeline-item .timeline-node {
        left: 10px !important;
        right: auto !important;
      }
    }

    .timeline-card {
      padding: 1.75rem;
      display: inline-block;
      text-align: left;
      width: 100%;
    }
    .timeline-date {
      display: inline-block;
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--amber);
      background: rgba(245, 158, 11, 0.1);
      border: 1px solid rgba(245, 158, 11, 0.25);
      border-radius: 9999px;
      padding: 0.25rem 0.75rem;
      margin-bottom: 0.75rem;
    }
    .timeline-role {
      font-family: var(--font-display);
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--text-main);
      margin-bottom: 0.25rem;
    }
    .timeline-company {
      font-size: 0.95rem;
      font-weight: 500;
      color: var(--orange);
      margin-bottom: 0.75rem;
    }
    .timeline-desc {
      color: var(--text-muted);
      font-size: 0.9rem;
      line-height: 1.6;
    }

    /* ==========================================================================
       CONTACT SECTION
       ========================================================================== */
    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1.2fr;
      gap: 2.5rem;
      align-items: stretch;
    }
    @media (max-width: 900px) {
      .contact-grid {
        grid-template-columns: 1fr;
      }
    }

    .contact-info-card {
      padding: 2.5rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 2rem;
    }

    .contact-channels-list {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .contact-channel-item {
      display: flex;
      align-items: center;
      gap: 1.25rem;
      padding: 1rem 1.25rem;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 14px;
      text-decoration: none;
      color: var(--text-main);
      transition: var(--transition-smooth);
    }
    .contact-channel-item:hover {
      background: rgba(245, 158, 11, 0.1);
      border-color: rgba(245, 158, 11, 0.35);
      transform: translateX(6px);
    }

    .channel-icon-wrap {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      background: rgba(245, 158, 11, 0.15);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .channel-svg {
      width: 22px;
      height: 22px;
      fill: var(--amber-light);
    }

    .channel-details {
      display: flex;
      flex-direction: column;
    }
    .channel-label {
      font-size: 0.8rem;
      color: var(--text-dim);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .channel-val {
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--text-main);
    }

    /* Contact Form */
    .contact-form-card {
      padding: 2.5rem;
    }

    .form-title {
      font-family: var(--font-display);
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-main);
      margin-bottom: 1.5rem;
    }

    .form-group {
      margin-bottom: 1.25rem;
    }
    .form-label {
      display: block;
      font-size: 0.85rem;
      font-weight: 500;
      color: var(--text-muted);
      margin-bottom: 0.5rem;
    }

    .form-input, .form-textarea {
      width: 100%;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.12);
      border-radius: 12px;
      padding: 0.85rem 1.1rem;
      color: var(--text-main);
      font-family: var(--font-sans);
      font-size: 0.95rem;
      outline: none;
      transition: var(--transition-smooth);
    }
    .form-input:focus, .form-textarea:focus {
      border-color: var(--amber);
      background: rgba(255, 255, 255, 0.07);
      box-shadow: 0 0 15px var(--amber-glow);
    }

    .form-textarea {
      resize: vertical;
      min-height: 130px;
    }

    /* Toast Notification */
    .toast-notice {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      background: rgba(18, 16, 24, 0.95);
      border: 1px solid var(--amber);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6), 0 0 20px var(--amber-glow);
      backdrop-filter: blur(16px);
      padding: 1rem 1.5rem;
      border-radius: 14px;
      color: var(--text-main);
      display: flex;
      align-items: center;
      gap: 0.75rem;
      z-index: 9999;
      transform: translateY(100px);
      opacity: 0;
      transition: var(--transition-spring);
    }
    .toast-notice.show {
      transform: translateY(0);
      opacity: 1;
    }

    /* ==========================================================================
       FOOTER & BACK TO TOP
       ========================================================================== */
    .site-footer {
      border-top: 1px solid rgba(255, 255, 255, 0.08);
      background: rgba(8, 7, 11, 0.9);
      padding: 3rem 0;
      position: relative;
    }

    .footer-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1.5rem;
    }

    .footer-copy {
      color: var(--text-dim);
      font-size: 0.9rem;
    }

    .back-to-top-btn {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: var(--gradient-warm);
      border: none;
      color: #0A090E;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(245, 158, 11, 0.4);
      z-index: 900;
      opacity: 0;
      pointer-events: none;
      transform: translateY(20px);
      transition: var(--transition-smooth);
    }
    .back-to-top-btn.visible {
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0);
    }
    .back-to-top-btn:hover {
      transform: translateY(-4px) scale(1.1);
      box-shadow: 0 8px 30px rgba(245, 158, 11, 0.6);
    }
    .leaf-top-icon {
      width: 24px;
      height: 24px;
      fill: #0A090E;
    }

    /* ==========================================================================
       RESPONSIVENESS
       ========================================================================== */
    @media (max-width: 1024px) {
      .about-grid { grid-template-columns: 1fr; }
      .floating-pill { display: none; }
    }

    @media (max-width: 768px) {
      .nav-links, .nav-actions .btn { display: none; }
      .hamburger-btn { display: block; }
      .hero-section { padding-top: 6rem; }
      .avatar-wrapper { width: 170px; height: 170px; }
      .stats-card-grid { grid-template-columns: 1fr 1fr; }
      .projects-grid { grid-template-columns: 1fr; }
      .quick-facts-grid { grid-template-columns: 1fr; }
      .footer-content { flex-direction: column; text-align: center; }
    }
  </style>
</head>
<body>

  <!-- Background Canvas & Ambience -->
  <div id="ambient-background"></div>
  <canvas id="autumn-canvas"></canvas>
  <div class="bg-grid-overlay"></div>

  <!-- Custom Cursor -->
  <div class="cursor-dot" id="cursor-dot"></div>
  <div class="cursor-ring" id="cursor-ring"></div>

  <!-- Toast Notification -->
  <div class="toast-notice" id="toast-notice">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="#10B981"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
    <span id="toast-msg">Message sent successfully!</span>
  </div>

  <!-- ==========================================================================
       NAVBAR
       ========================================================================== -->
  <header class="navbar-wrap" id="navbar">
    <div class="container nav-container">
      <a href="#hero" class="nav-brand" aria-label="Home">
        <svg class="brand-leaf-icon" viewBox="0 0 24 24">
          <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
        </svg>
        <span>Suryadev<span class="brand-dot">.</span></span>
      </a>

      <nav>
        <ul class="nav-links">
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#skills" class="nav-link">Skills</a></li>
          <li><a href="#projects" class="nav-link">Projects</a></li>
          <li><a href="#showcase" class="nav-link">Showcase</a></li>
          <li><a href="#experience" class="nav-link">Experience</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
      </nav>

      <div class="nav-actions">
        <a href="#contact" class="btn btn-primary btn-sm magnetic-btn">
          <span>Let's Talk</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <button class="hamburger-btn" id="hamburger-open" aria-label="Open Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>
    </div>
  </header>

  <!-- Mobile Drawer -->
  <div class="mobile-menu-overlay" id="mobile-overlay"></div>
  <aside class="mobile-menu" id="mobile-menu">
    <button class="mobile-menu-close" id="hamburger-close" aria-label="Close Menu">&times;</button>
    <a href="#hero" class="nav-brand" style="margin-bottom: 1rem;">
      <svg class="brand-leaf-icon" viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/></svg>
      <span>Suryadev<span class="brand-dot">.</span></span>
    </a>
    <a href="#about" class="nav-link mobile-link">About Me</a>
    <a href="#skills" class="nav-link mobile-link">Skills & Tech</a>
    <a href="#projects" class="nav-link mobile-link">Featured Projects</a>
    <a href="#showcase" class="nav-link mobile-link">Apps & Websites</a>
    <a href="#experience" class="nav-link mobile-link">Journey & Experience</a>
    <a href="#contact" class="nav-link mobile-link">Contact Me</a>
    <div style="margin-top: auto; padding-top: 2rem;">
      <a href="#contact" class="btn btn-primary mobile-link" style="width: 100%;">Get in Touch</a>
    </div>
  </aside>

  <!-- ==========================================================================
       HERO SECTION
       ========================================================================== */
  -->
  <section class="hero-section" id="hero">
    <!-- Floating Badges -->
    <div class="floating-pill floating-pill-left">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#F59E0B"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
      <span>Full-Stack & Flutter App Architect</span>
    </div>
    <div class="floating-pill floating-pill-right">
      <svg class="brand-leaf-icon" style="width:16px;height:16px;" viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/></svg>
      <span>Clean Architecture & Fluid UI</span>
    </div>

    <div class="container">
      <div class="hero-content-grid">
        
        <!-- Avatar with glowing orbiting rings -->
        <div class="avatar-wrapper reveal">
          <div class="avatar-orbit-ring"></div>
          <div class="avatar-glow-ring"></div>
          <div class="avatar-frame">
            <img src="${imageSrc}" alt="Suryadev K L" class="avatar-image" id="profile-img" onerror="this.src='profile.jpg'">
          </div>
          <div class="avatar-status-badge">
            <span class="status-dot-pulse"></span>
            <span>Available for hire</span>
          </div>
        </div>

        <!-- Greeting & Name -->
        <div class="hero-greeting reveal delay-1">Hello, I'm</div>
        <h1 class="hero-name reveal delay-2">
          <span class="text-gradient-shimmer" id="user-name">Suryadev K L</span>
        </h1>

        <!-- Cycling Typewriter Roles -->
        <div class="hero-roles-wrap reveal delay-3">
          <span>I build </span>
          <span class="typewriter-text" id="typewriter"></span>
          <span class="typewriter-cursor"></span>
        </div>

        <!-- Tagline -->
        <p class="hero-tagline reveal delay-4" id="user-tagline">
          Crafting immersive, high-performance web applications and fluid mobile experiences with autumn-warm aesthetics and rock-solid architecture.
        </p>

        <!-- CTA Buttons -->
        <div class="hero-cta-group reveal delay-5">
          <a href="#projects" class="btn btn-primary magnetic-btn">
            <span>View Projects</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="#contact" class="btn btn-glass magnetic-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            <span>Contact Me</span>
          </a>
        </div>

        <!-- Scroll Indicator -->
        <a href="#about" class="scroll-indicator reveal delay-5">
          <div class="mouse-icon">
            <div class="mouse-wheel"></div>
          </div>
          <span>Scroll Down</span>
        </a>

      </div>
    </div>
  </section>

  <!-- ==========================================================================
       ABOUT ME SECTION
       ========================================================================== -->
  <section class="section-padding" id="about">
    <div class="container">
      <div class="section-title-wrap reveal">
        <span class="badge-pill">Overview</span>
        <h2 class="section-title">About Me</h2>
        <p class="section-desc">Passionate developer blending engineering rigor with artistic visual design.</p>
      </div>

      <div class="about-grid">
        <!-- Bio Card -->
        <div class="glass-panel about-bio-card glow-sheen reveal delay-1">
          <div>
            <h3 class="about-lead text-gradient">
              Engineering sleek, reactive interfaces and scalable backend foundations.
            </h3>
            <p class="about-paragraph" id="user-bio">
              I am a Full-Stack and Mobile Application Developer with an obsession for pixel-perfection, fluid 60 FPS interactions, and elegant design systems. With a deep foundation in modern web frameworks and cross-platform native ecosystems, I transform intricate product ideas into intuitive, high-velocity digital experiences.
            </p>
            <p class="about-paragraph">
              Whether building offline-first apps like <strong>Duox</strong>, architecting complex APIs, or composing rich interactive visual canvases, I focus on clean code, testability, and an unforgettable user experience.
            </p>
          </div>

          <div class="quick-facts-grid">
            <div class="fact-item">
              <span class="fact-label">Location</span>
              <span class="fact-val" id="user-location">India</span>
            </div>
            <div class="fact-item">
              <span class="fact-label">Availability</span>
              <span class="fact-val" style="color: #10B981;">Open for Opportunities</span>
            </div>
            <div class="fact-item">
              <span class="fact-label">Specialization</span>
              <span class="fact-val">Full-Stack & Mobile Apps</span>
            </div>
            <div class="fact-item">
              <span class="fact-label">Core Philosophy</span>
              <span class="fact-val">Speed, Craft & Scalability</span>
            </div>
          </div>
        </div>

        <!-- Animated Stats Counter Grid -->
        <div class="stats-card-grid">
          <div class="glass-panel stat-box glow-sheen reveal delay-1">
            <svg class="stat-icon" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <div class="stat-number count-up" data-target="15">0</div>
            <div class="stat-title">Projects Delivered</div>
          </div>

          <div class="glass-panel stat-box glow-sheen reveal delay-2">
            <svg class="stat-icon" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            <div class="stat-number count-up" data-target="99" data-suffix="%">0</div>
            <div class="stat-title">Satisfaction Rate</div>
          </div>

          <div class="glass-panel stat-box glow-sheen reveal delay-3">
            <svg class="stat-icon" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
            <div class="stat-number count-up" data-target="3" data-suffix="+">0</div>
            <div class="stat-title">Years Experience</div>
          </div>

          <div class="glass-panel stat-box glow-sheen reveal delay-4">
            <svg class="stat-icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
            <div class="stat-number count-up" data-target="100" data-suffix="%">0</div>
            <div class="stat-title">Open Source Love</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ==========================================================================
       SKILLS SECTION
       ========================================================================== -->
  <section class="section-padding" id="skills">
    <div class="container">
      <div class="section-title-wrap reveal">
        <span class="badge-pill">Capabilities</span>
        <h2 class="section-title">Technical Expertise</h2>
        <p class="section-desc">A refined toolkit crafted across diverse full-stack and mobile applications.</p>
      </div>

      <div class="skills-category-grid">
        
        <!-- Category 1: Languages -->
        <div class="glass-panel skill-category-card glow-sheen reveal delay-1">
          <div class="category-header">
            <svg class="category-icon" viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
            <h3 class="category-title">Languages</h3>
          </div>
          <div class="skills-list">
            <div class="skill-item">
              <div class="skill-info">
                <span class="skill-name">JavaScript (ES6+) / TypeScript</span>
                <span class="skill-percent">94%</span>
              </div>
              <div class="progress-bar-track">
                <div class="progress-bar-fill" data-progress="94%"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-info">
                <span class="skill-name">Dart</span>
                <span class="skill-percent">92%</span>
              </div>
              <div class="progress-bar-track">
                <div class="progress-bar-fill" data-progress="92%"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-info">
                <span class="skill-name">HTML5 / Modern CSS3</span>
                <span class="skill-percent">98%</span>
              </div>
              <div class="progress-bar-track">
                <div class="progress-bar-fill" data-progress="98%"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-info">
                <span class="skill-name">Python / SQL</span>
                <span class="skill-percent">85%</span>
              </div>
              <div class="progress-bar-track">
                <div class="progress-bar-fill" data-progress="85%"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Category 2: Frameworks & Libraries -->
        <div class="glass-panel skill-category-card glow-sheen reveal delay-2">
          <div class="category-header">
            <svg class="category-icon" viewBox="0 0 24 24"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg>
            <h3 class="category-title">Frameworks & Mobile</h3>
          </div>
          <div class="skills-list">
            <div class="skill-item">
              <div class="skill-info">
                <span class="skill-name">Flutter (iOS & Android)</span>
                <span class="skill-percent">92%</span>
              </div>
              <div class="progress-bar-track">
                <div class="progress-bar-fill" data-progress="92%"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-info">
                <span class="skill-name">React & Next.js</span>
                <span class="skill-percent">90%</span>
              </div>
              <div class="progress-bar-track">
                <div class="progress-bar-fill" data-progress="90%"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-info">
                <span class="skill-name">Node.js / Express</span>
                <span class="skill-percent">88%</span>
              </div>
              <div class="progress-bar-track">
                <div class="progress-bar-fill" data-progress="88%"></div>
              </div>
            </div>
            <div class="skill-item">
              <div class="skill-info">
                <span class="skill-name">Tailwind CSS & Glassmorphism</span>
                <span class="skill-percent">95%</span>
              </div>
              <div class="progress-bar-track">
                <div class="progress-bar-fill" data-progress="95%"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Category 3: Tools & Cloud -->
        <div class="glass-panel skill-category-card glow-sheen reveal delay-3">
          <div class="category-header">
            <svg class="category-icon" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"/></svg>
            <h3 class="category-title">Tools & Cloud</h3>
          </div>
          <div class="tech-chips-cloud">
            <span class="tech-chip">🔥 Firebase</span>
            <span class="tech-chip">⚡ Supabase</span>
            <span class="tech-chip">🐙 Git / GitHub</span>
            <span class="tech-chip">▲ Vercel</span>
            <span class="tech-chip">🐳 Docker</span>
            <span class="tech-chip">🎨 Figma</span>
            <span class="tech-chip">🛠️ Postman</span>
            <span class="tech-chip">⚡ Vite</span>
            <span class="tech-chip">🌐 REST & GraphQL</span>
            <span class="tech-chip">🔒 WebSockets</span>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ==========================================================================
       FEATURED PROJECTS SECTION
       ========================================================================== -->
  <section class="section-padding" id="projects">
    <div class="container">
      <div class="section-title-wrap reveal">
        <span class="badge-pill">Portfolio</span>
        <h2 class="section-title">Featured Projects</h2>
        <p class="section-desc">Handcrafted web applications, mobile platforms, and open-source software.</p>
      </div>

      <!-- Filter Tabs -->
      <div class="filter-tabs reveal">
        <button class="filter-btn active" data-filter="all">All Projects</button>
        <button class="filter-btn" data-filter="apps">Mobile & Apps</button>
        <button class="filter-btn" data-filter="websites">Websites</button>
        <button class="filter-btn" data-filter="opensource">Open Source</button>
      </div>

      <!-- Projects Grid -->
      <div class="projects-grid" id="projects-container">

        <!-- Project 1: DUOX (HIGHLIGHT) -->
        <article class="glass-panel project-card tilt-card reveal" data-category="apps opensource">
          <div class="project-visual">
            <div class="project-visual-pattern"></div>
            <div class="project-logo-badge" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(234, 88, 12, 0.4));">
              DX
            </div>
            <span class="project-tag-pill">⭐ Flagship App</span>
          </div>
          <div class="project-body">
            <div class="project-header-info">
              <h3 class="project-title">Duox</h3>
              <p class="project-desc">
                High-performance dual-interface productivity and cross-platform ecosystem built with Flutter. Features seamless real-time syncing, offline persistence, and smooth gesture-driven UI.
              </p>
              <div class="project-tech-tags">
                <span class="tech-pill">Flutter</span>
                <span class="tech-pill">Dart</span>
                <span class="tech-pill">Firebase</span>
                <span class="tech-pill">Material 3</span>
                <span class="tech-pill">Offline-First</span>
              </div>
            </div>
            <div class="project-actions">
              <a href="https://github.com/SDev-P/Duox" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="flex:1;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                <span>GitHub Repo</span>
              </a>
              <a href="https://github.com/SDev-P/Duox" target="_blank" rel="noopener noreferrer" class="btn btn-glass btn-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                <span>View</span>
              </a>
            </div>
          </div>
        </article>

        <!-- Project 2: Aetherium Studio -->
        <article class="glass-panel project-card tilt-card reveal delay-1" data-category="websites">
          <div class="project-visual">
            <div class="project-visual-pattern"></div>
            <div class="project-logo-badge" style="background: linear-gradient(135deg, rgba(190, 18, 60, 0.2), rgba(245, 158, 11, 0.4));">
              AS
            </div>
            <span class="project-tag-pill">UI System</span>
          </div>
          <div class="project-body">
            <div class="project-header-info">
              <h3 class="project-title">Aetherium Studio</h3>
              <p class="project-desc">
                Next-generation web component library and interactive canvas playground with glassmorphism design tokens, CSS micro-interactions, and dark mode themes.
              </p>
              <div class="project-tech-tags">
                <span class="tech-pill">Next.js</span>
                <span class="tech-pill">TypeScript</span>
                <span class="tech-pill">Tailwind</span>
                <span class="tech-pill">Framer Motion</span>
              </div>
            </div>
            <div class="project-actions">
              <a href="https://github.com/SDev-P/Duox" target="_blank" rel="noopener noreferrer" class="btn btn-glass btn-sm" style="flex:1;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                <span>Source</span>
              </a>
              <a href="#hero" class="btn btn-primary btn-sm">
                <span>Demo</span>
              </a>
            </div>
          </div>
        </article>

        <!-- Project 3: PulseAI Platform -->
        <article class="glass-panel project-card tilt-card reveal delay-2" data-category="apps opensource">
          <div class="project-visual">
            <div class="project-visual-pattern"></div>
            <div class="project-logo-badge" style="background: linear-gradient(135deg, rgba(234, 88, 12, 0.2), rgba(190, 18, 60, 0.4));">
              PA
            </div>
            <span class="project-tag-pill">AI Engine</span>
          </div>
          <div class="project-body">
            <div class="project-header-info">
              <h3 class="project-title">PulseAI Agent</h3>
              <p class="project-desc">
                Real-time conversational intelligence app featuring bidirectional streaming responses, dynamic audio wave visualizations, and local context caching.
              </p>
              <div class="project-tech-tags">
                <span class="tech-pill">React</span>
                <span class="tech-pill">Node.js</span>
                <span class="tech-pill">WebSockets</span>
                <span class="tech-pill">Gemini API</span>
              </div>
            </div>
            <div class="project-actions">
              <a href="https://github.com/SDev-P/Duox" target="_blank" rel="noopener noreferrer" class="btn btn-glass btn-sm" style="flex:1;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                <span>Source</span>
              </a>
              <a href="#hero" class="btn btn-primary btn-sm">
                <span>Demo</span>
              </a>
            </div>
          </div>
        </article>

        <!-- Project 4: OmniCart Pro -->
        <article class="glass-panel project-card tilt-card reveal delay-3" data-category="websites">
          <div class="project-visual">
            <div class="project-visual-pattern"></div>
            <div class="project-logo-badge" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(16, 185, 129, 0.3));">
              OC
            </div>
            <span class="project-tag-pill">E-Commerce</span>
          </div>
          <div class="project-body">
            <div class="project-header-info">
              <h3 class="project-title">OmniCart Pro</h3>
              <p class="project-desc">
                High-speed headless e-commerce store with instant faceted search, interactive cart drawer, dynamic currency conversions, and Stripe checkout integration.
              </p>
              <div class="project-tech-tags">
                <span class="tech-pill">Vue 3</span>
                <span class="tech-pill">Vite</span>
                <span class="tech-pill">Node.js</span>
                <span class="tech-pill">Stripe API</span>
              </div>
            </div>
            <div class="project-actions">
              <a href="https://github.com/SDev-P/Duox" target="_blank" rel="noopener noreferrer" class="btn btn-glass btn-sm" style="flex:1;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                <span>Source</span>
              </a>
              <a href="#hero" class="btn btn-primary btn-sm">
                <span>Demo</span>
              </a>
            </div>
          </div>
        </article>

        <!-- Project 5: Nexus Dashboard -->
        <article class="glass-panel project-card tilt-card reveal delay-4" data-category="websites apps">
          <div class="project-visual">
            <div class="project-visual-pattern"></div>
            <div class="project-logo-badge" style="background: linear-gradient(135deg, rgba(234, 88, 12, 0.2), rgba(59, 130, 246, 0.3));">
              NX
            </div>
            <span class="project-tag-pill">Analytics</span>
          </div>
          <div class="project-body">
            <div class="project-header-info">
              <h3 class="project-title">Nexus Telemetry</h3>
              <p class="project-desc">
                Enterprise cloud telemetry & metrics console with animated SVG charts, live socket streaming, anomaly alerts, and responsive dark-mode layouts.
              </p>
              <div class="project-tech-tags">
                <span class="tech-pill">React</span>
                <span class="tech-pill">D3.js</span>
                <span class="tech-pill">Express</span>
                <span class="tech-pill">Tailwind</span>
              </div>
            </div>
            <div class="project-actions">
              <a href="https://github.com/SDev-P/Duox" target="_blank" rel="noopener noreferrer" class="btn btn-glass btn-sm" style="flex:1;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                <span>Source</span>
              </a>
              <a href="#hero" class="btn btn-primary btn-sm">
                <span>Demo</span>
              </a>
            </div>
          </div>
        </article>

        <!-- Project 6: AutumnFlow -->
        <article class="glass-panel project-card tilt-card reveal delay-5" data-category="opensource">
          <div class="project-visual">
            <div class="project-visual-pattern"></div>
            <div class="project-logo-badge" style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.3), rgba(190, 18, 60, 0.3));">
              AF
            </div>
            <span class="project-tag-pill">Canvas Lib</span>
          </div>
          <div class="project-body">
            <div class="project-header-info">
              <h3 class="project-title">AutumnFlow Engine</h3>
              <p class="project-desc">
                Ultra-lightweight, zero-dependency 2D particle physics simulation library powering realistic organic motion, wind interactions, and 60 FPS leaf drifts.
              </p>
              <div class="project-tech-tags">
                <span class="tech-pill">Vanilla JS</span>
                <span class="tech-pill">Canvas 2D</span>
                <span class="tech-pill">Physics</span>
                <span class="tech-pill">Zero Deps</span>
              </div>
            </div>
            <div class="project-actions">
              <a href="https://github.com/SDev-P/Duox" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm" style="flex:1;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                <span>GitHub</span>
              </a>
              <a href="#hero" class="btn btn-glass btn-sm">
                <span>Try Demo</span>
              </a>
            </div>
          </div>
        </article>

      </div>
    </div>
  </section>

  <!-- ==========================================================================
       SHOWCASE CAROUSEL SECTION
       ========================================================================== -->
  <section class="section-padding" id="showcase">
    <div class="container">
      <div class="section-title-wrap reveal">
        <span class="badge-pill">Highlights</span>
        <h2 class="section-title">Apps & Websites Showcase</h2>
        <p class="section-desc">Interactive product previews and cross-platform mobile highlights.</p>
      </div>

      <div class="showcase-slider-wrap reveal">
        <div class="showcase-track-container" id="showcase-container">
          <div class="showcase-track" id="showcase-track">

            <!-- Showcase Slide 1 -->
            <div class="glass-panel showcase-card glow-sheen">
              <div>
                <span class="showcase-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3.01c0-1.1-.9-2-2-2zm-5 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm6.5-4H5.5V4h13v14.01z"/></svg>
                  Mobile Platform
                </span>
                <h3 class="showcase-title">Duox Flutter Architecture</h3>
                <p class="showcase-desc">
                  Engineered with Clean Architecture (Domain, Data, Presentation layers) to guarantee maintainability and instant screen rendering across both Android and iOS devices.
                </p>
                <ul class="showcase-features">
                  <li class="showcase-feature-item">
                    <svg class="feature-check-icon" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    <span>60 FPS smooth gesture navigation & animations</span>
                  </li>
                  <li class="showcase-feature-item">
                    <svg class="feature-check-icon" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    <span>Local SQLite/Hive caching with cloud sync</span>
                  </li>
                </ul>
              </div>
              <div style="margin-top: 1rem;">
                <a href="https://github.com/SDev-P/Duox" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                  <span>Explore on GitHub</span>
                </a>
              </div>
            </div>

            <!-- Showcase Slide 2 -->
            <div class="glass-panel showcase-card glow-sheen">
              <div>
                <span class="showcase-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"/></svg>
                  Web Architecture
                </span>
                <h3 class="showcase-title">Aetherium Glass UI Core</h3>
                <p class="showcase-desc">
                  A modular web frontend design system combining CSS variable tokens, hardware-accelerated transforms, and customizable frosted glass aesthetics.
                </p>
                <ul class="showcase-features">
                  <li class="showcase-feature-item">
                    <svg class="feature-check-icon" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    <span>Sub-millisecond CSS token updates & theme switching</span>
                  </li>
                  <li class="showcase-feature-item">
                    <svg class="feature-check-icon" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    <span>Fully responsive accessibility with ARIA standards</span>
                  </li>
                </ul>
              </div>
              <div style="margin-top: 1rem;">
                <a href="#projects" class="btn btn-glass btn-sm">
                  <span>View Project Details</span>
                </a>
              </div>
            </div>

            <!-- Showcase Slide 3 -->
            <div class="glass-panel showcase-card glow-sheen">
              <div>
                <span class="showcase-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5z"/></svg>
                  Interactive Physics
                </span>
                <h3 class="showcase-title">Autumn Particle Physics</h3>
                <p class="showcase-desc">
                  Custom-built canvas engine calculating organic 3D leaf rotation, depth of field layering, and interactive wind forces responding dynamically to cursor physics.
                </p>
                <ul class="showcase-features">
                  <li class="showcase-feature-item">
                    <svg class="feature-check-icon" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    <span>Zero external libraries — 100% pure Canvas 2D</span>
                  </li>
                  <li class="showcase-feature-item">
                    <svg class="feature-check-icon" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    <span>Optimized page visibility & battery awareness</span>
                  </li>
                </ul>
              </div>
              <div style="margin-top: 1rem;">
                <a href="#hero" class="btn btn-primary btn-sm">
                  <span>Scroll & Watch Leaves</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        <!-- Carousel Navigation Controls -->
        <div class="carousel-controls">
          <div class="carousel-dots" id="carousel-dots">
            <button class="carousel-dot active" data-index="0" aria-label="Slide 1"></button>
            <button class="carousel-dot" data-index="1" aria-label="Slide 2"></button>
            <button class="carousel-dot" data-index="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-nav-btns">
            <button class="nav-arrow-btn" id="carousel-prev" aria-label="Previous Slide">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button class="nav-arrow-btn" id="carousel-next" aria-label="Next Slide">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </div>

    </div>
  </section>

  <!-- ==========================================================================
       EXPERIENCE & EDUCATION TIMELINE
       ========================================================================== -->
  <section class="section-padding" id="experience">
    <div class="container">
      <div class="section-title-wrap reveal">
        <span class="badge-pill">Milestones</span>
        <h2 class="section-title">Experience & Journey</h2>
        <p class="section-desc">Key milestones in software engineering, mobile development, and academic foundation.</p>
      </div>

      <div class="timeline-wrap">
        
        <!-- Timeline Item 1 -->
        <div class="timeline-item reveal delay-1">
          <div class="timeline-node"></div>
          <div class="glass-panel timeline-card glow-sheen">
            <span class="timeline-date">2024 — PRESENT</span>
            <h3 class="timeline-role">Full-Stack & Mobile Developer</h3>
            <div class="timeline-company">Independent & Client Projects</div>
            <p class="timeline-desc">
              Designing and deploying robust cross-platform applications, reactive web portals, and microservices. Spearheading modern UI engineering, automated testing, and cloud infrastructure on Vercel and Firebase.
            </p>
          </div>
        </div>

        <!-- Timeline Item 2 -->
        <div class="timeline-item reveal delay-2">
          <div class="timeline-node"></div>
          <div class="glass-panel timeline-card glow-sheen">
            <span class="timeline-date">2023 — 2024</span>
            <h3 class="timeline-role">Lead Architect — Duox</h3>
            <div class="timeline-company">Open Source Engineering</div>
            <p class="timeline-desc">
              Architected the core system for <strong>Duox</strong>, establishing reactive state management, asynchronous data caching, cross-device synchronization, and responsive interfaces.
            </p>
          </div>
        </div>

        <!-- Timeline Item 3 -->
        <div class="timeline-item reveal delay-3">
          <div class="timeline-node"></div>
          <div class="glass-panel timeline-card glow-sheen">
            <span class="timeline-date">2022 — 2023</span>
            <h3 class="timeline-role">Frontend & UI/UX Specialist</h3>
            <div class="timeline-company">Web Solutions & Design Systems</div>
            <p class="timeline-desc">
              Built fluid web applications using modern JavaScript/TypeScript, React, and CSS animations. Focused on Web Vitals optimization, responsive glassmorphism themes, and accessible components.
            </p>
          </div>
        </div>

        <!-- Timeline Item 4 -->
        <div class="timeline-item reveal delay-4">
          <div class="timeline-node"></div>
          <div class="glass-panel timeline-card glow-sheen">
            <span class="timeline-date">ACADEMIC FOUNDATION</span>
            <h3 class="timeline-role">Computer Science & Engineering</h3>
            <div class="timeline-company">University Degree Program</div>
            <p class="timeline-desc">
              Mastered foundational computer science pillars including Data Structures, Algorithms, Distributed Systems, Database Management Systems (DBMS), and Software Architecture.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ==========================================================================
       CONTACT SECTION
       ========================================================================== -->
  <section class="section-padding" id="contact">
    <div class="container">
      <div class="section-title-wrap reveal">
        <span class="badge-pill">Connect</span>
        <h2 class="section-title">Get In Touch</h2>
        <p class="section-desc">Have an exciting project, app concept, or collaboration in mind? Let's talk!</p>
      </div>

      <div class="contact-grid">
        
        <!-- Contact Information & Socials -->
        <div class="glass-panel contact-info-card glow-sheen reveal delay-1">
          <div>
            <h3 class="about-lead text-gradient" style="margin-bottom: 0.75rem;">
              Let's create something extraordinary together.
            </h3>
            <p class="about-paragraph">
              I am currently open to new opportunities, freelance contracts, and open-source collaborations. Feel free to reach out via email or connect with me on professional networks.
            </p>
          </div>

          <div class="contact-channels-list">
            
            <!-- Email -->
            <a href="mailto:suryadevkl@gmail.com" class="contact-channel-item" id="contact-email-link">
              <div class="channel-icon-wrap">
                <svg class="channel-svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
              </div>
              <div class="channel-details">
                <span class="channel-label">Email Me</span>
                <span class="channel-val" id="contact-email-val">suryadevkl@gmail.com</span>
              </div>
            </a>

            <!-- LinkedIn -->
            <a href="https://www.linkedin.com/in/suryadevkl/" target="_blank" rel="noopener noreferrer" class="contact-channel-item">
              <div class="channel-icon-wrap">
                <svg class="channel-svg" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              </div>
              <div class="channel-details">
                <span class="channel-label">LinkedIn</span>
                <span class="channel-val">linkedin.com/in/suryadevkl</span>
              </div>
            </a>

            <!-- GitHub -->
            <a href="https://github.com/SDev-P/Duox" target="_blank" rel="noopener noreferrer" class="contact-channel-item">
              <div class="channel-icon-wrap">
                <svg class="channel-svg" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </div>
              <div class="channel-details">
                <span class="channel-label">GitHub</span>
                <span class="channel-val">github.com/SDev-P</span>
              </div>
            </a>

            <!-- Location -->
            <div class="contact-channel-item">
              <div class="channel-icon-wrap">
                <svg class="channel-svg" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </div>
              <div class="channel-details">
                <span class="channel-label">Location</span>
                <span class="channel-val">India (UTC+5:30)</span>
              </div>
            </div>

          </div>
        </div>

        <!-- Glass Interactive Contact Form -->
        <div class="glass-panel contact-form-card glow-sheen reveal delay-2">
          <h3 class="form-title">Send a Direct Message</h3>
          <form id="contact-form" onsubmit="handleFormSubmit(event)">
            <div class="form-group">
              <label for="form-name" class="form-label">Your Name</label>
              <input type="text" id="form-name" class="form-input" placeholder="e.g. Alex Morgan" required>
            </div>

            <div class="form-group">
              <label for="form-email" class="form-label">Email Address</label>
              <input type="email" id="form-email" class="form-input" placeholder="alex@example.com" required>
            </div>

            <div class="form-group">
              <label for="form-subject" class="form-label">Subject</label>
              <input type="text" id="form-subject" class="form-input" placeholder="Project Inquiry / Opportunity" required>
            </div>

            <div class="form-group">
              <label for="form-message" class="form-label">Message</label>
              <textarea id="form-message" class="form-textarea" placeholder="Tell me about your project goals, timelines, or role..." required></textarea>
            </div>

            <button type="submit" class="btn btn-primary magnetic-btn" id="form-submit-btn" style="width: 100%;">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              <span>Send Message</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  </section>

  <!-- ==========================================================================
       FOOTER
       ========================================================================== -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-content">
        <div class="nav-brand">
          <svg class="brand-leaf-icon" viewBox="0 0 24 24"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/></svg>
          <span>Suryadev K L</span>
        </div>

        <div class="footer-copy">
          &copy; <span id="year-copy">2026</span> Suryadev K L. Crafted with Autumn Warmth &amp; Pure Code.
        </div>

        <div style="display:flex; gap: 1rem;">
          <a href="https://github.com/SDev-P/Duox" target="_blank" rel="noopener noreferrer" class="btn-glass btn-sm" style="display:inline-flex;align-items:center;gap:0.4rem;text-decoration:none;border-radius:8px;">
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/suryadevkl/" target="_blank" rel="noopener noreferrer" class="btn-glass btn-sm" style="display:inline-flex;align-items:center;gap:0.4rem;text-decoration:none;border-radius:8px;">
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Floating Leaf Back to Top Button -->
  <button class="back-to-top-btn" id="back-to-top" aria-label="Back to top">
    <svg class="leaf-top-icon" viewBox="0 0 24 24">
      <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/>
    </svg>
  </button>

  <!-- ==========================================================================
       INLINE JAVASCRIPT
       ========================================================================== -->
  <script>
    /**
     * =========================================================================
     * USER CUSTOMIZATION CONFIG
     * Easily update your details, links, and text here!
     * =========================================================================
     */
    const USER_CONFIG = {
      name: "Suryadev K L",
      tagline: "Crafting immersive, high-performance web applications and fluid mobile experiences with autumn-warm aesthetics and rock-solid architecture.",
      roles: [
        "Full-Stack Developer",
        "Mobile App Creator",
        "Flutter & Web Architect",
        "UI/UX & Creative Technologist",
        "Open Source Builder"
      ],
      location: "India",
      email: "suryadevkl@gmail.com",
      linkedin: "https://www.linkedin.com/in/suryadevkl/",
      github: "https://github.com/SDev-P/Duox",
      stats: {
        projects: 15,
        satisfaction: 99,
        years: 3,
        openSource: 100
      }
    };

    // Set current year
    document.getElementById('year-copy').textContent = new Date().getFullYear();

    /* =========================================================================
       1. ENHANCED AUTUMN FALLING LEAVES & EMBERS CANVAS SIMULATION
       ========================================================================= */
    (function initAutumnLeaves() {
      const canvas = document.getElementById('autumn-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d', { alpha: true });

      let width = 0;
      let height = 0;
      let dpr = 1;

      function resize() {
        dpr = window.devicePixelRatio || 1;
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
      resize();
      window.addEventListener('resize', resize);

      // Reduced motion preference check
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const leafCount = prefersReducedMotion ? 18 : (width < 768 ? 65 : 140);
      const emberCount = prefersReducedMotion ? 10 : (width < 768 ? 25 : 55);

      // Rich multi-tone color palettes for autumn leaves [primaryColor, tip/gradientColor, veinColor]
      const leafPalette = [
        { c1: '#EA580C', c2: '#F59E0B', vein: 'rgba(120, 53, 15, 0.45)' }, // Burnt orange -> golden amber
        { c1: '#BE123C', c2: '#EA580C', vein: 'rgba(113, 18, 36, 0.45)' }, // Crimson -> fiery orange
        { c1: '#F59E0B', c2: '#FBBF24', vein: 'rgba(180, 83, 9, 0.4)' },   // Warm amber -> bright gold
        { c1: '#9F1239', c2: '#BE123C', vein: 'rgba(76, 5, 25, 0.45)' },   // Deep wine -> scarlet
        { c1: '#D97706', c2: '#FDE047', vein: 'rgba(146, 64, 14, 0.4)' },  // Honey bronze -> yellow gold
        { c1: '#C2410C', c2: '#F97316', vein: 'rgba(124, 45, 18, 0.45)' }, // Rust -> bright tangerine
        { c1: '#78350F', c2: '#D97706', vein: 'rgba(69, 26, 3, 0.5)' },    // Deep chestnut -> amber
        { c1: '#E11D48', c2: '#FB7185', vein: 'rgba(159, 18, 57, 0.4)' }   // Vibrant ruby -> coral red
      ];

      // Mouse Wind Impulse & Interaction
      const mouse = {
        x: -1000,
        y: -1000,
        vx: 0,
        vy: 0,
        lastX: 0,
        lastY: 0,
        bursts: [] // Ripple wind bursts from clicks
      };

      window.addEventListener('mousemove', (e) => {
        mouse.vx = (e.clientX - mouse.lastX) * 0.3;
        mouse.vy = (e.clientY - mouse.lastY) * 0.3;
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        mouse.lastX = e.clientX;
        mouse.lastY = e.clientY;
      });

      window.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
          const touch = e.touches[0];
          mouse.vx = (touch.clientX - mouse.lastX) * 0.3;
          mouse.vy = (touch.clientY - mouse.lastY) * 0.3;
          mouse.x = touch.clientX;
          mouse.y = touch.clientY;
          mouse.lastX = touch.clientX;
          mouse.lastY = touch.clientY;
        }
      }, { passive: true });

      // Click / Tap Wind Burst ripple
      window.addEventListener('click', (e) => {
        mouse.bursts.push({
          x: e.clientX,
          y: e.clientY,
          radius: 10,
          maxRadius: 260,
          strength: 12,
          life: 1
        });
      });

      // Vector Leaf Path Generators with Botanical Realism
      // 0: Maple Leaf (Acer)
      function drawMapleLeaf(ctx, size, palette) {
        const grad = ctx.createLinearGradient(0, size, 0, -size);
        grad.addColorStop(0, palette.c1);
        grad.addColorStop(1, palette.c2);
        ctx.fillStyle = grad;

        ctx.beginPath();
        ctx.moveTo(0, -size);
        ctx.bezierCurveTo(size * 0.25, -size * 0.85, size * 0.35, -size * 0.5, size * 0.8, -size * 0.35);
        ctx.bezierCurveTo(size * 0.55, -size * 0.15, size * 0.75, size * 0.15, size * 0.65, size * 0.55);
        ctx.bezierCurveTo(size * 0.35, size * 0.35, size * 0.15, size * 0.65, 0, size * 0.75);
        ctx.bezierCurveTo(-size * 0.15, size * 0.65, -size * 0.35, size * 0.35, -size * 0.65, size * 0.55);
        ctx.bezierCurveTo(-size * 0.75, size * 0.15, -size * 0.55, -size * 0.15, -size * 0.8, -size * 0.35);
        ctx.bezierCurveTo(-size * 0.35, -size * 0.5, -size * 0.25, -size * 0.85, 0, -size);
        ctx.closePath();
        ctx.fill();

        // Veins
        ctx.strokeStyle = palette.vein;
        ctx.lineWidth = Math.max(0.75, size * 0.04);
        ctx.beginPath();
        // Stem
        ctx.moveTo(0, size * 0.75);
        ctx.lineTo(0, size * 1.15);
        // Main Spine
        ctx.moveTo(0, size * 0.75);
        ctx.lineTo(0, -size * 0.75);
        // Left & Right primary ribs
        ctx.moveTo(0, size * 0.1);
        ctx.lineTo(-size * 0.55, -size * 0.2);
        ctx.moveTo(0, size * 0.1);
        ctx.lineTo(size * 0.55, -size * 0.2);
        ctx.moveTo(0, size * 0.4);
        ctx.lineTo(-size * 0.45, size * 0.4);
        ctx.moveTo(0, size * 0.4);
        ctx.lineTo(size * 0.45, size * 0.4);
        ctx.stroke();
      }

      // 1: Oak Leaf (Quercus)
      function drawOakLeaf(ctx, size, palette) {
        const grad = ctx.createLinearGradient(0, size, 0, -size);
        grad.addColorStop(0, palette.c1);
        grad.addColorStop(1, palette.c2);
        ctx.fillStyle = grad;

        ctx.beginPath();
        ctx.moveTo(0, -size);
        ctx.bezierCurveTo(size * 0.38, -size * 0.75, size * 0.58, -size * 0.55, size * 0.3, -size * 0.32);
        ctx.bezierCurveTo(size * 0.68, -size * 0.15, size * 0.7, size * 0.25, size * 0.32, size * 0.45);
        ctx.bezierCurveTo(size * 0.45, size * 0.68, size * 0.25, size * 0.88, 0, size * 0.95);
        ctx.bezierCurveTo(-size * 0.25, size * 0.88, -size * 0.45, size * 0.68, -size * 0.32, size * 0.45);
        ctx.bezierCurveTo(-size * 0.7, size * 0.25, -size * 0.68, -size * 0.15, -size * 0.3, -size * 0.32);
        ctx.bezierCurveTo(-size * 0.58, -size * 0.55, -size * 0.38, -size * 0.75, 0, -size);
        ctx.closePath();
        ctx.fill();

        // Veins
        ctx.strokeStyle = palette.vein;
        ctx.lineWidth = Math.max(0.75, size * 0.04);
        ctx.beginPath();
        ctx.moveTo(0, size * 0.95);
        ctx.lineTo(0, size * 1.25);
        ctx.moveTo(0, size * 0.95);
        ctx.lineTo(0, -size * 0.8);
        // Ribs
        ctx.moveTo(0, -size * 0.3); ctx.lineTo(size * 0.35, -size * 0.45);
        ctx.moveTo(0, -size * 0.3); ctx.lineTo(-size * 0.35, -size * 0.45);
        ctx.moveTo(0, size * 0.15); ctx.lineTo(size * 0.4, size * 0.05);
        ctx.moveTo(0, size * 0.15); ctx.lineTo(-size * 0.4, size * 0.05);
        ctx.stroke();
      }

      // 2: Ginkgo Leaf (Ginkgo biloba)
      function drawGinkgoLeaf(ctx, size, palette) {
        const grad = ctx.createRadialGradient(0, size * 0.9, size * 0.1, 0, 0, size * 1.2);
        grad.addColorStop(0, palette.c1);
        grad.addColorStop(1, palette.c2);
        ctx.fillStyle = grad;

        ctx.beginPath();
        ctx.moveTo(0, size * 0.9);
        ctx.bezierCurveTo(-size * 0.6, size * 0.3, -size * 1.1, -size * 0.2, -size * 0.8, -size * 0.8);
        ctx.bezierCurveTo(-size * 0.4, -size * 0.95, -size * 0.1, -size * 0.8, 0, -size * 0.6); // central notch
        ctx.bezierCurveTo(size * 0.1, -size * 0.8, size * 0.4, -size * 0.95, size * 0.8, -size * 0.8);
        ctx.bezierCurveTo(size * 1.1, -size * 0.2, size * 0.6, size * 0.3, 0, size * 0.9);
        ctx.closePath();
        ctx.fill();

        // Radiating delicate veins & stem
        ctx.strokeStyle = palette.vein;
        ctx.lineWidth = Math.max(0.65, size * 0.035);
        ctx.beginPath();
        // Stem
        ctx.moveTo(0, size * 0.9);
        ctx.lineTo(0, size * 1.35);
        // Fan ribs
        ctx.moveTo(0, size * 0.9); ctx.lineTo(-size * 0.55, -size * 0.65);
        ctx.moveTo(0, size * 0.9); ctx.lineTo(-size * 0.25, -size * 0.68);
        ctx.moveTo(0, size * 0.9); ctx.lineTo(0, -size * 0.58);
        ctx.moveTo(0, size * 0.9); ctx.lineTo(size * 0.25, -size * 0.68);
        ctx.moveTo(0, size * 0.9); ctx.lineTo(size * 0.55, -size * 0.65);
        ctx.stroke();
      }

      // 3: Birch / Aspen Leaf
      function drawBirchLeaf(ctx, size, palette) {
        const grad = ctx.createLinearGradient(0, size, 0, -size);
        grad.addColorStop(0, palette.c1);
        grad.addColorStop(1, palette.c2);
        ctx.fillStyle = grad;

        ctx.beginPath();
        ctx.moveTo(0, -size * 1.05);
        ctx.bezierCurveTo(size * 0.75, -size * 0.4, size * 0.75, size * 0.5, 0, size * 0.95);
        ctx.bezierCurveTo(-size * 0.75, size * 0.5, -size * 0.75, -size * 0.4, 0, -size * 1.05);
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = palette.vein;
        ctx.lineWidth = Math.max(0.7, size * 0.04);
        ctx.beginPath();
        ctx.moveTo(0, size * 0.95);
        ctx.lineTo(0, size * 1.3);
        ctx.moveTo(0, size * 0.95);
        ctx.lineTo(0, -size * 0.85);
        // Side ribs
        ctx.moveTo(0, -size * 0.35); ctx.lineTo(size * 0.4, -size * 0.15);
        ctx.moveTo(0, -size * 0.35); ctx.lineTo(-size * 0.4, -size * 0.15);
        ctx.moveTo(0, size * 0.15); ctx.lineTo(size * 0.45, size * 0.35);
        ctx.moveTo(0, size * 0.15); ctx.lineTo(-size * 0.45, size * 0.35);
        ctx.stroke();
      }

      // 4: Japanese Acer / Scarlet Palmate Leaf
      function drawPalmateLeaf(ctx, size, palette) {
        const grad = ctx.createRadialGradient(0, size * 0.3, 0, 0, 0, size * 1.1);
        grad.addColorStop(0, palette.c1);
        grad.addColorStop(1, palette.c2);
        ctx.fillStyle = grad;

        ctx.beginPath();
        ctx.moveTo(0, size * 0.6);
        // 5 slender lobes
        ctx.lineTo(size * 0.55, size * 0.4);
        ctx.lineTo(size * 0.9, 0);
        ctx.lineTo(size * 0.45, -size * 0.2);
        ctx.lineTo(size * 0.65, -size * 0.75);
        ctx.lineTo(size * 0.2, -size * 0.45);
        ctx.lineTo(0, -size * 1.1); // top point
        ctx.lineTo(-size * 0.2, -size * 0.45);
        ctx.lineTo(-size * 0.65, -size * 0.75);
        ctx.lineTo(-size * 0.45, -size * 0.2);
        ctx.lineTo(-size * 0.9, 0);
        ctx.lineTo(-size * 0.55, size * 0.4);
        ctx.closePath();
        ctx.fill();

        ctx.strokeStyle = palette.vein;
        ctx.lineWidth = Math.max(0.65, size * 0.035);
        ctx.beginPath();
        ctx.moveTo(0, size * 0.6); ctx.lineTo(0, size * 1.15);
        ctx.moveTo(0, size * 0.6); ctx.lineTo(0, -size * 0.85);
        ctx.moveTo(0, size * 0.4); ctx.lineTo(size * 0.5, -size * 0.55);
        ctx.moveTo(0, size * 0.4); ctx.lineTo(-size * 0.5, -size * 0.55);
        ctx.moveTo(0, size * 0.45); ctx.lineTo(size * 0.65, -size * 0.05);
        ctx.moveTo(0, size * 0.45); ctx.lineTo(-size * 0.65, -size * 0.05);
        ctx.stroke();
      }

      // Autumn Ember / Spark Particle Class
      class Ember {
        constructor(initial = false) {
          this.reset(initial);
        }

        reset(initial = false) {
          this.x = Math.random() * width;
          this.y = initial ? Math.random() * height : height + 10 + Math.random() * 50;
          this.size = 1.2 + Math.random() * 2.8;
          this.baseAlpha = 0.3 + Math.random() * 0.65;
          this.alpha = this.baseAlpha;
          this.vy = -(0.4 + Math.random() * 0.9); // Float upward gently
          this.vx = (Math.random() - 0.5) * 0.6;
          this.pulseSpeed = 0.03 + Math.random() * 0.05;
          this.pulseOffset = Math.random() * Math.PI * 2;
          this.color = Math.random() > 0.4 ? '#FBBF24' : (Math.random() > 0.5 ? '#F59E0B' : '#EA580C');
        }

        update(time) {
          this.y += this.vy;
          this.x += this.vx + Math.sin(time * 0.02 + this.pulseOffset) * 0.4;
          this.alpha = this.baseAlpha * (0.6 + 0.4 * Math.sin(time * this.pulseSpeed + this.pulseOffset));

          if (this.y < -30 || this.x < -20 || this.x > width + 20) {
            this.reset(false);
          }
        }

        draw(ctx) {
          ctx.save();
          ctx.globalAlpha = this.alpha;
          ctx.shadowColor = this.color;
          ctx.shadowBlur = this.size * 3.5;
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }

      // Leaf Simulation Class
      class Leaf {
        constructor(initial = false) {
          this.reset(initial);
        }

        reset(initial = false) {
          this.x = Math.random() * width;
          this.y = initial ? Math.random() * height : -50 - Math.random() * 80;
          // Z depth factor (0.35 to 1.45)
          this.z = 0.35 + Math.random() * 1.1;
          this.size = (13 + Math.random() * 18) * this.z;
          this.palette = leafPalette[Math.floor(Math.random() * leafPalette.length)];
          this.type = Math.floor(Math.random() * 5); // 0..4

          // Velocity tailored to depth
          this.vy = (0.75 + Math.random() * 1.35) * Math.min(1.4, this.z);
          this.vx = (Math.random() - 0.5) * 0.6;

          // 3D Rotations (Pitch, Yaw, Roll)
          this.rotX = Math.random() * Math.PI * 2;
          this.rotY = Math.random() * Math.PI * 2;
          this.rotZ = Math.random() * Math.PI * 2;

          this.rotSpeedX = (Math.random() - 0.5) * 0.032;
          this.rotSpeedY = (Math.random() - 0.5) * 0.042;
          this.rotSpeedZ = (Math.random() - 0.5) * 0.024;

          // Sway mechanics
          this.swayFreq = 0.016 + Math.random() * 0.022;
          this.swayAmp = (1.2 + Math.random() * 2.5) * this.z;
          this.phase = Math.random() * Math.PI * 2;

          // Opacity based on depth
          this.opacity = (0.55 + Math.random() * 0.4) * (this.z > 0.7 ? 1 : 0.75);

          // External impulse accumulator
          this.fx = 0;
          this.fy = 0;
        }

        update(time, globalWind) {
          // Natural sinusoidal pendulum sway
          const sway = Math.sin(time * this.swayFreq + this.phase) * this.swayAmp;

          // Mouse proximity aerodynamic push
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const influenceRadius = 220;

          if (dist < influenceRadius && dist > 0) {
            const force = (1 - dist / influenceRadius) * 3.2;
            this.fx += (dx / dist) * force + mouse.vx * 0.2;
            this.fy += (dy / dist) * force + mouse.vy * 0.2;
            this.rotSpeedZ += (Math.random() - 0.5) * 0.02;
          }

          // Apply click burst ripples
          for (let i = 0; i < mouse.bursts.length; i++) {
            const b = mouse.bursts[i];
            const bdx = this.x - b.x;
            const bdy = this.y - b.y;
            const bdist = Math.sqrt(bdx * bdx + bdy * bdy);
            if (Math.abs(bdist - b.radius) < 60 && bdist > 0) {
              const bforce = (1 - Math.abs(bdist - b.radius) / 60) * b.strength * b.life;
              this.fx += (bdx / bdist) * bforce;
              this.fy += (bdy / bdist) * bforce;
              this.rotSpeedX += (Math.random() - 0.5) * 0.08;
            }
          }

          // Apply position update with global wind & sway
          this.x += this.vx + sway + globalWind + this.fx;
          this.y += this.vy + this.fy;

          // Dissipate impulses
          this.fx *= 0.91;
          this.fy *= 0.91;

          // 3D Rotations
          this.rotX += this.rotSpeedX;
          this.rotY += this.rotSpeedY;
          this.rotZ += this.rotSpeedZ;

          // Wrap screen boundaries
          if (this.y > height + 60) {
            this.reset(false);
          }
          if (this.x < -80) this.x = width + 60;
          if (this.x > width + 80) this.x = -60;
        }

        draw(ctx) {
          ctx.save();
          ctx.translate(this.x, this.y);
          ctx.rotate(this.rotZ);

          // 3D tumble projection (scale in X and Y using cosine of rotation angle)
          const scaleX = Math.cos(this.rotX);
          const scaleY = Math.cos(this.rotY);
          ctx.scale(Math.max(0.12, Math.abs(scaleX)) * Math.sign(scaleX || 1), Math.max(0.12, Math.abs(scaleY)) * Math.sign(scaleY || 1));

          // Shading effect: subtly dim when flipped over
          const isFlipped = scaleX < 0 || scaleY < 0;
          ctx.globalAlpha = this.opacity * (isFlipped ? 0.8 : 1.0);

          if (this.type === 0) {
            drawMapleLeaf(ctx, this.size, this.palette);
          } else if (this.type === 1) {
            drawOakLeaf(ctx, this.size, this.palette);
          } else if (this.type === 2) {
            drawGinkgoLeaf(ctx, this.size, this.palette);
          } else if (this.type === 3) {
            drawBirchLeaf(ctx, this.size, this.palette);
          } else {
            drawPalmateLeaf(ctx, this.size, this.palette);
          }

          ctx.restore();
        }
      }

      // Initialize leaves pool & embers pool
      const leaves = [];
      for (let i = 0; i < leafCount; i++) {
        leaves.push(new Leaf(true));
      }

      const embers = [];
      for (let i = 0; i < emberCount; i++) {
        embers.push(new Ember(true));
      }

      let animationFrameId;
      let isVisible = true;
      let startTime = performance.now();

      function loop(currentTime) {
        if (!isVisible) return;
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.restore();

        const elapsed = (currentTime - startTime) * 0.05;

        // Dynamic atmospheric breeze that oscillates over time
        const globalWind = Math.sin(elapsed * 0.015) * 0.55 + 0.25;

        // Update click bursts
        for (let i = mouse.bursts.length - 1; i >= 0; i--) {
          const b = mouse.bursts[i];
          b.radius += 7;
          b.life -= 0.025;
          if (b.life <= 0 || b.radius > b.maxRadius) {
            mouse.bursts.splice(i, 1);
          }
        }

        // Draw and update glowing embers
        for (let i = 0; i < embers.length; i++) {
          embers[i].update(elapsed);
          embers[i].draw(ctx);
        }

        // Draw and update falling leaves
        for (let i = 0; i < leaves.length; i++) {
          leaves[i].update(elapsed, globalWind);
          leaves[i].draw(ctx);
        }

        animationFrameId = requestAnimationFrame(loop);
      }

      animationFrameId = requestAnimationFrame(loop);

      // Handle visibility pause for battery & performance
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          isVisible = false;
          cancelAnimationFrame(animationFrameId);
        } else {
          isVisible = true;
          startTime = performance.now();
          animationFrameId = requestAnimationFrame(loop);
        }
      });
    })();

    /* =========================================================================
       2. TYPEWRITER EFFECT
       ========================================================================= */
    (function initTypewriter() {
      const target = document.getElementById('typewriter');
      if (!target) return;

      const roles = USER_CONFIG.roles;
      let roleIdx = 0;
      let charIdx = 0;
      let isDeleting = false;
      const typeSpeed = 90;
      const deleteSpeed = 45;
      const pauseEnd = 2000;
      const pauseStart = 500;

      function type() {
        const currentRole = roles[roleIdx];

        if (isDeleting) {
          target.textContent = currentRole.substring(0, charIdx - 1);
          charIdx--;
        } else {
          target.textContent = currentRole.substring(0, charIdx + 1);
          charIdx++;
        }

        let delay = isDeleting ? deleteSpeed : typeSpeed;

        if (!isDeleting && charIdx === currentRole.length) {
          delay = pauseEnd;
          isDeleting = true;
        } else if (isDeleting && charIdx === 0) {
          isDeleting = false;
          roleIdx = (roleIdx + 1) % roles.length;
          delay = pauseStart;
        }

        setTimeout(type, delay);
      }

      setTimeout(type, 800);
    })();

    /* =========================================================================
       3. CUSTOM CURSOR FOLLOWER
       ========================================================================= */
    (function initCustomCursor() {
      const dot = document.getElementById('cursor-dot');
      const ring = document.getElementById('cursor-ring');
      if (!dot || !ring) return;

      let mouseX = -100, mouseY = -100;
      let ringX = -100, ringY = -100;

      window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.left = \`\${mouseX}px\`;
        dot.style.top = \`\${mouseY}px\`;
      });

      function animateRing() {
        // Smooth lerp (linear interpolation)
        ringX += (mouseX - ringX) * 0.18;
        ringY += (mouseY - ringY) * 0.18;
        ring.style.left = \`\${ringX}px\`;
        ring.style.top = \`\${ringY}px\`;
        requestAnimationFrame(animateRing);
      }
      requestAnimationFrame(animateRing);

      // Interactive hover states
      const interactiveEls = document.querySelectorAll('a, button, input, textarea, .glass-panel, .filter-btn');
      interactiveEls.forEach(el => {
        el.addEventListener('mouseenter', () => ring.classList.add('active'));
        el.addEventListener('mouseleave', () => ring.classList.remove('active'));
      });
    })();

    /* =========================================================================
       4. SCROLL OBSERVER & ANIMATED COUNTERS / SKILL BARS
       ========================================================================= */
    (function initScrollEffects() {
      // Intersection Observer for scroll reveals
      const reveals = document.querySelectorAll('.reveal');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      }, { threshold: 0.15 });

      reveals.forEach(el => observer.observe(el));

      // Animated Stat Number Counters
      const counters = document.querySelectorAll('.count-up');
      let countersTriggered = false;

      const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !countersTriggered) {
            countersTriggered = true;
            counters.forEach(counter => {
              const target = parseInt(counter.getAttribute('data-target'), 10);
              const suffix = counter.getAttribute('data-suffix') || '+';
              const duration = 1800;
              const start = performance.now();

              function updateCount(currentTime) {
                const progress = Math.min((currentTime - start) / duration, 1);
                // Ease out cubic
                const easeOut = 1 - Math.pow(1 - progress, 3);
                const currentVal = Math.floor(easeOut * target);
                counter.textContent = currentVal + (progress === 1 ? suffix : '');

                if (progress < 1) {
                  requestAnimationFrame(updateCount);
                }
              }
              requestAnimationFrame(updateCount);
            });
          }
        });
      }, { threshold: 0.4 });

      const statsSection = document.querySelector('.stats-card-grid');
      if (statsSection) counterObserver.observe(statsSection);

      // Animated Progress Bars in Skills Section
      const skillFills = document.querySelectorAll('.progress-bar-fill');
      const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            skillFills.forEach(bar => {
              const targetWidth = bar.getAttribute('data-progress');
              bar.style.width = targetWidth;
            });
          }
        });
      }, { threshold: 0.2 });

      const skillsSection = document.getElementById('skills');
      if (skillsSection) skillObserver.observe(skillsSection);

      // Navbar scroll background change & Back to top button
      const navbar = document.getElementById('navbar');
      const backToTopBtn = document.getElementById('back-to-top');

      window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
          navbar.classList.add('scrolled');
          backToTopBtn.classList.add('visible');
        } else {
          navbar.classList.remove('scrolled');
          backToTopBtn.classList.remove('visible');
        }
      });

      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });

      // Active Navbar Link Spy
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.nav-link');

      window.addEventListener('scroll', () => {
        let current = '';
        const scrollPos = window.scrollY + 200;

        sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
          }
        });

        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === \`#\${current}\`) {
            link.classList.add('active');
          }
        });
      });
    })();

    /* =========================================================================
       5. 3D CARD TILT & MAGNETIC BUTTONS
       ========================================================================= */
    (function initInteractiveEffects() {
      // 3D Card Tilt
      const tiltCards = document.querySelectorAll('.tilt-card, .glow-sheen');
      tiltCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;

          const rotateX = ((y - centerY) / centerY) * -6;
          const rotateY = ((x - centerX) / centerX) * 6;

          card.style.transform = \`perspective(1000px) rotateX(\${rotateX}deg) rotateY(\${rotateY}deg) scale3d(1.02, 1.02, 1.02)\`;
          card.style.setProperty('--mouse-x', \`\${x - rect.width}px\`);
          card.style.setProperty('--mouse-y', \`\${y - rect.height}px\`);
        });

        card.addEventListener('mouseleave', () => {
          card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
      });

      // Magnetic Buttons
      const magneticBtns = document.querySelectorAll('.magnetic-btn');
      magneticBtns.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          btn.style.transform = \`translate(\${x * 0.2}px, \${y * 0.2}px)\`;
        });
        btn.addEventListener('mouseleave', () => {
          btn.style.transform = 'translate(0px, 0px)';
        });
      });
    })();

    /* =========================================================================
       6. PROJECT FILTER ENGINE
       ========================================================================= */
    (function initProjectFilters() {
      const filterBtns = document.querySelectorAll('.filter-btn');
      const projectCards = document.querySelectorAll('.project-card');

      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          filterBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          const filter = btn.getAttribute('data-filter');

          projectCards.forEach(card => {
            const categories = card.getAttribute('data-category').split(' ');
            if (filter === 'all' || categories.includes(filter)) {
              card.classList.remove('hidden');
              setTimeout(() => card.classList.add('active'), 50);
            } else {
              card.classList.add('hidden');
              card.classList.remove('active');
            }
          });
        });
      });
    })();

    /* =========================================================================
       7. SHOWCASE CAROUSEL SLIDER
       ========================================================================= */
    (function initShowcaseCarousel() {
      const track = document.getElementById('showcase-track');
      const dots = document.querySelectorAll('.carousel-dot');
      const prevBtn = document.getElementById('carousel-prev');
      const nextBtn = document.getElementById('carousel-next');
      if (!track) return;

      let currentIndex = 0;
      const totalSlides = dots.length;

      function updateSlide(index) {
        currentIndex = (index + totalSlides) % totalSlides;
        
        // Calculate offset percentage
        const isMobile = window.innerWidth <= 768;
        const slideWidth = isMobile ? 100 : 50;
        const gapOffset = isMobile ? 0 : 0.875;
        
        track.style.transform = \`translateX(-\${currentIndex * (slideWidth + gapOffset)}%)\`;

        dots.forEach((dot, idx) => {
          dot.classList.toggle('active', idx === currentIndex);
        });
      }

      if (prevBtn) prevBtn.addEventListener('click', () => updateSlide(currentIndex - 1));
      if (nextBtn) nextBtn.addEventListener('click', () => updateSlide(currentIndex + 1));

      dots.forEach(dot => {
        dot.addEventListener('click', () => {
          const idx = parseInt(dot.getAttribute('data-index'), 10);
          updateSlide(idx);
        });
      });

      // Touch / Swipe Support
      let touchStartX = 0;
      let touchEndX = 0;

      track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) {
          updateSlide(currentIndex + 1); // Swipe left
        } else if (touchEndX - touchStartX > 50) {
          updateSlide(currentIndex - 1); // Swipe right
        }
      }, { passive: true });
    })();

    /* =========================================================================
       8. MOBILE DRAWER NAVIGATION
       ========================================================================= */
    (function initMobileDrawer() {
      const openBtn = document.getElementById('hamburger-open');
      const closeBtn = document.getElementById('hamburger-close');
      const menu = document.getElementById('mobile-menu');
      const overlay = document.getElementById('mobile-overlay');
      const links = document.querySelectorAll('.mobile-link');

      function openMenu() {
        menu.classList.add('open');
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
      }

      function closeMenu() {
        menu.classList.remove('open');
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      }

      if (openBtn) openBtn.addEventListener('click', openMenu);
      if (closeBtn) closeBtn.addEventListener('click', closeMenu);
      if (overlay) overlay.addEventListener('click', closeMenu);

      links.forEach(link => link.addEventListener('click', closeMenu));
    })();

    /* =========================================================================
       9. CONTACT FORM SUBMISSION & TOAST
       ========================================================================= */
    function handleFormSubmit(e) {
      e.preventDefault();
      const submitBtn = document.getElementById('form-submit-btn');
      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const subject = document.getElementById('form-subject').value.trim();
      const message = document.getElementById('form-message').value.trim();

      if (!name || !email || !message) return;

      // Loading UI State
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span style="display:inline-block;animation:spin 1s linear infinite;">⏳</span> <span>Sending...</span>';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = \`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg><span>Send Message</span>\`;

        // Reset form
        document.getElementById('contact-form').reset();

        // Show Toast Notice
        showToast(\`Thank you, \${name}! Your message has been sent successfully.\`);

        // Optional mailto trigger fallback
        const mailtoUri = \`mailto:\${USER_CONFIG.email}?subject=\${encodeURIComponent(subject)}&body=\${encodeURIComponent('From: ' + name + ' (' + email + ')\\n\\n' + message)}\`;
        console.log('Contact form dispatched. Mailto URI prepared:', mailtoUri);
      }, 1000);
    }

    function showToast(msg) {
      const toast = document.getElementById('toast-notice');
      const toastMsg = document.getElementById('toast-msg');
      if (!toast || !toastMsg) return;

      toastMsg.textContent = msg;
      toast.classList.add('show');

      setTimeout(() => {
        toast.classList.remove('show');
      }, 4000);
    }
  </script>
</body>
</html>`;

fs.writeFileSync(path.join(__dirname, 'index.html'), htmlContent, 'utf8');
console.log('Successfully generated self-contained index.html! File size:', fs.statSync(path.join(__dirname, 'index.html')).size, 'bytes');
