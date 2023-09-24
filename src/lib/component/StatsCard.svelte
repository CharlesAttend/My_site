<script>
  import { getContext } from "svelte";
  export let title;
  export let subtitle;
  export let text;
</script>

<div
  class="inline-flex h-full w-full flex-col items-center justify-center gap-2.5 border-2 border-mauve shadow-xl"
>
  <h3>{title}</h3>
  <div class="flex w-full justify-evenly">
    {#await getContext("stats")}
      <div class="m-2.5 h-1/3 bg-slate-300"></div>
    {:then stats}
      {#each stats as stat}
        <div class="flex flex-col items-center justify-center">
          <h2 class="m-2.5 flex h-1/3 items-center gap-1">
            {stat.number} <small class="self-end">{stat.unit}</small>
          </h2>

          <h3>{stat.label}</h3>
        </div>
      {/each}
    {:catch error}
      <p style="color: red">{error.message}</p>
    {/await}
  </div>
  <h3>{subtitle}</h3>
  <p>{text}</p>
</div>
