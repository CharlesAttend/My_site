<script>
  export let text = "Learn more";
  export let link = "#";
  export let arrow = true;
</script>

<a
  href={link}
  class="border-mauve-200 hover:bg-mauve-100 focus:ring-mauve-200 dark:border-mauve-600 dark:bg-mauve-800 dark:hover:bg-mauve-700 dark:focus:ring-mauve-700 inline-flex items-center rounded-lg border px-4 py-2 text-text hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 dark:hover:text-white"
>
  <p>{text}</p>
  {#if arrow}
    <svg
      class="ml-2 h-3 w-3"
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
  {/if}
</a>
