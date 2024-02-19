///<reference types="cypress"/>

describe('Funcionalidade: Login',() => {

     it('Deve fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('kaua.teste@teste.com.br')
        cy.get('#password').type('testedogutinho')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, kaua.teste (não é kaua.teste? Sair)')

        

     })

})