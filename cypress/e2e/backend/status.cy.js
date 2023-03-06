
describe('probando statuses', () => {
    it('debe de validar el status code exitoso', () => {
        cy.request('/employees')
        .its('status')
        .should('eq', 200)
        
    });

    it('status code fallido', () => {
        cy.request({url: '/employees/4', failOnStatusCode: false})
        .its('status')
        .should('eq', 404)
        
    });
});