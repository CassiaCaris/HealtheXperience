import StudentPage from '../support/pages/StudentPage'

import students from '../fixtures/students.json'

describe('alunos', () => {

    it('deve poder cadastrar um novo aluno', () => {

        const student = students.create

        cy.task('deleteStudent', student.email)
        cy.adminLogin()

        StudentPage.goToRegister()
        StudentPage.submitform(student)
        StudentPage.popup.haveText('Dados cadastrados com sucesso.')
    })

    it('não deve cadastrar com email duplicado', () => {
        const student = students.duplicate

        cy.task('resetStudent', student)

        cy.adminLogin()

        StudentPage.goToRegister()
        StudentPage.submitform(student)
        StudentPage.popup.haveText('O email informado já foi cadastrado!')
    })

    it('deve remover um aluno sem matricula', () => {
        const student = students.remove

        cy.task('resetStudent', student)

        cy.adminLogin()

        //para o caso do dado não se encontrar visuvel na página 1
        StudentPage.search(student.name)
        StudentPage.remove(student.email)
        StudentPage.popup.confirm()
        StudentPage.popup.haveText('Exclusão realizada com sucesso.')
    })

    it('todos os campos são obrigatórios', () => {
        const student = students.required
        cy.adminLogin()
        StudentPage.goToRegister()
        StudentPage.submitform(student)

        StudentPage.alertMessage('Nome completo', 'Nome é obrigatório')
        StudentPage.alertMessage('E-mail', 'O email é obrigatório')
        StudentPage.alertMessage('Idade', 'A idade é obrigatória')
        StudentPage.alertMessage('Peso (em kg)', 'O peso é obrigatório')
        StudentPage.alertMessage('Altura', 'A altura é obrigatória')

        //cy.contains('label', 'Nome completo').parent().find('span').should('have.text', 'Nome é obrigatório')
    })

    //1º Desafio Bootcamp
    it('tentar cadastrar um aluno menor de 16 anos', () => {
        const student = students.inv_age;
        // Dado que estou logado como Administrador da academia
        cy.adminLogin()
        // E que acessei o formulário de cadastro de alunos
        StudentPage.goToRegister()
        // Quando tento cadastrar um aluno com idade igual ou menor a 16 anos
        StudentPage.submitform(student)
        // Então o sistema não permite o cadastro, exibindo uma mensagem de alerta no campo idade
        StudentPage.alertMessage('Idade', 'A idade mínima para treinar é 16 anos!')
    })

    it.skip('tentar cadastrar informando peso incorreto', () => {
        const student = students.inv_weights

        student.forEach((a) => {
            // Dado que estou logado como Administrador da academia
            cy.adminLogin()
            // E que acessei o formulário de cadastro de alunos
            StudentPage.goToRegister()
            // Quando tento cadastrar um aluno informando um peso menor ou igual a ZERO
            StudentPage.submitform(a)
            // Então o sistema não permite o cadastro, exibindo uma mensagem de alerta no campo peso
            StudentPage.alertMessage('Peso (em kg)', 'O peso mínimo para treinar é 40 Kg')
        })
    })

    it.skip('tentar cadastrar informando altura incorreta', () => {
        const student = students.inv_feet_tall

        student.forEach((a) => {
            // Dado que estou logado como Administrador da academia
            cy.adminLogin()
            // E que acessei o formulário de cadastro de alunos
            StudentPage.goToRegister()
            // Quando tento cadastrar um aluno informando uma altura menor ou igual a ZERO
            StudentPage.submitform(a)
            // Então o sistema não permite o cadastro, exibindo uma mensagem de alerta no campo altura
            StudentPage.alertMessage('Altura', 'Não é possível cadastrar uma altura negativa')
        })
    })

})