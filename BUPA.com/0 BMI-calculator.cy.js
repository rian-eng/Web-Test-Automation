/// <reference types="cypress" />

describe('Website bupa.com', () => {
    it('Should calculate BMI', ()=>{
        cy.visit('https://www.bupa.com.au/healthlink/health-tools/bmi-calculator')
        cy.url().should('include', '/healthlink/health-tools/bmi-calculator')
       
        //cy.get('div:nth-child(3)').should('be.visible')
        
    })

    // it('Should display feedback contaent', ()=>{
    //     cy.visit('https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmi-m.htm')
    //     cy.get('#htc').type(170)
    //     cy.get('#kg').type(55)
    //     cy.get('#calcbmi').click()
    //     cy.get('#yourbmi').should('be.visible')
    // })

    // it('Should display feedback contaent', ()=>{
    //     cy.visit('http://zero.webappsecurity.com/online-banking.html')
    //     cy.get('#feedback').click()
    //     cy.url().should('include', 'feedback.html')
    //     cy.get('h3').should('contain.text', 'Feedback')
    // }) 

    // it('Should display homepage content', ()=>{ 
    //     cy.visit('http://zero.webappsecurity.com/feedback.html')
    //     cy.contains('Zero Bank').click()
    //     cy.url().should('include', 'index.html')
    //     cy.get('strong').should('contain.text', 'Home')
    // })       
});