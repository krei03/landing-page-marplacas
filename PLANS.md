# ExecPlan --- Landing Page baseada em screenshots

> Execução atual: 02/10/2026. Os registros das decisões 01–25 e das seções históricas abaixo vieram de outro projeto e não comprovam trabalho neste repositório. Consulte os registros de execução atual e o Progress. A Decisão 26 proíbe reutilizar contatos antigos.

## Purpose / Big Picture

Criar uma **landing page profissional focada em conversão de visitantes
em clientes**, reproduzindo visualmente o site apresentado nas imagens
existentes na pasta:

``` text
screenshots/
```

A pasta `screenshots/` será considerada a **fonte visual de verdade do
projeto**.

O objetivo não é criar uma landing page genérica ou escolher outro
design. O objetivo é **reconstruir o site mostrado nos screenshots**,
respeitando:

-   estrutura das seções;
-   posicionamento dos elementos;
-   espaçamentos;
-   tipografia;
-   cores;
-   tamanhos;
-   bordas;
-   sombras;
-   imagens;
-   ícones;
-   botões;
-   navegação;
-   proporções;
-   comportamento responsivo;
-   diferenças entre desktop e mobile, caso existam screenshots dessas
    versões.

A landing page deverá apresentar os serviços de emplacamento de veículos
da empresa de emplacamentos e conduzir o visitante para contato ou
agendamento pelo WhatsApp.

------------------------------------------------------------------------

## Context and Orientation

Antes de escrever ou alterar qualquer código, o projeto deve ser
analisado para entender:

-   framework utilizado;
-   estrutura de pastas;
-   sistema de estilos;
-   componentes existentes;
-   imagens e assets disponíveis;
-   configurações do projeto;
-   dependências instaladas;
-   scripts disponíveis no `package.json`.

Também é obrigatório analisar **todos os screenshots disponíveis em
`screenshots/`** antes da implementação.

### Fonte visual

``` text
screenshots/
```

Os screenshots devem ser utilizados para identificar:

1.  Estrutura geral da página.
2.  Header/navbar.
3.  Hero.
4.  Títulos e subtítulos.
5.  Botões.
6.  Cards.
7.  Seções de conteúdo.
8.  Imagens.
9.  Ícones.
10. Formulários.
11. CTA.
12. Footer.
13. Espaçamentos.
14. Largura máxima dos conteúdos.
15. Tipografia.
16. Cores.
17. Bordas e border-radius.
18. Sombras.
19. Animações aparentes.
20. Comportamento responsivo.

Se existirem screenshots de desktop e mobile, ambos devem ser
considerados como referência.

### Objetivo comercial

A página deverá comunicar de forma clara os serviços de serviço de
emplacamento veicular oferecidos, como:

-   emplacamento de veículos;
-   regularização e serviços relacionados a placas;
-   orientação para emplacamento e documentação;
-   orientação sobre documentação e regularização;
-   atendimento e agendamento via WhatsApp.

O visitante deve conseguir entender rapidamente:

``` text
O que é oferecido
        ↓
Como isso pode ajudar
        ↓
Por que entrar em contato
        ↓
Solicitar emplacamento / contato
```

------------------------------------------------------------------------

# Progress

## Análise

-   [x] Analisar completamente a estrutura atual do projeto.
-   [x] Verificar framework e tecnologias utilizadas.
-   [x] Verificar `package.json` e scripts disponíveis.
-   [x] Localizar e analisar todos os arquivos da pasta `screenshots/`.
-   [x] Identificar quais screenshots representam desktop.
-   [x] Identificar quais screenshots representam tablet/mobile. Não há
    referência mobile/tablet; existe apenas uma referência desktop de 843 × 1264 px.
-   [x] Mapear todas as seções existentes nos screenshots.
-   [x] Identificar fontes, cores, espaçamentos, tamanhos e componentes
    visuais.
-   [x] Identificar imagens e ícones necessários.
-   [x] Registrar diferenças entre as versões responsivas. A adaptação
    mobile foi derivada da composição desktop por ausência de
    screenshots menores.
-   [ ] Alterar o título principal do Hero: deixar "Emplacamento de
    Veículos de forma" em branco e "simples e segura." em verde.
-   [ ] Adicionar ao Header/Navbar a nova logo colocada nos assets do
    projeto, mantendo a proporção original.
-   [x] Corrigir a escala visual geral do site, que estava
    excessivamente ampliada/desproporcional, para uma escala padrão em
    navegador com zoom em 100%.
-   [x] Revisar tamanhos de fontes, imagens, containers, botões e
    espaçamentos após o ajuste de escala.
-   [ ] Analisar os novos screenshots adicionados à pasta `screenshots/`
    referentes aos modais de "Saiba mais" e "Agendar".
-   [ ] Identificar exatamente o conteúdo, tamanho, posição,
    espaçamento, cores e comportamento visual dos modais.

## Estrutura

-   [x] Criar ou adaptar a estrutura principal da landing page.
-   [x] Criar o Header/Navbar conforme o screenshot.
-   [x] Criar a seção Hero.
-   [x] Criar as demais seções identificadas nos screenshots.
-   [x] Criar CTAs.
-   [x] Criar formulário de captura de leads, caso exista ou seja
    necessário. Não aplicável à referência atual, que usa CTAs de
    WhatsApp e não apresenta formulário.
-   [x] Criar Footer conforme a referência visual.
-   [x] Criar componentes reutilizáveis quando fizer sentido. A página
    estática reutiliza classes de botão, card, container e heading.
-   [x] Substituir a imagem estática da seção "Localização" por um
    Google Maps real e interativo.
-   [x] Configurar o mapa para o endereço da empresa de emplacamento:
    Avenida Prefeito José Monteiro, 211 - Vila Valença, São Vicente - SP.
-   [x] Adicionar ação "Como chegar" permitindo escolher entre Google
    Maps e Waze.
-   [x] Adicionar interação visual suave ao mapa e ao card de
    localização.
-   [ ] Garantir que mapa e ações de navegação funcionem corretamente no
    desktop e mobile.
-   [ ] Implementar o modal de "Saiba mais" para cada tipo de serviço de
    emplacamento conforme os novos screenshots.
-   [x] Garantir que cada serviço abra seu respectivo conteúdo de "Saiba
    mais".
-   [ ] Implementar o modal de "Agendar" conforme o novo screenshot.
-   [ ] Reproduzir fielmente campos, textos, botões e organização visual
    apresentados nas referências.
-   [x] Implementar abertura e fechamento por ação, botão, `Esc` e
    clique no backdrop.
-   [x] Adaptar os modais para desktop, tablet e mobile.

## Visual

