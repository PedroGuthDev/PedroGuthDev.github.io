// Shared data for the portfolio
const PROJECTS = [
  {
    id: "denise",
    name: "Denise Costura Criativa",
    tagline: {
      en: "E-commerce catalog for a creative sewing brand",
      pt: "Catálogo e e-commerce para uma marca criativa de costura",
    },
    description: {
      en: "A full product catalog and e-commerce platform built for Denise Costura Criativa — a Brazilian creative sewing studio. Customers can browse collections, view detailed product information and place orders seamlessly across devices.",
      pt: "Catálogo de produtos completo e plataforma de e-commerce para a Denise Costura Criativa — um ateliê de costura criativa. Clientes podem navegar pelas coleções, visualizar detalhes dos produtos e fazer pedidos com fluidez em qualquer dispositivo.",
    },
    tags: {
      en: ["E-commerce", "Live", "2024"],
      pt: ["E-commerce", "No ar", "2024"],
    },
    stack: ["Next.js", "TypeScript", "React", "PostgreSQL", "CSS"],
    url: "https://www.denisecosturacriativa.com.br",
    code: null,
    palette: "p1",
    slides: [
      {
        kind: "img",
        src: "assets/denisecosturacriativa/home.webp",
        label: { en: "Home Page", pt: "Página Inicial" },
      },
      {
        kind: "img",
        src: "assets/denisecosturacriativa/catalogo.webp",
        label: { en: "Product Catalog", pt: "Catálogo de Produtos" },
      },
      {
        kind: "img",
        src: "assets/denisecosturacriativa/paginadeproduto.webp",
        label: { en: "Product Detail", pt: "Detalhe do Produto" },
      },
      {
        kind: "img",
        src: "assets/denisecosturacriativa/painelAdmin.webp",
        label: { en: "Admin Dashboard", pt: "Painel Administrativo" },
      },
    ],
  },
  {
    id: "ngconstrua",
    name: "NGconstrua",
    tagline: {
      en: "High-end real-estate renovations — landing page",
      pt: "Reformas imobiliárias de alto padrão — landing page",
    },
    description: {
      en: "Landing page for NGconstrua, a high-standard real-estate renovation business. Focused on conversion and trust: clear service breakdown, a project gallery, testimonials and a direct lead-capture form.",
      pt: "Landing page para a NGconstrua, um negócio de reformas imobiliárias de alto padrão. Focada em conversão e confiança: detalhamento claro dos serviços, galeria de projetos, depoimentos e formulário direto de captação de leads.",
    },
    tags: {
      en: ["Landing", "Conversion", "2024"],
      pt: ["Landing", "Conversão", "2024"],
    },
    stack: ["Next.js", "TypeScript", "React", "CSS"],
    url: "https://www.ngconstrua.com.br",
    code: null,
    palette: "p2",
    slides: [
      {
        kind: "img",
        src: "assets/ngconstrua/hero.webp",
        label: { en: "Hero Section", pt: "Seção Principal" },
      },
      {
        kind: "img",
        src: "assets/ngconstrua/servicos.webp",
        label: { en: "Services", pt: "Serviços" },
      },
      {
        kind: "img",
        src: "assets/ngconstrua/slidablePortifolio.webp",
        label: { en: "Project Portfolio", pt: "Portfólio de Projetos" },
      },
      {
        kind: "img",
        src: "assets/ngconstrua/contactFooter.webp",
        label: { en: "Contact Section", pt: "Seção de Contato" },
      },
    ],
  },
];

