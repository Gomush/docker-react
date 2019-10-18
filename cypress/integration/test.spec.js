context('Waiting', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('Press Button', () => {
        cy.get('#username').type('12345');
        cy.get('button').click();
    })
})