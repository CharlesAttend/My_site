import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { ReactComponent as CloudLogo } from './img/cloud-download-alt-solid.svg'
import monte_carlo_pi from './img/monte-carlo-pi.png'

const CarouselComponent = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1
		}
	};

	return (
		<Carousel className='w-screen text-cgray' responsive={responsive}>

			<div className="bg-white p-3 rounded-lg flex flex-col items-center">
				<CloudLogo className="text-cdpurple w-2/4 pb-2" />
				<div className="text-cdpurple text-2xl">MusicSync</div>
				<div className="">
					<h2>Téléchargement et synchronisation de playlist SoundCloud et YouTube.</h2>
					<div className="flex flex-wrap justify-center mb-3">
						{['python', 'crontab', 'owncloud', 'webdav', 'youtubeDL'].map(
							(keyword, index) => <div className="border rounded-lg m-1 p-1 whitespace-nowrap" key={index}>{keyword}</div>)}
					</div>
					<p><a href="https://django.charles.vin/musicsync" class="border border-cpurple p-2 m-2 rounded-md hover:bg-cpurple hover:text-white">Accéder à l'interface</a></p>
				</div>
			</div>

			<div className="bg-white p-3 rounded-lg flex flex-col items-center">
				<img src={monte_carlo_pi} alt="the web project" className="pb-2" />
				<div className="text-cdpurple text-2xl">Visualisation de la méthode Monte-Carlos pour estimer Pi</div>
				<div className="">
					<div className="flex flex-wrap justify-center mb-3">
						{['JavaScript', 'Html', 'Css', 'Mathématiques'].map(
							(keyword, index) => <div className="border rounded-lg m-1 p-1 whitespace-nowrap" key={index}>{keyword}</div>)}
					</div>
					<p><a href="https://charlesattend.github.io/Monte-Carlo-pi-estimation-visualization/" class="border border-cpurple p-2 m-2 rounded-md hover:bg-cpurple hover:text-white">Accéder à l'interface</a></p>
				</div>
			</div>

			<div className="bg-white p-3 rounded-lg flex flex-col items-center">
				<img src={monte_carlo_pi} alt="image of the web project" className="pb-2" />
				<div className="text-cdpurple text-2xl">Recipe Chooser</div>
				<div className="">
					<h2>Proposition de recettes à partir d'une liste d'ingrédients disponibles. Et autocomplétion des ingrédients durant la saisie. J'aimerai beaucoup pousser ce projet dans le futur !</h2>
					<div className="flex flex-wrap justify-center mb-3">
						{['Python', 'Trie', 'Data Cleaning'].map(
							(keyword, index) => <div className="border rounded-lg m-1 p-1 whitespace-nowrap" key={index}>{keyword}</div>)}
					</div>
					<p><a href="https://github.com/CharlesAttend/Recipe-chooser" class="border p-2 m-2 rounded-md hover:bg-cpurple hover:text-white">Accéder au dépos GitHub</a></p>
				</div>
			</div>
		</Carousel>
	)
}

export default CarouselComponent