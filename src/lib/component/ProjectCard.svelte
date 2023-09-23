<script>
  export let title;
  export let text;
  export let badges = [];
</script>

<div class="inline-flex w-full items-center rounded-xl border p-2 shadow-md">
  <div>
    <h3>{title}</h3>
    <p>
      {text}
    </p>
    <div>
      {#each badges as badge_text}
        <small
          class="mr-2 rounded-full bg-[#c9eff5] px-2.5 py-0.5 text-[#104f5a] dark:bg-[#0a3036] dark:text-[#81d9e9]"
        >
          {badge_text}
        </small>
      {/each}
    </div>
  </div>

  <svg
    class="h-10 w-10"
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
</div>
