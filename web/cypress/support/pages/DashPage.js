
class DashPage {
    userLogedIn() {
        cy.contains('aside .logged-user', 'Olá, ' + name).should('be.visible')
    }
}

export default new DashPage()