-   [ ] Reproduzir fielmente o layout dos screenshots.
-   [ ] Reproduzir tipografia.
-   [x] Reproduzir cores.
-   [x] Reproduzir espaçamentos.
-   [x] Reproduzir tamanhos.
-   [x] Reproduzir bordas e arredondamentos.
-   [x] Reproduzir sombras.
-   [ ] Reproduzir integralmente as imagens. As imagens internas
    correspondem à referência, mas o hero passou a usar a nova foto real
    `hero-workshop.jpg`, diferente do screenshot original.
-   [ ] Reproduzir ícones.
-   [x] Reproduzir botões.
-   [x] Reproduzir largura dos containers.
-   [x] Reproduzir alinhamentos.
-   [x] Reproduzir elementos decorativos.
-   [x] Evitar adicionar elementos que não existem na referência sem
    necessidade.

## Responsividade

-   [x] Implementar versão desktop.
-   [x] Implementar versão tablet quando necessário.
-   [x] Implementar versão mobile.
-   [x] Garantir que o layout não quebre em diferentes larguras.
-   [x] Verificar menus e navegação mobile.
-   [x] Verificar tamanhos de fonte.
-   [x] Verificar espaçamentos.
-   [x] Verificar imagens.
-   [x] Verificar ausência de scroll horizontal nas larguras de 1879,
    768 e 390 px.

## Conversão

-   [x] Garantir que os CTAs estejam funcionando.
-   [x] Implementar botão de WhatsApp quando aplicável.
-   [x] Implementar formulário de agendamento para contato via WhatsApp.
-   [x] Implementar validação dos campos obrigatórios.
-   [x] Criar feedback visual de validação e encaminhamento ao WhatsApp
    após envio válido.
-   [x] Preparar os dados do atendimento em uma mensagem estruturada
    para o WhatsApp.

O formulário tem layout provisório (referência ausente) e não persiste dados: ele
valida no navegador e abre uma conversa no WhatsApp com as informações
preenchidas.

## Validação

-   [x] Executar o projeto localmente.
-   [x] Verificar todas as páginas/seções.
-   [x] Comparar visualmente com os screenshots.
-   [x] Corrigir diferenças relevantes.
-   [x] Verificar console do navegador.
-   [x] Verificar erros de build.
-   [x] Verificar responsividade.
-   [x] Fazer uma última comparação visual.
-   [ ] Fazer commit das etapas concluídas.

------------------------------------------------------------------------

# Plan of Work

## 1. Analisar os screenshots

Antes de implementar qualquer seção, analisar todas as imagens
existentes em:

``` text
screenshots/
```

Criar mentalmente um mapa da página identificando a ordem exata das
seções.

Exemplo:

``` text
Navbar
   ↓
Hero
   ↓
Seção 01
   ↓
Seção 02
   ↓
Cards/Serviços
   ↓
Benefícios
   ↓
Projetos/Resultados
   ↓
Processo
   ↓
CTA
   ↓
Formulário
   ↓
Footer
```

A ordem acima é apenas um exemplo. A ordem real deve ser determinada
pelos screenshots.

## 10. Ajustes do Hero, logo e escala visual

### Título do Hero

Alterar o título principal para manter esta composição:

Emplacamento de veículos de forma → branco simples e segura. → verde

Preservar a quebra de linha e a composição visual do Hero.

### Logo

Utilizar a nova logo adicionada aos assets do projeto no Header/Navbar.

A logo deve:

-   manter sua proporção original;
-   não ficar esticada ou comprimida;
-   possuir `height: auto`;
-   ficar alinhada corretamente com a Navbar;
-   adaptar seu tamanho em telas menores.

### Escala do site

O site atualmente aparenta estar com zoom excessivo e elementos
desproporcionais.

Corrigir a escala na origem, revisando:

-   max-width dos containers;
-   tamanhos dos títulos;
-   font-size dos textos;
-   altura do Hero;
-   tamanho das imagens;
-   paddings;
-   gaps;
-   botões;
-   Header/Navbar.

O site deve possuir aparência proporcional utilizando o navegador em
100% de zoom.

Não utilizar `zoom` CSS global no `body` como solução.

------------------------------------------------------------------------

## 2. Reproduzir a estrutura visual

A implementação deve partir do screenshot e não de um template genérico.

Para cada seção, observar:

-   posição;
-   largura;
-   altura;
-   alinhamento;
-   espaçamento;
-   hierarquia de texto;
-   imagens;
-   elementos decorativos;
-   comportamento responsivo.

O resultado deve parecer uma implementação do mesmo site apresentado nas
imagens.

------------------------------------------------------------------------

## 3. Header / Navbar

Reproduzir o Header exatamente conforme a referência.

Verificar:

-   logo;
-   tamanho;
-   posição;
-   links;
-   espaçamento;
-   botão;
-   fundo;
-   bordas;
-   comportamento durante scroll, se existir;
-   versão mobile.

Não criar uma navbar diferente apenas por preferência de implementação.

------------------------------------------------------------------------

## 4. Hero

Reproduzir o Hero conforme o screenshot.

Deve respeitar:

-   título;
-   subtítulo;
-   tamanho da fonte;
-   largura do texto;
-   posição;
-   CTA;
-   imagens;
-   elementos decorativos;
-   alinhamento;
-   altura da seção.

Caso o screenshot apresente uma composição específica, essa composição
deverá ser reproduzida.

------------------------------------------------------------------------

## 5. Seções internas

Cada seção identificada nos screenshots deverá possuir seu próprio
componente quando isso melhorar a organização.

Exemplos possíveis:

``` text
Navbar
Hero
Services
Benefits
Projects
Process
Testimonials
LeadForm
CTA
Footer
```

Os nomes acima são apenas referências. Criar somente os componentes
realmente necessários para reproduzir os screenshots.

------------------------------------------------------------------------

## 6. Conteúdo

Reproduzir o conteúdo legível da referência Marplacas e adaptar textos corrompidos pela geração da imagem ao segmento de emplacamento. Não incluir serviços de software nem dados da antiga empresa.

## 7. Captura de leads

Formulário de atendimento: tipo de veículo, nome e modelo obrigatórios; placa e data desejada opcionais. Preparar mensagem no navegador e oferecer link explícito para WhatsApp. Sem backend ou persistência. Layout provisório até disponibilização das referências dos modais.
## 8. CTA / WhatsApp

Os CTAs deverão levar o visitante para a ação correspondente.

Quando houver botão de WhatsApp, utilizar uma chamada clara para
contato.

Exemplo:

``` text
Falar no WhatsApp
```

ou o texto apresentado no screenshot.

------------------------------------------------------------------------

## 9. Design System

Extrair do screenshot:

### Cores

Identificar:

-   background principal;
-   background secundário;
-   cor dos textos;
-   cor dos textos secundários;
-   cor dos botões;
-   cor dos destaques;
-   bordas;
-   elementos decorativos.

### Tipografia

Identificar:

