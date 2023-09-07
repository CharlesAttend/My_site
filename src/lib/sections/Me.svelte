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

<div class="w-full flex-col justify-center items-center gap-2.5 inline-flex">
  <img class="p-20 max-w-sm rounded-full" src={pp} alt="Profile picture" />
  <h2 class="text-center">Usefull links</h2>
  <div class=" gap-5 inline-flex flex-col w-full">
    {#each link_list as link}
      <a href={link.href} class="flex gap-5">
        <img src={link.img} alt={link.alt} />
        <p>{link.text}</p>
      </a>
    {/each}
  </div>
</div>
