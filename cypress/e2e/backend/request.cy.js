describe('probando reques', () => {
    it('Debe de crear un empleado', () => {
        cy.request({
            url: 'employees',
            method: 'POST',
            body: {
                first_name: "Javier",
                last_name: "Eschweiler",
                email: "javier@platzi.com"
              }
        })
        .then( Response => {
            expect( Response.status ).to.eq(201)
            expect( Response.body ).to.have.property('id')

            const id = Response.body.id
            cy.wrap(id).as('id')
        })


    });

    it('debe de validar que se haya creado en la base de datos', function() {
        cy.request("GET" , "employees")
        .then( Response => {
            expect( Response.body[Response.body.length-1]).to .eq("javier Prueba")

        })
    });

    it('debe modificar al empleado con un nuevo correo ', function() {
        cy.request({
            url: `employees/${this.id}`,
            method: "PUT",
            body:{
                first_name: "pepito",
                last_name: "Desarrollador",
                email: "nuevo@123.com"
            }
        }).then( Response => {
            cy.log(Response)
            expect(Response.status).to.eq(200)
            expect(Response.body).to.have.property("id")

        })
    });
});