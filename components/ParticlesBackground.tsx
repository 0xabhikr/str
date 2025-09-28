'use client';

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadLinksPreset } from '@tsparticles/preset-links';
import type { Engine, Container } from '@tsparticles/engine';

export default function ParticlesBackground() {
  const [isEngineReady, setIsEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadLinksPreset(engine);
    }).then(() => {
      setIsEngineReady(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    // optional: console.log(container);
  };

  const options = {
    preset: 'links',
    fullScreen: { enable: true, zIndex: -1 },
    background: { color: { value: 'transparent' } },
    particles: {
      color: { value: '#ffffff' },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
      },
      number: { value: 50 },
      opacity: { value: 0.3 },
      size: { value: 2 },
    },
  };

  return isEngineReady ? (
    <Particles
      id="tsparticles"
      options={options}
      particlesLoaded={particlesLoaded}
    />
  ) : null;
}
