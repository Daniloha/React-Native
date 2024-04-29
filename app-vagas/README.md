# PROJETO RH EM AÇÃO

### SOBRE

No Brasil, o desemprego é um desafio persistente que afeta milhões de pessoas, especialmente os jovens recém-formados que enfrentam uma barreira significativa ao tentar ingressar no mercado de trabalho. Muitas vagas disponíveis exigem dois anos ou mais de experiência prévia, o que cria um dilema para os jovens recém-formados que não têm essa experiência. Esse cenário cria um ciclo difícil de quebrar, pois os estudantes recém-formados não conseguem adquirir a experiência necessária para competir por essas vagas, enquanto as empresas enfrentam dificuldades para preencher essas posições devido à falta de candidatos qualificados. Diante dessa realidade, o projeto "RH em Ação" surgiu como uma resposta a esse desafio, buscando não apenas divulgar vagas de emprego, mas também oferecer uma plataforma inclusiva e acessível para jovens em busca de oportunidades. A equipe multidisciplinar responsável pelo desenvolvimento do aplicativo enfrentou o desafio de criar uma solução que conciliasse a necessidade das empresas por profissionais experientes com a demanda dos jovens por uma chance de ingressar no mercado de trabalho.

O projeto "RH em Ação" foi desenvolvido como parte da avaliação da disciplina de Programação Para Dispositivos Móveis em Android. O objetivo do projeto era criar um aplicativo em React Native voltado para a divulgação de vagas de emprego. A equipe responsável pelo projeto inclui Danilo Holanda Araujo como Scrum Master e Full Stack, Amanda Martins como Front-end, Dierée como DBA, Vitor Pilares como Systems Analyst, Alberto Teles como Requirements Manager e Beatriz Ramos como Full Stack. O aplicativo foi desenvolvido com foco na facilidade de uso e na apresentação intuitiva das informações sobre as vagas disponíveis.

---

### EQUIPE

PROFESSOR : MARCIO BARBADO

INTEGRANTES:

| NOME                  | FUNÇÃO               | RA             |
| --------------------- | -------------------- | -------------- |
| DANILO HOLANDA ARAUJO | SCRUM MASTER         | 202202150241   |
| DIEREE                | DBA                  | 202203882449   |
| ALBERTO               | REQUERIMENTS MANAGER |                |
| AMANDA                | FRONT-END            | 202202931306   |
| BEATRIZ               | FULL STACK           | 202202809225   |
| VITOR                 | SYSTEM ANALYST       | _202201048166_ |

---

### ESTRUTURA DOCONTEUDO

#### **1 - Documentação de Requisitos**:

- Visão geral do produto
- Termos técnicos
- Abreviações e acrônimos
- Envolvidos e Usuários
- Requisitos (Funcionais, Não-Funcionais e Regras de Negócio)
- Casos de uso ou histórias de usuário.
- Diagramas de casos de uso, se aplicável.
- Requisitos de desempenho, segurança, usabilidade, etc.

**2 - Documentação de Arquitetura**:

- Introdução
- Visão geral da arquitetura do sistema.
- Diagramas de arquitetura (por exemplo, diagrama de componentes, diagrama de implantação).
- Descrição dos principais componentes e sua interação.
- Decisões arquiteturais e justificativas.

**3 - Documentação de Design**:

- Diagramas de classes, sequência, estado, etc.
- Especificações detalhadas de cada componente ou módulo.
- Design de interfaces de usuário.
- Padrões de design utilizados.

**4 - Documentação de Testes**:

- Plano de testes, incluindo casos de teste e critérios de aceitação.
- Relatórios de testes realizados e resultados obtidos.
- Registro de defeitos e problemas encontrados durante os testes.

**5 - Documentação de Código**:

- Comentários no código-fonte explicando a lógica e o propósito de partes específicas do código.
- Documentação de API para bibliotecas ou módulos reutilizáveis.
- Guia de contribuição para desenvolvedores que desejam colaborar com o projeto.

**6 - Documentação do Usuário**:

- Guia do usuário ou manual do usuário.
- Instruções passo a passo para usar o software.
- FAQs (perguntas frequentes) sobre o uso do software.

**7 - Documentação de Manutenção**:

- Instruções para instalação e configuração do software.
- Guia de solução de problemas e resolução de problemas comuns.
- Notas de versão e histórico de alterações.

---

**1 - Documentação de Requisitos**:

---

- **Visão Geral do Produto**

\-> A documentação de requisitos aborda uma visão geral do produto, abordando a justificativa para a criação do produto, os envolvidos no projeto (atores/stakeholders), suas histórias (casos de uso) e os requisitos delimitadores do projeto.

