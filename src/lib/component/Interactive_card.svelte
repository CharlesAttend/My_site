<script>
  export let img;
  export let alt = "";
  export let title;
  export let text = "";
  import Modal from "$lib/component/Modal.svelte";

  let showModal = false;
</script>

<button
  class="inline-flex h-full w-full flex-col items-center justify-center rounded-xl border border-mauve-300 shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
  on:click={() => (showModal = true)}
>
  <img class="m-2.5 h-1/3" src={img} {alt} />
  <h3>{title}</h3>
  <p>{text}</p>
</button>

<Modal bind:showModal>
  <slot />
</Modal>
