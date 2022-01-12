import React from "react";
import {
  Link
} from "react-router-dom";
import { useSpring, animated } from 'react-spring'
import Particles from 'react-tsparticles';
import { Main } from "tsparticles";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";
import ParticlesParam from "./particlesParam";

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
    loop: true,
  })
  const customInit = (main: Main) => {
    // this adds the preset to tsParticles, you can safely use the
    loadTrianglesPreset(main);
  }

  return (
    <div id="landingPage" className="flex justify-center items-center h-screen">
      <Particles options={ParticlesParam} init={customInit} />
      <animated.div className="border-2 border-clightblue p-3 rounded-lg shadow-lg text-center backdrop-blur-lg" style={props}>
        <h1 className="text-cblack text-3xl font-semibold" >Charles Vin</h1>
        <h2 className="text-cblack">L3-MIASHS-SC</h2>
      </animated.div>
    </div>
)
}

const Presentation = () => (
  <div className="" id="presentation">
    <div className="bg-white p-1 border-l-4 border-bleu shadow-lg">
      <img className="rounded-full w-5" src={pp} alt="profile pic"/>
      <div class='sectionText'>
          <p>Étudiant en licence MIASHS, je suis passionné par les mathématiques et l'informatique.</p>
          <p>Durant mon temps libre j'approfondis mes connaissances en informatique par de nombreux projets.</p>
          <p>L'enseignement des Sciences-Cognitives me permet de voir au delà des applications usuelles de
              l'informatique en adaptant au maximum la machine à l'Homme.</p>
          <p>Je fais de l'escalade et de la course à pied depuis plusieurs années. 
            Écologiste, j'ai déjà pratiqué la permaculture et essaye de limiter mon impact environnemental au quotidien. 
            Je m’intéresse également aux cryptomonnaies et à la blockchain qui me semble être une innovation incroyable par son apport de décentralisation. </p>
      </div>
    </div>
  </div>
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
