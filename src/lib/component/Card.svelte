<script>
  export let img;
  export let alt = "";
  export let title;
  export let text = "";
</script>

<div
  class="inline-flex h-full w-full flex-col items-center justify-center rounded-xl border border-mauve-300 shadow-lg"
>
  <img class="m-2.5 h-1/3" src={img} {alt} />
  <h3>{title}</h3>

  <p class="px-2 text-center text-xs">{text}</p>
</div>