\-> Este projeto foi criado utilizando a bibioteca React-Native de JavaScript para a criação de interfaces visuais para dispositivos móveis. Embora não seja um framework completo como Angular ou Vue.js, o React Native é uma biblioteca que permite criar interfaces de usuário nativas para iOS e Android usando componentes declarativos semelhantes aos do React.

Para a criação e estruturação do backend, faz-se necessário autilização de um superset de JavaScript chamado Typescript, o que permite a criação de código mais robusto e seguro. Além de adicionar uma tipagem estática de dados, o Typescript ofereceoutras funcionalidades como classes, enums, interfaces e etc.

- **Termos Técnicos**

| NOME         | DESCRIÇÃO                                                                                                               |
| ------------ | ----------------------------------------------------------------------------------------------------------------------- |
| JavaScript   | Linguagem de programação interpretada, versátil e uma das mais utilizadas para os mais diversos tipos de projetos.      |
| React Native | Uma biblioteca (library) para criar interfaces de usuário em aplicativos móveis.                                        |
| TypeScript   | Um superset da linguagem JavaScript que adiciona recursos de tipagem estática opcional e outros recursos ao JavaScript. |

- **Abreviações e acrônimos**

| NOME | DESCRIÇÃO |
| ---- | --------- |

- **Stakeholders**

\-> Este projeto possui inicialmente quantro stakeholders:

Professor orientador: Responsável por trazer "o problema a ser resolvido". Comunica os requisitos dos usuários administradores para os desenvolvedores e valida as etapasdo projeto.

Usuario administrador: Usuário mais privilegiado em relação a níveis de acesso ao sistema. Número limitado entre 10 e 15 contas utilizadas pelas pessoas que devem cadastrar as vagas de trabalho no sistema, além de alguns privilégios de edição e bloqueio de contas.

Usuario comum: O usuário com o nivel de acesso mais básico ao sistema. Utilizado por qualquer pessoa que queira ter acesso ao sistema e se candidataras vagasá cadastradas.

Usuario estuante: É um usuario comum, porém com algumas informações a mais, como matrícula semestre e curso matriculado.

- **Requisito**

\-Funcionais: Descrevem as funcionalidades do sistema.

| TIPO | ID  | DESCRIÇÃO                                                                                                       |
| ---- | --- | --------------------------------------------------------------------------------------------------------------- |
| RF   | 001 | O SISTEMA DEVE POSSUIR A FUNÇÃO DE LOGIN UNICO PARA TODOS OS NÍVEIS DE USUÁRIO.                                 |
| RF   | 002 | O SISTEMA DEVE PERMITIR A NAVEGAÇÃO INICIAL ENTRE AS QUATRO TELAS BÁSICAS INICIAIS, INDEPENDENTEMENTE DO LOGIN. |
| RF   | 003 | O SISTEMA DEVE POSSUIR A FUNÇÃO DE CADASTRO DE USUÁRIO ONDE FAÇA A DISTINÇÃO ENTRE USUÁRIO COMUM E ESTUDANTE.   |
| RF   | 004 | O SISSTEMA DEVE POSSUIR A FUNÇÃO DE CADASTRO DE VAGAS DE EMPREGO RESTRITA A USUÁRIOS ADSMINISTRADORES.          |

\-Não Funcionais: Restrições, limites e especificações que o sistema deve possuir.

| TIPO | SUBTIPO  | ID  | DESCRIÇÃO                                                 |
| ---- | -------- | --- | --------------------------------------------------------- |
| RNF  | SOFTWARE | 001 | O SISTEMA DEVE PODER SER EXECUTADO EM ANDROID, IOS E WEB. |

\-Suplementares: Restrições e limites aplicados a todo o sistema.

| TIPO | ID  | DESCRIÇÃO                                                                                                                                     |
| ---- | --- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| RS   | 001 | EM TODAS AS TELAS DO SISTEMA, DEVE EXISTIR O LOGO DA ESTÁCIO E NOME DA APLICAÇÃO, EM QUE QUANDO PRESSIONADOS, LEVEM O USUARIO A TELA INICIAL. |

\-Regra de Negócio: São premissas e/ou restrições aplicadas a uma operação comercial de uma empresa por exemplo.

| TIPO | ID  | DESCRIÇÃO                                                              |
| ---- | --- | ---------------------------------------------------------------------- |
| RNE  | 001 | APENAS O USUÁRIO ADMINISTRADOR DEVE PODER CADASTRAR  VAGAS NO SISTEMA. |
