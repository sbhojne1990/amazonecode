///<reference types = "Cypress"/>

describe('Traverse Method Verifaction',()=>{

    beforeEach('',()=>{
        cy.visit('https://www.ironspider.ca/forms/checkradio.htm')
    })

    it('TC_01 Verify the functionality of checkboxes using .check() method',()=>{
        cy.get('[value="red"]').check().should('be.checked')
        cy.get('[value="yellow"]').check().should('be.checked')
        cy.get('[value="blue"]').check().should('be.checked')
        cy.get('[value="orange"]').check().should('be.checked')
        cy.get('[value="green"]').check().should('be.checked')
        cy.get('[value="purple"]').check().should('be.checked')
    })

    it('TC06 check the functionality of radio buttons', () => {
      cy.get('[type="radio"]').each((el,i)=>{
          cy.wrap(el).first().click().should('be.checked')
      })
      
        //  cy.get('[type="radio"]').each((el,i)=>{
        //    cy.wrap(el).check().should('be.checked')
       // })
     })
     it.only('TC04 check the multiple checkboxes at ones', () => {
        cy.get('[type="checkbox"]').check(['red','yellow','blue','orange','green','purple']).should('be.checked')
    })
})