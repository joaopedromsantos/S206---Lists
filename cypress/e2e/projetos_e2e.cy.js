/// <reference types="cypress" />

describe("Testes da página de projetos", () => {

  it("Teste de criação de projeto manualmente com sucesso (CREATE)", () => {
    const nomeBase = "Relógio do Ben 10 ";
    const numeroAleatorio = Math.floor(Math.random() * 10001); 
    const nomeFinal = nomeBase + numeroAleatorio;
    Cypress.env('nomeProjeto', nomeFinal);

    login();    
    cy.get('.sc-jdHILj').click();
    cy.get('[href="/adm/add-projeto/cadastro"]').click();
    cy.get('.sc-fYrVWQ > .sc-hsaIUA').type(nomeFinal);
    cy.get(':nth-child(2) > :nth-child(2) > .sc-hsaIUA').type("pizzonin@inatel.br");
    cy.get(':nth-child(6) > :nth-child(2) > .sc-hsaIUA').type("chris@inatel.br");
    cy.get(':nth-child(1) > .sc-bZTyFN > .sc-hlqirL').select("Sem pendências");
    cy.get(':nth-child(2) > .sc-bZTyFN > .sc-hlqirL').select("Outro");
    cy.get('.sc-eGgGjL > :nth-child(1)').click();
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Equipe criada com sucesso");
    cy.get('.sc-eGgGjL > :nth-child(2)').click();
    cy.get('.sc-fHejqy > .sc-irLvIq > .sc-csKJxZ').click();
  });

  it("Teste de buscar o projeto inserido e clicar nele com sucesso (READ)", () => {
    const nomeFinal = Cypress.env('nomeProjeto');
    login();
    cy.get('.sc-ckdEwu').type(nomeFinal);
    cy.get('.sc-gjLLEI').click();
    cy.get('.sc-fHejqy > .sc-irLvIq > .sc-csKJxZ').click();
  });

  it("Teste de inserir um aluno extra no projeto (UPDATE)", () => {
     const nomeFinal = Cypress.env('nomeProjeto');
    login();
    cy.get('.sc-ckdEwu').type(nomeFinal);
    cy.get('.sc-gjLLEI').click();
    cy.get('.sc-cPtzlb > .sc-irLvIq > .sc-csKJxZ').click();
    cy.get('.sc-ppzwM').type("fonseca@inatel.br");
    cy.get('.sc-hiTDLB').click();
    cy.get('.iTLMzn > .sc-csKJxZ').click();
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Projeto atualizado com sucesso!");
    cy.get('.eRUujA > .sc-csKJxZ').click();
    cy.get('.sc-fHejqy > .sc-irLvIq > .sc-csKJxZ').click();
  });

  it("Teste negativo - inserir um aluno extra no projeto (UPDATE) que já está no projeto (ERRO)", () => {
    const nomeFinal = Cypress.env('nomeProjeto');
    login();
    cy.get('.sc-ckdEwu').type(nomeFinal);
    cy.get('.sc-gjLLEI').click();
    cy.get('.sc-cPtzlb > .sc-irLvIq > .sc-csKJxZ').click();
    cy.get('.sc-ppzwM').type("fonseca@inatel.br");
    cy.get('.sc-hiTDLB').click();
    cy.get('.iTLMzn > .sc-csKJxZ').click();
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Error: Não permitido o cadastro do mesmo aluno duas vezes");
  });
  
});

function login() {
  let user = "pizz@";
  let password = "123";
  cy.visit('https://confianopai.com/login');
  cy.get(':nth-child(2) > .sc-ktwOfi').type(user);
  cy.get(':nth-child(3) > .sc-ktwOfi').type(password);
  cy.get('.sc-csKJxZ').click();
}
