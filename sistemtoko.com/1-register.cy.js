/// <reference types="cypress" />

describe('Should visit the website', () => {
    // before(() => {
    //     cy.visit('https://sistemtoko.com/login')
    //     cy.get('h3').should('contain.text', 'Login') 
    //     cy.get('div > p > a:nth-child(1)').click()
        
    // })

    it('Should register account', ()=>{
        cy.visit('https://sistemtoko.com/register') //akun:edurian@gmail.com edurian
        //cy.get('#main-title').should('contain.text', 'Register')
        //cy.get('h3[id="main-title"]').should('be.visible')
        
        
        cy.get('#register > div:nth-child(1)').type('edurian@gmail.com')

        cy.get('#register > div:nth-child(1)').type('edurian@gmail.com')
        cy.get('input[class="last-name"]').type('Eduwork')

        cy.get('#register > div:nth-child(2)').type('edurian')
        cy.get('#register > div:nth-child(3)').type('edurian')
        cy.get('#register > div:nth-child(4)').type('rianrian')
        cy.get('#register > div:nth-child(5)').type('085211112222')
        cy.get('#code_voucher').type('')

        // cy.get('#login > button').click()

        // cy.get('#title').should('contain.text', 'Operation Failed')

        // cy.get('p > a:nth-child(3)').click()
        // cy.get('h3').should('contain.text', 'Password Reminder')        
        
    })


});