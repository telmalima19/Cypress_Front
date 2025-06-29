describe('Login', () => {
  beforeEach(() => {
    cy.session('usuario',() => {
    cy.Login()
    })
    })
it.skip('Cadastrar produto',()=>{
      cy.Produtos()
    })
it('Listar produtos',()=>{
      cy.visit('https://front.serverest.dev/admin/home')
      cy.contains('Listar Produtos').click()
      cy.contains('Lista dos Produtos').should('be.visible')
      cy.contains('Rampage').should('be.visible')
      cy.contains('Rampage Cinza').should('be.visible')
      
    })    
})
