<script>
  import pp from "$lib/assets/pp.webp";
  import github_icon from "$lib/assets/github_icon.svg";
  import linkedin_icon from "$lib/assets/linkedin_icon.svg";
  import resume_icon from "$lib/assets/resume_icon.svg";
  import envelope_icon from "$lib/assets/envelope_icon.svg";
  const link_list = [
    { href: "", img: github_icon, alt: "github_icon", text: "CharlesAttend" },
    { href: "", img: linkedin_icon, alt: "linkedin_icon", text: "Charles Vin" },
    {
      href: "",
      img: envelope_icon,
      alt: "resume_icon",
      text: "charles.vin@outlook.fr",
    },
    { href: "", img: resume_icon, alt: "envelope_icon", text: "Resume" },
  ];
</script>

<div
  class="my-5 inline-flex w-full flex-col items-center justify-center gap-2.5 overflow-hidden"
>
  <img class="w-2/3 max-w-sm rounded-full shadow-lg" src={pp} alt="Me" />
  <!-- <h2 class="text-center">Usefull links</h2> -->
  <div class="grid w-full grid-cols-4 justify-items-center gap-5">
    {#each link_list as link}
      <a
        href={link.href}
        class="inline-flex items-center rounded-lg px-4 py-2 text-mauve-900 hover:bg-mauve-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-mauve-200"
      >
        <img class="w-7 lg:w-8 xl:w-9" src={link.img} alt={link.alt} />
      </a>
    {/each}
  </div>
</div>
