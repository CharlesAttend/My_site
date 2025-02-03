<script lang="ts">
  import { onMount } from "svelte";
  import { loadSlim } from "tsparticles-slim";
  import particlesConfig from "$lib/assets/particlesConfig";

  let ParticlesComponent;
  onMount(async () => {
    const module = await import("svelte-particles");

    ParticlesComponent = module.default;
  });

  let onParticlesLoaded = (event) => {
    const particlesContainer = event.detail.particles;

    // you can use particlesContainer to call all the Container class
    // (from the core library) methods like play, pause, refresh, start, stop
  };

  let particlesInit = async (engine) => {
    // you can use main to customize the tsParticles instance adding presets or custom shapes
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(main);
    await loadSlim(engine);
  };
</script>

<div class="relative h-screen w-full bg-base">
  <svelte:component
    this={ParticlesComponent}
    id="tsparticles"
    class="h-full w-full"
    style=""
    options={particlesConfig}
    on:particlesLoaded={onParticlesLoaded}
    {particlesInit}
  />
</div>

<div
  class="absolute right-0 top-0 inline-flex h-screen w-full flex-col items-center justify-center gap-2.5 p-2.5"
>
  <div class="inline-flex items-center justify-center bg-base">
    <div
      class="inline-flex flex-col items-center justify-center gap-2.5 self-stretch border-2 border-mauve border-sapphire p-2.5 shadow-xl"
      id="animate-border"
    >
      <h1>Charles Vin</h1>
      <p>ML Engineer | Data Engineer</p>
      <!-- <p>Interactive Resume & Portfolio</p> -->
    </div>
  </div>
</div>

<style>
  @property --angle {
    syntax: "<angle>";
    initial-value: 0deg;
    inherits: false;
  }

  :root {
    --d: 10s;
    --angle: 0deg;
    --c-mauve: rgba(var(--ctp-mauve));
    --c-white: rgba(168, 239, 255, 0.1);
    --c-sapphire: rgba(var(--ctp-sapphire));
  }

  #animate-border {
    border-image: conic-gradient(
        from var(--angle),
        var(--c-mauve),
        var(--c-mauve),
        var(--c-mauve),
        var(--c-mauve),
        var(--c-sapphire),
        var(--c-mauve),
        var(--c-mauve),
        var(--c-mauve),
        var(--c-mauve)
      )
      1;

    animation: var(--d) rotate linear infinite;
  }

  @keyframes borderRotate {
    100% {
      --angle: 90deg;
    }
  }

  @keyframes rotate {
    to {
      --angle: 360deg;
    }
  }
</style>
