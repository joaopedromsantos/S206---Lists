# Documentação Cypress - S206 Listas de Exercícios

## Índice

- [Executando a Suíte de Testes](#executando-a-suíte-de-testes)  
- [Gerando Relatórios de Testes](#gerando-relatórios-de-testes)  
- [Visualizando os Relatórios de Testes](#visualizando-os-relatórios-de-testes)  


---

## Executando a Suíte de Testes

Para executar todos os testes E2E localizados no diretório `cypress/e2e`, use o comando:

```bash
npx cypress run
```

Caso queira abrir o Test Runner do Cypress em modo interativo, útil para depuração e visualização, utilize:

```bash
npx cypress open
```

---


## Gerando Relatórios de Testes

Para gerar relatórios utilizando o **Mochawesome**, certifique-se de que o pacote está instalado. Se ainda não instalou, execute:

```bash
npm install cypress-mochawesome-reporter
```

A execução dos testes com geração de relatório pode ser configurada para criar um relatório separado para cada arquivo de teste E2E, evitando que o último teste sobrescreva o relatório anterior.

Os relatórios HTML e JSON serão gerados na pasta ``mochawesome-report.``

---

## Visualizando os Relatórios de Testes

Após a execução dos testes, você pode visualizar o relatório abrindo o seguinte arquivo no navegador:

```bash
mochawesome-report/mochawesome.html
```

Rode o seguinte comando para abrir o HTML no navegador:

```bash
start mochawesome-report/mochawesome.html
```

Este relatório HTML fornece um resumo visual dos resultados dos testes, incluindo testes aprovados, reprovados e ignorados.
