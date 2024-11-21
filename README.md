# 🚀 Passo a Passo para Executar a Aplicação

Este projeto utiliza um servidor mock para fornecer dados simulados e uma aplicação React para consumir esses dados.

## ⚙️ Pré-requisitos

- Node.js instalado em sua máquina.
- Gerenciador de pacotes (npm ou yarn).

---

## 📖 Instruções

### 1️⃣ Instalar Dependências do Mock
No diretório 📂`mock`, execute o seguinte comando para instalar as dependências:

```bash
cd mock
npm install
```

---

### 2️⃣ Iniciar o Servidor Mock
Ainda dentro do diretório `mock`, execute o comando abaixo para iniciar o servidor:

```bash
npx json-server products.json --watch --port 3003
```

### 3️ Instalar Dependências do React
Na raiz do projeto 📂`/` **(fora do diretório 📂`/mock`)**, instale as dependências da aplicação React:

```bash
npm install
```

### 4️⃣ Iniciar a Aplicação
**Certifique-se de que o mock está rodando antes de iniciar a aplicação. Em seguida, execute o comando abaixo na raiz do projeto:**

```bash
npm start
```

---

## 🎉 A aplicação está rodando!
- Abra o navegador e acesse: http://localhost:3000. 

