
# PijamINha

Este projeto é composto por duas partes principais: Back-end e Front-end, desenvolvidas para proporcionar uma solução completa e integrada.

---

🚀 **Tecnologias utilizadas**

**Back-end:** Node.js, TypeScript, Prisma ORM  
**Front-end:** Vite, React, TypeScript

---

📦 **Back-end**
O Back-end é responsável pela API e gerenciamento do banco de dados.

🔧 **Comandos principais**

1. Instalar dependências
   ```bash
   npm i
   ```

2. Resetar o banco de dados e popular com a seed
   ```bash
   npx prisma migrate reset
   ```
   > Este comando apaga e recria o banco de dados, executando as seeds automaticamente.

3. Aplicar migrações
   ```bash
   npx prisma migrate dev
   ```

4. Abrir o Prisma Studio (visualizar/editar dados)
   ```bash
   npx prisma studio
   ```

5. Iniciar o servidor de desenvolvimento
   > Dentro da pasta Back-end:
   ```bash
   npm run dev
   ```

📌 **Outros comandos úteis**

- Gerar cliente Prisma
  ```bash
  npx prisma generate
  ```

- Executar seed manualmente
  ```bash
  npx ts-node prisma/seed.ts
  ```

---

💻 **Front-end**

O Front-end utiliza Vite + React + TypeScript.  
Os principais comandos podem ser encontrados no package.json dentro da pasta Front-end.

🔧 **Comandos principais**

1. Instalar dependências
   ```bash
   npm i
   ```

2. Iniciar o servidor
   ```bash
   npm run dev
   ```

---

👥 **Equipe**

Marcos Ferreira  
Bruno Fortuna  
Tainá Couto  
Lucas Neca  
Pedro Amaro  
Davi Mello  
Victor Cimar

---

📖 **Suporte**
Para dúvidas ou problemas, consulte a documentação dos pacotes utilizados ou entre em contato com a equipe responsável.
