# Documentação Postman - S206 Listas de Exercícios`

## Índice

- [Descrição da Coleção e Environment](#descrição-da-coleção-e-environment)  
- [Como executar os testes Postman com Newman](#como-executar-os-testes-postman-com-newman)  
- [Visualização do Relatório](#visualização-do-relatório)  

---

## Descrição da Coleção e Environment

A coleção Postman utilizada para os testes está localizada em:

- `postman/FetinNet.postman_collection.json`: contém as requisições configuradas para testar a API alvo.

O arquivo de environment associado é:

- `postman/FetinEnv.postman_environment.json`: define variáveis de ambiente que são utilizadas durante a execução dos testes para parametrizar URLs, tokens e demais dados dinâmicos.

---

## Como executar os testes Postman com Newman

Para executar a coleção Postman e gerar um relatório HTML usando Newman, rode o seguinte comando na raiz do projeto:

```bash
npx newman run postman/FetinNet.postman_collection.json -e postman/FetinEnv.postman_environment.json -r htmlextra
```

## Visualização do Relatório

Após a execução, o relatório HTML será gerado dentro da pasta ``newman/``. Para visualizar, abra o arquivo com seu navegador, por exemplo:

```bash
start newman-reporter.html
```

> O nome do arquivo pode variar conforme a execução
