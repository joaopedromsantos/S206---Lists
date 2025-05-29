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

Cypress.Commands.add("login", () => {
    const user = "pizz@";
    const password = "123";
    cy.visit('https://confianopai.com/login');
    cy.wait(1000)
    cy.get(':nth-child(2) > .sc-ktwOfi').type(user);
    cy.get(':nth-child(3) > .sc-ktwOfi').type(password);
    cy.get('.sc-csKJxZ').click();
});

Cypress.Commands.add("acessarPaginaCadastro", () => {
    cy.login()
    cy.get('[href="/adm/novo-usuario"]').click();
});

Cypress.Commands.add("preencherFormulario", (tipo, nome, email, senha) => {
  cy.get('.sc-dsAqUS').select(tipo);  // 'Aluno' ou 'Orientador'
  if (nome !== "") cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type(nome);
  if (email !== "") cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(email);
  if (senha !== "") cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type(senha);
  cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click();
});

Cypress.Commands.add("preencherFormulario_alternativo", (tipo, nome, email, senha) => {
  cy.get('.sc-dsAqUS').select(tipo);  // 'Aluno' ou 'Orientador'
  if (nome !== "") cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type(nome);
  if (email !== "") cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(email);
  if (senha !== "") cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type(senha);
});