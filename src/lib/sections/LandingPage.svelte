<div
  class="inline-flex h-screen w-full flex-col items-center justify-center gap-2.5 p-2.5"
>
  <div class="inline-flex items-center justify-center">
    <div
      class="inline-flex flex-col items-center justify-center gap-2.5 self-stretch border-2 border-mauve border-sapphire p-2.5 shadow-xl"
      id="animate-border"
    >
      <h1>Charles Vin</h1>
      <p>M2-DAC | Sorbonne université</p>
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
