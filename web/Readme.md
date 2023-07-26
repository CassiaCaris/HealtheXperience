# [Bootcamp Dual Experience]<br> 
## Projeto de automação de E2E Web em Cypress <br><br> 
Esse projeto é a criação da automação em cypress para o desenvolvimento do E2E web.<br>
Usamos a formatação de Page Objects (PO) <br>
Usando a Aplicação Health Experience desenvolvida para o curso.<br>

Componentes necessários para executar o projeto<br>
Nodejs (Versão 16.16)<br>
cypress (verão 12.17.1)<br>

### Informações para execução do Projeto<br>

**Clonar o projeto**<br>
$ git clone https://github.com/CassiaCaris/HealtheXperience.git <br><br>

## Informações baixar as dependencias do Projeto e executa-lo<br><br>

**1º Passo** - Baixar as dependencias da Aplicação do Health<br>
1.1. Em um terminal baixar as dependencias de backend (pasta api)<br>
Na pasta de backend no terminal, informe o comando<br>
$ npm i<br><br>

1.2. Em um novo terminal baixar as dependencias de Frontend (pasta web)<br>
$ npm install<br><br>

1.3. Em um novo terminal baixar as dependencias de Test (web) <br>
$ npm i<br><br><br>

**2º Passo** - Para Start das Aplicações Health<br>
2.1. No mesmo terminal que baixou as dependencias do Backend (pasta api) <br>
$ npm run dev <br>

2.2. No mesmo terminal que baixou as dependencias do Frontend (pasta web) <br>
$ npm run dev <br><br>

**3º Passo** - Após start o Frontend, pode acessar a página da Health "academia"<br>
![image](https://user-images.githubusercontent.com/32333336/185809547-24fff0bc-ead6-4ead-a9c5-d947daf0424b.png)
  <br/>

**4º Passo** - Após o start da Aplicação Helath executar os testes de e2e web em Cypress <br><br>
**_Execução Visual_** <br>
4.1. No mesmo terminal que baixou as dependencias de Test <br>
Na pasta de Tests no terminal, informe o comando <br>
$ npx cypress open <br>

**5º Passo** - Após start o cypress aparecerá a tela de Boas vindas do Cypress <br>
5.1. Deve escolher a opção do E2E Testing conforme imagem abaixo: <br>
![image](https://user-images.githubusercontent.com/32333336/184724714-85d58d7a-9a17-461b-833d-f95c34f57e49.png) <br>

5.2. e peça para executar *_Running Chrome_* <br><br>

**6º Passo** - irá carregar a tela para escolher qual navegador irá executar a automção<br>
6.1. Deve escolher qual navegador irá usar para a execução dos testes

  ![image](https://user-images.githubusercontent.com/32333336/184724758-60bdeb40-a088-4376-a77f-1c331961a2a6.png)
6.2. e peça para executar Start E2E Testing in Chrome

**7º Passo** - irá carregar a inicialização da automação
7.1. Deve escolher qual arquivo deve ser inicializado

  ![image](https://user-images.githubusercontent.com/32333336/184724794-51903da2-b8c5-43e4-99ca-20986cb9af2e.png)
7.2. Peça para executar login.cy.js
7.3 onde irá carregar os cenários de login que foram criados.


**Autora**: Cassia Caris
**Curso**: QAxperience Bootcamp [Bootcamp Dual Experience]
**Periodo**: 18 de Julho de 2023 a ??