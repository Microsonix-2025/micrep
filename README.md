[README.md](https://github.com/user-attachments/files/22260714/README.md)
# Microsonix - Loja pronta (scaffold)

## Estrutura
- `index.html` - ponto de entrada
- `public/assets/cover-portrait.jpg` - imagem de capa (já incluída)
- `src/` - código React (páginas, componentes, hooks)
- `package.json` - dependências e scripts

## Rodando em desenvolvimento
1. Instale dependências:
   ```
   npm install
   ```
2. Rode o servidor de desenvolvimento:
   ```
   npm run dev
   ```

## Build e preview
```
npm run build
npm run preview
```

## Observações importantes
- Os métodos de pagamento não estão integrados — o botão de finalização é simulado.
- Para integração com **PagSeguro / Stripe**, eu posso adicionar o código: será necessário fornecer chaves de API.
- Para dropshipping: recomendo usar uma rotina de sincronização via API do fornecedor ou CSV.
- Se quiser, eu posso:
  - Integrar Stripe ou PagSeguro (adicione suas chaves).
  - Fazer deploy automático (Vercel/Netlify) e enviar o link publicado.
  - Gerar o ZIP com imagens finais e o projeto pronto (já está aqui).

