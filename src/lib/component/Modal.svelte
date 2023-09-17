<script>
  import cross from "$lib/assets/cross.svg";
  export let showModal; // boolean

  let dialog; // HTMLDialogElement

  $: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
  class=" w-11/12 max-w-lg rounded border border-sapphire bg-base text-text"
  bind:this={dialog}
  on:close={() => (showModal = false)}
  on:click|self={() => dialog.close()}
>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div on:click|stopPropagation class=" h-[90vh] p-4">
    <slot />
  </div>

  <!-- svelte-ignore a11y-autofocus -->
  <button
    class="absolute bottom-0 right-0 m-2 rounded-full border border-red bg-surface0 p-5 shadow-xl hover:bg-surface1"
    autofocus
    on:click={() => dialog.close()}
  >
    <img src={cross} class="h-6" alt="close" />
  </button>
</dialog>

<style>
  dialog[open] {
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  @keyframes zoom {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }
  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
