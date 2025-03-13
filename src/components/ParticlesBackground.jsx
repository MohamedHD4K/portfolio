import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Use `tsparticles-slim` for smaller bundle size

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // Initialize the tsParticles instance
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: "bg-base-100", // Black background
        },
        particles: {
          color: {
            value: "#ffffff", // White particles
          },
          links: {
            color: "#ffffff", // White links between particles
            enable: true, // Enable links
          },
          move: {
            enable: true, // Enable particle movement
            speed: 2, // Movement speed
          },
          number: {
            value: 50, // Number of particles
          },
          opacity: {
            value: 0.5, // Particle opacity
          },
          shape: {
            type: "circle", // Particle shape
          },
          size: {
            value: 3, // Particle size
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;