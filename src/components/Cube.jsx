import { useBox } from '@react-three/cannon'
import { useState } from 'react'
import { useStore } from '../hooks/useStore'
import * as textures from '../images/textures'

const Cube = ({ position, texture, id }) => {
	const [isHover, setIsHover] = useState(false)
	const [removeCube, addCube] = useStore(state => [
		state.removeCube,
		state.addCube,
	])

	const [ref] = useBox(() => ({
		type: 'Static',
		position,
	}))

	const activeTexture = textures[texture + 'Texture']

	return (
		<mesh
			onPointerMove={event => {
				event.stopPropagation()
				setIsHover(true)
			}}
			onPointerOut={event => {
				event.stopPropagation()
				setIsHover(false)
			}}
			onClick={event => {
				event.stopPropagation()
				if (event.altKey) {
					removeCube(id)
				} else {
					const clickedFace = Math.floor(event.faceIndex / 2)
					const { x, y, z } = ref.current.position

					if (clickedFace === 0) {
						addCube(x + 1, y, z)
					} else if (clickedFace === 1) {
						addCube(x - 1, y, z)
					} else if (clickedFace === 2) {
						addCube(x, y + 1, z)
					} else if (clickedFace === 3) {
						addCube(x, y - 1, z)
					} else if (clickedFace === 4) {
						addCube(x, y, z + 1)
					} else if (clickedFace === 5) {
						addCube(x, y, z - 1)
					}
				}
			}}
			ref={ref}
		>
			<boxBufferGeometry attach='geometry' />
			<meshStandardMaterial
				attach='material'
				color={isHover ? 'rgb(220,220,220)' : 'white'}
				map={activeTexture}
			/>
		</mesh>
	)
}

export default Cube
