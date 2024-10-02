// https://on.cypress.io/api

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('header', 'Gestion Stock')
    cy.contains('Gérer efficacement votre stock')
    cy.contains('Voir le stock').click()

    cy.get('[title="Ajouter"]').click()

    const uuid = () => Cypress._.random(0, 1e6)
    const id = uuid()
    const testname = `o-${id}`

    cy.get('input').eq(0).clear()
    cy.get('input').eq(0).type(testname)
    cy.get('input').eq(1).clear()
    cy.get('input').eq(1).type('12')
    cy.get('input').eq(2).clear()
    cy.get('input').eq(2).type('34')

    cy.contains('button', 'Ajouter').click()

    cy.url().should('eq', 'http://localhost:4173/stock')

    cy.contains(testname).click()
    cy.get('button[title="Supprimer"]').click()

    cy.contains(testname).should('not.exist')

    cy.get('button[title="Supprimer"]').should('not.be.visible')
  })
})