-   fonte;
-   peso;
-   tamanho;
-   line-height;
-   letter-spacing;
-   hierarquia entre títulos e textos.

### Componentes

Identificar padrões de:

-   botão;
-   card;
-   input;
-   badge;
-   seção;
-   container;
-   imagem;
-   ícone.

Esses padrões devem ser reutilizados para manter consistência.

## 11. Localização interativa da empresa de emplacamento

### Google Maps

Na seção de localização, remover a imagem estática que simula o Google
Maps.

No mesmo espaço visual, incorporar um mapa real e interativo apontando
para:

Avenida Antônio Emmerick, 156 Vila Cascatinha São Vicente - SP

O mapa deve permitir interação normal do usuário, incluindo movimentação
e zoom quando disponíveis.

Manter o mapa integrado ao design atual da landing page, respeitando:

-   border-radius;
-   tamanho do container;
-   espaçamento;
-   responsividade;
-   identidade visual da empresa de emplacamento.

### Como chegar

Adicionar uma ação clara:

"Como chegar"

Ao clicar, apresentar duas opções:

-   Abrir no Google Maps
-   Abrir no Waze

As duas opções devem utilizar o endereço real da empresa de emplacamento
como destino.

Em dispositivos móveis, os links devem permitir que o sistema abra o
aplicativo correspondente quando disponível.

Não substituir a página atual imediatamente ao clicar no mapa. A escolha
entre Google Maps e Waze deve ser clara para o usuário.

### Interação visual

Adicionar uma interação simples e moderna ao container do mapa.

No desktop, ao passar o mouse:

-   elevar levemente o card;
-   aumentar suavemente a sombra;
-   aplicar uma transição curta;
-   destacar discretamente a ação "Como chegar".

A animação deve ser sutil e profissional.

Evitar:

-   movimentos exagerados;
-   card flutuando continuamente;
-   animações infinitas;
-   zoom excessivo;
-   efeitos que atrapalhem a utilização do mapa.

A interação deve dar mais vida à seção sem descaracterizar o layout
original.

## 12. Dropdowns de "Saiba mais" e "Agendar"

Novos screenshots foram adicionados à pasta `screenshots/` mostrando os
estados abertos das ações "Saiba mais" e "Agendar".

Antes de implementar, localizar e analisar essas novas referências.

### Saiba mais

Cada serviço de emplacamento que possuir a ação "Saiba mais" deve abrir
a interface apresentada nos screenshots.

Não criar um dropdown genérico sem primeiro analisar a referência.

Reproduzir:

-   título;
-   descrição;
-   informações apresentadas;
-   ícones;
-   botões;
-   cores;
-   background;
-   bordas;
-   border-radius;
-   sombras;
-   espaçamentos;
-   largura;
-   altura;
-   posição;
-   botão/ícone para fechar, caso exista;
-   animação, caso seja perceptível na referência.

Cada tipo de serviço de emplacamento deve apresentar o conteúdo
correspondente.

O usuário deve conseguir abrir e fechar a interface sem recarregar a
página.

### Agendar

A ação "Agendar" deve abrir a interface apresentada no respectivo
screenshot.

Reproduzir fielmente:

-   título;
-   campos;
-   textos;
-   seletores;
-   botões;
-   organização;
-   espaçamento;
-   cores;
-   bordas;
-   comportamento.

Não adicionar campos que não estejam presentes na referência sem
necessidade funcional documentada.

### Comportamento

As interfaces devem possuir uma transição curta e discreta de abertura e
fechamento.

Priorizar algo simples, como:

-   fade;
-   pequena movimentação vertical;
-   expansão suave.

Evitar animações exageradas.

Caso o usuário abra outro "Saiba mais", evitar manter várias interfaces
abertas ao mesmo tempo se esse comportamento não fizer sentido na
referência.

No mobile, garantir que todo o conteúdo continue acessível e não
ultrapasse a largura da tela.

------------------------------------------------------------------------

# Concrete Steps

## 1. Inspecionar o projeto

Executar:

``` bash
pwd
```

``` bash
ls
```

ou equivalente no Windows.

Depois verificar:

``` bash
cat package.json
```

e analisar a estrutura:

``` text
src/
app/
components/
public/
screenshots/
```

conforme a estrutura real do projeto.

## 12. Implementar localização
interativa

1.  Localizar a seção de localização existente.
2.  Remover somente a imagem estática utilizada atualmente como mapa.
3.  Preservar a estrutura e os textos existentes da seção.
4.  Incorporar um Google Maps real no mesmo espaço visual.
5.  Configurar o destino para "Avenida Antônio Emmerick, 156 - Vila
    Cascatinha, São Vicente - SP".
6.  Garantir que o mapa seja responsivo.
7.  Criar a ação "Como chegar".
8.  Criar opção para abrir o destino no Google Maps.
9.  Criar opção para abrir o destino no Waze.
10. Abrir os serviços externos de navegação sem quebrar a landing page.
11. Adicionar hover suave no container do mapa/card no desktop.
12. Usar `transform: translateY(...)`, sombra e `transition` de forma
    sutil.
13. Não aplicar hover dependente de mouse como requisito para uso no
    mobile.
14. Validar a seção em desktop, tablet e mobile.
15. Verificar se o endereço mostrado e o destino dos links correspondem
    ao mesmo local.
16. Atualizar o Progress somente após a validação.

------------------------------------------------------------------------

## 2. Inspecionar screenshots

Listar os arquivos:

``` bash
find screenshots -type f
```

No Windows PowerShell, utilizar:

``` powershell
Get-ChildItem screenshots -Recurse
```

Abrir/analisar cada screenshot disponível antes da implementação.

------------------------------------------------------------------------

## 3. Implementar a página

Criar ou adaptar os componentes necessários.

Estrutura sugerida:

``` text
src/
├── components/
│   ├── Navbar
│   ├── Hero
│   ├── Services
│   ├── Benefits
│   ├── Projects
│   ├── Process
│   ├── LeadForm
│   ├── CTA
│   └── Footer
│
├── sections/
│   └── LandingPage
│
├── services/
│   └── leads
│
└── styles/
```

A estrutura real deve respeitar o framework já existente.

------------------------------------------------------------------------

## 4. Implementar primeiro o desktop

Construir a primeira versão utilizando o screenshot desktop como
referência principal.

Prioridade:

``` text
Estrutura
→ Espaçamento
→ Tipografia
→ Cores
→ Imagens
→ Componentes
→ Detalhes
```

------------------------------------------------------------------------

## 5. Implementar responsividade

Depois da versão desktop, adaptar para:

``` text
Desktop
Tablet
Mobile
```

Quando houver screenshot mobile, ele deve ser tratado como referência
visual específica.

------------------------------------------------------------------------

## 6. Executar o projeto

Usar o script existente no `package.json`.

Exemplo:

``` bash
npm install
```

``` bash
npm run dev
```

