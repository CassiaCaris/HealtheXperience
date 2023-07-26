

class LoginPage {

    go() {
        cy.visit('http://localhost:3000')
    }

    fill(user) {

        cy.get('#email').clear().as('email')
        cy.get('#password').clear().as('password')

        user.email ? cy.get('@email').type(user.email) : cy.log('empty email')
        user.password ? cy.get('@password').type(user.password) : cy.log('empty password')

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