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
  const filters_text = [
    "Any",
    "ML Engineer",
    "Data Science",
    "Research",
    "Data Analyst",
    "Web",
    "Cognitive Science",
  ];
  let selected_filter = "ML Engineer";

  const timelines = [
    {
      title:
        "Research Internship - Self-supervised Learning on Satellite Image Time Series",
      date: "03/2024 - 09/2024",
      type_place: "Conservatoire national des arts et métiers (CNAM) - Paris",
      textComponent: Stage_CNAM,
      filters: ["ML Engineer", "Research"],
    },
    {
      title: "Freelance - Frontend web developpement",
      date: "Summer 2023",
      type_place: "Paris",
      textComponent: Freelance,
      filters: ["Web"],
    },
    {
      title: "Research project - Explainable insects classification",
      date: "01/2023 - 06/2023",
      type_place: "Sorbonne University - Paris",
      textComponent: PLDAC,
      filters: ["ML Engineer", "Data Science", "Research"],
    },
    {
      title: "Intership - Signal Processing and Data Analysis",
      date: "Summer 2022",
      type_place: "Filboost x SCALAB Laboratory - Lille",
      textComponent: Filboost,
      filters: ["Data Analyst", "Cognitive Science"],
    },
    {
      title: "Temporary - SCALab Laboratory",
      date: "Summer 2022",
      type_place: "Lille",
      textComponent: SUAPS,
      filters: ["Data Science", "Cognitive Science"],
    },
    {
      title: "Research Project - INRIA",
      date: "Second semester 2022",
      type_place: "Lille",
      textComponent: TER_MIASHS,
      filters: ["ML Engineer", "Data Science", "Research"],
    },
    {
      title: "Temporary - SCALab Laboratory",
      date: "First semester 2021",
      type_place: "Lille",
      textComponent: Temporary,
      filters: ["Data Analyst", "Cognitive Science"],
    },
    {
      title: "Intership - SCALab Laboratory",
      date: "Summer 2021",
      type_place: "Lille",
      textComponent: Stage_L2,
      filters: ["Data Analyst", "Cognitive Science"],
    },
  ];
</script>

<div class="w-full sm:max-w-2xl">
  <h2 class="text-center">Experiences</h2>
  <div class="m-2.5 flex flex-wrap items-baseline justify-center text-xs">
    <span class="mr-2 text-center">Filter by roles: </span>
    {#each filters_text as filters_text}
      <button
        class="{selected_filter == filters_text
          ? 'border-[0.5px] border-mauve bg-mauve-100 text-mauve-800'
          : 'text-text'} mb-2 mr-2 rounded-full border border-mauve-200 px-2.5 py-0.5 text-center hover:bg-mauve-100 hover:text-mauve-800 focus:z-10"
        on:click={() => (selected_filter = filters_text)}
      >
        {filters_text}
      </button>
    {/each}
  </div>
  <div>
    {#if selected_filter != "Any"}
      <span class="text-xs text-mauve">Filtered</span>
    {/if}
    <ol class="relative m-2.5 border-l border-mauve dark:border-gray-700">
      {#each timelines as timeline}
        {#if selected_filter == "Any" || timeline.filters.includes(selected_filter)}
          <TimelineSection {...timeline} />
        {/if}
      {/each}
    </ol>
  </div>
</div>
