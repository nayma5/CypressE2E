describe('Practice test', () => {
  it('test1', () => {
    //steps
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.title().should('eq', 'OrangeHRM')
  })

  it('test2', () => {
    //steps
    cy.visit('https://opensource-demo.orangehrmlive.com')
  })


})

