///<reference types="Cypress"/>



describe('validate the functionality of amazon',()=>{
   
             it.only('',()=>{
                cy.visit('https://www.amazon.in/')
                cy.get('#twotabsearchtextbox').type('samsung')
                cy.get('.autocomplete-results-container').find('.s-suggestion').each(function(el){
                    cy.wrap(el).invoke("text").then(function(text){
                        cy.log(text.trim())
                        if(text.trim()=="samsung"){
                            cy.wrap(el).click({force:true})
                            return false
                        }
                    })
                })
             })



             
            })