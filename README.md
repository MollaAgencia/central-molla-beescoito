# Beescoito · Central do Cliente (Molla)

Portal estático com tela de acesso e a Central do Cliente, onde ficam todos os materiais em HTML do atendimento, organizados em quatro categorias: **Planejamento**, **Conteúdos**, **Reports** e **Análises e estudos**. Categoria sem material aparece como "Em breve".

## Estrutura
- `index.html` — tela de login (nome livre + senha). Depois do login, abre a Central.
- `central.html` — página inicial da Central, com as categorias e os materiais.
- `materiais/` — um arquivo HTML por material. Só abrem após o login.
  - `diagnostico-plano-midia-paga.html` — Diagnóstico e plano de mídia paga (Planejamento)
  - `planejamento-redes-sociais.html` — Planejamento de redes sociais (Planejamento). As páginas e o PDF para download ficam na pasta `planejamento-redes-sociais/`.
- `assets/materiais.js` — **lista de materiais exibidos na Central** (é o único arquivo a editar para publicar um material novo).
- `assets/guarda.js` — proteção de acesso e botões "Central" e "Sair" dentro dos materiais.
- `assets/` — logos Molla (`molla-branca.png`, `molla-laranja.png`) e Beescoito (`beescoito-selo.png`, `beescoito-horizontal.png`).
- `vercel.json` — URLs limpas, noindex e atalhos `/diagnostico` e `/planejamento`.

## Publicar
1. No GitHub, envie todo o conteúdo desta pasta para a raiz do repositório (mantendo as pastas `assets/` e `materiais/`).
2. No Vercel, importe o repositório (framework: Other, sem build). Cada novo envio ao GitHub publica sozinho.

## Publicar um material novo
1. Salve o HTML dentro de `materiais/` (ex.: `materiais/report-outubro-2026.html`).
2. No HTML, logo depois de `<meta charset="UTF-8">`, cole:
   `<script src="../assets/guarda.js"></script>`
3. Em `assets/materiais.js`, acrescente um bloco em `MATERIAIS` com título, resumo, categoria (`planejamento`, `conteudos`, `reports` ou `analises`), arquivo e data.
4. Envie os dois arquivos ao GitHub.

## Trocar a logo da Beescoito
Substitua os arquivos em `assets/` mantendo o mesmo nome:
- `beescoito-selo.png` — selo redondo com fundo transparente (cabeçalho escuro da Central e ícone da aba).
- `beescoito-horizontal.png` — versão horizontal para fundo claro (tela de login).

## Acesso
Qualquer nome é aceito no campo "Seu nome"; só a senha é verificada.
A senha não fica escrita no repositório (só o hash dela, no `index.html`).

## Trocar a senha
Gere o SHA-256 da nova senha e substitua o valor de `HASH` no `index.html`.
Ex.: `echo -n "NOVASENHA" | shasum -a 256`

Observação: a proteção é feita no navegador (sessionStorage). Serve para restringir o acesso casual ao link, não substitui autenticação de servidor.
