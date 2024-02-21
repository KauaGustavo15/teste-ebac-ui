///<reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login',() => {

    beforeEach(() => {
        cy.visit('minha-conta/')
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


    it('Deve fazer login com sucesso - Usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, kaua.teste (não é kaua.teste? Sair)')     
    });

    it('Deve fazer login com sucesso - Usando Fixture', () => {
        cy.fixture('perfil').then( dados => {
            cy.get('#username').type(dados.usuario , { log: false })
            cy.get('#password').type(dados.senha , { log: false })
            cy.get('.woocommerce-form > .button').click()
    
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, kaua.teste (não é kaua.teste? Sair)')     
        })
    });

    it.only('Deve fazer login com sucesso - usando comandos customizado', () => {
        cy.login('kaua.teste@teste.com.br' , 'testedogutinho')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, kaua.teste (não é kaua.teste? Sair)')


    });

 

})