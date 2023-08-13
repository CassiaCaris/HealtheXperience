
class Navbar {
    userLogedIn() {
        cy.contains('aside .logged-user', 'Olá, ' + name).should('be.visible')
    }

    goToEntolls() {
        cy.get('a[href="/enrollments"]').click()
    }
}

export default new Navbar()