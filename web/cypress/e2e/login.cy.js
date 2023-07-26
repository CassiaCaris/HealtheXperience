describe('login', () => {

    it('deve logar com um perfil do admin', () => {

        //Dado que eu tenho um usuário admin cadastrado

        const user = {
            email: 'admin@healthxp.com',
            password: 'xperience'
        }

        //Quando faço login no gestor de academias

        cy.visit('http://localhost:3000')

        //outra opção de preenchimento
        //cy.get('input[name=email]').type(user.email)
        //cy.get('input[name=password]').type(user.password)

        cy.get('#email').type(user.email)
        cy.get('#password').type(user.password)

        cy.contains('button', 'Entrar').click()

        //Então devo ver o dashboard
        cy.contains('aside .logged-user','Olá, Admin').should('be.visible')

    })

})