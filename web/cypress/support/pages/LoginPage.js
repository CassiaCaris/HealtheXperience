

class LoginPage {

    submit(user) {
        cy.visit('http://localhost:3000')

        if (user.email) {
            cy.get('#email').type(user.email)
        }
    
        if (user.password) {
            cy.get('#password').type(user.password)
        }
    
        cy.contains('button', 'Entrar').click()
    }

    popUpHave(text){
        cy.get('#swal2-content')
        .should('be.visible')
        .should('have.text', text)
    }

}

export default new LoginPage