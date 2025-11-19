# 📖 Instruções - Página App1 (Casino IA)

## ✅ O que foi criado

1. **Página principal**: `app/app1/page.tsx`
   - Rota acessível em: `http://localhost:3000/app1`
   - Landing page para app de IA de casino
   - Design com background personalizado
   - Fonte Grift como padrão
   - Totalmente responsivo

2. **Layout customizado**: `app/app1/layout.tsx`
   - Carrega a fonte Grift automaticamente
   - Metadados otimizados para SEO

3. **Pasta de imagens**: `public/app1/images/`
   - Pronta para receber suas imagens
   - **Necessário**: adicione `background.jpg` nesta pasta
   - Acesse as imagens usando: `/app1/images/nome-arquivo.extensao`

## 🚀 Como usar

### 1. Adicionar o background (IMPORTANTE!)

Copie sua imagem de background para:
```
public/app1/images/background.jpg
```

⚠️ **O nome precisa ser exatamente `background.jpg`** (ou altere no código)

### 2. Ver a página funcionando

```bash
npm run dev
```

Depois acesse: **http://localhost:3000/app1**

### 3. Adicionar a imagem acima da headline

Quando você tiver a imagem, coloque em `public/app1/images/` (ex: `logo.png`)

Depois edite `app/app1/page.tsx` na linha onde está:
```tsx
{/* Espaço para imagem que virá acima da headline */}
<div className="mb-8 md:mb-12">
  {/* Imagem será adicionada aqui depois */}
</div>
```

E adicione sua imagem:
```tsx
<div className="mb-8 md:mb-12">
  <img 
    src="/app1/images/logo.png" 
    alt="Logo" 
    className="w-48 md:w-64 lg:w-80 h-auto mx-auto drop-shadow-2xl"
  />
</div>
```

## 🎨 Exemplo prático

Vamos adicionar uma imagem de perfil:

1. Coloque `foto-perfil.jpg` em `public/app1/images/`

2. No `page.tsx`, substitua o ícone SVG por:

```tsx
<img 
  src="/app1/images/foto-perfil.jpg" 
  alt="Foto de Perfil" 
  className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-blue-500"
/>
```

## 🔧 Personalização

### Mudar cores

No arquivo `page.tsx`, você pode alterar as classes Tailwind:

- `from-blue-600 to-purple-600` → cores dos botões
- `text-white` → cor do texto
- `bg-black` → cor de fundo

### Adicionar mais conteúdo

Basta editar o `return` dentro de `page.tsx`:

```tsx
export default function App1Page() {
  return (
    <div className="...">
      {/* Adicione seu conteúdo aqui */}
      <h1>Meu Novo Título</h1>
      <p>Meu novo parágrafo</p>
    </div>
  );
}
```

## 📱 Responsividade

A página já é responsiva. As classes que controlam isso são:

- `md:text-7xl` → tamanho no desktop
- `text-5xl` → tamanho no mobile
- `md:grid-cols-3` → 3 colunas no desktop
- `grid-cols-1` → 1 coluna no mobile

## 🎯 Próximos passos

1. ✅ Adicione suas imagens em `public/app1/images/`
2. ✅ Edite o conteúdo em `app/app1/page.tsx`
3. ✅ Personalize as cores e estilos
4. ✅ Teste em: `http://localhost:3000/app1`

## 💡 Dicas extras

### Otimizar imagens

Use o componente `Image` do Next.js para melhor performance:

```tsx
import Image from 'next/image';

<Image 
  src="/app1/images/foto.jpg"
  alt="Descrição"
  width={500}
  height={500}
  className="rounded-lg"
/>
```

### Criar componentes

Para organizar melhor, crie uma pasta de componentes:

```
app/app1/
├── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Button.tsx
│   └── Card.tsx
```

## 🐛 Problemas comuns

**Imagem não aparece?**
- Verifique se o caminho está correto: `/app1/images/nome-arquivo.extensao`
- Certifique-se que o arquivo está em `public/app1/images/`
- Reinicie o servidor (`Ctrl+C` e depois `npm run dev`)

**Página não carrega?**
- Verifique se o servidor está rodando
- Acesse exatamente: `http://localhost:3000/app1`
- Olhe o console para ver erros

## 📞 Estrutura final

```
seu-projeto/
├── app/
│   └── app1/
│       ├── page.tsx          ← Edite aqui
│       ├── README.md
│       └── INSTRUCOES.md     ← Este arquivo
│
└── public/
    └── app1/
        └── images/           ← Adicione imagens aqui
            └── .gitkeep
```

---

**Pronto! Sua página `/app1` está funcionando! 🎉**

