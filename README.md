# **Family Photo Management**

Este é um projeto fullstack de gerenciamento de fotos em família, onde os usuários podem visualizar, criar, atualizar e excluir fotos e álbuns. O projeto consiste em um frontend em React (com TypeScript) e um backend em Node.js (com TypeScript) que atua como um Backend for Frontend (BFF) para consumir a API pública do [JSONPlaceholder](https://jsonplaceholder.typicode.com/).

## **Tecnologias Utilizadas**

### **Frontend**

- **React** com **TypeScript**
- **Vite** como build tool
- **Tailwind CSS** para estilização
- **React Router** para navegação entre páginas

### **Backend**

- **Node.js** com **TypeScript**
- **Express** para criar o servidor
- **Axios** para fazer requisições à API do JSONPlaceholder

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

O projeto inclui testes unitários para garantir a funcionalidade dos componentes e da lógica de negócios. Para rodar os testes:

1. Navegue até a pasta do frontend ou do backend:

   ```bash
   cd frontend
   cd backend
   ```

2. Execute os testes:
   ```bash
   npm test
   ```

## **Licença**

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.
