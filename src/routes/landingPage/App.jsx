import React, { useState } from 'react';
import {
  Link
} from "react-router-dom";
import { useSpring, animated, config} from 'react-spring'

import ReactVisibilitySensor from "react-visibility-sensor";

import ParticlesBackground from './ParticlesBackground'
import CarouselComponent from './CarouselComponent'

import pp from './img/pp.jpg'


const App = () => {
  return (
    <div className="bg-white font-body box-border">
      {/* <nav className="fixed lg:hidden text-lg w-full shadow-lg py-2 z-20">
        <div className="flex justify-evenly items-center font-medium px-2">
          <div className="border-l-1 border-r-5 border-red-700">Accueil</div>
          <div className="border-l-1 border-r-5 border-red-700" onClick={}>Blog</div>
        </div>
      </nav> */}
      <LandingPage />
      <Presentation />
      <Projet />
      <SocialLink />
    </div>
  );
}

const LandingPage = () => {
  const props = useSpring({ 
    from: { y: "55vh" } ,
    to: { y: "0vh" }, 
    delay: 2000,
    loop: false,
    config: config.gentle,
  })
  
  return (
    <div id="landingPage" className="flex justify-center items-center h-screen">
      <ParticlesBackground/>
      <animated.div className="border border-cdpurple p-3 rounded-lg shadow-lg text-center bg-white backdrop-blur" style={props}>
        <div className="text-cdpurple text-5xl font-semibold">Charles Vin</div>
        <div className="text-cdpurple">L3-MIASHS-SC</div>
      </animated.div>
    </div>
)
}

const Presentation = () => {
  const [active, setActive] = useState(true)

  const [props1, start1] = useSpring(() => ({
    x: "100vw",
    config: config.gentle, 
  }))

  const [props2, start2] = useSpring(() => ({
    x: "100vw",
    config: config.gentle,
  }))

  return (<section className="bg-white">
    <div className="m-5">
      <ReactVisibilitySensor active={active}>
        {({isVisible}) =>{
          if(isVisible){
            start1({from: { x: "100vw" }, to: { x: "0vw" }})
            start2({from: { x: "100vw" }, to: { x: "0vw"}, delay: 500})
            setActive(false)
          }
          return (<div className="grid-cols-3 gap-4 lg:grid">
            <animated.div className="flex flex-col justify-center item-center lg:col-span-2 lg:flex-row bg-white p-3 shadow-xl" style={props1}>
              <div className="flex justify-center item-center lg:flex-col">
                <img className="border border-cdpurple rounded-full m-5 shadow-xl max-w-xs max-h-80" src={pp} alt="profile pic" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-cdpurple text-2xl text-center font-semibold">Présentation</div>
                <div className='text-cgray text-lg text-center'>
                  <p className="m-1">Étudiant en licence MIASHS, je suis passionné par les mathématiques et l'informatique.</p>
                  <p className="m-1">L'enseignement des Sciences-Cognitives me permet de voir au delà des applications usuelles de l'informatique en adaptant au maximum la machine à l'Homme.</p>
                </div>
              </div>
            </animated.div>

            <animated.div className="flex flex-col justify-center item-center bg-white mt-10 p-3 shadow-xl" style={props2}>
              <div className="text-cdpurple text-2xl text-center font-semibold">Centre d'intérêt</div>
              <div className='text-cgray text-lg text-center'>
                <p className="m-1">Durant mon temps libre j'approfondis mes connaissances en informatique par de nombreux projets.</p>
                <p className="m-1">Je fais de l'escalade et de la course à pied depuis plusieurs années.
                  Écologiste, j'ai déjà pratiqué la permaculture et essaye de limiter mon impact environnemental au quotidien.
                  Je m'intéresse également aux cryptomonnaies et à la blockchain qui me semble être une innovation incroyable par son apport de décentralisation. </p>
                <div className="flex justify-center flex-wrap">
                  {["Escalade", "Course à pied", "Permaculture", 'Cryptomonnaies', 'Blockchain'].map(
                    (keyword, index) => (<span className="border rounded-lg m-1 p-1 whitespace-nowrap shadow-md" key={index}>{keyword}</span>))}
                </div>
              </div>
            </animated.div>
          </div>)}
        }
      </ReactVisibilitySensor>



    </div>
  </section>
  )
}

const Projet = () => (
  // Carte qui défile (plus complexe à faire) ? + redirection vers le blog avec un bouton 
  <section className="bg-cdblue min-h-screen w-screen text-white p-5">
    <div className="flex flex-col items-center justify-evenly">
      <span className="text-4xl mb-7">Quelques projets</span>
      <CarouselComponent/>
      <Link to='/blog' className=" border text-cdpurple p-2 m-2 rounded-md bg-white hover:bg-cpurple hover:text-white hover:border-cpurple" >Acceder au blog</Link>
    </div>
  </section>
)

const SocialLink = () => {
  return (<section className="h-screen bg-white">
    <div className="flex flex-col items-center h-full justify-evenly ">
      <span className="text-cdpurple text-4xl">Contact</span>
      <div className="w-10/12 lg:no-flex grid gap-5 grid-row-4 sm:gap-10 lg:grid-row-none lg:grid-cols-4  xl:gap-32 " >
          <div className="flex items-center justify-between  lg:flex-col-reverse lg:bg-gray-50 lg:p-6 lg:h-full">
            <div className="lg:flex flex-col-reverse items-center">
              <span className="text-cgray text-lg">charles.vin@outlook.fr </span>
              <i class='fas fa-clipboard-list fa-lg border-2 rounded-lg p-2 m-1 text-cgray' onClick={(e) => copyToClipboard(e,'charles.vin@outlook.fr')}></i>
            </div>
            <i className="fas fa-envelope-square fa-5x text-cpurple text-center w-20"></i>
          </div>
          <a href="https://github.com/CharlesAttend" title="GitHub" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center justify-between  lg:flex-col-reverse lg:bg-gray-50 lg:p-6 lg:h-full">
                <span className="text-cgray text-lg">@CharlesAttend</span>
                <i className="fab fa-github fa-5x text-cpurple text-center w-20"></i>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/charles-vin/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center justify-between  lg:flex-col-reverse lg:bg-gray-50 lg:p-6 lg:h-full">
                <span className="text-cgray text-lg">Charles Vin</span>
                <i className="fab fa-linkedin fa-5x text-cpurple text-center w-20"></i>
            </div>
          </a>
          <div className="flex items-center justify-between  lg:flex-col-reverse lg:bg-gray-50 lg:p-6 lg:h-full" >
            <div className="lg:flex flex-col-reverse items-center">
              <span className="text-cgray text-lg">07-79-49-56-52</span>
              <i class='fas fa-clipboard-list fa-lg border-2 rounded-lg p-2 m-1 text-cgray' onClick={(e) => copyToClipboard(e,'0779495652')}></i>
            </div>
            <i className="fas fa-mobile-alt fa-5x text-cpurple text-center w-20"></i>
          </div>
      </div>
    </div>
  </section>
  )
}

const copyToClipboard = (event, text) => {
  navigator.clipboard.writeText(text).then(() => {
      console.log('Copying to clipboard was successful!');
      outFunc(event)
  }, function (err) {
      console.error('Could not copy text: ', err);
  });
}

const outFunc = (event) => {
  event.target.classList.toggle("fa-clipboard-list");
  event.target.classList.toggle("fa-clipboard-check");
}

export default App;
