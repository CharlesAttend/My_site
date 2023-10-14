<script>
  export let title;
  export let link;
  export let badges = [];

  // Badge : dark:bg-mauve-900 dark:text-mauve-300
</script>

<a
  class="inline-flex w-full items-center gap-2 rounded-xl border border-mauve-300 p-2 shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
  href={link}
  target="_blank"
  rel="noreferrer noopener"
>
  <div class="grow">
    <h3>{title}</h3>
    <slot />
    <div>
      {#each badges as badge_text}
        <small
          class="mr-2 rounded-full bg-mauve-100 px-2.5 py-0.5 text-center text-mauve-800 " 
        >
          {badge_text}
        </small>
      {/each}
    </div>
  </div>
  <div class="h-3 w-3">
    <svg
      class="h-3 w-3"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="#40a02b"
      viewBox="0 0 14 10"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M1 5h12m0 0L9 1m4 4L9 9"
      />
    </svg>
  </div>
</a>
