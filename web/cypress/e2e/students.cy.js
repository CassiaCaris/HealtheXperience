import dash from '../support/pages/DashPage'
import students from '../fixtures/students.json'

describe('studentes', ()=> {

    it('deve poder cadastrar um novo aluno', ()=> {
        
        const student = students.create

        cy.task('deleteStudent', student.email)
        
        cy.adminLogin()

        cy.get('a[href="/students/new"]').click()

        cy.get('input[name=name]').type(student.name)
        cy.get('input[name=email]').type(student.email)
        cy.get('input[name=age]').type(student.age)
        cy.get('input[name=weight]').type(student.weight)
        cy.get('input[name=feet_tall]').type(student.feet_tall)

        cy.contains('button','Cadastrar').click()
    })
})