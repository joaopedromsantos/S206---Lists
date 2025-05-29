/// <reference types="cypress" />

describe("Testes E2E - Alunos", () => {

  it("Teste positivo - criação de alunos manualmente com sucesso (CREATE)", () => {
    const nomeBase = "Arthur Morgan";
    const numeroAleatorio = Math.floor(Math.random() * 10001); 
    const nomeFinal = nomeBase + numeroAleatorio;
    const email = nomeFinal.toLowerCase().replace(/\s+/g, '') + "@inatel.br";
    const senha = "123456";
    const tipoUsuario = 'Aluno';

    cy.acessarPaginaCadastro();
    cy.preencherFormulario(tipoUsuario, nomeFinal, email, senha);
    
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Usuário criado com sucesso!");
  });

  it("Teste negativo - Criação com email inapropriado - sem @", () => {
    const nomeBase = "Arthur Morgan";
    const email = "arthur.morgan.inatel.br"; // Email sem '@'
    const senha = "123456";
    const tipoUsuario = 'Aluno';

    cy.acessarPaginaCadastro();
    cy.preencherFormulario(tipoUsuario, nomeBase, email, senha);
    
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Por favor, insira um endereço de email válido.");
  });

  it("Teste negativo - Criação com email repetido", () => {
    const nomeBase = "Arthur Morgan";
    const numeroAleatorio = Math.floor(Math.random() * 10001); 
    const nomeFinal = nomeBase + numeroAleatorio;
    const email = nomeFinal.toLowerCase().replace(/\s+/g, '') + "@inatel.br";
    const senha = "123456";
    const tipoUsuario = 'Aluno';
    
    cy.acessarPaginaCadastro();
    cy.preencherFormulario(tipoUsuario, nomeFinal, email, senha);
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Usuário criado com sucesso!");

    // Tentativa de criar o mesmo usuário novamente
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click();
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Falha ao criar usuário");
  });

  it("Teste positivo - Criação de aluno com nome acentuado", () => {
    const nomeBase = "José da Silva";
    const numeroAleatorio = Math.floor(Math.random() * 10001);
    const nomeFinal = nomeBase + numeroAleatorio;
    const email = nomeFinal.toLowerCase().replace(/\s+/g, '').normalize("NFD").replace(/[\u0300-\u036f]/g, "") + "@inatel.br";
    const senha = "123456";
    const tipoUsuario = 'Aluno';

    cy.acessarPaginaCadastro();
    cy.preencherFormulario(tipoUsuario, nomeFinal, email, senha);
    
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Usuário criado com sucesso!");
  });

    it("Teste negativo - Criação de aluno com senha vazia", () => {
    const nomeBase = "Maria Clara";
    const numeroAleatorio = Math.floor(Math.random() * 10001);
    const nomeFinal = nomeBase + numeroAleatorio;
    const email = nomeFinal.toLowerCase().replace(/\s+/g, '') + "@inatel.br";

    cy.acessarPaginaCadastro();

    cy.get('.sc-dsAqUS').select('Aluno');
    cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type(nomeBase);
    cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(email);
    // não digita a senha
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click();

    // Verifica se ainda está na página de criação (não foi redirecionado)
    cy.url().should("include", "/novo-usuario");
  });

  it("Teste negativo - Criação de aluno com nome vazio", () => {
    const email = "aluno_teste_" + Math.floor(Math.random() * 10000) + "@inatel.br";
    const senha = "123456";

    cy.acessarPaginaCadastro();

    cy.get('.sc-dsAqUS').select('Aluno');
    // não digita o nome
    cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(email);
    cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type(senha);
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click();

    // Verifica se ainda está na página de criação (não foi redirecionado)
    cy.url().should("include", "/novo-usuario");
  });

});