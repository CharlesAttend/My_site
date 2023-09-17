const ParticlesParam = {
  fullScreen: { enable: false, zIndex: 0 },
  background: {
    color: {
      // value: "#202124",
      // value: "#F4F9E9",
      value: "#eff1f5",
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: false,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#209fb5",
    },
    links: {
      color: "#209fb5",
      distance: 150,
      enable: true,
      opacity: 0.05,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "right",
      enable: true,
      // outMode: "bounce",
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 1500,
      },
      value: 100,
    },
    opacity: {
      value: 0.6,
    },
    shape: {
      type: "circle",
    },
    size: {
      random: true,
      value: 5,
    },
  },
  detectRetina: true,
};

export default ParticlesParam;
