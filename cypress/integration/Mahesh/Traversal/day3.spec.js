///<reference types = "Cypress"/>

describe('TS_01 Verify the traverse Methode',()=>{
    beforeEach('',()=>{
        cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
    })
    it('TC_01 To get DOM Element that match a specific selector, use the .filter() command',()=>{
        cy.get('.traversal-button-states').children().filter('.disabled').should('have.text','Warning')
        cy.get('.traversal-buttons').children().filter('a[class="btn btn-primary"]').should('have.text','Link')
    })

    it('TC_02 To get the descedant DOM Element of the selector,use .find Command',()=>{
    //cy.get('#t01').find('th').should('have.text','Firstname')
    cy.get('#t01').find('th').first().should('have.text','Firstname')
    cy.get('#t01').find('th').eq(1).should('have.text','Lastname')
    cy.get('#t01').find('th').last().should('have.text','Age')
    cy.wait(4000)
    cy.get('.table.table-light.traversal-table').find('th').first().should('have.text','#')
    cy.get('.table.table-light.traversal-table').find('th').eq(1).should('have.text','First')
    })

    it('TC_03 To Remove Dom Elements(s) frome the set of element, use the .not() command',()=>{
        cy.get('.btn-group.btn-group-toggle').children()//4
       .not('.active').should('have.length',3)
       cy.wait(2000)    
       cy.get('.traversal-buttons').children().not('[role="button"]').should('have.length',4)
    })
    it('TC_04 To get the closest ancestor DOM element,use the .closest() command',()=>{
        cy.get('div[class="container"]').first().closest('nav').should('have.class', 'navbar navbar-inverse navbar-fixed-top')
        cy.get('button[type="submit"]').closest('div').should('have.class','traversal-buttons')
        cy.get('[class="btn btn-outline-danger"]').closest('div').should('have.class','traversal-button-states')
        cy.get('#espresso').closest('ul').should('have.class','traversal-drinks-list')
        cy.get('[class="list-group-item badge-text"]').eq(0).closest('div').should('have.class','thumbnail')
    })
    it.only('TC_05 To get the parent() DOM Element, use .parent() command',()=>{
        cy.get('a[class="btn btn-primary"]').parent('div').should('have.class','traversal-buttons')
    })
})