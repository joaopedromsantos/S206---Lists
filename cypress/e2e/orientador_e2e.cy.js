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

    cy.get('[href="/adm/projetos"]').click();
    cy.get('[href="/adm/novo-usuario"]').click();
    cy.preencherFormulario(tipoUsuario, nomeFinal, email, senha);
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Falha ao criar usuário");
  });

  it("Teste positivo - Criação de orientador com nome acentuado", () => {
    const nomeBase = "André Do Grau";
    const numeroAleatorio = Math.floor(Math.random() * 10001);
    const nomeFinal = nomeBase + numeroAleatorio;
    const email = nomeFinal.toLowerCase().replace(/\s+/g, '').normalize("NFD").replace(/[\u0300-\u036f]/g, "") + "@inatel.br";
    const senha = "123456";
    const tipoUsuario = 'Orientador';

    cy.acessarPaginaCadastro();
    cy.preencherFormulario(tipoUsuario, nomeFinal, email, senha);
    
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Usuário criado com sucesso!");
  });

  it("Teste que era pra ser negativo, mas o site deixa - Criação de orientador que antes era aluno (mesmas credenciais)", () => {
    const nomeBase = "Joninhas";
    const numeroAleatorio = Math.floor(Math.random() * 10001);
    const nomeFinal = `${nomeBase} ${numeroAleatorio}`;
    const email = nomeFinal.toLowerCase().replace(/\s+/g, '') + "@inatel.br";
    const senha = "123456";
    const tipoUsuario = 'Orientador';

    cy.acessarPaginaCadastro();
    cy.preencherFormulario("Aluno", nomeFinal, email, senha);
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Usuário criado com sucesso!");

    cy.get('[href="/adm/projetos"]').click();
    cy.get('[href="/adm/novo-usuario"]').click();
    cy.preencherFormulario(tipoUsuario, nomeFinal, email, senha);
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Usuário criado com sucesso");
  });
  
  it("Teste positivo - Começar a preencher as credencias, clicar na opção de Selecione, e voltar pro Orientador e estar com as informações salvas", () => {
    const nomeBase = "Joninhas";
    const numeroAleatorio = Math.floor(Math.random() * 10001);
    const nomeFinal = `${nomeBase} ${numeroAleatorio}`;
    const email = nomeFinal.toLowerCase().replace(/\s+/g, '') + "@inatel.br";
    const senha = "123456";
    const tipoUsuario = 'Orientador';

    cy.acessarPaginaCadastro();
    cy.preencherFormulario_alternativo(tipoUsuario, nomeFinal, email, senha);
    cy.get('.sc-dsAqUS').select("Selecione...");  
    cy.get('.sc-dsAqUS').select("Orientador");  
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click();
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Usuário criado com sucesso");
  
  
  });






});