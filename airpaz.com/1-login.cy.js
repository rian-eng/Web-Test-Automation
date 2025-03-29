/// <reference types="cypress" />

describe('Login Flow Test', () => {
    it('Should visit the website', ()=>{
        cy.visit('https://www.airpaz.com/en', { failOnStatusCode: false });
        cy.wait(20000);
        cy.get('body').should('be.visible')
    });

    it('Should login with wrong account  ', ()=>{
        cy.visit('https://www.airpaz.com/en', { failOnStatusCode: false });
        cy.wait(20000);
        cy.get('body').should('be.visible')
        cy.get('.w-40 > .icon').click()
        cy.get('[data-testid="navbar-login-textButton"]').click()
        cy.get('[data-testid="signIn-popUp-form"] > [data-testid="apzInput-email-input"] > .relative > [data-testid="apzInput-email-text"]')
        .type('kecih94053@evluence.com');
        cy.get('[data-testid="apzInput-password-text"]')
        .type('WrongQAtest123');
        cy.get('[data-testid="signIn-button"]').click()
        cy.get('[data-testid="apzInput-email-input"] > .mt-10').should('be.visible')
    })

    it('Should login with valid account  ', ()=>{
        cy.visit('https://www.airpaz.com/en', { failOnStatusCode: false });
        cy.wait(20000);
        cy.get('body').should('be.visible')
        cy.get('.w-40 > .icon').click()
        cy.get('[data-testid="navbar-login-textButton"]').click()
        cy.get('[data-testid="signIn-popUp-form"] > [data-testid="apzInput-email-input"] > .relative > [data-testid="apzInput-email-text"]')
        .type('kecih94053@evluence.com');
        cy.get('[data-testid="apzInput-password-text"]')
        .type('QAtest123');
        cy.get('[data-testid="signIn-button"]').click()
    })
});