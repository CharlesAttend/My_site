<script>
  import cross from "$lib/assets/cross.svg";
  export let showModal; // boolean

  let dialog; // HTMLDialogElement

  $: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
  class=" w-11/12 max-w-lg rounded border border-mauve-300 bg-base text-text"
  bind:this={dialog}
  on:close={() => (showModal = false)}
  on:click|self={() => dialog.close()}
>
  <button></button>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div on:click|stopPropagation class=" h-[90vh] p-4">
    <slot />
  </div>

  <!-- svelte-ignore a11y-autofocus -->
  <button
    class="absolute bottom-0 right-0 m-2 rounded-full bg-red-700 p-3 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
    on:click={() => dialog.close()}
  >
    <img src={cross} class="h-10" alt="close" />
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
