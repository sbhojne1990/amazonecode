describe('Verify the functionality of table', () => {

    beforeEach(() => {
        cy.visit('https://testautomationpractice.blogspot.com/')
    })

    it('Verify the total sum of price colum', () => {
        let sum = 0
        cy.get('[name="BookTable"]').find('tbody').children().each((el, index) => {
            // cy.log(el.text())
            //cy.log(el.children().last().text())
            // //if(index != 0){
            //     sum = sum + Number(el.children('td').last().text())
            // //}
            //cy.log(typeof(sum))
            //cy.log((el.children('td').last().text()))
            sum = sum + Number(el.children('td').last().text())

        }).then(() => {
            expect(sum).to.eq(7100)
            //cy.log(sum)
        })
    })
    it('Check the table element',()=>{
        //cy.get('[name="BookTable"]>tbody>tr').should('have.length',7)
        cy.get('[name="BookTable"]>tbody').contains('Mukesh')
      //  cy.get('tbody').eq(1).should('have.text','Author')
        
    })
    it.only('Read the all Data Frome table',()=>{
        cy.get('[name="BookTable"]>tbody>tr')
            .each(  ($row, index, $row)=>{
        cy.wrap('')

            })
    })

})