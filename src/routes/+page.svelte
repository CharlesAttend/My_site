<script>
  import LandingPage from "$lib/sections/LandingPage.svelte";
  import Me from "$lib/sections/Me.svelte";
  import Education from "$lib/sections/Education.svelte";
  import Experiences from "$lib/sections/Experiences.svelte";
  import Projets from "$lib/sections/Projects.svelte";
  import Sports from "$lib/sections/Sports.svelte";
  import { setContext } from "svelte";
  import Hobbies from "$lib/sections/Hobbies.svelte";
</script>

<LandingPage />
<div
  class="inline-flex w-full grow flex-col items-center bg-base px-2.5 text-text xl:px-[32rem]"
>
  <Me />
  <Projets />
  <Sports />
  <Hobbies />
  <Education />
  <Experiences />
</div>
