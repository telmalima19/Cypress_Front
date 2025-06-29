describe('Login', () => {
  beforeEach(() => {
    cy.session('usuario',() => {
    cy.Login()
    })
    })
    it('Listar usuarios',()=>{
      cy.visit('https://front.serverest.dev/admin/home')
      cy.contains('Listar Usuários').click()
      cy.contains('Lista dos usuários').should('be.visible')
    })
    })