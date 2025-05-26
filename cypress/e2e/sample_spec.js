describe('Sample Cypress Test', () => {
  it('Visits example page and takes screenshot', () => {
    cy.visit('/')
    cy.screenshot('homepage')
    cy.contains('type').click()
    cy.url().should('include', '/commands/actions')
    cy.screenshot('actions-page')
  })
})
