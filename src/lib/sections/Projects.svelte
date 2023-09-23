<script>
  import ProjectCard from "$lib/component/ProjectCard.svelte";
</script>

<h2 class="m-5 text-center">Project Spotlight</h2>
<div>
  <div class="grid w-full grid-rows-3 gap-2">
    <ProjectCard
      title="Neural Network DIY"
      text="Sit esse excepteur eu aute. Occaecat officia irure esse veniam dolore nisi. Laborum amet irure elit nulla velit voluptate. Voluptate velit minim irure ex."
    />

    <ProjectCard
      title="Neural Network DIY"
      text="Sit esse excepteur eu aute. Occaecat officia irure esse veniam dolore nisi. Laborum amet irure elit nulla velit voluptate. Voluptate velit minim irure ex."
    />

    <ProjectCard
      title="Neural Network DIY"
      text="Sit esse excepteur eu aute. Occaecat officia irure esse veniam dolore nisi. Laborum amet irure elit nulla velit voluptate. Voluptate velit minim irure ex."
    />
  </div>
  <a
    href="#"
    class="w-full items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:inline-flex dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
  >
    <p>See more</p>
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
</div>
