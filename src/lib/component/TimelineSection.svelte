<script>
  export let title;
  export let date;
  export let text;
</script>

<li class="mb-10 ml-4">
  <div
    class="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-mauve"
  />
  <small class="mb-1"><time>{date}</time></small>
  <h3 class="text-lg font-semibold">
    {title}
  </h3>
  <p class="mb-4">
    {text}
  </p>
  <a
    href="#"
    class="dark: inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
  >
    <p>Learn more</p>
    <svg
      class="ml-2 h-3 w-3"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
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
  </a>
</li>