const I18N = {
  pt: {
    navOverview: "Visão geral",
    navPortfolio: "Portfólio",
    navAbout: "Sobre",
    navContact: "Contato",

    eyebrowHero: "Desenvolvedor Full-Stack",
    heroLead:
      "Eu desenho e construo produtos web de ponta a ponta — de interfaces pixel-perfect a APIs resilientes. Trabalho principalmente com <b>TypeScript</b>, <b>React</b>, <b>Next.js</b> e <b>Node.js</b>, transformando problemas reais de negócio em produtos entregues e mensuráveis.",
    ctaPortfolio: "Ver portfólio",
    ctaContact: "Entrar em contato",
    statYears: "Ano construindo",
    statFull: "Front & back-end",
    statLocation: "Brasil",
    statFullK: "Full-Stack",
    statLocK: "Remoto",

    eyebrowPortfolio: "Trabalho",
    portfolioTitle: "Portfólio & stack.",
    portfolioSub:
      "Projetos selecionados que construí e coloquei no ar, e as tecnologias que uso para construí-los.",
    tabProjects: "Projetos",
    tabLanguages: "Linguagens",
    visitSite: "Visitar site",
    caseStudy: "Case de estudo sob consulta",

    eyebrowAbout: "Sobre",
    aboutTitle: "Um dev que entrega.",
    aboutSub:
      "Uma apresentação rápida — quem eu sou, como trabalho e com o que me importo.",
    aboutP1:
      "Oi, eu sou o <b>Pedro Guth</b> — desenvolvedor full-stack do Brasil. Gosto de transformar ideias de produto ainda difusas em aplicações web limpas, rápidas e bem arquitetadas, que pessoas reais realmente usam.",
    aboutP2:
      "Meu stack vive em torno do ecossistema <b>TypeScript + React + Next.js</b> no front-end, e <b>Node.js + PostgreSQL</b> no back. Me importo muito com detalhes de produto: tipografia, movimento, acessibilidade e as micro-interações que fazem uma interface parecer premium em vez de genérica.",
    aboutP3:
      "Fora dos projetos, escrevo, experimento com design systems e tento continuar aprendendo — testes com Vitest, infraestrutura, e afiando meu olhar para o detalhe.",
    factBasedL: "Localidade",
    factBasedV: "Brasil · Aberto a remoto",
    factFocusL: "Foco",
    factFocusV: "Engenharia de produto",
    factStackL: "Stack principal",
    factStatusL: "Status",
    factStatusV: "Aberto a oportunidades",

    eyebrowContact: "Contato",
    contactTitle: "Vamos construir<br/>algo juntos.",
    contactSub:
      "Tem um projeto, uma vaga ou só quer conversar? Escolha o canal que for mais fácil, ou envie uma mensagem pelo formulário.",
    directTitle: "Canais diretos",
    directSub: "Normalmente respondo em até 24h.",
    lEmail: "Email",
    lPhone: "Telefone / WhatsApp",
    lLinkedIn: "LinkedIn",
    lGithub: "GitHub",
    formTitle: "Enviar uma mensagem",
    formSub: "Preencha o formulário e eu retorno o contato.",
    fName: "Nome",
    fEmail: "Email",
    fPhone: "Telefone",
    fTopic: "O que você quer",
    fMsg: "Mensagem",
    phName: "Seu nome completo",
    phEmail: "voce@empresa.com",
    phPhone: "+55 ...",
    phMsg:
      "Me conte um pouco sobre o que tem em mente — objetivos, prazo, faixa de orçamento se houver...",
    optProject: "Discutir um projeto",
    optJob: "Vaga / oportunidade",
    optFreelance: "Freelance / contrato",
    optCollab: "Colaboração",
    optOther: "Outro assunto",
    sendBtn: "Enviar mensagem",
    sendingBtn: "Enviando...",
    sentMsg: "✓ Mensagem enviada. Retorno em breve — obrigado pelo contato.",
    errorMsg:
      "✕ Ocorreu um erro ao enviar. Tente novamente ou use os canais diretos.",

    footer: "Desenhado e construído com carinho.",
  },
  en: {
    navOverview: "Overview",
    navPortfolio: "Portfolio",
    navAbout: "About",
    navContact: "Contact",

    eyebrowHero: "Full-Stack Developer · Available",
    heroLead:
      "I design and build web products end-to-end — from pixel-true interfaces to resilient APIs. I work mostly with <b>TypeScript</b>, <b>React</b>, <b>Next.js</b> and <b>Node.js</b>, turning real business problems into shipped, measurable products.",
    ctaPortfolio: "View portfolio",
    ctaContact: "Get in touch",
    statYears: "Years building",
    statFull: "Front & back-end",
    statLocation: "Based in Brazil",
    statFullK: "Full-Stack",
    statLocK: "BR · Remote",

    eyebrowPortfolio: "Work",
    portfolioTitle: "Portfolio & stack.",
    portfolioSub:
      "Selected projects I've built and shipped, and the technologies I reach for when building them.",
    tabProjects: "Projects",
    tabLanguages: "Languages",
    visitSite: "Visit live site",
    caseStudy: "Case study on request",

    eyebrowAbout: "About",
    aboutTitle: "A builder who ships.",
    aboutSub:
      "A quick introduction — who I am, how I work, and what I care about.",
    aboutP1:
      "Hi, I'm <b>Pedro Guth</b> — a full-stack developer from Brazil. I love turning fuzzy product ideas into clean, fast, well-architected web apps that real people actually use.",
    aboutP2:
      "My stack lives around the <b>TypeScript + React + Next.js</b> ecosystem on the front-end, and <b>Node.js + PostgreSQL</b> on the back. I care a lot about product details: typography, motion, accessibility, and the small interactions that make interfaces feel premium instead of generic.",
    aboutP3:
      "Outside client work, I write, experiment with design systems and try to keep learning — testing with Vitest, exploring infrastructure, and sharpening my taste for craft.",
    factBasedL: "Based in",
    factBasedV: "Brazil · Remote-friendly",
    factFocusL: "Focus",
    factFocusV: "Product engineering",
    factStackL: "Core stack",
    factStatusL: "Status",
    factStatusV: "Open to opportunities",

    eyebrowContact: "Contact",
    contactTitle: "Let's build<br/>something together.",
    contactSub:
      "Got a project, a role, or just want to chat? Pick whichever channel feels easiest, or drop a message with the form.",
    directTitle: "Direct channels",
    directSub: "Usually replies within 24h.",
    lEmail: "Email",
    lPhone: "Phone / WhatsApp",
    lLinkedIn: "LinkedIn",
    lGithub: "GitHub",
    formTitle: "Send a message",
    formSub: "Fill the form and I'll reach out to you.",
    fName: "Name",
    fEmail: "Email",
    fPhone: "Phone",
    fTopic: "What do you want",
    fMsg: "Message",
    phName: "Your full name",
    phEmail: "you@company.com",
    phPhone: "+55 ...",
    phMsg:
      "Tell me a bit about what you have in mind — goals, timeline, budget range if any...",
    optProject: "Discuss a project",
    optJob: "Job / role opportunity",
    optFreelance: "Freelance / contract",
    optCollab: "Collaboration",
    optOther: "Something else",
    sendBtn: "Send message",
    sendingBtn: "Sending...",
    sentMsg:
      "✓ Message sent. I'll get back to you soon — thanks for reaching out.",
    errorMsg: "✕ Failed to send. Please try again or use the direct channels.",

    footer: "Designed & built with care.",
  },
};

