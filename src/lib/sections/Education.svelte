<script>
  import TimelineSection from "$lib/component/TimelineSection.svelte";
  const timelines = [
    {
      title: "Oui oui oui",
      date: "22 Aout",
      text: "Veniam mollit sint elit consequat nulla proident ex magna id occaecat enim dolor nisi. Anim ex nisi consectetur reprehenderit ut consectetur anim proident veniam exercitation incididunt. Velit aliqua esse veniam ullamco eu proident non ipsum mollit ea sunt fugiat in ipsum. Proident consequat consectetur sunt adipisicing irure nisi tempor laboris laborum non sint voluptate cupidatat magna. Fugiat voluptate adipisicing reprehenderit duis eiusmod cupidatat.",
      current: true,
    },
    {
      title: "Oui oui oui",
      date: "22 Aout",
      text: "Elit occaecat culpa eiusmod occaecat sit. Esse sint mollit cupidatat laborum eu sint cupidatat laboris tempor. Ad enim ullamco consequat sunt incididunt commodo laboris sint duis amet.",
    },
    {
      title: "Oui oui oui",
      date: "22 Aout",
      text: "Elit occaecat culpa eiusmod occaecat sit. Esse sint mollit cupidatat laborum eu sint cupidatat laboris tempor. Ad enim ullamco consequat sunt incididunt commodo laboris sint duis amet.",
      current: true,
    },
  ];
</script>

<div class="">
  <h2 class="text-center">Education</h2>
  <ol class="m-2.5 relative border-l border-sapphire dark:border-gray-700">
    {#each timelines as timeline}
      <TimelineSection {...timeline} />
    {/each}
  </ol>
</div>
