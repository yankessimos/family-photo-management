# **Family Photo Management**

Este é um projeto fullstack de gerenciamento de fotos em família, onde os usuários podem visualizar, criar, atualizar e excluir fotos e álbuns. O projeto consiste em um frontend em React (com TypeScript) e um backend em Node.js (com TypeScript) que atua como um Backend for Frontend (BFF) para consumir a API pública do [JSONPlaceholder](https://jsonplaceholder.typicode.com/). O ID do usuário em questão é o **ID 1**, feito desta forma para poupar tempo no desenvolvimento de uma página de login, o que não era o foco do desafio.

## ⚠️ **Desafio incompleto**

Devido a eu já estar trabalhando em um contexto dentro da dti (o que me levou a priorizar as tasks do time, principalmente por estar com um prazo apertado em uma task crucial de entrega), algumas partes da tarefa ficaram faltando, todavia, deixarei aqui explicado o que faltou e como eu faria cada um desses passos.

### **1. Alterações das fotos e persistência**

#### **Backend**

Será criado um `POST` para adição de fotos; um `PUT` para a alteração de alguma foto, sendo sua URL ou título; e, por fim, um `DELETE` para deleção completa de uma foto. O mesmo seria feito para álbuns, uma vez que a tarefa solicita que o mesmo possa ocorrer, cada um em seu devido arquivo em `/backend/api`. É válido ressaltar que, por mais que o **JSONPlaceholder** não persista dados, seria utilizado suas rotas para alterações já existentes na API, somente mudando a estratégia de retorno para persistir os dados no front utilizando os IDs do álbum/foto.

#### **Frontend**

Será criado, utilizando o Redux, um pequeno armazenamento de dados que já salvaria todos os dados do usuário, álbuns e fotos do usuário de **ID 1** (conforme explicado no início deste documento). Todas as alterações sequentes seriam feitas manipulando diretamente no Redux, facilitando a persistência.

### **2. Utilização do shadcn**

Embora sua utilização seja relativamente _simples_, eu não possuía muito tempo para ler toda a documentação, aplicar e me adequar à utilização completa e confiável da biblioteca, portanto, optei por utilizar somente o **Tailwind** no CSS do desafio.

### **3. UI**

A UI do frontend ficou de uma qualidade extremamente questionável. Devido ao curto tempo e a ausência de um design pré-estabelecido, optei por melhorar e otimizar algumas coisas dentro do código à melhorar o design (parte secundária, creio eu) do desafio.

### **4. Bug nas fotos**

Por algum motivo, todas as URLs das fotos da API estavam deprecadas, dando erro ao tentar recuperá-las, levando a utilização de um placeholder para que mostrasse algo ao usuário.

## **Tecnologias Utilizadas**

### **Frontend**

- **React** com **TypeScript**;
- **Vite** como build tool;
- **Tailwind CSS** para estilização;
- **React Router** para navegação entre páginas.

### **Backend**

- **Node.js** com **TypeScript**;
- **Express** para criar o servidor;
- **Axios** para fazer requisições à API do JSONPlaceholder.

### **Testes**

- **Jest** para fazer os testes unitários

## **Pré-requisitos**

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn** (gerenciadores de pacotes)
- **Git** (para clonar o repositório)

## **Como Rodar o Projeto**

Siga os passos abaixo para configurar e rodar o projeto localmente.

### **1. Clone o Repositório**

```bash
git clone https://github.com/yankessimos/family-photo-management.git
cd family-photo-management
```

### **2. Configure o Backend**

1. Navegue até a pasta do backend:

   ```bash
   cd backend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor do backend:

   ```bash
   npm start
   ```

   O backend estará rodando em `http://localhost:5000`.

### **3. Configure o Frontend**

1. Navegue até a pasta do frontend:

   ```bash
   cd ../frontend
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento do frontend:

   ```bash
   npm run dev
   ```

   O frontend estará rodando em `http://localhost:5173`.

### **4. Acesse a Aplicação**

Abra o navegador e acesse:

```
http://localhost:5173
```

## **Estrutura do Projeto**

### **Backend**

- **`server.ts`**: Ponto de entrada do servidor.
- **`api/`**: Contém os arquivos de rotas (usuários, álbuns, fotos).
- **`types/`**: Define as interfaces TypeScript para os dados da API.

### **Frontend**

- **`src/`**: Contém o código-fonte do frontend.
  - **`components/`**: Componentes reutilizáveis.
  - **`pages/`**: Páginas da aplicação.
  - **`types/`**: Define as interfaces TypeScript para os dados da API.
  - **`App.tsx`**: Configuração das rotas e estrutura principal da aplicação.

## **Endpoints da API**

O backend atua como um proxy para a API do JSONPlaceholder. Aqui estão os principais endpoints:

- **Listar usuários**: `GET /users`
- **Listar álbuns de um usuário**: `GET /albums/:id`
- **Listar fotos de um álbum**: `GET /photos/:id`

## **Testes**

O projeto inclui testes unitários para garantir a lógica de negócios. Para rodar os testes:

1. Navegue até a pasta do backend:

   ```bash
   cd backend
   ```

2. Execute os testes:
   ```bash
   npm test
   ```

## **Licença**

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
