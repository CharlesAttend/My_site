import Particles from 'react-tsparticles';
import { Main } from "tsparticles";
import { loadTrianglesPreset } from "tsparticles-preset-triangles";
import ParticlesParam from "./particlesParam";

const ParticlesBackground = () => {
    const customInit = (main: Main) => {
        // this adds the preset to tsParticles, you can safely use the
        loadTrianglesPreset(main);
    }
    return (
        <div className='absolute inset-0 w-full h-full'>
            <Particles className='h-full' options={ParticlesParam} init={customInit} />
        </div>
    )
};

export default ParticlesBackground;