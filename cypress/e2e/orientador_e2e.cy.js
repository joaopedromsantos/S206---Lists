/// <reference types="cypress" />

describe("Testes E2E - Orientador", () => {

  it("Teste positivo - Criação de orientador com sucesso (CREATE)", () => {
    const nomeBase = "Dra. Ellen Page";
    const numeroAleatorio = Math.floor(Math.random() * 10001);
    const nomeFinal = `${nomeBase} ${numeroAleatorio}`;
    const email = nomeFinal.toLowerCase().replace(/\s+/g, '') + "@inatel.br";
    const senha = "123456";

    acessarPaginaCadastro();
    preencherFormulario(nomeFinal, email, senha);

    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Usuário criado com sucesso!");
  });

  it("Teste negativo - Email inválido (sem @)", () => {
    const nome = "Dr. Marvin";
    const email = "marvin.inatel.br"; // sem '@'
    const senha = "123456";

    acessarPaginaCadastroOrientador();
    preencherFormularioOrientador(nome, email, senha);

    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Por favor, insira um endereço de email válido.");
  });

  it("Teste negativo - Email duplicado", () => {
    const nomeBase = "Dr. House";
    const numeroAleatorio = Math.floor(Math.random() * 10001);
    const nomeFinal = `${nomeBase} ${numeroAleatorio}`;
    const email = nomeFinal.toLowerCase().replace(/\s+/g, '') + "@inatel.br";
    const senha = "123456";

    acessarPaginaCadastroOrientador();
    preencherFormularioOrientador(nomeFinal, email, senha);
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Usuário criado com sucesso!");

    acessarPaginaCadastroOrientador();
    preencherFormularioOrientador(nomeFinal, email, senha);
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Falha ao criar usuário");
  });
});

function acessarPaginaCadastro() {
  login();    
  cy.get('[href="/adm/novo-usuario"]').click();
}

function preencherFormulario(nome, email, senha) {
  cy.get('.sc-dsAqUS').select('Aluno');
  if (nome !== "") cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type(nome);
  if (email !== "") cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(email);
  if (senha !== "") cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type(senha);
  cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click();
}
