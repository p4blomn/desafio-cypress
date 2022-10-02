/// <reference types="cypress" />

context('Carrinho', () => {
    
    beforeEach(() => {
        cy.visit('/')
    });

    it('Validar carrinho', () => {       
        cy.adicionaAoCarrinho('Ajax Full-Zip Sweatshirt', 'XS', 'Red')
        //cy.adicionaAoCarrinho('Arcadio Gym Short', '32', 'Black')
        //cy.adicionaAoCarrinho('Argus All-Weather Tank', 'XS', 'Gray')

        cy.abrirCarrinho()
        cy.get('.product-name > a').should('contain', 'Ajax Full-Zip Sweatshirt')
    });
});