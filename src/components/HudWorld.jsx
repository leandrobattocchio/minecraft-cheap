import { useStore } from '../hooks/useStore'
import useKeyboard from '../hooks/useKeyboard'

const HudWorld = () => {
	const [saveWorld, resetWorld] = useStore(state => [
		state.saveWorld,
		state.resetWorld,
	])

	const { menu } = useKeyboard()

	if (!menu) return null

	return (
		<div className='hud-world'>
			<button onClick={() => saveWorld()}>Save World</button>
			<button onClick={() => resetWorld()}>Reset World</button>
		</div>
	)
}

export default HudWorld
