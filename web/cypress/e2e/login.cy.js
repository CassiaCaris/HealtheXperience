import loginPage from '../support/pages/LoginPage'
import studentPage from '../support/pages/StudentPage'
import users from '../fixtures/users.json'

describe('login', () => {

    it('deve logar com um perfil do admin', () => {

        const user = users.admin

        loginPage.doLogin(user)
        studentPage.navbar.userLogedIn(user.name)
        
    })

    it('não deve logar com senha incorreta', () => {
        const user = users.inv_pass

        loginPage.doLogin(user)
        loginPage.Popup.haveText('Suas credenciais são inválidas, por favor tente novamente!')
    })

    it('não deve logar com email não cadastrado', () => {
        const user = users.email_not_found

        loginPage.doLogin(user)
        loginPage.Popup.haveText('Suas credenciais são inválidas, por favor tente novamente!')
    })

    it('não deve logar com emails incorretos', () => {
        const emails = users.inv_emails

        let outputMessages = []
        let expectedMessages = []

        loginPage.go()
        //realizaçao do teste de uma lista de massa
        emails.forEach((u) => {
            loginPage.fill(u)
            loginPage.submit()
            //login.popUpHave('Insira um email válido.')

            loginPage.Popup.content().invoke('text').then((t)=> {
                cy.log(t)
                outputMessages.push(t)
                expectedMessages.push('Insira um email válido.')
            })

            loginPage.Popup.back()
        })

        cy.wrap(outputMessages).should('deep.equal', expectedMessages)

    })

    it('não deve logar com email em branco', () => {
        const user = users.empty_email

        loginPage.doLogin(user)
        loginPage.Popup.haveText('Os campos email e senha são obrigatórios.')
    })

    it('não deve logar com senha em branco', () => {
        const user = users.empty_pass

        loginPage.doLogin(user)
        loginPage.Popup.haveText('Os campos email e senha são obrigatórios.')
    })

})