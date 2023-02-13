import {
	grassImage,
	glassImage,
	dirtImage,
	logImage,
	woodImage,
} from './images'
import { TextureLoader, RepeatWrapping, NearestFilter } from 'three'

const groundTexture = new TextureLoader().load(grassImage)
const glassTexture = new TextureLoader().load(glassImage)
const dirtTexture = new TextureLoader().load(dirtImage)
const logTexture = new TextureLoader().load(logImage)
const woodTexture = new TextureLoader().load(woodImage)
const grassTexture = new TextureLoader().load(grassImage)

groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping

groundTexture.magFilter = NearestFilter
glassTexture.magFilter = NearestFilter
dirtTexture.magFilter = NearestFilter
logTexture.magFilter = NearestFilter
woodTexture.magFilter = NearestFilter
grassTexture.magFilter = NearestFilter

export {
	groundTexture,
	glassTexture,
	dirtTexture,
	logTexture,
	woodTexture,
	grassTexture,
}
