import login from '../support/pages/LoginPage'
import users from '../fixtures/users.json'

describe('login', () => {

    it('deve logar com um perfil do admin', () => {

        const user = users.admin

        login.doLogin(user)

        cy.contains('aside .logged-user', 'Olá, ' + user.name).should('be.visible')

    })

    it('não deve logar com senha incorreta', () => {
        const user = users.inv_pass

        login.doLogin(user)
        login.popUpHave('Suas credenciais são inválidas, por favor tente novamente!')
    })

    it('não deve logar com email não cadastrado', () => {
        const user = users.email_not_found

        login.doLogin(user)
        login.popUpHave('Suas credenciais são inválidas, por favor tente novamente!')
    })

    it('não deve logar com emails incorretos', () => {
        const emails = users.inv_emails

        login.go()
        //realizaçao do teste de uma lista de massa
        emails.forEach((u) => {
            login.fill(u)
            login.submit()
            login.popUpHave('Insira um email válido.')
            login.popUpBack()
        })
    })

    it('não deve logar com email em branco', () => {
        const user = users.empty_email

        login.doLogin(user)
        login.popUpHave('Os campos email e senha são obrigatórios.')
    })

    it('não deve logar com senha em branco', () => {
        const user = users.empty_pass

        login.doLogin(user)
        login.popUpHave('Os campos email e senha são obrigatórios.')
    })

})