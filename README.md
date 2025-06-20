# S206 - Listas de Exercícios

## Índice

- [Visão Geral](#visão-geral)
- [Estrutura do Repositório](#estrutura-do-repositório)
- [Clonando o Repositório](#clonando-o-repositório)
- [Instalando Dependências](#instalando-dependências)
- [Execução dos Testes](#execução-dos-testes)
- [Documentações Específicas](#documentações-específicas)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Autores](#autores)
---

## Visão Geral

Este repositório contém listas de exercícios desenvolvidas na disciplina S206 - Qualidade de Software, do INATEL - Instituto Nacional de Telecomunicações. As atividades foram implementadas com foco em testes de software utilizando Cypress e Postman, explorando testes automatizados end-to-end e testes de API.

---

## Estrutura do Repositório

```plaintext
.
├── cypress/                # Definições dos testes Cypress
│   └── e2e/                # Casos de teste E2E
├── mochawesome-report/    # Pasta dos relatórios HTML gerados
├── node_modules/          # Dependências instaladas
├── postman/                 # Coleções e ambientes utilizados nos testes Postman
│   ├── FetinNet.postman_collection.json         # Coleções de requisições Postman (.json)
│   └── FetinEnv.postman_environment.json       # Arquivos de ambiente (.json)
├── newman/                  # Pasta de saída dos relatórios gerados com o Newman
│   └── newman-reporter.html
├── docs/                    # Documentações específicas de Cypress e Postman
│   ├── cypress.md
│   └── postman.md
├── cypress.config.js      # Arquivo de configuração do Cypress
├── package.json           # Metadados do projeto e dependências
├── package-lock.json      # Árvore de dependências bloqueadas
└── README.md              # Documentação do projeto
```

---

## Clonando o Repositório

Para clonar este repositório em sua máquina local, execute o seguinte comando:

```bash
git clone https://github.com/joaopedromsantos/S206---Lists.git
cd S206---Lists
```

---

## Instalando Dependências

Antes de executar os testes, instale as dependências listadas no arquivo `package.json` utilizando o `npm`:

```bash
npm install
```

Isso instalará o Cypress, Mochawesome, Newman e todas as demais dependências necessárias para rodar a suíte de testes e gerar relatórios.

---

## Execução dos Testes

A execução dos testes varia conforme a tecnologia utilizada. Abaixo estão as documentações detalhadas para cada caso.

---

## Documentações Específicas

Acesse os links abaixo para instruções completas sobre cada uma das listas de exercícios:

- [Documentação Cypress](./docs/cypress.md): instruções sobre como executar testes automatizados end-to-end com Cypress, incluindo geração de relatórios com Mochawesome.
- [Documentação Postman](./docs/postman.md): instruções sobre como importar, configurar e executar os testes da coleção Postman.

---

## Executando a Suíte de Testes

Você pode executar a suíte de testes do Cypress com o seguinte comando:

```bash
npx cypress run
```

Isso executará todos os arquivos de teste E2E localizados no diretório `cypress/e2e`.

Para abrir o Test Runner do Cypress em modo interativo (útil para depuração), utilize:

```bash
npx cypress open
```

---

## Gerando Relatórios de Testes

Para gerar um relatório de testes utilizando o **Mochawesome**, use o comando abaixo:

```bash
npm i cypress-mochawesome-reporter
```

Isso criará uma pasta chamada `mochawesome-report` contendo os arquivos do relatório nos formatos HTML e JSON.

OBS.: Pra cada arquivo e2e tem que ser gerado um report pra que gere um HTML próprio dele. Caso contrário, o último arquivo de teste e2e que for rodado que será mostrado no relatório.

---

## Visualizando os Relatórios de Testes

Após a execução dos testes, você pode visualizar o relatório abrindo o seguinte arquivo no navegador:

```bash
mochawesome-report/mochawesome.html
```

Rode o seguinte comando para abir o html no navegador:

```bash
start mochawesome-report/mochawesome.html
```

Este relatório HTML fornece um resumo visual dos resultados dos testes, incluindo testes aprovados, reprovados e ignorados.

---

## Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) - Framework de testes E2E
- [Postman](https://www.postman.com/) - Plataforma de testes de APIs
- [Node.js](https://nodejs.org/) - Ambiente de execução JavaScript
- [Mochawesome](https://github.com/adamgruber/mochawesome) - Gerador de relatórios de testes


---

## Autores

### [Davi Rosim](https://github.com/DaviRosimES)

Estudante de engenharia de software com paixão por tecnologia e programação em várias linguagens, incluindo C++, Java e Python. Atua em projetos de desenvolvimento de software, com experiência em gerenciamento de projetos, QT Framework, Linux, programação orientada a objetos, Docker, versionamento com Git e GitHub, processamento de imagens e Inteligência Artificial.

### [Henrique Pizzoni](https://github.com/henrique-pizzoni)

Estudante de Engenharia de Software e bolsista de pesquisa no CDG Hub do INATEL. Trabalha com desenvolvimento de software utilizando visão computacional com Python (YoloV8) e simulações com FlexSim. Possui conhecimentos em Java, Python, Arduino, C++, bancos de dados SQL (MySQL) e NoSQL (MongoDB, Neo4j). Interesse em back-end, análise de dados e visão computacional.

### [João Pedro Santos](https://github.com/joaopedromsantos)

João Pedro Martins dos Santos, estudante do 6º período de Engenharia de Software no Inatel. Desenvolvedor de software com foco em back-end, com conhecimento em APIs RESTful, autenticação e arquitetura de projetos.

### [Matheus Fonseca](https://github.com/matheusAFONSECA)

Estudante do nono (9º) semestre de Engenharia da Computação no Instituto Nacional de Telecomunicações (Inatel). Atuou em Iniciação Científica no CS&ILAB no projeto Park Here, com foco em visão computacional para reconhecimento de placas e identificação de veículos. Foi monitor de Física 1, 2 e 3. Atualmente é estagiário no Inatel Competence Center (ICC), no setor de PDI SW.

### [Vinícius de Souza](https://github.com/viniss211)

Estudante de Engenharia de Software no INATEL, com foco em desenvolvimento de sistemas, IoT e software embarcado. Estagiário no CIDC, atuando na configuração de equipamentos em redes móveis. Experiência com Python, JavaScript, C++, MicroPython e Linux embarcado. Desenvolveu soluções para controle de acesso, automação e sistemas inteligentes.
