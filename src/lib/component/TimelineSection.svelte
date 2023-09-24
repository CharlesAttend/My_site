<script>
  import Button from "$lib/component/Button.svelte";
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
  <Button />
</li>
