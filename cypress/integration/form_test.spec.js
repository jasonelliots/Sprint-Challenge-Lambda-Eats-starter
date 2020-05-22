// test that you can add text to the box
// test that you can select multiple toppings
// test that you can submit the form

describe('Form Inputs', () => {
    it('Can navigate to the site', () => {
        cy.visit('http://localhost:3002/pizza')
    })

    it('Can receive a name', () => {
        cy.get('input[name="name"]')
            .type('Jason')
            .should('have.value', 'Jason')
    })

    it('Can select multiple toppings', () => {
        cy.get('input[name="cheese"]').click()
        cy.get('input[name="pepperoni"]').click()
     
    })
    it('Can submit', () => {
        cy.get('button').click()
    })

})