describe('Cadstro de usuario', () => {
  it('Realizar cadastro de usuario', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.contains('Cadastre-se').click()
    cy.get('#nome').type('Thelma lima')
    cy.get('#email').type('Thelma.lima@qa.com.br')
    cy.get('#password').type('teste')
    cy.get('#administrador').check()
    cy.get('[data-testid="cadastrar"]').click()
  })
})