/// <reference types="cypress" />

describe("Testes E2E - Projetos", () => {

  it("Teste positivo - Criação de projeto manualmente com sucesso (CREATE)", () => {

    const nomeBase = "Relógio do Ben 10 ";
    const numeroAleatorio = Math.floor(Math.random() * 10001) * Math.floor(Math.random() * 10001); 
    const nomeFinal = nomeBase + numeroAleatorio;

    cy.login();

    cy.get('.sc-jdHILj').click();
    cy.get('[href="/adm/add-projeto/cadastro"]').click();
    cy.get('.sc-fYrVWQ > .sc-hsaIUA').type(nomeFinal);
    cy.get(':nth-child(2) > :nth-child(2) > .sc-hsaIUA').type("pizzonin@inatel.br");
    cy.get(':nth-child(6) > :nth-child(2) > .sc-hsaIUA').type("chris@inatel.br");
    cy.get(':nth-child(1) > .sc-bZTyFN > .sc-hlqirL').select("Sem pendências");
    cy.get(':nth-child(2) > .sc-bZTyFN > .sc-hlqirL').select("Outro");
    cy.get('.sc-eGgGjL > :nth-child(1)').click();
    cy.wait(500);
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Equipe criada com sucesso");
    cy.get('.sc-eGgGjL > :nth-child(2)').click();
    cy.get('.sc-fHejqy > .sc-irLvIq > .sc-csKJxZ').click();

  });


  it("Teste positivo - buscar o projeto inserido e clicar nele com sucesso (READ)", () => {
    criarProjeto();

    cy.login();

    const nomeFinal = Cypress.env('nomeProjeto');

    cy.get('.sc-ckdEwu').type(nomeFinal);
    cy.get('.sc-gjLLEI').click();
    cy.get('.sc-fHejqy > .sc-irLvIq > .sc-csKJxZ').click();

  });

  it("Teste positivo - inserir um aluno extra no projeto (UPDATE)", () => {
    criarProjeto();

    cy.login();
    const nomeFinal = Cypress.env('nomeProjeto');

    cy.get('.sc-ckdEwu').type(nomeFinal);
    cy.get('.sc-gjLLEI').click();
    cy.get('.sc-cPtzlb > .sc-irLvIq > .sc-csKJxZ').click();
    cy.get('.sc-ppzwM').type("fonseca@inatel.br");
    cy.get('.sc-ldgOGP').select("Integrante 3")
    cy.get('.sc-hiTDLB').click();
    cy.get('.iTLMzn > .sc-csKJxZ').click();
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Projeto atualizado com sucesso!");
    cy.get('.eRUujA > .sc-csKJxZ').click();
    cy.get('.sc-fHejqy > .sc-irLvIq > .sc-csKJxZ').click();

  });

  it("Teste negativo - inserir um aluno extra no projeto (UPDATE) que já está no projeto (ERRO)", () => {
    criarProjeto();

    cy.login();
    const nomeFinal = Cypress.env('nomeProjeto');

    cy.get('.sc-ckdEwu').type(nomeFinal);
    cy.get('.sc-gjLLEI').click();
    cy.get('.sc-cPtzlb > .sc-irLvIq > .sc-csKJxZ').click();
    cy.get('.sc-ppzwM').type("pizzonin@inatel.br");
    cy.get('.sc-ldgOGP').select("Integrante 3")
    cy.get('.sc-hiTDLB').click();
    cy.wait(500);
    cy.get('.iTLMzn > .sc-csKJxZ').click();
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Error: Não permitido o cadastro do mesmo aluno duas vezes");

  });

  it("Teste positivo - deletar o projeto inserido com sucesso (DELETE)", () => {
    criarProjeto();

    cy.login();
    const nomeFinal = Cypress.env('nomeProjeto');

    cy.get('.sc-ckdEwu').type(nomeFinal);
    cy.get('.sc-gjLLEI').click();
    cy.wait(500);
    cy.get('.sc-iCKXBC > [viewBox="0 0 448 512"]').click();
    cy.wait(500);
    cy.get('.sc-cZpZpK > :nth-child(1)').click();

  });

  it("Teste positivo - buscar o projeto inserido, mudar o nome e depois pesquisar ele novamente com sucesso(READ)", () => {
    criarProjeto();

    cy.login();

    const nomeFinal = Cypress.env('nomeProjeto');

    cy.get('.sc-ckdEwu').type(nomeFinal);
    cy.get('.sc-gjLLEI').click();
    cy.wait(500);
    cy.get('.sc-iCKXBC > [viewBox="0 0 576 512"]').click();
    cy.wait(500);
    cy.get('.sc-iVheDh').clear()
    cy.wait(500);
    cy.get('.sc-iVheDh').type(nomeFinal + " - Atualizado");
    cy.wait(500)
    cy.get('.sc-iCKXBC> [viewBox="0 0 448 512"]').click();
    cy.get('.iTLMzn > .sc-csKJxZ').click();
    cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Projeto atualizado com sucesso!");
    cy.get('.eRUujA > .sc-csKJxZ').click();
    cy.get('.sc-ckdEwu').type(nomeFinal + " - Atualizado");
    cy.get('.sc-gjLLEI').click();
  });



  
});

function criarProjeto() {
  // Gera um nome de projeto aleatório e armazena no ambiente do Cypress

  const nomeBase = "Relógio do Ben 10 ";
  const numeroAleatorio = Math.floor(Math.random() * 10001) + Math.floor(Math.random() * 10001); 
  const nomeFinal = nomeBase + numeroAleatorio;

  Cypress.env('nomeProjeto', nomeFinal);

  cy.login();
  
  cy.get('.sc-jdHILj').click();
  cy.get('[href="/adm/add-projeto/cadastro"]').click();
  cy.get('.sc-fYrVWQ > .sc-hsaIUA').type(nomeFinal);
  cy.get(':nth-child(2) > :nth-child(2) > .sc-hsaIUA').type("pizzonin@inatel.br");
  cy.get(':nth-child(6) > :nth-child(2) > .sc-hsaIUA').type("chris@inatel.br");
  cy.get(':nth-child(1) > .sc-bZTyFN > .sc-hlqirL').select("Sem pendências");
  cy.get(':nth-child(2) > .sc-bZTyFN > .sc-hlqirL').select("Outro");
  cy.get('.sc-eGgGjL > :nth-child(1)').click();
  cy.wait(500);
  cy.get('.Toastify__toast-body > :nth-child(2)').should("contain.text", "Equipe criada com sucesso");
  cy.get('.sc-eGgGjL > :nth-child(2)').click();
  cy.get('.sc-fHejqy > .sc-irLvIq > .sc-csKJxZ').click();
}
