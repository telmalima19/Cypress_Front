describe('Login', () => {
  it('Login', () => {
    cy.visit('https://front.serverest.dev/login')
       cy.get('#email').type('Thelma.lima@qa.com.br')
       cy.get('#password').type('teste')
    cy.contains('Entrar').click()
    })
    })