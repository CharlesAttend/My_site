<div
  class="p-2.5 bg-base h-screen w-screen flex-col justify-center items-center gap-2.5 inline-flex"
>
  <div class="justify-center items-center inline-flex">
    <div
      class="self-stretch p-2.5 shadow-xl border border-mauve border-sapphire flex-col justify-center items-center gap-2.5 inline-flex"
      id="animate-border"
    >
      <div class="text-text text-4xl font-normal leading-10">Charles Vin</div>
      <div class="text-text text-xs font-normal leading-none">
        M2-DAC | Sorbonne université
      </div>
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
