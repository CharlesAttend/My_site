import Carousel from 'react-elastic-carousel';
import { ReactComponent as CloudLogo } from './img/cloud-download-alt-solid.svg'
import monte_carlo_pi from './img/monte-carlo-pi.png'

const CarouselComponent = () => {

	const breakpoint = [
        { width: 640, itemsToShow: 1 },
        { width: 768, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 1024, itemsToShow: 3 },
	];
	return (
		<Carousel className='text-cgray' breakPoints={breakpoint} itemPadding={[10]}>

			<div className="bg-white flex-grow p-3 rounded-lg flex flex-col items-center">
				<CloudLogo className="text-cdpurple w-2/4 pb-2" />
				<div className="text-cdpurple text-2xl text-center">MusicSync</div>
				<div className="flex flex-col items-center">
					<h2 className="text-center">Téléchargement et synchronisation de playlist SoundCloud et YouTube.</h2>
					<div className="flex flex-wrap justify-center mb-3">
						{['Python', 'Crontab', 'Owncloud', 'Webdav', 'YoutubeDL'].map(
							(keyword, index) => <div className="border rounded-lg m-1 p-1 whitespace-nowrap" key={index}>{keyword}</div>)}
					</div>
					<p><a href="https://django.charles.vin/musicsync" class="border border-cpurple p-2 m-2 rounded-md hover:bg-cpurple hover:text-white" target="_blank" rel="noopener noreferrer">Accéder à l'interface</a></p>
				</div>
			</div>

			<div className="bg-white flex-grow p-3 rounded-lg flex flex-col items-center">
				<img src={monte_carlo_pi} alt="the web project" className="pb-2" />
				<div className="text-cdpurple text-2xl text-center">Visualisation de la méthode Monte-Carlos pour estimer Pi</div>
				<div className="flex flex-col items-center">
					<div className="flex flex-wrap justify-center mb-3">
						{['JavaScript', 'Html', 'Css', 'Mathématiques'].map(
							(keyword, index) => <div className="border rounded-lg m-1 p-1 whitespace-nowrap" key={index}>{keyword}</div>)}
					</div>
					<p><a href="https://charlesattend.github.io/Monte-Carlo-pi-estimation-visualization/" class="border border-cpurple p-2 m-2 rounded-md hover:bg-cpurple hover:text-white" target="_blank" rel="noopener noreferrer">Accéder à l'interface</a></p>
				</div>
			</div>

			<div className="bg-white flex-grow p-3 rounded-lg flex flex-col items-center">
				<img src={monte_carlo_pi} alt="image of the web project" className="pb-2" />
				<div className="text-cdpurple text-2xl text-center">Recipe Chooser</div>
				<div className="flex flex-col items-center">
					<h2 className="text-center">Proposition de recettes à partir d'une liste d'ingrédients disponibles. Et autocomplétion des ingrédients durant la saisie. J'aimerai beaucoup pousser ce projet dans le futur !</h2>
					<div className="flex flex-wrap justify-center mb-3">
						{['Python', 'Trie', 'Data Cleaning'].map(
							(keyword, index) => <div className="border rounded-lg m-1 p-1 whitespace-nowrap" key={index}>{keyword}</div>)}
					</div>
					<p><a href="https://github.com/CharlesAttend/Recipe-chooser" class="border p-2 m-2 rounded-md hover:bg-cpurple hover:text-white" target="_blank" rel="noopener noreferrer">Accéder au dépos GitHub</a></p>
				</div>
			</div>
		</Carousel>
	)
}

export default CarouselComponent