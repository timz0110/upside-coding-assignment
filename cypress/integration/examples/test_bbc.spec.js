/// <reference types="Cypress" />

describe('Upside - My First Cypress Test', function() {
  it('Visits the bbc.com', function() {
    cy.visit('https://bbc.com')

    cy.contains('Sport').click()

    // Should be on a new URL which includes '/sport'
      cy.url().should('include', '/sport')

      cy.get('#top-stories')
        .find('a')
        .first()
        .click()
        .then(function($a){
             // extract the fully qualified href property
             const href = $a.prop('href')

             // Should be on a new URl which includes 'href'
             cy.url().should('include', href)
        }
        )
  })
})