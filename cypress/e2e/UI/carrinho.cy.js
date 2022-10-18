/// <reference types="cypress" />

const itemPage = require('../../support/pages/item.page')

describe('Adicionar item ao carrinho', () => {

    beforeEach(() => {
        cy.visit('/')
    });

    it('Validar carrinho', () => {
        cy.fixture('items').then((itemsList) => {
            itemsList.forEach(item => {
                cy.buscarItem(item.name)
                itemPage.addItem(item.size, item.color, 2)
            });

            cy.abrirCarrinho()

            itemsList.forEach(item => {
                cy.get('.product-name > a').should('contain', item.name)
            });

            cy.get('strong > .woocommerce-Price-amount > bdi').invoke('text').invoke('substring', 2).then(parseFloat).should('be.lt', 990)
        })
        
    });
});