<script>
  import LandingPage from "$lib/sections/LandingPage.svelte";
  import Me from "$lib/sections/Me.svelte";
  export let data;
  console.log(data);
</script>

<div class="bg-base text-text px-2.5">
  <LandingPage />
  <Me />
</div>
