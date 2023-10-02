<script>
  import Button from "$lib/component/Button.svelte";
  export let title;
  export let date;
  export let textComponent;
  export let type_place = "";
  export let href;
</script>

<li class="mb-10 ml-4">
  <div
    class="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-mauve"
  />
  <div class="mb-1 inline-flex flex-col">
    <small><time>{date}</time></small>
  </div>
  <h3 class="text-lg font-semibold">
    {title}
  </h3>
  <small><time>{type_place}</time></small>
  <div class="mb-4">
    <svelte:component this={textComponent} />
  </div>
  {#if href}
    <Button link={href} />
  {/if}
</li>
