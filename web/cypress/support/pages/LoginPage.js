

class LoginPage {

    go() {
        cy.visit('http://localhost:3000')
    }

    fill(user) {
        if (user.email) {
            cy.get('#email').clear().type(user.email)
        }

        if (user.password) {
            cy.get('#password').clear().type(user.password)
        }
    }

    submit() {
        cy.contains('button', 'Entrar').click()
    }

    doLogin(user) {
        this.go()
        this.fill(user)
        this.submit()
    }

    popUp(){
        return cy.get('#swal2-content')
    }

    popUpHave(text) {
        this.popUp()
            .should('be.visible')
            .should('have.text', text)
    }

    popUpBack() {
        cy.get('.swal2-cancel').click()
    }

}

export default new LoginPage