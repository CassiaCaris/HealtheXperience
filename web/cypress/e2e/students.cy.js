import StudentPage from '../support/pages/StudentPage'

import students from '../fixtures/students.json'

describe('alunos', ()=> {

    it('deve poder cadastrar um novo aluno', ()=> {
        
        const student = students.create

        cy.task('deleteStudent', student.email)
        cy.adminLogin()

        StudentPage.goToRegister()
        StudentPage.submitform(student)
        StudentPage.popup.haveText('Dados cadastrados com sucesso.')
    })

    it('não deve cadastrar com email duplicado', ()=> {
        const student = students.duplicate
        
        cy.task('resetStudent', student)

        cy.adminLogin()

        StudentPage.goToRegister()
        StudentPage.submitform(student)
        StudentPage.popup.haveText('O email informado já foi cadastrado!')
    })

    it('deve remover um aluno sem matricula', ()=> {
        const student = students.remove

        cy.task('resetStudent', student)

        cy.adminLogin()

        //para o caso do dado não se encontrar visuvel na página 1
        StudentPage.search(student.name)
        StudentPage.remove(student.email)
        StudentPage.popup.confirm()
        StudentPage.popup.haveText('Exclusão realizada com sucesso.')
    })

    it.only('todos os campos são obrigatórios', ()=> {
        const student = students.required
        cy.adminLogin()
        StudentPage.goToRegister()
        StudentPage.submitform(student)

        StudentPage.requiredMessage('Nome completo', 'Nome é obrigatório')
        StudentPage.requiredMessage('E-mail', 'O email é obrigatório')
        StudentPage.requiredMessage('Idade', 'A idade é obrigatória')
        StudentPage.requiredMessage('Peso (em kg)', 'O peso é obrigatório')
        StudentPage.requiredMessage('Altura', 'A altura é obrigatória')

       //cy.contains('label', 'Nome completo').parent().find('span').should('have.text', 'Nome é obrigatório')
    })
})