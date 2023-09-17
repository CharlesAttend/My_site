<script>
  import Card from "$lib/component/Card.svelte";
  import running from "$lib/assets/running.svg";
  import climbing from "$lib/assets/climbing.svg";
  import StatsCard from "$lib/component/StatsCard.svelte";
</script>

<h2 class="text-center">My main sports</h2>
<div class="grid grid-cols-2 grid-rows-2 gap-5">
  <div class="">
    <Card title="Running" img={running}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
      voluptas dolorum provident est voluptates sequi debitis eos, esse qui
      fugit explicabo culpa voluptatem cupiditate incidunt ipsam nam enim vitae
      impedit.
    </Card>
  </div>
  <div>
    <Card title="Climbing" img={climbing}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
      voluptas dolorum provident est voluptates sequi debitis eos, esse qui
      fugit explicabo culpa voluptatem cupiditate incidunt ipsam nam enim vitae
      impedit.
    </Card>
  </div>
  <div class="col-span-2">
    <StatsCard
      title="Last 4 weeks"
      subtitle="Total Activities"
      text="Scrapped from Strava"
    />
  </div>
</div>
