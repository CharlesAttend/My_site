<script>
  import Interactive_card from "$lib/component/Interactive_card.svelte";
  import cooking from "$lib/assets/cooking.svg";
  import plant from "$lib/assets/plant.svg";
  import headset from "$lib/assets/headset.svg";
  import Button from "$lib/component/Button.svelte";
</script>

<h2 class="m-5 text-center">Hobbies</h2>
<div
  class="grid w-full max-w-xl grid-cols-2 grid-rows-2 gap-5 sm:max-w-sm lg:max-w-lg xl:max-w-xl"
>
  <div class="aspect-square">
    <Interactive_card
      title="Cooking"
      img={cooking}
      alt="cooking icon"
      text="See more"
      url="learnmore/cooking"
    >
      <h2>Me & Cooking</h2>
      <p>Let me introduce my cooking philosophy throught a few key points</p>
      <ul>
        <li>
          Passionate Home Cooking: I cook often at home, driven by a deep
          passion for creating incredible food.
        </li>
        <li>
          Relaxed Approach: I don't sweat the small stuff. I'm all about
          enjoying the process and flavors, not stressing over perfection.
        </li>
        <li>
          Feeding Loved Ones: I love cooking for my family and friends, and I
          believe there's nothing quite like a homemade meal to show you care.
        </li>
        <li>
          Budget-Friendly Goodness: I'll show you how to make delicious meals
          that won't break the bank.
        </li>
      </ul>
      <br />
      <h2>Inspiration</h2>
      <p>
        I drew my inspiration and passion from a multitude of talented
        YouTubers. Here's a curated list of some of the best who have played a
        significant role in shaping my culinary journey:
      </p>
      <ul class="list-inside list-disc">
        <li>
          <a
            class="underline"
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.nsc-consultante-educative.fr/"
            >My mom
          </a> : the origin of my passion for cooking
        </li>
        <li>
          <a
            class="underline"
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.youtube.com/@ProHomeCooks"
            >Pro Home Cook
          </a> : the best
        </li>
        <li>
          <a
            class="underline"
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.youtube.com/@PickUpLimes"
            >Pick Up Lime
          </a> : Vegan cooking
        </li>
        <li>
          <a
            class="underline"
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.youtube.com/@JoshuaWeissman"
            >Joshua Weissman
          </a>
        </li>
        <li>
          <a
            class="underline"
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.youtube.com/@letsKWOOWK">KWOOKK</a
          >
        </li>
        <li>
          <a
            class="underline"
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.youtube.com/@BrianLagerstrom"
            >Brian Lagerstrom
          </a>
        </li>
        <li>
          <a
            class="underline"
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.youtube.com/@aragusea"
            >Adam Ragusea
          </a> : food science and experiments
        </li>
        <li>
          <a
            class="underline"
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.youtube.com/@adamliaw"
            >Adam Liaw
          </a>
        </li>
      </ul>
    </Interactive_card>
  </div>

  <div class="aspect-square">
    <Interactive_card
      title="Gardening"
      img={plant}
      alt="plant icon"
      text="See more"
    >
      <h2>Plants & Gardening</h2>
      <p>
        I've always had a deep appreciation for nature, growing up in the
        countryside helps a lot. However, my passion for plants truly blossomed
        during a high school biology class when I witnessed chloroplasts moving
        under a microscope. Those tiny green organelles, brimming with life and
        releasing oxygen bubbles, captivated me.
      </p>
      <p>
        My journey into the world of plants began in my high school years,
        largely influenced by YouTube. Over time, my interests expanded to
        gardening, agriculture, and eventually led me to explore
        "self-sufficiency" YouTubers. These individuals are dedicated to
        achieving energy and food self-sufficiency (without delving into extreme
        survivalism). It all intertwined with my fascination for culinary
        pursuits like making jams and preserving food.
      </p>

      <iframe
        width="100%"
        height="auto"
        class="mt-10 aspect-video"
        src="https://www.youtube-nocookie.com/embed/BB5rvjZzgFU?si=4ocQWuPF_vJbvce2"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <!-- 
      J'ai toujours eu une profonde admiration pour la nature, ce qui est naturel lorsque l'on grandit à la campagne. Cependant, ma passion pour les plantes a réellement éclos lors d'un cours de biologie au lycée, lorsque j'ai observé des chloroplastes se déplacer sous un microscope. Ces minuscules organites verts, débordant de vie et libérant des bulles d'oxygène, m'ont captivé.

      Mon voyage dans le monde des plantes a commencé pendant mes années de lycée, largement influencé par YouTube. Avec le temps, mes centres d'intérêt se sont étendus au jardinage, à l'agriculture, et m'ont finalement conduit à explorer les vidéastes "Autonomistes". Ces personnes sont dédiées à atteindre l'autosuffisance énergétique et alimentaire sans sombrer dans le survivalisme extrême. Tout cela s'est entrelacé avec ma fascination pour des activités culinaires telles que la fabrication de confitures et la conservation des aliments. 
      -->
    </Interactive_card>
  </div>

  <div class="col-span-2">
    <Interactive_card
      title="Musics"
      img={headset}
      alt="headset icon"
      text="See more"
    >
      <div class="inline-flex flex-col items-center gap-2">
        <p>
          My passion for music, particularly electronic music, ignited during my
          middle school years when I stumbled upon YouTube channels like
          MrSuicideSheep and Monstercat. From that moment on, I never stopped
          listening. I take pride in exploring the entire spectrum of electronic
          music.
        </p>
        <p>
          If you're curious about what's currently playing in my world, I invite
          you to check out my Last.fm profile, which aggregates my Soundcloud
          listens and gives you a glimpse into my musical journey.
        </p>

        <!-- <p>
          Ma passion pour la musique, en particulier la musique électronique, a
          pris feu pendant mes années de collège lorsque j'ai découvert des
          chaînes YouTube telles que MrSuicideSheep et Monstercat. Depuis ce
          moment-là, je n'ai jamais cessé d'écouter de la musique électronique.
          J'aime explorer l'ensemble du spectre de ce genre musical.
        </p>
        <p>
          Si vous êtes curieux de savoir ce qui résonne actuellement dans mon
          univers musical, je vous invite à consulter mon profil Last.fm, qui
          regroupe mes écoutes sur Soundcloud et vous offre un aperçu de mon
          voyage musical.
        </p> -->

        <Button
          text="My Last.fm"
          link="https://www.last.fm/user/CharlesAttend"
        />
      </div>
    </Interactive_card>
  </div>
  <div class="col-span-2"></div>
</div>
