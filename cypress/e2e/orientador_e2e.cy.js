/// <reference types="cypress" />

describe("Testes E2E - Orientador", () => {

  it("Teste positivo - Criação de orientador com sucesso (CREATE)", () => {
    const nomeBase = "Dra. Ellen Page";
    const numeroAleatorio = Math.floor(Math.random() * 10001);
    const nomeFinal = `${nomeBase} ${numeroAleatorio}`;
    const email = nomeFinal.toLowerCase().replace(/\s+/g, '') + "@inatel.br";
    const senha = "123456";
    const tipoUsuario = 'Orientador';

    cy.acessarPaginaCadastro();
    cy.preencherFormulario(tipoUsuario, nomeFinal, email, senha);

    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Usuário criado com sucesso!");
  });

  it("Teste negativo - Email inválido (sem @)", () => {
    const nome = "Dr. Marvin";
    const email = "marvin.inatel.br"; // sem '@'
    const senha = "123456";
    const tipoUsuario = 'Orientador';

    cy.acessarPaginaCadastro();
    cy.preencherFormulario(tipoUsuario, nome, email, senha);

    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Por favor, insira um endereço de email válido.");
  });

  it("Teste negativo - Email duplicado", () => {
    const nomeBase = "Dr. House";
    const numeroAleatorio = Math.floor(Math.random() * 10001);
    const nomeFinal = `${nomeBase} ${numeroAleatorio}`;
    const email = nomeFinal.toLowerCase().replace(/\s+/g, '') + "@inatel.br";
    const senha = "123456";
    const tipoUsuario = 'Orientador';

    cy.acessarPaginaCadastro();
    cy.preencherFormulario(tipoUsuario, nomeFinal, email, senha);
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Usuário criado com sucesso!");

    cy.acessarPaginaCadastro();
    cy.preencherFormulario(tipoUsuario, nomeFinal, email, senha);
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Falha ao criar usuário");
  });
});