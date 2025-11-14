# Projeto de Apoio a Vícios - Next.js

Um site moderno e responsivo para apoio e recuperação de vícios, desenvolvido com **Next.js**, **React** e **CSS Modules**.

## 🎯 Características

- **Componentização em React**: Componentes reutilizáveis e bem estruturados
- **Rotas Dinâmicas**: 5 páginas de vícios com rotas dinâmicas (`/vicios/[id]`)
- **API Mock**: Endpoints para dados de vícios, FAQ e depoimentos
- **Responsivo**: Design mobile-first totalmente responsivo
- **Animações**: Efeitos visuais suaves e interativos
- **CSS Modules**: Estilos encapsulados e sem conflitos
- **useState/useEffect**: Gerenciamento de estado e efeitos colaterais

## 📁 Estrutura do Projeto

```
projeto-vicios-nextjs/
├── src/
│   ├── app/
│   │   ├── layout.jsx          # Layout principal
│   │   ├── page.jsx            # Página Home
│   │   ├── sobre/
│   │   │   └── page.jsx        # Página Sobre
│   │   ├── contato/
│   │   │   └── page.jsx        # Página Contato
│   │   ├── vicios/
│   │   │   └── [id]/
│   │   │       └── page.jsx    # Página dinâmica de vício
│   │   └── api/
│   │       ├── vicios/
│   │       │   ├── route.js    # API: listar vícios
│   │       │   └── [id]/
│   │       │       └── route.js # API: vício específico
│   │       ├── faq/
│   │       │   └── route.js    # API: FAQ
│   │       └── testimonials/
│   │           └── route.js    # API: depoimentos
│   ├── components/
│   │   ├── Header.jsx          # Componente Header
│   │   ├── Footer.jsx          # Componente Footer
│   │   ├── Hero.jsx            # Seção Hero
│   │   ├── Testimonials.jsx    # Depoimentos
│   │   ├── Statistics.jsx      # Estatísticas
│   │   ├── Services.jsx        # Serviços
│   │   ├── FAQ.jsx             # FAQ
│   │   ├── Partners.jsx        # Parceiros
│   │   └── CTA.jsx             # Call to Action
│   ├── styles/
│   │   ├── globals.css         # Estilos globais
│   │   ├── Header.module.css   # Estilos do Header
│   │   ├── Footer.module.css   # Estilos do Footer
│   │   ├── Hero.module.css     # Estilos do Hero
│   │   ├── Testimonials.module.css
│   │   ├── Statistics.module.css
│   │   ├── Services.module.css
│   │   ├── FAQ.module.css
│   │   ├── Partners.module.css
│   │   ├── CTA.module.css
│   │   ├── VicioDetail.module.css
│   │   ├── About.module.css
│   │   └── Contact.module.css
│   └── data/
│       ├── vicios.json         # Dados dos vícios
│       ├── faq.json            # Dados do FAQ
│       └── testimonials.json   # Dados dos depoimentos
├── public/                      # Arquivos estáticos
├── .devcontainer/
│   └── devcontainer.json       # Configuração GitHub Codespaces
├── package.json
├── jsconfig.json               # Configuração de alias
├── next.config.js
├── .eslintrc.json
└── README.md
```

## 🚀 Como Usar

### Instalação Local

1. **Clone ou extraia o projeto:**
```bash
cd projeto-vicios-nextjs
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```

4. **Abra no navegador:**
```
http://localhost:3000
```

### Usando GitHub Codespaces

1. **Faça upload do projeto para GitHub**
2. **Abra em Codespaces:**
   - Clique em "Code" → "Codespaces" → "Create codespace on main"
3. **O servidor iniciará automaticamente**
4. **Acesse via porta 3000**

## 📖 Páginas e Rotas

| Rota | Descrição |
|------|-----------|
| `/` | Página inicial com todas as seções |
| `/sobre` | Informações sobre o projeto |
| `/contato` | Formulário de contato |
| `/vicios/apostas` | Detalhes sobre vício em apostas |
| `/vicios/alcool` | Detalhes sobre vício em álcool |
| `/vicios/drogas` | Detalhes sobre vício em drogas |
| `/vicios/redes-sociais` | Detalhes sobre vício em redes sociais |
| `/vicios/comida` | Detalhes sobre vício em comida |

## 🔌 API Endpoints

| Endpoint | Método | Descrição |
|----------|--------|-----------|
| `/api/vicios` | GET | Lista todos os vícios |
| `/api/vicios/[id]` | GET | Detalhes de um vício específico |
| `/api/faq` | GET | Lista de perguntas frequentes |
| `/api/testimonials` | GET | Lista de depoimentos |

## 🎨 Tecnologias Utilizadas

- **Next.js 14**: Framework React com SSR
- **React 18**: Biblioteca de componentes
- **CSS Modules**: Estilos encapsulados
- **JavaScript ES6+**: Linguagem de programação
- **Node.js**: Runtime JavaScript

## 💻 Scripts Disponíveis

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Fazer build para produção
npm run build

# Iniciar servidor de produção
npm start

# Executar linter
npm run lint
```

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints em:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: até 767px

## 🎯 Funcionalidades Principais

### 1. **Componentes Reutilizáveis**
Todos os componentes são modulares e podem ser reutilizados em diferentes páginas.

### 2. **Rotas Dinâmicas**
Páginas de vícios com rotas dinâmicas (`/vicios/[id]`) que carregam dados da API.

### 3. **Animações**
- Typewriter effect no título
- Contador animado nas estatísticas
- Accordion no FAQ
- Animações de scroll

### 4. **Formulário de Contato**
Formulário funcional com validação básica e feedback ao usuário.

### 5. **Fetch Client-Side**
Dados carregados via `fetch` com `useEffect` para melhor performance.

## 🔧 Configuração

### Alias de Importação
O projeto usa alias para importações:
```javascript
import Header from '@/components/Header';
import styles from '@/styles/Header.module.css';
import vicios from '@/data/vicios.json';
```

### Variáveis de Ambiente
Crie um arquivo `.env.local` se necessário:
```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## 📦 Build e Deploy

### Build para Produção
```bash
npm run build
npm start
```

### Deploy no Vercel
1. Conecte seu repositório GitHub
2. Importe o projeto no Vercel
3. O deploy acontecerá automaticamente

### Deploy no GitHub Pages
O Next.js pode ser exportado como estático:
```bash
npm run build
npm run export
```

## 🐛 Troubleshooting

### Porta 3000 já em uso
```bash
# Mude a porta
npm run dev -- -p 3001
```

### Erro de módulo não encontrado
```bash
# Limpe o cache e reinstale
rm -rf node_modules .next
npm install
```

### Problema com CSS Modules
Verifique se o `jsconfig.json` está configurado corretamente com os aliases.

## 📝 Notas de Desenvolvimento

- Todos os componentes usam `'use client'` para funcionar como Client Components
- Estados são gerenciados com `useState`
- Efeitos colaterais usam `useEffect`
- Sem Context API - apenas estado local
- Fetch acontece no cliente com `useEffect`

## 📄 Licença

Este projeto é de código aberto e pode ser usado livremente.

## 👥 Autor

Desenvolvido como um projeto educacional de Next.js e React.

---

**Desenvolvido com ❤️ usando Next.js e React**
