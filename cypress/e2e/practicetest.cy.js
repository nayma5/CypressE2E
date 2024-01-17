describe('Practice test for Assertions', () => {
  it('Implicit assertions', () => {
    //steps
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // should , and
    cy.url().should('include', 'orangehrmlive.com')
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.url().should('contain','orangehrm')
  }
  )

  it('test2', () => {
    //steps
    
  })


})

