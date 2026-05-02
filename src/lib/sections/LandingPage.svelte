<script>
  import { onMount } from "svelte";
  import particlesConfig from "$lib/assets/particlesConfig";

  let ParticlesComponent;

  onMount(async () => {
    const [{ default: SvelteParticles, particlesInit }, { loadSlim }] =
      await Promise.all([import("@tsparticles/svelte"), import("@tsparticles/slim")])

    await particlesInit(async (engine) => {
      await loadSlim(engine);
    });

    ParticlesComponent = SvelteParticles;
  });

  const onParticlesLoaded = (event) => {
    const particlesContainer = event.detail.particles;
  };
</script>

<div class="relative h-screen w-full bg-base">
  {#if ParticlesComponent}
    <svelte:component
      this={ParticlesComponent}
      id="tsparticles"
      class="h-full w-full"
      options={particlesConfig}
      on:particlesLoaded={onParticlesLoaded}
    />
  {/if}
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
      <p>Freelance ML Engineer</p>
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
