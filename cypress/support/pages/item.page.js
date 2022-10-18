class ItemPage {
    get #nomeProduto() {return cy.get('.product_title') }
    get #tamanhoXS() {return cy.get('.button-variable-item-XS') }
    get #tamanhoS() {return cy.get('.button-variable-item-S') }
    get #tamanhoM() {return cy.get('.button-variable-item-M') }
    get #tamanhoL() {return cy.get('.button-variable-item-L') }
    get #tamanhoXL() {return cy.get('.button-variable-item-XL') }
    get #tamanho32() {return cy.get('.button-variable-item-32') }
    get #tamanho33() {return cy.get('.button-variable-item-33') }
    get #tamanho34() {return cy.get('.button-variable-item-34') }
    get #tamanho36() {return cy.get('.button-variable-item-36') }
    get #corRed() {return cy.get('.button-variable-item-Red') }
    get #corBlack() {return cy.get('.button-variable-item-Black') }
    get #corBlue() {return cy.get('.button-variable-item-Blue') }
    get #corGreen() {return cy.get('.button-variable-item-Green') }
    get #corYellow() {return cy.get('.button-variable-item-Yellow') }
    get #quantidade() { return cy.get('.input-text')}
    get #botaoComprar() {return cy.get('.single_add_to_cart_button') }

    addItem(tamanho, cor, quantidade) {
        switch (tamanho) {
            case 'XS':
                this.#tamanhoXS.click()
                break;
            case 'S':
                this.#tamanhoS.click()
                break;
            case 'M':
                this.#tamanhoM.click()
                break;
            case 'L':
                this.#tamanhoL.click()
                break;
            case 'XL':
                this.#tamanhoXL.click()
                break;
            case '32':
                this.#tamanho32.click()
                break;
            case '33':
                this.#tamanho33.click()
                break;
            case '34':
                this.#tamanho34.click()
                break;
            case '36':
                this.#tamanho36.click()
                break;
            default:
                break;
        }

        switch (cor) {
            case 'Red':
                this.#corRed.click()
                break;
            case 'Black':
                this.#corBlack.click()
                break;
            case 'Blue':
                this.#corBlue.click()
                break;
            case 'Green':
                this.#corGreen.click()
                break;
            default:
                break;
        }
        
        this.#quantidade.clear()
        this.#quantidade.type(quantidade)

        this.#botaoComprar.click()
    }
}
module.exports =  new ItemPage()