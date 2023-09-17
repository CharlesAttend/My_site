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
  class="inline-flex w-full flex-col items-center justify-center gap-2.5 overflow-hidden"
>
  <img
    class="w-2/3 max-w-sm rounded-full border-2 border-sapphire"
    src={pp}
    alt="Me"
  />
  <h2 class="text-center">Usefull links</h2>
  <div class=" inline-flex w-full flex-col gap-5">
    {#each link_list as link}
      <a href={link.href} class="flex gap-5">
        <img src={link.img} alt={link.alt} />
        <p>{link.text}</p>
      </a>
    {/each}
  </div>
</div>
