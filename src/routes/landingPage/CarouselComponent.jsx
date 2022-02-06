import Carousel from 'react-elastic-carousel';
import { ReactComponent as CloudLogo } from './img/cloud-download-alt-solid.svg'
import { Link } from "react-router-dom"
import monte_carlo_pi from './img/monte-carlo-pi.png'
import RL from './img/RL.png'
import chili from './img/chili.jpg'
import './carousel.css'

const CarouselComponent = () => {

	const breakpoint = [
		{ width: 640, itemsToShow: 1 },
		{ width: 768, itemsToShow: 2, itemsToScroll: 2, pagination: false },
		{ width: 1024, itemsToShow: 3 },
	];
	return (
		<Carousel className='text-cgray px-3 sm:px-6 md:px-12 lg:px-20' breakPoints={breakpoint} itemPadding={[10]}>

			<div className="bg-white p-3 rounded-lg grid grid-rows-2">
				<div className='flex items-center justify-center border-b border-dotted'><CloudLogo className="text-cdpurple w-2/4 pb-2" /></div>
				<div className="flex items-center justify-center flex-col"> 
					<div className="text-cdpurple text-2xl text-center">MusicSync</div>
					<div className="flex flex-col items-center">
						<span className="text-center">Téléchargement et synchronisation de playlist SoundCloud et YouTube.</span>
						<div className="flex flex-wrap justify-center mb-3">
							{['Python', 'Crontab', 'Owncloud', 'Webdav', 'YoutubeDL'].map(
								(keyword, index) => <div className="border rounded-lg m-1 p-1 whitespace-nowrap shadow-md" key={index}>{keyword}</div>)}
						</div>
						<Link to='/blog/MusicSync' class="border text-cdpurple border-cpurple p-2 m-2 rounded-md hover:bg-cpurple hover:text-white">Voir l'article du blog</Link>
					</div>
				</div>
			</div>
			<div className="bg-white p-3 rounded-lg grid grid-rows-2">
				<div className="flex items-center justify-center border-b border-dotted"><img src={RL} alt="The web project" className="pb-2 w-full"/></div>
				<div className="flex items-center justify-center flex-col"> 
					<div className="text-cdpurple text-2xl text-center">Apprentissage par renforcement</div>
					<div className="flex flex-col items-center">
						<span className="text-center">Compromis observation-action en apprentissage par renforcement</span>
						<div className="flex flex-wrap justify-center mb-3">
							{['RL', 'Tensorflow', 'POMDP'].map(
								(keyword, index) => <div className="border rounded-lg m-1 p-1 whitespace-nowrap shadow-md" key={index}>{keyword}</div>)}
						</div>
						<Link to='/blog/Apprentissage_par_renforcement' class="border text-cdpurple border-cpurple p-2 m-2 rounded-md hover:bg-cpurple hover:text-white">Voir l'article du blog</Link>
					</div>
				</div>
			</div>

			<div className="bg-white p-3 rounded-lg grid grid-rows-2">
				<div className='flex items-center justify-center border-b border-dotted'><img src={monte_carlo_pi} alt="The web project" className="pb-2 w-full" /></div>
				<div className="flex items-center justify-center flex-col"> 
					<div className="text-cdpurple text-2xl text-center">Visualisation de la méthode Monte-Carlos pour estimer Pi</div>
					<div className="flex flex-col items-center">
						<div className="flex flex-wrap justify-center mb-3">
							{['JavaScript', 'Html', 'Css', 'Mathématiques'].map(
								(keyword, index) => <div className="border rounded-lg m-1 p-1 whitespace-nowrap shadow-md" key={index}>{keyword}</div>)}
						</div>
						<a href="https://charlesattend.github.io/Monte-Carlo-pi-estimation-visualization/" class="border text-cdpurple border-cpurple p-2 m-2 rounded-md hover:bg-cpurple hover:text-white" target="_blank" rel="noopener noreferrer">Accéder à l'interface</a>
					</div>
				</div>
			</div>

			<div className="bg-white p-3 rounded-lg grid grid-rows-2">
				<div className='flex items-center justify-center border-b border-dotted'><img src={chili} alt="The web project" className="pb-2 w-full" /></div>
				<div className="flex items-center justify-center flex-col"> 
					<div className="text-cdpurple text-2xl text-center">Recipe Chooser</div>
					<div className="flex flex-col items-center">
						<span className="text-center">Proposition de recettes à partir d'une liste d'ingrédients disponibles. Et autocomplétion des ingrédients durant la saisie. J'aimerai beaucoup pousser ce projet dans le futur !</span>
						<div className="flex flex-wrap justify-center mb-3">
							{['Python', 'Trie', 'Data Cleaning'].map(
								(keyword, index) => <div className="border rounded-lg m-1 p-1 whitespace-nowrap shadow-md" key={index}>{keyword}</div>)}
						</div>
						<a href="https://github.com/CharlesAttend/Recipe-chooser" class="border text-cdpurple border-cpurple p-2 m-2 rounded-md hover:bg-cpurple hover:text-white" target="_blank" rel="noopener noreferrer">Accéder au dépôt GitHub</a>
					</div>
				</div>
			</div>

		</Carousel>
	)
}

export default CarouselComponent