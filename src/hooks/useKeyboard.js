import { useEffect, useState } from 'react'

const ACTIONS_KEYBOARD_MAP = {
	KeyW: 'moveForward',
	KeyA: 'moveLeft',
	KeyD: 'moveRight',
	KeyS: 'moveBackward',
	Space: 'jump',
	ShiftLeft: 'run',
	Digit1: 'dirt',
	Digit2: 'glass',
	Digit3: 'grass',
	Digit4: 'log',
	Digit5: 'wood',
	Tab: 'menu',
}

const useKeyboard = () => {
	const [actions, setActions] = useState({
		moveForward: false,
		moveBackward: false,
		moveLeft: false,
		moveRight: false,
		jump: false,
		run: false,
		dirt: false,
		log: false,
		wood: false,
		glass: false,
		grass: false,
		menu: false,
	})

	useEffect(() => {
		const handleKeyDown = event => {
			const { code } = event
			const action = ACTIONS_KEYBOARD_MAP[code]
			if (action) {
				setActions(prevState => ({
					...prevState,
					[action]: true,
				}))
			}
		}

		document.addEventListener('keydown', handleKeyDown)

		const handleKeyUp = event => {
			const { code } = event
			const action = ACTIONS_KEYBOARD_MAP[code]

			if (action) {
				setActions(prevState => ({
					...prevState,
					[action]: false,
				}))
			}
		}

		document.addEventListener('keyup', handleKeyUp)

		return () => {
			document.removeEventListener('keydown', handleKeyDown)
			document.removeEventListener('keyup', handleKeyUp)
		}
	}, [])

	return actions
}

export default useKeyboard
