import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useSpring, animated, config} from 'react-spring'

import ReactVisibilitySensor from "react-visibility-sensor";

import ParticlesBackground from './ParticlesBackground'
import CarouselComponent from './CarouselComponent'

import pp from './img/pp.jpg'
import english_cv_pdf from './document/generic_english_CV_compressed.pdf'
import french_cv_pdf from './document/generic_english_CV_compressed.pdf'


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
    </div>
  );
}

const LandingPage = () => {
  const props = useSpring({ 
    from: { y: "55vh" } ,
    to: { y: "0vh" }, 
    delay: 1000,
    loop: false,
    config: config.gentle,
  })
  
  return (
    <div id="landingPage" className="flex justify-center items-center h-screen">
      <ParticlesBackground/>
      <animated.div className="border border-cdpurple p-3 rounded-lg shadow-lg text-center bg-white backdrop-blur" style={props}>
        <div className="text-cdpurple text-5xl font-semibold">Charles Vin</div>
        <div className="text-cdpurple">M1-DAC | Sorbonne université</div>
      </animated.div>
    </div>
)
}

const Presentation = () => {
  const [active, setActive] = useState(true)

  const [props1, api1] = useSpring(() => ({
    from: { 
      opacity: 0,
      transform: 'translateX(-250px)'
    },
    config: config.gentle, 
  }))

  const [props2, api2] = useSpring(() => ({
    from: { 
      opacity: 0,
      transform: 'translateX(-250px)'
    },
    config: config.gentle,
  }))

  const [props3, api3] = useSpring(() => ({
    from: { 
      opacity: 0,
      transform: 'translateX(-250px)'
    },
    config: config.gentle,
  }))

  return (<section className="bg-white">
    <div className="m-5">
      <ReactVisibilitySensor active={active} partialVisibility="top" minTopValue={100}>
        {({isVisible}) =>{
          if(isVisible){
            api1.start({opacity: 1, transform: 'translateX(0px)',})
            api2.start({opacity: 1, delay: 500, transform: 'translateX(0px)'})
            api3.start({opacity: 1, delay: 750, transform: 'translateX(0px)'})
            setActive(false)
          }
          return (<div className="grid-cols-7 gap-4 lg:grid">
            <animated.div className="flex flex-col item-center lg:col-span-4 lg:flex-row bg-white p-3 shadow-xl" style={props1}>
              <div className="flex justify-center item-center lg:flex-col">
                <img className="border border-cdpurple rounded-full m-5 shadow-xl max-w-xs max-h-80" src={pp} alt="profile pic" />
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-cdpurple text-2xl text-center font-semibold">Présentation</div>
                <div className='text-cgray text-lg text-center'>
                  <p className="m-1">La licence Mathématiques et Informatique Appliquées aux Sciences Humaines et Sociales (MIASHS) de l'université de Lille m'a apporté de solide fondation en mathématique tout en améliorant mes compétences en informatique. De plus, la collecte et l'analyse de données humaine devenant de plus en plus complexe, l'enseignement des Sciences-Cognitives me permet de rapidement identifier l'information utile parmi ces données.</p>
                  <p className="m-1 mt-3">Après cette licence axée mathématique, j'ai choisi de me spécialiser dans le domaine de la data au travers du Master Données, Apprentissage, Connaissances (DAC) de la Sorbonne. En effet celui propose un bon mix entre les enseignements de mathématiques, de base de données et de data science permettant de nombreux débouchés.
</p>
                </div>
              </div>
            </animated.div>

            <animated.div className="flex flex-col item-center bg-white p-3 shadow-xl lg:col-span-2" style={props2}>
              <div className="text-cdpurple text-2xl text-center font-semibold">Centre d'intérêt</div>
              <div className='text-cgray text-lg text-center '>
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

            <animated.div className="flex flex-col item-center bg-white p-3 shadow-xl" style={props3}>
              <div className="text-cdpurple text-2xl text-center font-semibold">Lien utile</div>
              <div className="flex flex-col justify-center items-center flex-grow">
                <div className="grid grid-flow-row text-cgray text-lg text-center ">
                  <div className='grid grid-cols-2'>
                    <a href={english_cv_pdf} target="_blank" rel="noreferrer" className="border rounded-lg m-1 p-5 lg:p-3 shadow-md">English CV</a>
                    <a href={french_cv_pdf} target="_blank" rel="noreferrer" className="border rounded-lg m-1 p-5 lg:p-3 shadow-md">French CV</a>
                  </div>
                  <a href="https://github.com/CharlesAttend" title="GitHub" target="_blank" rel="noopener noreferrer">
                    <div className="border rounded-lg m-1 p-1 whitespace-nowrap shadow-md grid grid-cols-4">
                      <i className="fab fa-github fa-2x text-cpurple text-center w-30"></i>
                      <div className="text-cgray text-lg col-span-3 flex items-center justify-center">@CharlesAttend</div>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/charles-vin/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <div className="border rounded-lg m-1 p-1 whitespace-nowrap shadow-md grid grid-cols-4 lg:flex-col-reverse">
                      <i className="fab fa-linkedin fa-2x text-cpurple text-center w-30"></i>
                      <div className="text-cgray text-lg col-span-3 flex items-center justify-center">Charles Vin</div>
                    </div>
                  </a>
                  <div className="border rounded-lg m-1 p-1 whitespace-nowrap shadow-md grid grid-cols-4 lg:flex-col-reverse">
                    <i className="fas fa-envelope-square fa-2x text-cpurple text-center w-30 flex items-center justify-center"></i>
                    <div className="col-span-3 flex items-center justify-center lg:flex-col ">
                      <span className="text-cgray text-lg lg:text-sm">charles.vin@outlook.fr</span>
                      <i className='fas fa-clipboard-list fa-2xs border-2 rounded-lg p-1 m-1 text-cgray' onClick={(e) => copyToClipboard(e, 'charles.vin@outlook.fr')}></i>
                    </div>
                  </div>
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
  <section className="bg-cdblue min-h-screen text-white box-border p-5">
    <div className="flex flex-col items-center justify-evenly box-border">
      <span className="text-4xl mb-7 box-border">Quelques projets</span>
      <CarouselComponent/>
      <Link to='/blog' className="box-border border text-cdpurple p-4 m-10 text-3xl font-semibold rounded-md bg-white hover:bg-cpurple hover:text-white hover:border-cpurple">
        Acceder au blog
      </Link>
    </div>
  </section>
)

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
