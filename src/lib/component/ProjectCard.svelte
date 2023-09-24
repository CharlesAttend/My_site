<script>
  export let title;
  export let text;
  export let link;
  export let badges = [];
</script>

<a
  class="border-mauve-300 inline-flex w-full items-center gap-2 rounded-xl border p-2 shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
  href={link}
>
  <div>
    <h3>{title}</h3>
    <p>
      {text}
    </p>
    <div>
      {#each badges as badge_text}
        <small
          class="bg-mauve-100 text-mauve-800 dark:bg-mauve-900 dark:text-mauve-300 mr-2 rounded-full px-2.5 py-0.5 text-center"
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
