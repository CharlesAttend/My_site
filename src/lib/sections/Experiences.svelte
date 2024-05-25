<script>
  import TimelineSection from "$lib/component/TimelineSection.svelte";
  import Filboost from "$lib/contents/en/experiences/Filboost.svelte";
  import PLDAC from "$lib/contents/en/experiences/PLDAC.svelte";
  import Freelance from "$lib/contents/en/experiences/Freelance.svelte";
  import SUAPS from "$lib/contents/en/experiences/SUAPS.svelte";
  import TER_MIASHS from "$lib/contents/en/experiences/TER_MIASHS.svelte";
  import Temporary from "$lib/contents/en/experiences/Temporary.svelte";
  import Stage_L2 from "$lib/contents/en/experiences/Stage_L2.svelte";
  import Stage_CNAM from "$lib/contents/en/experiences/Stage_CNAM.svelte";

  const timelines = [
    {
      title: "Research Internship - Self-supervised Learning on Satellite Image Time Series",
      date: "03/2024 - 09/2024",
      type_place: "Conservatoire national des arts et métiers (CNAM) - Paris",
      textComponent: Stage_CNAM,
    },
    {
      title: "Freelance - Frontend web developpement",
      date: "Summer 2023",
      type_place: "Paris",
      textComponent: Freelance,
    },
    {
      title: "Research project - Explainable insects classification",
      date: "01/2023 - 06/2023",
      type_place: "Sorbonne University - Paris",
      textComponent: PLDAC,
    },
    {
      title: "Intership - Signal Processing and Data Analysis",
      date: "Summer 2022",
      type_place: "Filboost x SCALAB Laboratory - Lille",
      textComponent: Filboost,
    },
    {
      title: "Temporary - SCALab Laboratory",
      date: "Summer 2022",
      type_place: "Lille",
      textComponent: SUAPS,
    },
    {
      title: "Research Project - INRIA",
      date: "Second semester 2022",
      type_place: "Lille",
      textComponent: TER_MIASHS,
    },
    {
      title: "Temporary - SCALab Laboratory",
      date: "First semester 2021",
      type_place: "Lille",
      textComponent: Temporary,
    },
    {
      title: "Intership - SCALab Laboratory",
      date: "Summer 2021",
      type_place: "Lille",
      textComponent: Stage_L2,
    },
  ];
</script>

<div class="w-full sm:max-w-xl">
  <h2 class="text-center">Experiences</h2>
  <ol class="relative m-2.5 border-l border-mauve dark:border-gray-700">
    {#each timelines as timeline}
      <TimelineSection {...timeline} />
    {/each}
  </ol>
</div>
