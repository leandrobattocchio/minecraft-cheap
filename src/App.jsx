import Game from './components/Game'
import Home from './components/Home'
import { useState } from 'react'

function App() {
	const [start, setStart] = useState(false)

	const handleStart = () => {
		setStart(prevState => !prevState)
	}

	if (!start) return <Home handleStart={handleStart} />

	return <Game />
}

export default App
