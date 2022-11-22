///<reference types = "Cypress" />

describe('TS_01 Verify the all test cases under this website',()=>{
    beforeEach("Automatic visit Functionality",()=>{
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
    })

    it('TC_01 Verify the all test csses ',()=>{

        cy.get('[name="first_name"]').type('Shriram')
        cy.get('[name="last_name"]').type('Mali')
        cy.get('[name="email"]').type('abc@gmail.com')
        cy.get('[name="message"]').type('ABCDEF')
        cy.get('[type="submit"]').click()
        cy.get('#contact_reply').should('contain','Thank You for your Message!')
        cy.url().should('contain','thank-you.html')
        cy.title().should('contain','Gianni Bruno - Designer')
    })
})