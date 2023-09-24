<script>
  export let img;
  export let alt = "";
  export let title;
  export let text = "";
  import Modal from "$lib/component/Modal.svelte";

  let showModal = false;
</script>

<button
  class="border-mauve-300 inline-flex h-full w-full flex-col items-center justify-center rounded-xl border shadow-lg"
  on:click={() => (showModal = true)}
>
  <img class="m-2.5 h-1/3" src={img} {alt} />
  <h3>{title}</h3>
  <p>{text}</p>
</button>

<Modal bind:showModal>
  <slot />
</Modal>
