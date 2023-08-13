// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import loginPage from './pages/LoginPage'
import studentPage from './pages/StudentPage'

import users from '../fixtures/users.json'

Cypress.Commands.add('adminLogin', () => {
    const user = users.admin

    loginPage.doLogin(user)
    studentPage.navbar.userLogedIn(user.name)
})

Cypress.Commands.add('createEnroll', (dataTest) => { //reduzindo o tempo de execução dos testes
    cy.task('selectStudentId', dataTest.student.email)
        .then(result => { //realização do callback

            cy.request({
                url: 'http://localhost:3333/sessions',
                method: 'POST',
                body: { //da para user a mesma variavel que foi criada para import a massa
                    email: users.admin.email, 
                    password: users.admin.password
                }
            }).then(Response => {
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
                }).then(Response => { //validação do retorno com sucesso
                    expect(Response.status).to.eq(201)
                })
            })
        })
})