// Simple global i18n store with listeners
window.__lang = "pt"; // default PT-BR
window.__langListeners = [];
window.setLang = (l) => {
  window.__lang = l;
  window.__langListeners.forEach((fn) => fn(l));
};
window.t = (k) =>
  (I18N[window.__lang] && I18N[window.__lang][k]) || I18N.en[k] || k;

const LANGUAGES = [
  {
    short: "TS",
    full: "TypeScript",
    color: "#3178c6",
    tint: "rgba(49,120,198,.85)",
    deep: "#1a3a6c",
  },
  {
    short: "React",
    full: "React",
    color: "#61dafb",
    tint: "rgba(97,218,251,.80)",
    deep: "#0b4a5e",
  },
  {
    short: "Next",
    full: "Next.js",
    color: "#ffffff",
    tint: "rgba(220,220,240,.55)",
    deep: "#1a1a22",
  },
  {
    short: "Node",
    full: "Node.js",
    color: "#68a063",
    tint: "rgba(104,160,99,.85)",
    deep: "#1f4a1d",
  },
  {
    short: "PgSQL",
    full: "PostgreSQL",
    color: "#4c8bbf",
    tint: "rgba(76,139,191,.85)",
    deep: "#163a5c",
  },
  {
    short: "HTML",
    full: "HTML5",
    color: "#e66a3b",
    tint: "rgba(230,106,59,.85)",
    deep: "#6a2510",
  },
  {
    short: "CSS",
    full: "CSS3",
    color: "#66a3ff",
    tint: "rgba(102,163,255,.80)",
    deep: "#1c3e78",
  },
  {
    short: "Vitest",
    full: "Vitest",
    color: "#fcc72b",
    tint: "rgba(252,199,43,.80)",
    deep: "#5c4405",
  },
];

const NAV_SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "portfolio", label: "Portfolio" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

window.PROJECTS = PROJECTS;
window.LANGUAGES = LANGUAGES;
window.NAV_SECTIONS = NAV_SECTIONS;
