function App() {
  return (
    <div className="bg-white snap-both scroll-smooth">
      <nav className="fixed lg:hidden text-lg w-full shadow-lg py-2 z-20">
        <div class="flex justify-evenly items-center font-medium px-2">
          <div className="border-l-1 border-r-5 border-red-700">Accueil</div>
          <div className="border-l-1 border-r-5 border-red-700" onClick={}>Blog</div>
        </div>
      </nav>
      <LandingPage/>
      <Presentation/>
      <Projet/>
    </div>
  );
}

// bg-gradient-to-t from-gray-500 to-transparent bg-fixed"
const LandingPage = () => (
  <div className="flex flex-col justify-center text-center "> 
    <h1>Charles Vin</h1>
    <h2>L3-MIASHS-SC</h2>
  </div>
)

const Presentation = () => (
  <div className="" id="presentation">
    <div className="bg-white p-1 border-l-4 border-bleu shadow-lg">
      <img className="rounded-full" src="pp.jpg" alt="profile pic"/>
      <div class='sectionText'>
          <p>Étudiant en licence MIASHS, je suis passionné par les mathématiques et l'informatique.</p>
          <p>Durant mon temps libre j'approfondis mes connaissances en informatique par de nombreux projets.</p>
          <p>L'enseignement des Sciences-Cognitives me permet de voir au dela des applications usuelles de
              l'informatique en adaptant au maximum la machine à l'Homme.</p>
          <p>Je fais de l'escalade et de la course à pied depuis plusieurs années. 
            Écologiste, j'ai déjà pratiqué la permaculture et essaye de limiter mon impact environnemental au quotidien. 
            Je m’intéresse également aux cryptomonnaies et à la blockchain qui me semble être une innovation incroyable par son apport de décentralisation. </p>
      </div>
    </div>
  </div>
)

const Projet = () => (
  <div className="flex flex-col items-center bg-white ">
    <a href='blog.html' className="border p-2 m-2 rounded-md">Acceder au blog</a>
    <div className="grid grid-cols-3 gap-4 justify-center text-center">
      <div className="card">
        <img src="" alt="" className="" />
        <div className="">
          <h1>MusicSync</h1>
        </div>
        <div className="">
          <h2>Téléchargement et synchronisation de playlist soundcloud et youtube.</h2>
          <i>python, crontab, owncloud, webdav, youtubeDL</i>
          <p><a href="https://django.charles.vin/musicsync" class="button">Accéder à l'interface</a></p>
        </div>
      </div>
      <div className="card">test test </div>
      <div className="card">test test </div>
      <div className="card">test test </div>
      <div className="card">test test </div>
    </div>
  </div>
)
export default App;