ou o comando equivalente encontrado no projeto.

------------------------------------------------------------------------

## 7. Verificar visualmente

Comparar a implementação com os screenshots.

Verificar principalmente:

-   distância entre elementos;
-   largura dos containers;
-   tamanho dos títulos;
-   posição dos botões;
-   tamanho das imagens;
-   altura das seções;
-   alinhamentos;
-   cores;
-   sombras;
-   bordas;
-   responsividade.

------------------------------------------------------------------------

## 8. Corrigir diferenças

Após a primeira comparação:

-   corrigir desalinhamentos;
-   ajustar espaçamentos;
-   ajustar tamanhos;
-   corrigir fontes;
-   corrigir cores;
-   corrigir imagens;
-   corrigir responsividade.

Repetir até que o resultado esteja visualmente próximo da referência.

------------------------------------------------------------------------

## 9. Validar build

Executar o comando de build disponível no projeto.

Exemplo:

``` bash
npm run build
```

Corrigir todos os erros encontrados.

------------------------------------------------------------------------

## 10. Git

Verificar:

``` bash
git status
```

Adicionar alterações:

``` bash
git add .
```

Criar commit:

``` bash
git commit -m "feat: cria landing page baseada nos screenshots"
```

Se houver etapas relevantes separadas, criar commits específicos e
claros.

## 11. Aplicar ajustes visuais solicitados

1.  Localizar o título principal do Hero.
2.  Separar os dois trechos do título para permitir cores diferentes.
3.  Aplicar branco em "Emplacamento de veículos de forma".
4.  Aplicar o verde principal da identidade visual em "simples e
    segura.".
5.  Localizar a nova logo adicionada aos assets.
6.  Substituir a logo atual pela nova logo.
7.  Manter a proporção original da imagem.
8.  Revisar os estilos responsáveis pela escala geral da página.
9.  Não utilizar `zoom` global para diminuir artificialmente o site.
10. Ajustar containers, fontes, imagens e espaçamentos para uma escala
    padrão.
11. Testar novamente desktop, tablet e mobile.
12. Atualizar o Progress após validar as alterações.

------------------------------------------------------------------------

# Validation and Acceptance

A implementação será considerada concluída quando todos os critérios
abaixo forem atendidos.

## Visual

-   [ ] A estrutura da página corresponde aos screenshots.
-   [ ] As seções aparecem na ordem correta.
-   [ ] Header corresponde à referência.
-   [ ] Hero corresponde à referência.
-   [ ] Tipografia está visualmente próxima.
-   [ ] Cores estão visualmente próximas.
-   [ ] Espaçamentos estão visualmente próximos.
-   [ ] Botões correspondem à referência.
-   [ ] Cards correspondem à referência.
-   [ ] Imagens estão posicionadas corretamente.
-   [ ] Elementos decorativos estão presentes quando existirem na
    referência.
-   [ ] Footer corresponde à referência.

## Responsividade

-   [ ] Desktop validado em 1879 x 939.
-   [ ] Tablet validado em 768 x 1024.
-   [ ] Mobile validado em 390 x 844.
-   [ ] Não existe scroll horizontal indevido.
-   [ ] Textos não ficam cortados.
-   [ ] Imagens não quebram o layout.
-   [ ] Botões continuam utilizáveis em telas menores.
-   [ ] Menu mobile abre, apresenta os links e fecha após a navegação.

## Funcionalidade

-   [ ] CTAs funcionam.

-   [ ] Links internos funcionam e os links externos possuem destinos
    válidos.

-   [ ] WhatsApp exibe `(13) 97417-8999` e todos os CTAs apontam para
    `551338780078`, conforme orientação comercial.

-   [ ] Formulário de agendamento funciona e abre o WhatsApp com
    mensagem estruturada.

-   [ ] Campos obrigatórios possuem validação nativa visível.

-   [ ] Usuário é encaminhado ao WhatsApp após envio válido.

-   [ ] Não existem erros JavaScript no console.

-   [ ] Cada card de serviço abre seu conteúdo correspondente no modal
    de "Saiba mais".

-   [ ] O modal de agendamento reproduz os campos e a organização da
    nova referência.

-   [ ] Os modais fecham por botão e pela tecla `Esc` sem recarregar a
    página.

-   [ ] Apenas um modal permanece aberto por vez.

-   [ ] Os modais permanecem acessíveis e sem overflow horizontal em
    desktop, tablet e mobile.

## Qualidade técnica

-   [ ] Projeto inicia corretamente com Docker/Nginx e retorna HTTP 200.

-   [ ] Build executa sem erros.

-   [ ] Não existem imports quebrados.

-   [ ] Não existem imagens inexistentes sendo referenciadas.

-   [ ] Não existem componentes duplicados desnecessariamente.

-   [ ] Código está organizado.

-   [ ] Responsividade foi validada.

-   [ ] Comparação final com os screenshots foi realizada.

-   [ ] A seção de localização utiliza um mapa real em vez de uma imagem
    estática.

-   [ ] O mapa aponta para Avenida Antônio Emmerick, 156 - Vila
    Cascatinha, São Vicente - SP.

-   [ ] O usuário consegue interagir com o mapa.

-   [ ] A ação "Como chegar" funciona.

-   [ ] Existe opção para abrir no Google Maps.

-   [ ] Existe opção para abrir no Waze.

-   [ ] Os dois serviços recebem corretamente o endereço da Salomé
    Serviço de Emplacamento como destino.

-   [ ] A interação visual do card/mapa funciona sem atrapalhar a
    navegação.

-   [ ] O mapa continua proporcional no desktop.

-   [ ] O mapa funciona corretamente no mobile.

-   [ ] Não existe overflow horizontal causado pelo mapa.

------------------------------------------------------------------------

# Interfaces and Dependencies

A implementação deverá respeitar as tecnologias já existentes no
projeto.

Dependências externas somente devem ser adicionadas quando realmente
necessárias.

Possíveis dependências:

``` text
React / Next.js
TypeScript
Tailwind CSS
Lucide / biblioteca de ícones
Biblioteca de componentes existente
```

Não adicionar uma biblioteca apenas para reproduzir algo que pode ser
feito com CSS ou com dependências já existentes.

Caso o formulário precise de backend, API ou banco de dados, essa
integração deverá ser documentada antes de sua implementação.

------------------------------------------------------------------------

# Decision Log

## Decisão 27 — Execução atual (02/10/2026)

Repositório inicial sem aplicação: somente README, PLANS.md, assets/hero.jpg e uma referência de 843 × 1264. Adotar HTML/CSS/JavaScript com Vite, conforme arquitetura proposta. Referência atual azul prevalece sobre o título verde herdado; manter “Emplacamento sem complicação com Marplacas”. Sem uso de zoom CSS.

## Decisão 28 — Contatos confirmados nesta conversa

