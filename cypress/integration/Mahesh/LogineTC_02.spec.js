//Actual ==> System/Application
///<reference types="cypress" />
//Actual vs Expected

//Expected ==> Requirements/Document

describe('Verify the login functionality',()=>{
    beforeEach('',()=>{
        cy.visit('http://www.testyou.in/Login.aspx')
    })
    it('Verify the login functionality with valid credentials',()=>{
        
        cy.get('input[name="ctl00$CPHContainer$txtUserLogin"]').type('Sb9272')
        cy.get('input[name="ctl00$CPHContainer$txtPassword"]').type('12345678')
        cy.get('input[name="ctl00$CPHContainer$btnLoginn"]').click()
        cy.wait(2000)
        cy.get('div[class="logo"]').should('be.visible')
        cy.get('img[src="../Student/Images/DashBoard/dashbord_heading.png"]').should('be.visible')
        cy.get('#ctl00_CPHContainer_spFirstName').should('have.text','vishnu')
        cy.get('#ctl00_CPHContainer_spUserLogin').should('have.text','sb9272')

    })
    it.only('TC_02 Verify the internal Function',()=>{
        cy.get('input[name="ctl00$CPHContainer$txtUserLogin"]').type('Sb9272')
        cy.get('input[name="ctl00$CPHContainer$txtPassword"]').type('12345678')
        cy.get('input[name="ctl00$CPHContainer$btnLoginn"]').click()
        cy.wait(2000)
        cy.get('[class="edit_link"]').click()
        .wait(2000)
        cy.get('#ctl00_CPHContainer_txtLastName').click().type('Mali')
        cy.wait(2000)
        // cy.get('#ctl00_CPHContainer_rdoGender_0').click()
        // cy.wait(2000)
        // cy.get('#ctl00_CPHContainer_txtCity').type('Tuljapur')
        // cy.wait(2000)
        // cy.get('ctl00_CPHContainer_txtState').type('Maharastra')
        // cy.wait(1000)
        // cy.get('ctl00_CPHContainer_txtCollege').type('My')
        // cy.get(1000)
        cy.get('[class="cus_dropdown"]').click().contains('What is your Name').click()
        // cy.wait(2000)
        // cy.contains('What is your Name').click()

        
       


    })
})