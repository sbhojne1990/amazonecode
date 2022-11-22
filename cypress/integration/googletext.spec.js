///<reference types = "Cypress"/>
//Run | Debug
describe('TS_01 How to verify the text on google',()=>{
   // Run | Debug
    beforeEach('',()=>{
        cy.visit('https://www.google.com/')
    })

    it('TC_01 How to validate Test case',()=>{
        cy.get('[type="text"]').type('Cypress')
        cy.get('.wM6W7d').each((el)=>{
            if(el.text().trim().includes('cypress automation')){
                cy.wrap(el).click({force:true})
                return false
            }
        })
    })
})