<script>
  import LandingPage from "$lib/sections/LandingPage.svelte";
  import Me from "$lib/sections/Me.svelte";
  import Education from "$lib/sections/Education.svelte";
  import Experiences from "$lib/sections/Experiences.svelte";
  import Sports from "$lib/sections/Sports.svelte";
  import { setContext } from "svelte";
  import Hobbies from "$lib/sections/Hobbies.svelte";

  export let data;
  setContext("stats", data.stats);
</script>

<div class="bg-base px-2.5 text-text">
  <LandingPage />
  <Me />
  <Education />
  <Experiences />
  <Sports />
  <Hobbies />
</div>
