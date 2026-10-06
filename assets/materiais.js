/* Beescoito · Central do Cliente (Molla)
   Lista de materiais exibidos na Central. É o único arquivo a editar para publicar um material novo.

   Para cada material, acrescente um bloco em MATERIAIS:
     titulo     nome do material
     resumo     uma ou duas frases sobre o conteúdo
     categoria  planejamento | conteudos | reports | analises
     arquivo    caminho do HTML (ex.: 'materiais/report-outubro-2026.html')
     data       AAAA-MM-DD (define a ordem; o mais recente ganha o selo "Mais recente")
     dataTexto  data como aparece no card (ex.: 'Outubro 2026')
     detalhes   etiquetas opcionais (ex.: ['41 slides', 'Google Ads'])

   Categoria sem material aparece como "Em breve".
*/
window.CATEGORIAS = [
  {
    id: 'planejamento',
    nome: 'Planejamento',
    descricao: 'Diagnósticos, estratégia e planos de mídia e de redes sociais.',
    icone: 'M9 11l3 3L22 4M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11'
  },
  {
    id: 'conteudos',
    nome: 'Conteúdos',
    descricao: 'Pautas, roteiros e curadoria de conteúdos aprovados.',
    icone: 'M3 5h18v14H3zM3 16l5-5 4 4 3-3 6 6M15.5 8.5h.01'
  },
  {
    id: 'reports',
    nome: 'Reports',
    descricao: 'Resultados mensais de mídia paga e redes sociais.',
    icone: 'M3 3v18h18M7 16v-4M12 16V8M17 16v-7'
  },
  {
    id: 'analises',
    nome: 'Análises e estudos',
    descricao: 'Estudos de mercado, concorrência e público.',
    icone: 'M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM21 21l-5-5'
  }
];

window.MATERIAIS = [
  {
    titulo: 'Diagnóstico e plano de mídia paga',
    resumo: 'Leitura do Google Ads da Beescoito em 2026 e o plano para gerar mais pedidos de orçamento, integrado ao planejamento de redes sociais.',
    categoria: 'planejamento',
    arquivo: 'materiais/diagnostico-plano-midia-paga.html',
    data: '2026-09-24',
    dataTexto: 'Setembro 2026',
    detalhes: ['41 slides', 'Google Ads']
  },
  {
    titulo: 'Planejamento de redes sociais',
    resumo: 'Público-alvo e as seis linhas editoriais para contar a história da Beescoito no Instagram, com exemplos e inspirações.',
    categoria: 'planejamento',
    arquivo: 'materiais/planejamento-redes-sociais.html',
    data: '2026-09-24',
    dataTexto: 'Setembro 2026',
    detalhes: ['16 páginas', 'Instagram']
  }
];
