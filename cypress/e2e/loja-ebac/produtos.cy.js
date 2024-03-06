///<reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Abominable Hoodie')
             cy.get('#tab-title-description > a').should('contain' , 'Descrição')
    });


    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Aether Gym Pant'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto )


        
    });



    it('Deve visitar a pagina do produto', () => {
     produtosPage.visitarProduto('Aether Gym Pant')
     cy.get('.product_title').should('contain', 'Aether Gym Pant' )

        
    });


    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 7
        produtosPage.buscarProduto('Abominable Hoodie')
        produtosPage.addProdutoCarrinho('XS', 'Green', qtd )

        cy.get('.woocommerce-message').should('exist')
        
        
    });


    it('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
        produtosPage.buscarProduto(dados[0].nomeProduto)
        produtosPage.addProdutoCarrinho(
            dados[0].tamanho, 
            dados[0].cor, 
            dados[0].tamanho)

        cy.get('.woocommerce-message').should('exist')



        })


        
        
        
    });
});