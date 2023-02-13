import { Physics } from '@react-three/cannon'
import { Sky } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Cubes from '../components/Cubes'
import FVP from '../components/FVP'
import Ground from '../components/Ground'
import Player from '../components/Player'
import TextureSelected from '../components/TextureSelected'
import HudWorld from './HudWorld'

const Game = () => {
	return (
		<>
			<Canvas>
				<Sky sunPosition={[100, 100, 20]} />
				<ambientLight intensity={0.5} />
				<FVP />
				<Physics>
					<Cubes />
					<Player />
					<Ground />
				</Physics>
			</Canvas>
			<HudWorld />
			<div className='pointer'>+</div>
			<TextureSelected />
		</>
	)
}

export default Game
