describe('Red Fox App tests', () => {
  beforeEach(() => {  
    cy.viewport(1280, 720)
  })
  it('Should connect metamask wallet', () => {       
        cy.visit('/');
        cy.screenshot();
        cy.get('button').contains('Connect Wallet').should('be.visible');
        cy.get('button').contains('Connect Wallet').click({ force: true }); 
        cy.screenshot();
        cy.get('w3m-modal').should('be.visible');
        cy.selectBrowserWallet();
        cy.acceptMetamaskAccess().should('be.true');    
        cy.screenshot();
  
  })
})