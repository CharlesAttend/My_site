<script>
  import Button from "$lib/component/Button.svelte";
  import ProjectCard from "$lib/component/ProjectCard.svelte";
</script>

<h2 class="m-5 text-center">Project Spotlight</h2>
<div class="inline-flex flex-col items-center gap-2">
  <div class="grid w-full auto-rows-auto gap-5">
    <ProjectCard
      title="Neural Network DIY"
      badges={["Numpy", "Mathematics", "Neural Networks"]}
      link="https://github.com/dataymeric/NeuralNetworksDIY"
    >
      <ul class="list-inside list-disc">
        <li>Development of a neural network library entirely in Numpy</li>
        <li>
          Implementation of essential modules (linear layers, 1D convolutions,
          etc.) for creating, training and evaluating neural networks.
        </li>
        <li>
          Performance optimization through advanced use of Numpy for efficient
          computation
        </li>
      </ul>
    </ProjectCard>

    <ProjectCard
      title="More projects descriptions coming soon"
      badges={["coming", "Soon"]}
      link="https://github.com/dataymeric/NeuralNetworksDIY"
    >
      <p>😉</p>
    </ProjectCard>
  </div>
  <Button
    link="https://charlesattend.notion.site/7c86cccb99a240ba8143ecd763965de5?v=c1ed913cddfb4cd1aa0feacfafcf72cb&pvs=4"
  />
</div>
