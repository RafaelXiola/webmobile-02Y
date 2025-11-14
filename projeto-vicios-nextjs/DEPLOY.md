# Guia de Deploy - Projeto de Apoio a Vícios

Este documento contém instruções detalhadas para fazer deploy do projeto em diferentes plataformas.

## 📋 Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn
- Git (para versionamento)
- Conta em uma plataforma de hosting (Vercel, Netlify, Heroku, etc.)

---

## 🚀 Deploy no Vercel (Recomendado)

O Vercel é a plataforma oficial para Next.js e oferece deploy automático.

### Passo 1: Preparar o Repositório
```bash
# Inicializar git (se não estiver)
git init
git add .
git commit -m "Initial commit"
```

### Passo 2: Fazer Upload para GitHub
```bash
# Criar repositório no GitHub
# Adicionar remote
git remote add origin https://github.com/seu-usuario/projeto-vicios-nextjs.git
git branch -M main
git push -u origin main
```

### Passo 3: Deploy no Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Selecione "Import Git Repository"
4. Escolha seu repositório
5. Clique em "Deploy"

**Pronto!** Seu projeto estará disponível em `seu-projeto.vercel.app`

---

## 🐳 Deploy com Docker

### Criar Dockerfile
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### Build e Run
```bash
# Build da imagem
docker build -t projeto-vicios .

# Executar container
docker run -p 3000:3000 projeto-vicios
```

---

## ☁️ Deploy no GitHub Codespaces

### Usar o .devcontainer Incluído

1. **Faça upload para GitHub:**
```bash
git push origin main
```

2. **Abra em Codespaces:**
   - Vá para seu repositório no GitHub
   - Clique em "Code" → "Codespaces"
   - Clique em "Create codespace on main"

3. **Aguarde a inicialização:**
   - O arquivo `.devcontainer/devcontainer.json` configurará tudo automaticamente
   - As dependências serão instaladas
   - O servidor iniciará na porta 3000

4. **Acesse o servidor:**
   - GitHub Codespaces abrirá automaticamente uma aba com a porta 3000
   - Ou acesse via "Ports" → "3000"

---

## 🌐 Deploy no Netlify

### Opção 1: Via GitHub
1. Acesse [netlify.com](https://netlify.com)
2. Clique em "New site from Git"
3. Conecte seu GitHub
4. Selecione o repositório
5. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
6. Clique em "Deploy"

### Opção 2: Via CLI
```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Fazer login
netlify login

# Deploy
netlify deploy --prod
```

---

## 🚀 Deploy no Heroku

### Passo 1: Instalar Heroku CLI
```bash
# macOS
brew tap heroku/brew && brew install heroku

# Linux/Windows
# Baixar em https://devcenter.heroku.com/articles/heroku-cli
```

### Passo 2: Fazer Login
```bash
heroku login
```

### Passo 3: Criar App
```bash
heroku create seu-app-name
```

### Passo 4: Configurar Buildpack
```bash
heroku buildpacks:set heroku/nodejs
```

### Passo 5: Deploy
```bash
git push heroku main
```

### Passo 6: Abrir App
```bash
heroku open
```

---

## 📦 Deploy Manual em VPS/Servidor

### Passo 1: Conectar ao Servidor
```bash
ssh usuario@seu-servidor.com
```

### Passo 2: Clonar Repositório
```bash
cd /var/www
git clone https://github.com/seu-usuario/projeto-vicios-nextjs.git
cd projeto-vicios-nextjs
```

### Passo 3: Instalar Dependências
```bash
npm install
```

### Passo 4: Build
```bash
npm run build
```

### Passo 5: Usar PM2 para Gerenciar Processo
```bash
# Instalar PM2 globalmente
npm install -g pm2

# Iniciar aplicação
pm2 start npm --name "projeto-vicios" -- start

# Salvar configuração
pm2 save

# Iniciar no boot
pm2 startup
```

### Passo 6: Configurar Nginx (Reverse Proxy)
```nginx
server {
    listen 80;
    server_name seu-dominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Passo 7: Ativar SSL (Let's Encrypt)
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d seu-dominio.com
```

---

## 🔄 CI/CD com GitHub Actions

Criar arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Build
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

---

## 📊 Variáveis de Ambiente

Criar arquivo `.env.production`:

```
NEXT_PUBLIC_API_URL=https://seu-dominio.com
NODE_ENV=production
```

---

## ✅ Checklist de Deploy

- [ ] Código commitado e pusheado para GitHub
- [ ] Variáveis de ambiente configuradas
- [ ] Build testado localmente (`npm run build`)
- [ ] Sem erros de lint (`npm run lint`)
- [ ] Responsividade testada em mobile
- [ ] Todas as rotas funcionando
- [ ] API endpoints respondendo
- [ ] Formulário de contato testado
- [ ] Performance otimizada
- [ ] SSL/HTTPS configurado

---

## 🆘 Troubleshooting

### Erro: "Module not found"
```bash
# Limpar cache
rm -rf .next node_modules
npm install
npm run build
```

### Erro: "Port 3000 already in use"
```bash
# Matar processo
lsof -ti:3000 | xargs kill -9

# Ou usar porta diferente
npm run dev -- -p 3001
```

### Erro: "Build failed"
```bash
# Verificar logs
npm run build --verbose

# Verificar espaço em disco
df -h
```

---

## 📞 Suporte

Para mais informações:
- [Documentação Next.js](https://nextjs.org/docs)
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Codespaces Docs](https://docs.github.com/en/codespaces)

---

**Última atualização**: Nov 2024
