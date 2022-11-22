


describe('validate the functionality of amazon',()=>{
   
             it('',()=>{
                cy.visit('https://www.amazon.in/')
                cy.get('#twotabsearchtextbox').type('samsung')
                cy.get('.autocomplete-results-container').find('.s-suggestion').each(function(el){
                    cy.wrap(el).invoke("text").then(function(txt){
                        cy.log(txt.trim())
                        if(txt.trim()=="samsung m32"){
                            cy.wrap(el).click({force:true})
                            return false
                        }
                    })  
                })
             })
             it('list under 10000 rs phone',()=>{
                cy.get('');
             })
            
            })