WhatsApp 5513988515662, telefone (13) 3329-7186 e Avenida Prefeito José Monteiro, 211 - Vila Valença, São Vicente - SP, informados pelo usuário. Substituem todas as instruções de contatos e localização anteriores. Horário e Instagram não confirmados.

## Decisão 29 — Assets e modais ausentes

Logo SVG provisória desenhada em código e enquadramentos CSS da imagem de referência para veículos, documentação e CTA; hero usa o asset fornecido. Não declarar reprodução integral. Modais funcionais provisórios com dialog; fidelidade depende dos screenshots ausentes. Formulário prepara mensagem e abre WhatsApp por link explícito, sem envio automático nem persistência.

## Histórico herdado — não validado nesta execução

## Decisão 01 --- Screenshots como fonte visual

**Decisão:** Os screenshots presentes em `screenshots/` são a principal
referência visual.

**Motivo:** O objetivo é reproduzir o site mostrado nas imagens, e não
criar uma nova identidade visual.

------------------------------------------------------------------------

## Decisão 02 --- Fidelidade visual antes de personalização

**Decisão:** Não modificar a estrutura visual dos screenshots por
preferência pessoal ou por padrões genéricos de landing pages.

**Motivo:** A prioridade do projeto é a reprodução visual.

------------------------------------------------------------------------

## Decisão 03 --- Responsividade

**Decisão:** O layout deverá ser responsivo.

**Motivo:** A landing page precisa funcionar em desktop e dispositivos
móveis, respeitando os screenshots disponíveis para cada resolução.

------------------------------------------------------------------------

## Decisão 04 --- Implementação estática com Vite

**Decisão:** Manter a landing page em HTML, CSS e JavaScript, empacotada
pelo Vite e servida por Nginx no Docker.

**Motivo:** O projeto não exige estado complexo nem backend, e essa
solução mantém o bundle pequeno e a operação simples.

------------------------------------------------------------------------

## Decisão 05 --- Formulário não incluído na referência inicial

**Decisão:** Não adicionar formulário sem referência visual e sem
definição de API, persistência ou destino dos leads.

**Motivo:** Os screenshots usam WhatsApp como canal de conversão;
inventar um formulário contrariaria a prioridade de fidelidade visual.

**Status:** Decisão superada pela Decisão 16 após a inclusão do
screenshot específico do formulário de agendamento.

------------------------------------------------------------------------

## Decisão 06 --- Contraste acessível nos CTAs

**Decisão:** Ajustar o verde principal de `#009b6d` para `#007a57`.

**Motivo:** O audit WCAG identificou contraste de 3,55:1 nos botões. O
novo tom preserva a identidade visual e eliminou as violações
automáticas de contraste.

------------------------------------------------------------------------

## Decisão 07 --- Responsividade derivada

**Decisão:** Usar breakpoints em 1100, 820 e 480 px e validar em
desktop, tablet e mobile.

**Motivo:** Todos os screenshots fornecidos são desktop; não há
referência específica para telas menores.

------------------------------------------------------------------------

## Decisão 08 --- Substituição do asset do hero

**Decisão:** Atualizar o CSS para usar `assets/hero-workshop.jpg` após a
remoção externa do PNG anterior.

**Motivo:** Manter o hero funcional e incorporar a nova foto real da
fachada sem desfazer uma alteração concorrente. A diferença visual
permanece registrada para confirmação.

------------------------------------------------------------------------

## Decisão 09 --- Escala-base para desktop em zoom 100%

**Decisão:** Reduzir o container principal de 1328 px para 1180 px e
ajustar de forma coordenada header, hero, tipografia, cards, imagens,
gaps e paddings.

**Motivo:** Em uma viewport comum de 1440 px, o container anterior
ocupava quase toda a largura e mantinha dimensões pensadas para
screenshots de aproximadamente 1880 px. O ajuste na origem preserva a
hierarquia sem recorrer a `zoom` CSS.

------------------------------------------------------------------------

## Decisão 10 --- Logo proporcional com fundo transparente

**Decisão:** Usar `assets/logo-transparent.png` com
`object-fit: contain` no header.

**Motivo:** A logo JPG fornecida continha o quadriculado de
transparência gravado no fundo. A versão tratada preserva a marca,
remove o fundo e se adapta ao desktop e ao mobile sem recorte.

------------------------------------------------------------------------

## Decisão 11 --- Contatos reais e consulta oficial do Detran

**Decisão:** Direcionar todos os CTAs de WhatsApp para `5513996576383`,
exibir o telefone fixo `(13) 3878-0078` e incluir no FAQ a consulta de
credenciamento no portal oficial do Detran-SP.

**Motivo:** Os dados foram fornecidos pelo responsável do projeto e
substituem os placeholders usados durante a reprodução visual.

**Status:** A configuração do WhatsApp foi posteriormente substituída
pela Decisão 14.

## Decisão 12 --- Localização real e navegação externa

**Decisão:** Substituir a imagem estática da seção de localização por um
Google Maps interativo apontando para a unidade da empresa de
emplacamento na Avenida Antônio Emmerick, 156 - Vila Cascatinha, São
Vicente - SP.

**Decisão:** Disponibilizar ao usuário a escolha entre Google Maps e
Waze através da ação "Como chegar".

**Decisão:** Adicionar uma interação visual sutil ao card do mapa,
utilizando elevação, sombra e transição no hover.

**Motivo:** Tornar a seção de localização realmente útil, facilitar a
criação de rotas até a empresa e adicionar interação ao site sem fugir
da identidade visual existente.

------------------------------------------------------------------------

## Decisão 13 --- Mapa incorporado sem chave de API

**Decisão:** Usar o endpoint de incorporação por consulta do Google Maps
em um `iframe`, o formato oficial de Maps URLs para a rota do Google e o
Universal Link do Waze com endereço codificado.

**Motivo:** A solução entrega mapa interativo e abertura dos aplicativos
sem adicionar SDK, dependência JavaScript ou chave de API ao projeto
estático.

------------------------------------------------------------------------

## Decisão 14 --- Número exibido e destino do WhatsApp distintos

**Decisão:** Exibir `(13) 97417-8999` como contato de WhatsApp, mas
direcionar todos os CTAs e o botão flutuante para `wa.me/551338780078`.

**Motivo:** O responsável do projeto solicitou explicitamente que o
número apresentado ao visitante seja diferente do número usado para
iniciar a conversa.

## Decisão 15 --- Novos screenshots para "Saiba mais" e "Agendar"

**Decisão:** Os novos screenshots adicionados à pasta `screenshots/`
passam a ser a fonte visual de verdade para os estados abertos de "Saiba
mais" e "Agendar".

**Motivo:** As referências agora mostram explicitamente como essas
interações devem aparecer, portanto a implementação não deve utilizar um
dropdown ou modal genérico diferente do design fornecido.

