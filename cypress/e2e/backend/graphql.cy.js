describe('probando graphql', () => {
    it('', () => {
        const gqlQuery = `query pokemons($limit: Int, $offset: Int) {
            pokemons(limit: $limit, offset: $offset) {
              count
              next
              previous
              status
              message
              results {
                url
                name
                image
              }
            }
        }`;

        const gqlvariables = {
            limit: 20,
            offset:0
        }

        cy.request({
            method: 'POST',
            url: 'https://graphql-pokeapi.graphcdn.app/',
            body: {
                query: gqlQuery,
                variables:gqlvariables
            },
            
        }).then( Response => {
            cy.log(Response)
            expect(Response.body.data.pokemons.results[0].name).to.eq("bulbasaur")
        })
    });
});