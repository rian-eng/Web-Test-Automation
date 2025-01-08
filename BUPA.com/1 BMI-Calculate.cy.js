/// <reference types="cypress" />


describe('Final Project FE Sisko', () => {
    before('Visit the website', () => {
        cy.visit('https://fitbybeat.com/')
    });
   
    it('Automation Test "CALCULATE YOUR BMI"', () => {    
       
        //Two header table about BMI
        cy.get('.qodef-bmic-table-holder')
        .scrollIntoView()
        .children('.qodef-section-title-holder')
        .children('.qodef-section-title')
        .should('have.text', 'BMI Calculator Chart')
        .should('be.visible')


        cy.get('.qodef-bmic-form-holder')
        .scrollIntoView()
        .children('.qodef-section-title-holder')
        .children('.qodef-section-title')
        .should('have.text', 'Calculate Your BMI')
        .should('be.visible')


        //Two table head about BMI and Weight Status (BMI & WS)
        cy.get('table')
        .scrollIntoView()
        .children('thead')
        .children('tr')
        .children('th')
        .should('have.text', 'BMIWeight Status')
        .should('be.visible')


        //List of data about BMI & WS
        cy.get('table')
        .scrollIntoView()
        .children('tbody')
        .children('tr')
        .children('td')
        .should('have.text', 'Below 18.5Underweight18.5 - 24.9Healthy25.0 - 29.9Overweight30.0 - and AboveObese')
        .should('be.visible')


        //Note about BMI or BMR
        cy.get('.qodef-bmic-legend')
        .scrollIntoView()
        .children('span')
        .children('sup')
        .contains('*')
        .should('be.visible')


        cy.get('.qodef-bmic-legend-bold')
        .should('have.text', 'BMRBMI')
        .should('be.visible')


        cy.get('.qodef-bmic-legend')
        .children('span')
        .contains('Metabolic Rate /')
        .contains('Body Mass Index')
        .should('be.visible')


        //Brief to filling the calculate form
        cy.get('.qodef-section-subtitle')
        .scrollIntoView()
        .children('p')
        .should('have.text', 'Use this calculator to check your body mass index (BMI) and find out if you\'re a healthy weight!')


        //Filling the calculate form
        cy.get('form[action="POST"]')
        .children('.qodef-grid-row')
        .scrollIntoView()


        //Filling Your Height
        cy.get('input[name="height"]')
        .should('have.attr', 'placeholder', 'Height / cm')
        .type('168')


        //Filling Your Weight
        cy.get('input[name="weight"]')
        .should('have.attr', 'placeholder', 'Weight / kg')
        .type('52')


        //Filling Your Age
        cy.get('input[name="age"]')
        .should('have.attr', 'placeholder', 'Age')
        .type('21')


        //Filling Your Gender
        cy.get('.qodef-grid-row')
        .children('.qodef-grid-col-6')
        .children('.qodef-bmi-select2')
        .select(1, {force: true})
        .should('have.value', 'male')


        //Filling Your Activity
        cy.get('.qodef-grid-row')
        .children('.qodef-grid-col-12')
        .children('.qodef-bmi-select2')
        .select(2, {force: true})
        .should('have.value', 'light')


        //Press the calculate button
        cy.get('.qodef-grid-col-12')
        .children('button[type="submit"]')
        .children('.qodef-btn-text')
        .children('.qodef-btn-text-inner')
        .should('have.text', 'Calculate')
        .click()


        //Result from calculate button
        cy.get('.qodef-bmic-icon-holder')
        .children('.qodef-bmic-underweight')


        cy.get('.qodef-bmic-notification-text')
        .children('.qodef-bmic-notification-highlight')
        .should('have.text', 'You are Underweight! ')


        cy.get('.qodef-bmic-notification-text')
        .contains('Your BMI is 18.42. BMR 1470 kcal/day, and BMR w/Activity Factor 2021.25 kcal/day')
    });
});