describe('probando errores', () => {
    it('debe validar el status code fallido y el mensaje de error', () => {
        cy.request({url: 'https://pokeapi.co/api/v2/4545' , failOnStatusCode: false})
        .then( response => {
            expect(response.status).to.eq(404)
            expect(response.body).to.eq("Not Found")
        })
    });

    it.only('validar estatus fallido de rick and morty', () => {
        cy.request({url: 'https://rickandmortyapi.com/api/location/3434343' , failOnStatusCode: false})
        .then( response => {
            expect(response.status).to.eq(404)
            expect(response.body).to.have.property('error' , "Location not found")
        })
    });
});