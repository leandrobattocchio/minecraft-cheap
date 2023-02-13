import { useStore } from '../hooks/useStore'
import Cube from './Cube'

const Cubes = () => {
	const [cubes] = useStore(state => [state.cubes])

	return cubes.map(({ id, texture, pos }) => {
		return <Cube texture={texture} position={pos} key={id} id={id} />
	})
}

export default Cubes
