<script>
  import Interactive_card from "$lib/component/Interactive_card.svelte";
  import cooking from "$lib/assets/cooking.svg";
  import plant from "$lib/assets/plant.svg";
  import headset from "$lib/assets/headset.svg";
</script>

<h2 class="m-5 text-center">Hobbies</h2>
<div class="grid grid-cols-2 grid-rows-2 gap-5">
  <div class="">
    <Interactive_card
      title="Cooking"
      img={cooking}
      alt="cooking icon"
      text="See more"
      url="learnmore/cooking"
    >
      <h1>Inspiration</h1>
      <ul class="list-inside list-disc">
        <li>
          Now this is a story all about how, my life got flipped-turned upside
          down
        </li>
        <!-- ... -->
      </ul>
    </Interactive_card>
  </div>
  <div>
    <Interactive_card
      title="Gardening"
      img={plant}
      alt="plant icon"
      text="See more"
    >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
      voluptas dolorum provident est voluptates sequi debitis eos, esse qui
      fugit explicabo culpa voluptatem cupiditate incidunt ipsam nam enim vitae
      impedit.
    </Interactive_card>
  </div>
  <div class="col-span-2">
    <Interactive_card
      title="Musics"
      img={headset}
      alt="headset icon"
      text="See more"
    >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
      voluptas dolorum provident est voluptates sequi debitis eos, esse qui
      fugit explicabo culpa voluptatem cupiditate incidunt ipsam nam enim vitae
      impedit.
    </Interactive_card>
  </div>
  <div class="col-span-2"></div>
</div>
