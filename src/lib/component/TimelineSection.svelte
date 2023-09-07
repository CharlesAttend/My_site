<script>
  export let title;
  export let current = false;
  export let date;
  export let text;
</script>

<li class="mb-10 ml-4">
  <div
    class="absolute w-3 h-3 bg-sapphire rounded-full mt-1.5 -left-1.5 border border-white"
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
    class="inline-flex items-center px-4 py-2 text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark: dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
  >
    <p>Learn more</p>
    <svg
      class="w-3 h-3 ml-2"
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
