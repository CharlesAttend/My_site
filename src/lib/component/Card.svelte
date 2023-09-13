<script>
  export let img;
  export let alt = "";
  export let title;
  export let text = "";

  let showmore = false;
</script>

<div
  class="inline-flex h-full w-full flex-col items-center justify-center border-2 border-mauve shadow-xl"
>
  <img class="m-2.5 h-1/3" src={img} {alt} />
  <h3>{title}</h3>

  <p>{text}</p>
</div>

{#if showmore}
  <div>
    <slot />
  </div>
{/if}
