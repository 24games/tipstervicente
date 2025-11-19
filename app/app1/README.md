# 📄 Página App1

Esta é a página acessível em `/app1`

## 📁 Estrutura

```
app/app1/
├── page.tsx          ← Página principal
└── README.md         ← Este arquivo

public/app1/
└── images/           ← Adicione suas imagens aqui
    └── .gitkeep
```

## 🖼️ Como adicionar imagens

1. Coloque suas imagens na pasta `public/app1/images/`
2. Use o caminho `/app1/images/nome-da-imagem.png` no código

### Exemplo:

```tsx
<img 
  src="/app1/images/minha-foto.jpg" 
  alt="Descrição" 
  className="w-full rounded-lg"
/>
```

## 🎨 Como personalizar

Edite o arquivo `app/app1/page.tsx` para modificar:
- Textos
- Cores
- Layout
- Componentes

## 🚀 Como acessar

1. Execute: `npm run dev`
2. Abra: `http://localhost:3000/app1`

## 💡 Dicas

- Use Tailwind CSS para estilização (já está configurado)
- Adicione mais páginas criando novos arquivos `.tsx`
- Crie componentes reutilizáveis em `app/app1/components/`

