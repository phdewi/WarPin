describe('Scenario Dua', function () {
    it ('Access a Product via Search', function () {
        //go to web
        cy.visit('www.ebay.com', { timeout: 500000 })
        //input keyword : macbook
        cy.get('#gh-ac').type('Macbook').should('have.value','Macbook')
        //click search
        cy.get('#gh-btn').click()
        //change the category
        cy.get('#gh-cat').select("Art").should('have.value','550')
        cy.get('#gh-btn').click()
        //make sure the result
        cy.expect('macbook').to.match(/^macbook/)
    })  
    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })

})