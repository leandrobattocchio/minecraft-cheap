import { nanoid } from 'nanoid'
import { create } from 'zustand'

const getLocalStorage = key => JSON.parse(window.localStorage.getItem(key))
const setLocalStorage = (key, value) =>
	window.localStorage.setItem(key, JSON.stringify(value))
const removeLocalStorage = key => window.localStorage.removeItem(key)

export const useStore = create(set => ({
	texture: 'dirt',
	cubes: getLocalStorage('world') || [],
	addCube: (x, y, z) => {
		set(state => ({
			cubes: [
				...state.cubes,
				{
					id: nanoid(),
					texture: state.texture,
					pos: [x, y, z],
				},
			],
		}))
	},
	removeCube: id => {
		set(state => ({
			cubes: state.cubes.filter(cube => cube.id !== id),
		}))
	},
	setTexture: texture => {
		set(() => ({
			texture,
		}))
	},
	saveWorld: () => {
		set(state => {
			setLocalStorage('world', state.cubes)
			return { state }
		})
	},
	resetWorld: () => {
		set(() => ({
			cubes: [],
		}))
		removeLocalStorage('world')
	},
}))
