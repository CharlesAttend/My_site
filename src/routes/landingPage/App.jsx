import React from "react";
import {
  Link
} from "react-router-dom";
import { useSpring, animated } from 'react-spring'
import ParticlesBackground from './ParticlesBackground'

import pp from './pp.jpg'
import bg from './background.jpg'

const App = () => {
  return (
    <div className="bg-cwhite font-body">
      {/* <nav className="fixed lg:hidden text-lg w-full shadow-lg py-2 z-20">
        <div class="flex justify-evenly items-center font-medium px-2">
          <div className="border-l-1 border-r-5 border-red-700">Accueil</div>
          <div className="border-l-1 border-r-5 border-red-700" onClick={}>Blog</div>
        </div>
      </nav> */}
      <LandingPage />
      <Presentation />
      <Projet />
    </div>
  );
}

// bg-gradient-to-t from-gray-500 to-transparent bg-fixed"
const LandingPage = () => {
  // const h = document.querySelector('#landingPage').clientHeight;
  const props = useSpring({ 
    from: { y: "55vh" } ,
    to: { y: "0vh" }, 
    delay: 1000,
    loop: false,
  })
  
  return (
    <div id="landingPage" className="flex justify-center items-center h-screen">
      <ParticlesBackground/>
      <animated.div className="border border-cdpurple p-3 rounded-lg shadow-lg text-center backdrop-blur-lg" style={props}>
        <h1 className="text-cdpurple text-5xl font-semibold" >Charles Vin</h1>
        <h2 className="text-cdpurple">L3-MIASHS-SC</h2>
      </animated.div>
    </div>
)
}

const Presentation = () => (
  <section className="bg-white h-screen">
    <div className="m-5">
      <div className="flex flex-col justify-center item-center bg-white p-3 shadow-xl">
        <div className="text-cdpurple text-2xl text-center font-semibold">Présentation</div>
        <div className='text-cgray text-lg text-center'>
            <p className="m-1">Étudiant en licence MIASHS, je suis passionné par les mathématiques et l'informatique.</p>
            <p className="m-1">L'enseignement des Sciences-Cognitives me permet de voir au delà des applications usuelles de l'informatique en adaptant au maximum la machine à l'Homme.</p>
        </div>
      </div>
      <div className="flex flex-col justify-center item-center bg-white mt-10 p-3 shadow-xl">
        <div className="text-cdpurple text-2xl text-center font-semibold">Centre d'intérêt</div>
        <div className='text-cgray text-lg text-center'>
            <p className="m-1">Durant mon temps libre j'approfondis mes connaissances en informatique par de nombreux projets.</p>
            <p className="m-1">Je fais de l'escalade et de la course à pied depuis plusieurs années. 
              Écologiste, j'ai déjà pratiqué la permaculture et essaye de limiter mon impact environnemental au quotidien. 
              Je m'intéresse également aux cryptomonnaies et à la blockchain qui me semble être une innovation incroyable par son apport de décentralisation. </p>
            {/* {["Escalade", "Course à pied" "Permaculture"].map(
              (keyword, index) => (<div key={index}>{keyword}</div>))} */}
              {/* Est ce que je met des keyword ?  */}
        </div>
      </div>

      <div className="flex justify-center item-center">
        <img className=" border border-cdpurple rounded-full w-60 m-5 shadow-xl" src={pp} alt="profile pic"/>
      </div>
    </div>
  </section>
)

const Projet = () => (
  // Carte qui défile (plus complexe à faire) ? + redirection vers le blog avec un bouton 
  <div className="flex flex-col items-center bg-white ">

    <h1>Mes projets</h1>
    <Link to='/blog' className="border p-2 m-2 rounded-md" >Acceder au blog</Link>
    
    
    
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
