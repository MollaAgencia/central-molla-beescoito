/* Beescoito · Central do Cliente (Molla)
   Proteção de acesso + botões "Central" e "Sair" dentro dos materiais.
   Uso: logo depois de <meta charset="UTF-8">, inclua
     na raiz:          <script src="assets/guarda.js"></script>
     em materiais/:    <script src="../assets/guarda.js"></script>
*/
(function () {
  var CHAVE = 'bee_auth', NOME = 'bee_nome';
  var src = (document.currentScript && document.currentScript.src) || '';
  var raiz = src ? new URL('../', src).href : '/';

  var ok = false;
  try { ok = sessionStorage.getItem(CHAVE) === 'ok'; } catch (e) {}
  if (!ok) {
    document.documentElement.style.display = 'none';
    location.replace(raiz + 'index.html');
    return;
  }

  // A própria Central já tem cabeçalho com "Sair": não precisa da barra.
  var naCentral = /\/central(\.html)?\/?$/.test(location.pathname);
  if (naCentral) return;

  function sair() {
    try { sessionStorage.removeItem(CHAVE); sessionStorage.removeItem(NOME); } catch (e) {}
    location.replace(raiz + 'index.html');
  }

  function montar() {
    var css = document.createElement('style');
    css.textContent =
      '.bee-guarda{position:fixed;top:14px;left:50%;transform:translateX(-50%);z-index:2147483000;display:flex;align-items:center;gap:4px;padding:4px;' +
      'background:rgba(26,33,43,.92);border:1px solid rgba(255,255,255,.12);border-radius:999px;box-shadow:0 8px 24px rgba(0,0,0,.25);' +
      '-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);font-family:"Archivo","Inter",Arial,sans-serif}' +
      '.bee-guarda.inline{position:static;transform:none;box-shadow:none}' +
      '.bee-guarda a,.bee-guarda button{appearance:none;border:0;background:transparent;color:rgba(255,255,255,.8);cursor:pointer;text-decoration:none;' +
      'font:800 10.5px/1 "Archivo","Inter",Arial,sans-serif;letter-spacing:.14em;text-transform:uppercase;padding:9px 14px;border-radius:999px;display:flex;align-items:center;gap:7px;transition:background .2s,color .2s}' +
      '.bee-guarda a:hover,.bee-guarda button:hover{background:#FF7A33;color:#fff}' +
      '.bee-guarda a:focus-visible,.bee-guarda button:focus-visible{outline:3px solid rgba(255,122,51,.6);outline-offset:1px}' +
      '.bee-guarda svg{width:13px;height:13px}' +
      '.bee-guarda .sep{width:1px;height:16px;background:rgba(255,255,255,.18)}' +
      '@media (max-width:760px){.bee-guarda:not(.inline){top:auto;bottom:76px}.bee-guarda a,.bee-guarda button{padding:8px 10px;letter-spacing:.1em}}' +
      '@media print{.bee-guarda{display:none!important}}';
    document.head.appendChild(css);

    var barra = document.createElement('nav');
    barra.className = 'bee-guarda';
    barra.setAttribute('aria-label', 'Central do Cliente');
    barra.innerHTML =
      '<a href="' + raiz + 'central.html"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>Central</a>' +
      '<span class="sep"></span><button type="button">Sair</button>';
    barra.querySelector('button').onclick = sair;

    // Uma página pode reservar o lugar da barra com <div id="guarda-barra"></div>.
    var alvo = document.getElementById('guarda-barra');
    if (alvo) { barra.classList.add('inline'); alvo.appendChild(barra); }
    else document.body.appendChild(barra);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', montar);
  else montar();
})();
