import EnrollsPage from '../support/pages/EnrollsPage'

import data from '../fixtures/enrollments.json'


describe('matriculas', () => {

    it('deve poder matricular um novo aluno', () => {
        const dataTest = data.create

        cy.task('resetStudent', dataTest.student)

        cy.adminLogin()
        EnrollsPage.Navbar.goToEntolls()
        EnrollsPage.goTo()

        EnrollsPage.selectItem('student', dataTest.student.name)
        EnrollsPage.selectItem('plan', dataTest.plan)

        EnrollsPage.fillCard(dataTest.student)

        EnrollsPage.submit()

        EnrollsPage.popup.haveText('Matrícula cadastrada com sucesso.')
    })

})