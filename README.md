# Marplacas

Landing page em HTML, CSS e JavaScript, com Vite.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

Produção com Nginx: `docker compose up -d --build` (porta 8080).

Os contatos confirmados estão em `src/config.js`. O formulário prepara uma mensagem e oferece um link para o WhatsApp; nenhum dado é persistido. A data desejada depende de confirmação pela equipe.

A referência visual está em `screenshots/`. Imagens internas usam enquadramentos CSS dessa referência enquanto os arquivos originais não estão disponíveis. A logo vetorial é provisória. Consulte `PLANS.md` para o progresso, decisões e limitações.
