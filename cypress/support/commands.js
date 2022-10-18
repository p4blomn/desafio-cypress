// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('buscarItem', (item) => {
    cy.menuComprar()

    cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .tbay-search').type(item)
    cy.get('.list-header > span').should('be.visible')
    //cy.get('.search > .tbay-search-form > .form-ajax-search > .form-group > .input-group > .button-group > .button-search').click()
    cy.get('.name > a').contains(item).click()
})

Cypress.Commands.add('adicionaAoCarrinho', (item, size, color) => {
    const tamanho = '.button-variable-item-' + size
    const cor = '.button-variable-item-' + color

    cy.buscarItem(item)

    cy.get(tamanho).click()
    cy.get(cor).click()
    cy.get('.single_add_to_cart_button').click()
})

Cypress.Commands.add('menuComprar', () => {
    cy.get('#primary-menu > .menu-item-629 > a').click()
})


Cypress.Commands.add('abrirCarrinho', () => {
    cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
    cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .total > strong').should('be.visible')
    cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .view-cart').click()
})
