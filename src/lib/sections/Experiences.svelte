<script>
  import TimelineSection from "$lib/component/TimelineSection.svelte";
  import Filboost from "$lib/contents/en/experiences/Filboost.svelte";
  import PLDAC from "$lib/contents/en/experiences/PLDAC.svelte";

  const timelines = [
    {
      title: "Research project - Explainable insects classification",
      date: "01/2023 - 06/2023",
      type_place: "Sorbonne University - Paris",
      textComponent: PLDAC,
    },
    {
      title: "Intership - Signal Processing and Data Analysis Internship",
      date: "Summer 2022",
      type_place: "Filboost x SCALAB Laboratory - Lille",
      textComponent: Filboost,
    },
  ];
</script>

<div class="w-full">
  <h2 class="text-center">Experiences</h2>
  <ol class="relative m-2.5 border-l border-mauve dark:border-gray-700">
    {#each timelines as timeline}
      <TimelineSection {...timeline} />
    {/each}
  </ol>
</div>