**Decisão:** Manter as interações simples, com abertura e fechamento
suaves, sem adicionar animações exageradas que não estejam presentes nas
referências.

## Decisão 16 --- Modais nativos e agendamento pelo WhatsApp

**Decisão:** Implementar as duas interfaces com o elemento nativo
`dialog`, reutilizar um único modal para os três serviços e montar a
mensagem de agendamento no navegador antes de abrir
`wa.me/551338780078`.

**Motivo:** `dialog` fornece foco modal, fechamento por `Esc` e backdrop
sem dependências. O fluxo preserva os campos do screenshot e mantém o
projeto estático, sem simular persistência ou backend inexistente.

## Decisão 17 --- Preservar a tipografia original dos controles

**Decisão:** Remover a herança global de fonte adicionada a botões e
campos durante a implementação dos modais.

**Motivo:** A regra alterou a tipografia dos controles que já existiam.
O conteúdo permanece em `Plus Jakarta Sans`, enquanto os controles
voltam ao comportamento anterior do navegador.

## Decisão 18 --- Hover sutil em cards e imagens

**Decisão:** Aplicar elevação de 4 px, sombra e borda verde suave aos
cards, além de zoom discreto de 1% e leve saturação nas imagens.

**Motivo:** Dar resposta visual ao cursor sem alterar a composição da
página. Os efeitos ficam restritos a dispositivos com mouse.

## Decisão 19 --- Remoção do escudo no modal de serviço

**Decisão:** Remover o ícone de escudo verde do cabeçalho do modal
"Saiba mais", mantendo o ícone de calendário do agendamento.

**Motivo:** Ajuste visual solicitado pelo responsável do projeto; o
título foi realinhado para ocupar naturalmente o espaço liberado.

## Decisão 20 --- Nova imagem na aba do navegador

**Decisão:** Substituir o favicon SVG pelo arquivo `assets/logo - 2.jpg`
fornecido pelo responsável do projeto.

**Motivo:** Usar a nova marca com carro e sinal verde como identificação
visual da aba do navegador, sem alterar a logo exibida no cabeçalho.

**Status:** Decisão refinada pela Decisão 22 após a validação visual na
aba.

## Decisão 21 --- Ampliação dos tipos de serviço

**Decisão:** Adicionar ao seletor as serviço de emplacamentos para
remarcação de chassi e/ou motor, baixa permanente e atendimento móvel
para veículos pesados.

**Motivo:** Permitir que a mensagem enviada ao WhatsApp identifique
corretamente os novos serviços solicitados, mantendo o mesmo formulário
e fluxo de atendimento.

## Decisão 22 --- Favicon quadrado com transparência real

**Decisão:** Usar `assets/favicon.png`, derivado do símbolo central de
`logo - 2.jpg`, com composição quadrada e fundo transparente.

**Motivo:** O JPG horizontal deixava a marca pequena na aba e exibia o
quadriculado como parte da imagem. O PNG quadrado mantém o carro e o
sinal legíveis em tamanhos reduzidos.

## Decisão 23 --- Manter as animações de hover ativas

**Decisão:** Remover a regra que desligava completamente as transições
quando `prefers-reduced-motion` estava ativo.

**Motivo:** O ambiente do responsável do projeto deixou de exibir as
animações solicitadas. Os efeitos permanecem curtos, leves e exclusivos
para dispositivos com mouse.

## Decisão 24 --- ChevronRight do Lucide no FAQ

**Decisão:** Substituir os caracteres das setas do FAQ pelo ícone
`ChevronRight` do pacote oficial `lucide`, rotacionando o mesmo SVG em
90 graus por CSS quando o elemento `<details>` possui o atributo `open`.

**Motivo:** O projeto usa JavaScript puro, não React; `lucide` oferece o
mesmo ícone sem introduzir React. O estado nativo existente é
reutilizado, sem lógica paralela, e a rotação usa transição de 250 ms.

## Decisão 25 --- Perfil oficial do Instagram

**Decisão:** Transformar `@perfil-da-empresa` em link para
`https://www.instagram.com/perfil-da-empresa?stkn=c2wyZ3dwMm0yb3pr`, com
abertura em nova aba.

**Motivo:** O responsável do projeto forneceu o endereço oficial,
permitindo concluir a pendência de contato sem alterar o texto visual da
seção.

------------------------------------------------------------------------

## Decisão 26 --- Alterar somente o segmento comercial

**Decisão:** Manter o design, estrutura, responsividade, animações,
componentes, tecnologia e comportamento definidos neste ExecPlan. A
mudança desta reutilização é somente o segmento da empresa: o projeto
deixa de representar uma empresa de vistoria veicular e passa a
representar uma empresa de emplacamento de veículos.

**Motivo:** O layout e a experiência visual continuam sendo a referência
do projeto. Textos, títulos, serviços, CTAs, imagens e demais conteúdos
comerciais devem ser adaptados ao segmento de emplacamento sem
redesenhar a landing page.

**Regra:** Não reutilizar nomes, textos, serviços, endereço, telefone,
WhatsApp, Instagram ou identidade da antiga empresa de vistoria como se
fossem dados da nova empresa. Quando os dados reais da empresa de
emplacamento não estiverem disponíveis, usar placeholders claramente
identificados para substituição posterior.

------------------------------------------------------------------------

# Surprises & Discoveries

## Execução atual — 02/10/2026

- A aplicação e os 14 screenshots citados não existem. Git tinha apenas fbd071c; ab6bc54 não pertence ao histórico disponível.
- Uma referência Marplacas (843 × 1264) e hero.jpg (1794 × 576). Não há logo original, fotos internas isoladas ou referências de modal/mobile.
- Referência contém textos visivelmente corrompidos, corrigidos sem inventar preços, prazos ou credenciais.
- Decisão 26 prevalece sobre os contatos antigos; dados reais recebidos durante execução.
- Docker CLI instalado, mas daemon Docker Desktop inacessível; compose não pôde construir/iniciar.

## Histórico herdado — descobertas de outro projeto

Registrar aqui qualquer descoberta durante a implementação.

Exemplos:

``` text
- Screenshot apresenta uma versão mobile diferente da versão desktop.
- Fonte utilizada no screenshot não estava disponível localmente.
- Determinada imagem do screenshot não existe nos assets do projeto.
- Um componente visual precisou ser reproduzido com CSS.
- A estrutura existente do projeto exigiu adaptação.
```

-   Os 12 screenshots iniciais são desktop, com largura entre 1866 e
    1888 px; não há referências completas de tablet/mobile. Os dois
    novos recortes de modal medem 679 x 925 e 565 x 736 px.
-   O repositório já continha a maior parte da implementação e três
    commits relevantes, mas o `PLANS.MD` estava sem acompanhamento e
    ainda não era versionado.
