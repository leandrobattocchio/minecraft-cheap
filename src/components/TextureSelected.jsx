import { useEffect } from 'react'
import useKeyboard from '../hooks/useKeyboard'
import { useStore } from '../hooks/useStore'
import * as images from '../images/images'

const TextureSelected = () => {
	const [texture, setTexture] = useStore(state => [
		state.texture,
		state.setTexture,
	])
	const { dirt, glass, grass, log, wood } = useKeyboard()

	useEffect(() => {
		const options = { dirt, glass, grass, log, wood }
		const selectedTexture = Object.entries(options).find(
			([_, isEnabled]) => isEnabled
		)

		if (selectedTexture) {
			const [actualTexture] = selectedTexture
			setTexture(actualTexture)
		}
	}, [dirt, glass, grass, log, wood])

	return (
		<div className='material-choice'>
			{Object.entries(images).map(([textureName, img]) => {
				return (
					<img
						className={
							texture === textureName.replace('Image', '') ? 'selected' : ''
						}
						src={img}
						key={textureName}
						alt={textureName}
					/>
				)
			})}
		</div>
	)
}

export default TextureSelected
