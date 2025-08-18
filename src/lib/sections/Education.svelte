<script>
  import TimelineSection from "$lib/component/TimelineSection.svelte";
  import DAC from "$lib/contents/en/education/DAC.svelte";
  import MIASHS from "$lib/contents/en/education/MIASHS.svelte";

  const timelines = [
    {
      title:
        "Master's Degree in Computer Science - Specialisation Data, Machine Learning, and Knowledge (DAC)",
      date: "2022 - 2024",
      type_place: "Sorbonne University",
      textComponent: DAC,
      href: "https://dac.lip6.fr/master/description/enseignement-acc/",
    },
    {
      title:
        "Bachelor's degree, Mathematics and Computer Science applied to Cognitive Science",
      date: "2019 - 2022",
      type_place: "University of Lille",
      href: "https://sciences-technologies.univ-lille.fr/mathematiques/formation/licence-mention-miashs",
      textComponent: MIASHS,
    },
  ];
</script>

<div class="w-full sm:max-w-2xl">
  <h2 class="text-center">Education</h2>
  <ol class="relative m-2.5 border-l border-mauve dark:border-gray-700">
    {#each timelines as timeline}
      <TimelineSection {...timeline} />
    {/each}
  </ol>
</div>
