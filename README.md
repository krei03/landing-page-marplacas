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

Verificação no navegador (sem enviar mensagens reais):

```powershell
npx --yes agent-browser open http://127.0.0.1:5173
npx --yes agent-browser set viewport 390 844
Get-Content scripts/browser-check.js -Raw | npx --yes agent-browser eval --stdin
npx --yes agent-browser close
```

Repetir nas viewports 768 × 1024 e 1879 × 939. O script verifica layout, navegação, modais, campos obrigatórios e destinos dos links.
