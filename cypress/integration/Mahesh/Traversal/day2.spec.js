///<reference types = "Cypress"/>
describe('how to find element by using Traverse method',()=>{
    beforeEach('',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
    })

    it('TC_01 To get the prev sibling DOM element, use the .prev() command',()=>{
        cy.get('#sugar').prev().should('have.text','Espresso')
      //  .and('have.id','espresso')
        cy.get('#milk').prev().should('have.text','Tea')
    })

    it('TC_02 To get the Next siblings in DOM element use the .next() command',()=>{
        cy.get('#coffee').next().should('have.text','Tea')
       
    })
    it('TC_03 To get the DOM Siblings in DOM element use the .nextall() command',()=>{
        cy.get('#fruits').nextAll().should('have.length',10)
        cy.get('#veggie').prevAll().should('have.length',6)
    })
    it.only('TC_04 Tp get the DOM prevUntill() siblings in DOM element use the .prevUntill() Command',()=>{
        cy.get('#espresso').prevUntil('#coffee').should('have.length',2)
        cy.get('#milk').nextUntil('#sugar').should('have.length',1)
    })
    

})