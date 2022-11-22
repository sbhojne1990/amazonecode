describe('Verify the elements with using traverse methods', () => {
    // <ul>
    //     <li>Apple</li>//0
    //     <li>Mango</li>//1
    //     <li>Gavua</li>//2
    //     <li>Grapes</li>//3
    // </ul>
    //Actual vs expected
    //children()
    it.only('To get children of DOM elements, use the .children() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
       cy.get('.traversal-drinks-list').children().should('have.length',5)
      // cy.wait(4000)
    //    cy.get('#fruits').contains('have.text','Apple')
    //    cy.wait(4000)
    //     cy.get('.menu').children().should('have.length','3')
    })
    it('To get children of DOM elements, use the .children() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
     //  cy.get('.traversal-drinks-list').children().should('have.length',5)
      // cy.wait(4000)
        cy.get('.traversal-food-list').children().should('have.length',11)
    })

    it('To get children of DOM elements, use the .children() command.', () => {
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.menu').children().should('have.length', 3)
    })

    it('Verify theMilk text',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('.traversal-drinks-list').children().eq(2).should('have.text','Milk')
        cy.get('.traversal-food-list').children().eq(10).should('have.text','Lentils')
        cy.get('.menu').children().eq(1).should('have.text','Technology')
    })

    it('TC_  Verify the type the word in firstname and lastname bar',()=>{
        cy.visit('http://www.webdriveruniversity.com/Data-Table/index.html')
        cy.get('input[type="text"]').eq(0).type('Shriram')
        cy.get('input[type="text"]').eq(1).type('Bhojne')
        cy.get('[rows="10"]').type('I am Learning C')
    })
})