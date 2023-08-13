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

    it.only('não deve criar matricula duplicata', () => {
        const dataTest = data.duplicate

        cy.task('resetStudent', dataTest.student)
        cy.task('selectStudentId', dataTest.student.email)
            .then(result => { //realização do callback
  
                cy.request({
                    url: 'http://localhost:3333/sessions',
                    method: 'POST',
                    body: {
                        email: "admin@healthxp.com",
                        password: "xperience"
                    }
                }).then(Response=> {
                    cy.log(Response.body.token)

                    const payload = { //criado uma cosntate para o payload
                        student_id: result.success.rows[0].id,
                        plan_id: dataTest.plan.id,
                        credit_card: "4242"
                    }

                    cy.request({ //realizando a criação da matricula
                        url: 'http://localhost:3333/enrollments',
                        method: 'POST',
                        body: payload,
                        headers: {
                            Authorization: 'Bearer ' + Response.body.token
                        }
                    }).then(Response=> {
                        expect(Response.status).to.eq(201)
                    })
                })


            })





    })

})