-   A referência usava contatos de exemplo. WhatsApp, telefone fixo,
    endereço, Instagram e mapa foram posteriormente confirmados e
    atualizados com os dados fornecidos.
-   O primeiro teste do container mostrou `404` para `/favicon.ico`; foi
    resolvido com favicon SVG embutido.
-   A primeira auditoria de acessibilidade encontrou contraste
    insuficiente nos CTAs; após o ajuste de cor, o audit retornou zero
    violações.
-   O audit não conseguiu calcular automaticamente o contraste do texto
    do hero por causa do gradiente. A camada clara e o texto foram
    conferidos visualmente.
-   O formulário descrito genericamente no plano não aparece nos
    screenshots e não possui backend definido.
-   Durante a validação, `assets/hero-workshop.png` foi substituído
    externamente por `assets/hero-workshop.jpg`, uma foto real da
    fachada com tamanho menor. As referências CSS foram atualizadas para
    manter o hero funcional.
-   A logo JPG fornecida continha um quadriculado de transparência
    gravado. Foi criada `assets/logo-transparent.png` e o header passou
    a usar `object-fit: contain`.
-   A sensação de zoom não vinha do navegador: em 1440 px, o container
    de 1328 px, o H1 de 66 px e o header de 98 px mantinham uma escala
    próxima da referência de 1880 px. A viewport final foi confirmada
    com `visualViewport.scale = 1`.
-   O Google Maps normaliza visualmente o logradouro para "Avenida
    Antônio Emmerich", embora os registros e o requisito usem
    "Emmerick"; a consulta com o endereço solicitado posicionou o
    marcador no número 156.
-   O navegador headless não anuncia suporte a `hover: hover`, portanto
    a elevação foi validada pela regra CSS e mantida restrita a
    mouse/trackpad. O menu, o mapa e as rotas foram testados por
    interação real.
-   A auditoria após o mapa identificou que o WhatsApp flutuante estava
    fora de landmarks semânticos. O link foi envolvido em um `aside`
    rotulado, eliminando a violação.
-   O número exibido como WhatsApp e o destino dos links são
    intencionalmente diferentes por solicitação comercial; essa
    divergência não deve ser normalizada automaticamente.
-   O Purpose e o Objetivo comercial ainda descreviam uma empresa de
    soluções digitais, em conflito com todo o conteúdo e os screenshots
    de emplacamento de veículos; ambos foram corrigidos para refletir a
    Salomé Serviço de Emplacamentos.
-   Caminhos de imagens definidos apenas em JavaScript não foram
    reescritos pelo Vite no primeiro build. A solução foi criar as URLs
    com `new URL(..., import.meta.url)` para que os três assets sejam
    incluídos no bundle.
-   O elemento nativo `dialog` não herdou automaticamente a família
    tipográfica do `body`; a fonte foi aplicada explicitamente ao modal
    antes da comparação final.
-   A referência de agendamento contém formulário, mas não indica
    armazenamento de lead nem backend. O envio foi implementado como
    mensagem estruturada para o WhatsApp.
-   A declaração global `font: inherit` aplicada aos controles também
    alterou a fonte dos botões preexistentes. A regra foi removida após
    a solicitação de restauração visual.
-   A versão atualizada de `logo - 2.jpg` simulava transparência com um
    quadriculado gravado e tinha proporção horizontal de 3:1, causando
    fundo cinza e marca muito pequena na aba.
-   A regra de redução de movimento podia eliminar as transições de
    hover conforme a configuração de animações do sistema operacional,
    fazendo os efeitos parecerem ausentes.
-   A implementação não usa React, portanto adicionar `lucide-react`
    traria uma runtime desnecessária. O pacote oficial `lucide` atende
    ao mesmo desenho no ambiente atual.

------------------------------------------------------------------------

# Artifacts and Notes

## Execução atual — 02/10/2026

Arquivos: index.html, src/main.js, src/styles.css, src/config.js, assets/favicon.svg, package.json, package-lock.json, .gitignore, .dockerignore, Dockerfile, compose.yaml, README.md e PLANS.md. Assets fornecidos serão versionados.

Comandos: Get-Content (leitura integral em blocos), Get-ChildItem, rg --files, git status/log, node/npm/docker --version, npm install (0 vulnerabilidades), npm run build (aprovado), npm run dev -- --port 5173, npx --yes agent-browser (open, viewport, snapshot, screenshot, eval, errors), docker compose up -d --build (falha: daemon indisponível).

Servidor de desenvolvimento: http://127.0.0.1:5173. Capturas em artifacts/ (ignorado pelo Git). Validações em andamento; não reutilizar os resultados históricos abaixo como evidência atual.

### Checkpoint de implementação

Build aprovado e aplicação implementada; validação de navegador em andamento. Primeiro commit: feat: implementa landing page Marplacas e atendimento via WhatsApp.

## Histórico herdado — artefatos não presentes neste repositório

Registrar aqui:

### Arquivos alterados

``` text
index.html — conteúdo histórico, contatos reais, FAQ, mapa interativo, rotas externas, favicon, nova logo, título bicolor, botões de abertura, estrutura semântica dos modais e remoção do escudo no modal de serviço.
src/main.js — controle de abertura e fechamento, conteúdo dos serviços, agendamento para WhatsApp e inicialização do `ChevronRight` do Lucide.
src/styles.css — mapa responsivo, modais, interações de hover e rotação de 250 ms do `ChevronRight` conforme o estado do FAQ.
package.json e package-lock.json — dependência oficial `lucide` para os ícones do FAQ.
assets/logo - 2.jpg — imagem original fornecida e usada como referência para o favicon.
assets/favicon.png — favicon quadrado com transparência real, recortado no símbolo do carro e sinal verde.
assets/hero-workshop.jpg — nova foto da fachada incorporada como substituição do PNG removido durante a execução.
assets/logo-transparent.png — marca com transparência real utilizada no Header/Navbar.
PLANS.MD — progresso, decisões, descobertas, validação e retrospectiva.
```

### Screenshots analisados

``` text
screenshots/hero.png
screenshots/Nossos serviços.png
screenshots/Nossa Estrutura.png
screenshots/Nossa Estrutura2.png
screenshots/como surgiu a salome serviço de emplacamentos.png
screenshots/como surgiu a salome serviço de emplacamentos 2.png
screenshots/como surgiu a salome serviço de emplacamentos 3.png
screenshots/vai fazer uma serviço de emplacamento.png
screenshots/Perguntas frequentes.png
screenshots/Perguntas frequentes 2.png
screenshots/localizaçao.png
screenshots/localizaçao 2.png
screenshots/dropdown saiba mais .png
screenshots/dropdown agendar serviço de emplacamento.png
```

### Comandos executados

