describe('Scenario Satu', function () {
    it ('Access a product via Category after applying multiple filters ', function () {
        //go to web
        cy.visit('www.ebay.com', { timeout: 100000 })
        //select category
        cy.get('button[id="gh-shop-a"]').click()
        //category by cell phone > smartphone
        cy.get('.scnd').contains('Cell phones').click()
        cy.get('a').contains('Smartphones').click()
        //filter the option
        cy.get('button.fake-link').contains('Filters').click()
        //filter by screen
         cy.get('span.x-overlay-aspect__label').contains('Screen').click()
         cy.get('[type="checkbox"]').first().check().should('be.checked').and('have.value','on')
        // //filter by location
         cy.get('span.x-overlay-aspect__label').contains('Location').click()
         cy.get('[data-value = "Asia"]').check().should('be.checked')
        //filter by price
        cy.get('span.x-overlay-aspect__label').contains('Price').click()
        cy.get('.x-textrange__input--from').type('5000000').should('have.value','5000000')
        cy.get('.x-textrange__input--to').type('10000000').should('have.value','10000000')
        //click apply
        //cy.get('.btn').contains('Apply').click()
        //cy.get('.btn btn--primary').click()
        cy.get('.x-overlay-footer__apply-btn').click().should('be.visible')
        
    })  

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
})
