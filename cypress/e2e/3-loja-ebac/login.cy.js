///<reference types="cypress"/>

describe('Funcionalidade: Login',() => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

     it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('kaua.teste@teste.com.br')
        cy.get('#password').type('testedogutinho')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, kaua.teste (não é kaua.teste? Sair)')

     })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('kaua@teste.com.br')
        cy.get('#password').type('testedogutinho')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
        
        
    });

    it('Deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('kaua.teste@teste.com.br')
        cy.get('#password').type('testedogutinho000')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
        
    });

})