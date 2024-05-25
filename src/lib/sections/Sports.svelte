<script>
  import Card from "$lib/component/Card.svelte";
  import running from "$lib/assets/running.svg";
  import climbing from "$lib/assets/climbing.svg";
  import StatsCard from "$lib/component/StatsCard.svelte";
</script>

<h2 class="m-2.5 text-center">My main sports</h2>

<div class="grid w-full grid-cols-2 grid-rows-2 gap-5 sm:max-w-2xl">
  <div class="aspect-square">
    <Card title="Running" img={running}></Card>
  </div>
  <div class="aspect-square">
    <Card title="Climbing" img={climbing}></Card>
  </div>
  <div class="col-span-2">
    <StatsCard
      title="Last 4 weeks"
      subtitle="Total Activities"
      text="Fetched using Strava API"
    />
  </div>
</div>
