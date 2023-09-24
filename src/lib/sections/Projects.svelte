<script>
  import Button from "$lib/component/Button.svelte";
  import ProjectCard from "$lib/component/ProjectCard.svelte";
</script>

<h2 class="m-5 text-center">Project Spotlight</h2>
<div class="inline-flex flex-col items-center gap-2">
  <div class="grid w-full grid-rows-3 gap-5">
    <ProjectCard
      title="Neural Network DIY"
      text="Sit esse excepteur eu aute. Occaecat officia irure esse veniam dolore nisi. Laborum amet irure elit nulla velit voluptate. Voluptate velit minim irure ex."
      badges={["Mathematics", "Numpy", "Neural Networks"]}
      link=""
    />

    <ProjectCard
      title="Neural Network DIY"
      text="Sit esse excepteur eu aute. Occaecat officia irure esse veniam dolore nisi. Laborum amet irure elit nulla velit voluptate. Voluptate velit minim irure ex."
      badges={["Lorem", "Ipsum", "Occaecat"]}
      link=""
    />

    <ProjectCard
      title="Neural Network DIY"
      text="Sit esse excepteur eu aute. Occaecat officia irure esse veniam dolore nisi. Laborum amet irure elit nulla velit voluptate. Voluptate velit minim irure ex."
      badges={["Officia", "Irure", "Esse"]}
      link=""
    />
  </div>
  <Button />
</div>