``` text
Get-Content -Raw, rg --files, git status, git log, git diff
npm run build
docker compose ps
docker compose logs --tail
docker compose up -d --build
Invoke-WebRequest http://127.0.0.1:8080/
npx --yes agent-browser (open, set viewport, snapshot, screenshot, eval, errors, console, a11y, click, hover, close)
view_image para comparação visual dos dois novos screenshots e das capturas de validação
Pesquisa web do endereço comercial e das documentações oficiais de Maps URLs e Waze Deep Links
git add e git commit
```

### Testes realizados

``` text
Build Vite de produção: aprovado.
Build multi-stage do Docker: aprovado.
Container Nginx: ativo em 0.0.0.0:8080 e resposta HTTP 200.
Browser desktop 1879 x 939: aprovado, sem overflow e sem imagens quebradas.
Browser desktop 1440 x 900 em zoom 100%: aprovado; `visualViewport.scale = 1`, escala visual revisada e sem overflow.
Browser tablet 768 x 1024: aprovado, sem overflow.
Browser mobile 390 x 844: aprovado, sem overflow; menu abre e fecha após navegação.
FAQ: abertura exclusiva, pergunta sobre credenciamento e link oficial do Detran validados.
WhatsApp: seis links validados com destino `wa.me/551338780078`; contato visível validado como `(13) 97417-8999` em desktop e mobile.
Mapa: Google Maps incorporado carregou o marcador da Avenida Antônio Emmerick, 156; movimentação e controles visíveis.
Rotas: menu "Como chegar" e destinos codificados para Google Maps e Waze validados.
Localização desktop 1879 x 939, tablet 768 x 1024 e mobile 390 x 844: aprovada, sem overflow.
Console e erros de página: nenhum erro encontrado.
Audit WCAG A/AA: zero violações; dois contrastes do hero ficaram inconclusivos por causa do gradiente.
Audit WCAG após título bicolor: zero violações; os três textos sobre o gradiente do hero ficaram inconclusivos para cálculo automático e foram conferidos visualmente.
Audit WCAG após mapa interativo: zero violações; os três contrastes do hero sobre fotografia permanecem inconclusivos e foram conferidos visualmente.
Modais: os três conteúdos de serviço, seleção automática do tipo de serviço, abertura exclusiva, fechamento por botão e `Esc` validados.
Formulário: bloqueio do modelo vazio e geração da mensagem com tipo, modelo, nome, placa e data formatada validados sem abrir uma conversa real.
Modal desktop 1879 x 939: serviço com 616 x 886 px, imagem de 410 px e agendamento com 538 x 710 px, próximos às referências de 616 x 890 e 538 x 709 px.
Modal tablet 768 x 1024 e mobile 390 x 844: aprovados, com rolagem interna quando necessária e sem overflow horizontal.
Audit WCAG A/AA após os modais: zero violações; contrastes sobre o hero e seis pequenos elementos ficaram inconclusivos para revisão manual.
Comparação visual final: realizada contra os 14 screenshots disponíveis.
Tipografia após restauração: corpo confirmado em `Plus Jakarta Sans` e botão do header confirmado em `Arial`, como antes da implementação dos modais.
Hover em desktop 1440 x 900: card confirmou `translateY(-4px)` e a imagem foi ajustada para escala `1.01`, sem overflow horizontal e sem erros no console.
Modal de serviço sem escudo: confirmado visualmente em 1440 x 900; nenhum ícone no cabeçalho de serviço e calendário preservado no agendamento.
Favicon: `assets/logo - 2.jpg` incluído no build Vite e servido pelo Docker como `image/jpeg` com URL versionada.
Tipos de serviço: seis opções confirmadas; os novos serviços foram validados na mensagem do WhatsApp e a opção mais longa não gerou overflow em 390 x 844.
Favicon atualizado: nova versão incluída no build como `logo - 2-DFC8pUOh.jpg` e carregada pelo navegador.
Favicon final: PNG 1254 x 1254 com canal alfa confirmado, incluído no build como `favicon-B7HVwODx.png` e carregado como `image/png`.
Animações restauradas: card confirmado com transição de `0.18s` e `translateY(-4px)`; imagem confirmada com transição de `0.22s` e escala `1.01`.
FAQ desktop 1440 x 900: sete `ChevronRight` renderizados; fechado sem rotação, aberto em 90 graus, duração de 250 ms e abertura exclusiva preservada.
FAQ mobile 390 x 844: rotação individual e ausência de overflow horizontal confirmadas.
Audit WCAG A/AA após os ícones do FAQ: zero violações; apenas contrastes do hero sobre fotografia permaneceram inconclusivos.
Instagram: `@perfil-da-empresa` vinculado ao perfil oficial informado, com abertura em nova aba.
```

### Commits criados nesta etapa

``` text
ab6bc54 feat: adiciona modais de servicos e agendamento
```

### Observações

``` text
O container permanece em execução em http://localhost:8080.
Screenshots de validação foram gerados no diretório temporário do Windows e não foram adicionados ao repositório.
O WhatsApp exibido é `(13) 97417-8999`, enquanto todos os links usam `wa.me/551338780078`. O telefone fixo exibido é `(13) 3878-0078`. Endereço, mapa e rotas usam a Avenida Antônio Emmerick, 156.
O asset `assets/mapa.png` foi mantido no repositório como material original, mas não é mais referenciado nem incluído no build.
O formulário de agendamento não persiste leads porque não há contrato de backend; os dados são enviados somente na mensagem aberta no WhatsApp.
A escala foi corrigida por propriedades individuais de layout; nenhum `zoom` CSS foi adicionado.
```

------------------------------------------------------------------------

# Outcomes & Retrospective

Preencher somente após a implementação.

Registrar:

-   o que foi concluído;
-   o que ficou pendente;
-   quais partes ficaram diferentes dos screenshots;
-   quais limitações foram encontradas;
-   quais decisões foram tomadas durante a implementação;
-   quais melhorias podem ser realizadas posteriormente.

## Resultado final

``` text
Landing page completa e responsiva, visualmente próxima das referências, executando em Vite no desenvolvimento e em Nginx via Docker na produção. Além da navegação, mapa e contatos, cada serviço agora abre seu conteúdo específico e o formulário de agendamento valida os campos e prepara a conversa no WhatsApp. Build, container, interações, imagens, console, responsividade e acessibilidade automatizada foram validados. A foto atual do hero é uma fachada real adicionada durante a execução e difere da imagem original do screenshot.
```

## Pendências

``` text
Decidir se o agendamento deverá apenas abrir o WhatsApp ou também persistir leads; para persistência, definir API, consentimento e política de dados.
Obter screenshots mobile/tablet, caso seja necessária fidelidade visual específica nessas larguras.
Confirmar se a nova foto da fachada deve permanecer no hero ou se a imagem da referência deve ser restaurada.
```

## Próximos passos

``` text
Decidir se os dados do agendamento permanecerão somente no WhatsApp ou também serão persistidos em um backend.
```


