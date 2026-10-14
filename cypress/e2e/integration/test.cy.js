/* global cy */
describe('game', () => {
	it('frontpage can be opened', () => {
		cy.visit('/')
		cy.contains('Welcome to Minecraft')
		cy.contains('START')
	})
})
