/// <reference types="cypress" />

describe("Testes de Alunos", () => {

  it("Teste positivo - criação de alunos manualmente com sucesso (CREATE)", () => {
    const nomeBase = "Arthur Morgan";
    const numeroAleatorio = Math.floor(Math.random() * 10001); 
    const nomeFinal = nomeBase + numeroAleatorio;
    const email = nomeFinal.toLowerCase().replace(/\s+/g, '') + "@inatel.br";
    const senha = "123456";

    acessarPaginaCadastroAluno();

    preencherFormularioAluno(nomeBase, email, senha);
    
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Usuário criado com sucesso!");
  });

  it("Teste negativo - Criação com email inapropriado - sem @", () => {
    const nomeBase = "Arthur Morgan";
    const email = "arthur.morgan.inatel.br"; // Email sem '@'
    const senha = "123456";

    acessarPaginaCadastroAluno();
    
    preencherFormularioAluno(nomeBase, email, senha);
    
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Por favor, insira um endereço de email válido.");
  });

  it("Teste negativo - Criação com email repetido", () => {
    const nomeBase = "Arthur Morgan";
    const numeroAleatorio = Math.floor(Math.random() * 10001); 
    const nomeFinal = nomeBase + numeroAleatorio;
    const email = nomeFinal.toLowerCase().replace(/\s+/g, '') + "@inatel.br";
    const senha = "123456";
    
    acessarPaginaCadastroAluno();
    
    preencherFormularioAluno(nomeBase, email, senha);
    
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Usuário criado com sucesso!");

    // Tentativa de criar o mesmo usuário novamente
    cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click();
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Falha ao criar usuário");
  });
})


function login() {
  let user = "pizz@";
  let password = "123";
  cy.visit('https://confianopai.com/login');
  cy.get(':nth-child(2) > .sc-ktwOfi').type(user);
  cy.get(':nth-child(3) > .sc-ktwOfi').type(password);
  cy.get('.sc-csKJxZ').click();
}

function acessarPaginaCadastroAluno() {
    login();    
    cy.get('[href="/adm/novo-usuario"]').click();
}

function preencherFormularioAluno(nome, email, senha) {
  cy.get('.sc-dsAqUS').select('Aluno');
  cy.get(':nth-child(1) > .sc-bqOYya > .sc-gHjVMF').type(nome);
  cy.get(':nth-child(2) > .sc-bqOYya > .sc-gHjVMF').type(email);
  cy.get(':nth-child(3) > .sc-bqOYya > .sc-gHjVMF').type(senha);
  cy.get(':nth-child(4) > .sc-irLvIq > .sc-csKJxZ').click();
}

