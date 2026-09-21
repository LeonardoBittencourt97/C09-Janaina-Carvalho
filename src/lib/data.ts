export interface PracticeArea {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export interface Article {
  id: string;
  number: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  content: string[];
  oabDisclaimer: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  timeAgo: string;
  comment: string;
  source: string;
}

export interface Step {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: "divorcio" | "pensao" | "guarda" | "partilha";
  label: string;
  iconName: string;
  items: FaqItem[];
}

export const OFFICE_INFO = {
  name: "Janaina Carvalho Advocacia",
  shortName: "Janaina Carvalho",
  lawyerName: "Dra. Janaina Manhani de Carvalho",
  oab: "OAB/PR 114.878",
  tagline: "Advocacia Humanizada e Especializada em Direito de Família, Divórcio e Partilha de Bens",
  address: "R. Ébano Pereira, 60 - Sl 2004 - Centro, Curitiba - PR, 80410-240",
  addressShort: "Centro, Curitiba - PR",
  cityState: "Curitiba - PR",
  phone: "(41) 99621-4317",
  whatsappUrl: "https://wa.me/5541996214317?text=Ol%C3%A1%2C%20Dra.%20Janaina.%20Gostaria%20de%20uma%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica%20na%20%C3%A1rea%20de%20fam%C3%ADlia.",
  mapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=R.+%C3%89bano+Pereira,+60+-+Sl+2004+-+Centro,+Curitiba+-+PR,+80410-240",
  experienceYears: "+10",
  workingHours: {
    weekdays: "Segunda a Quinta: 09:00 às 17:00 | Sexta: 09:00 às 16:00",
    weekends: "Sábado e Domingo: Encerrado",
  },
  social: {
    // Redes sociais configuradas para direcionamento ao atendimento direto no WhatsApp oficial
    instagram: "https://wa.me/5541996214317?text=Ol%C3%A1%2C%20Dra.%20Janaina.%20Vim%20pelo%20Instagram%20e%20gostaria%20de%20orienta%C3%A7%C3%B5es.",
    facebook: "https://wa.me/5541996214317?text=Ol%C3%A1%2C%20Dra.%20Janaina.%20Vim%20pelo%20Facebook%20e%20gostaria%20de%20orienta%C3%A7%C3%B5es.",
    linkedin: "https://wa.me/5541996214317?text=Ol%C3%A1%2C%20Dra.%20Janaina.%20Vim%20pelo%20LinkedIn%20e%20gostaria%20de%20orienta%C3%A7%C3%B5es.",
  },
  pillars: {
    mission: "Oferecer assessoria jurídica de excelência em Direito de Família, combinando rigor técnico, acolhimento humano e estratégia combativa para proteger os filhos, a dignidade e o patrimônio de cada cliente.",
    vision: "Ser referência em Curitiba/PR e em âmbito nacional em advocacia de família e divórcio, reconhecida pela sensibilidade humana, transparência absoluta e capacidade de resolução segura de litígios complexos.",
    values: [
      "Ética e Probidade Inegociáveis (CFOAB)",
      "Atendimento Humanizado, Pessoal e Sigiloso",
      "Prioridade Absoluta ao Bem-Estar dos Filhos",
      "Estratégia Jurídica Clara e Firmeza Técnica",
    ],
  },
  metrics: [
    { value: "+10", label: "Anos de sólida trajetória em Direito de Família" },
    { value: "5.0 ★", label: "Nota máxima no Google Reviews (30 avaliações)" },
    { value: "100%", label: "Atendimento direto com a advogada titular" },
    { value: "Ética", label: "Conformidade integral ao CFOAB e sigilo absoluto" },
  ],
};

export const LAWYER_PROFILE = {
  name: "Dra. Janaina Manhani de Carvalho",
  role: "Advogada Titular & Especialista em Direito de Família",
  oab: "OAB/PR 114.878",
  specialties: "Especialista em Divórcio, Pensão Alimentícia, Guarda Compartilhada e Partilha de Bens",
  photo: "/Foto_perfil.jpeg",
  bio: "Advogada especialista em divórcio e direito de família com mais de 10 anos de experiência no exercício da advocacia. Conduz cada caso com profundo acolhimento humano e rigor técnico, compreendendo as dores, a sensibilidade emocional e a necessidade de proteção patrimonial envolvidas nas relações familiares. Sua atuação abrange desde acordos consensuais céleres e econômicos até litígios complexos de partilha, fixação de pensão e regulamentação de guarda, sempre prezando pela dignidade dos clientes e pelo melhor interesse dos filhos.",
  academicSummary: [
    {
      institution: "Ordem dos Advogados do Brasil - Seccional Paraná",
      course: "Inscrição Regular OAB/PR 114.878",
      details: "Mais de 10 anos de atuação profissional sólida, ética e comprometida com as garantias fundamentais da família.",
    },
    {
      institution: "Especialização em Direito das Famílias e Sucessões",
      course: "Prática Avançada em Divórcio, Guarda e Alimentos",
      details: "Ênfase na resolução consensual de conflitos, mediação familiar e condução contenciosa em varas de família.",
    },
    {
      institution: "Capacitação Contínua em Partilha de Bens e Blindagem Patrimonial",
      course: "Auditoria Patrimonial e Investigação de Bens Ocultos",
      details: "Estratégia probatória contra dilapidação e ocultação de bens societários e patrimoniais na dissolução matrimonial.",
    },
    {
      institution: "Prática Forense Protetiva e Alienação Parental",
      course: "Proteção da Infância e Medidas Protetivas Familiares",
      details: "Atuação técnica e multidisciplinar voltada à estabilidade emocional de menores e prevenção da alienação parental.",
    },
  ],
  quote: "O Direito de Família lida com o que há de mais precioso na vida: os filhos, a tranquilidade e a segurança do futuro. Minha missão é conduzir cada processo com máxima humanidade, transparência e firmeza técnica, para que você atravesse esse momento com dignidade e segurança.",
};

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: "divorcio-consensual",
    code: "01",
    title: "Divórcio Consensual & em Cartório",
    subtitle: "Separação Ágil, Econômica e com Sigilo Absoluto",
    description: "Estruturação completa de divórcios amigáveis diretamente em cartório ou pela via judicial. Elaboramos acordos seguros que resolvem a partilha de bens, regulamentação de convivência e pensão com celeridade e respeito mútuo.",
    highlights: [
      "Divórcio extrajudicial em cartório por escritura pública rápida",
      "Acordo consensual global com partilha justa de patrimônio",
      "Definição pacífica de guarda, convivência e pensão alimentícia",
      "Alteração de nome de casado(a) e regularização documental imediata",
    ],
  },
  {
    id: "divorcio-litigioso",
    code: "02",
    title: "Divórcio Litigioso & Partilha Complexa",
    subtitle: "Defesa Patrimonial Firme Contra Ocultação de Bens",
    description: "Atuação combativa para casos em que não há acordo sobre o término da união ou sobre a divisão dos bens. Atuamos com rigor na apuração de bens sonegados, fraudes societárias, meação de empresas e divisão equilibrada de dívidas.",
    highlights: [
      "Investigação judicial e quebra de sigilo para localização de patrimônio oculto",
      "Partilha justa de quotas empresariais, imóveis, veículos e investimentos",
      "Divisão de dívidas comuns contraídas na constância do casamento",
      "Medidas cautelares de arrolamento e bloqueio de bens para evitar dilapidação",
    ],
  },
  {
    id: "pensao-alimenticia",
    code: "03",
    title: "Pensão Alimentícia: Fixação, Revisão & Execução",
    subtitle: "Garantia do Sustento dos Filhos e Equilíbrio Financeiro",
    description: "Assessoria técnica na fixação da pensão pelo binômio necessidade e possibilidade econômica. Atuamos com firmeza em ações de cobrança sob pena de prisão ou penhora de contas, além de ações revisionais para aumento ou redução do valor.",
    highlights: [
      "Ação de Alimentos com pedido de fixação de pensão provisória imediata",
      "Execução de pensão atrasada com rito de prisão civil do devedor",
      "Cobrança coercitiva sob pena de penhora de bens e bloqueio bancário (SisbaJud)",
      "Revisional de alimentos por mudança na renda (desemprego ou melhoria financeira)",
    ],
  },
  {
    id: "guarda-convivencia",
    code: "04",
    title: "Guarda Compartilhada & Convivência",
    subtitle: "Prioridade ao Bem-Estar e Estabilidade dos Filhos",
    description: "Regulamentação e alteração do regime de guarda e plano de convivência (visitas, férias e datas comemorativas). Focamos na divisão equilibrada das decisões da vida dos menores, combatendo a alienação parental e conflitos tóxicos.",
    highlights: [
      "Definição da guarda compartilhada com fixação do lar de referência",
      "Regulamentação detalhada de calendário de convivência e férias escolares",
      "Combate judicial enérgico a atos e manipulações de Alienação Parental",
      "Guarda unilateral em casos específicos de risco, abandono ou maus-tratos",
    ],
  },
  {
    id: "uniao-estavel",
    code: "05",
    title: "União Estável: Reconhecimento & Dissolução",
    subtitle: "Segurança Patrimonial para Relações de Fato",
    description: "Formalização judicial ou em cartório de uniões estáveis, garantindo a proteção da meação patrimonial construída em conjunto, direitos sucessórios e separação amigável ou litigiosa com repartição honesta dos bens adquiridos.",
    highlights: [
      "Ação de Reconhecimento e Dissolução cumulada com partilha de bens",
      "Contrato de convivência preventivo com escolha do regime patrimonial",
      "Direitos previdenciários e pensão por morte decorrente da união estável",
      "Pensão alimentícia transitória para ex-companheiro(a) dependente",
    ],
  },
  {
    id: "direito-protetivo",
    code: "06",
    title: "Medidas Protetivas & Direito Protetivo",
    subtitle: "Atuação Rápida em Situações de Urgência e Vulnerabilidade",
    description: "Suporte emergencial para resguardar a integridade física, psicológica e patrimonial da família. Atuamos em pedidos liminares de afastamento do agressor do lar, concessão de alimentos gravídicos e autorizações judiciais para viagens de menores.",
    highlights: [
      "Medidas protetivas de urgência e afastamento cautelar do lar conjugal",
      "Ação de Alimentos Gravídicos para custeio do pré-natal e parto",
      "Suprimento judicial de consentimento para viagem de menores e passaporte",
      "Investigação de Paternidade com coleta de DNA e fixação de alimentos",
    ],
  },
];

export const EDUCATIONAL_TOPICS: Article[] = [
  {
    id: "artigo-01",
    number: "01",
    title: "Pensão Alimentícia: Existe Valor Fixo de 30%? Como a Justiça Realmente Calcula?",
    category: "Direito de Família",
    readTime: "4 min de leitura",
    summary: "O mito dos 30% do salário e a aplicação do binômio necessidade do filho versus possibilidade de quem paga.",
    content: [
      "Um dos maiores mitos no Direito de Família é a crença de que a pensão alimentícia deve ser obrigatoriamente fixada em 30% dos rendimentos do genitor. A legislação brasileira não estabelece qualquer percentual engessado ou automático.",
      "Para estipular o valor, o juiz avalia cuidadosamente o binômio necessidade e possibilidade: de um lado, todas as despesas essenciais da criança (alimentação, moradia, colégio, saúde, vestuário e lazer); do outro, a real capacidade financeira de quem pagará os alimentos.",
      "Além disso, o dever de sustento é compartilhado entre pai e mãe na proporção de suas forças financeiras. Se o pagador estiver desempregado, a pensão não se extingue automaticamente: o dever permanece e pode ser fixado com base no salário mínimo nacional.",
    ],
    oabDisclaimer: "Conteúdo estritamente informativo e pedagógico, em conformidade com o Provimento 205/2021 do CFOAB.",
  },
  {
    id: "artigo-02",
    number: "02",
    title: "Guarda Compartilhada Significa Metade do Tempo em Cada Casa?",
    category: "Direito de Família",
    readTime: "4 min de leitura",
    summary: "A diferença fundamental entre guarda compartilhada (decisões conjuntas) e guarda alternada de residência.",
    content: [
      "Existe muita confusão entre guarda compartilhada e guarda alternada. A legislação brasileira prioriza a guarda compartilhada, que significa que ambos os genitores decidem juntos sobre os rumos da vida do filho: escolha de escola, tratamentos de saúde e viagens.",
      "Isso não significa que o menor precise mudar de casa a cada três dias ou semanas. A criança mantém uma residência principal (lar de referência), preservando sua rotina escolar e estabilidade emocional, com regime de convivência amplo e equilibrado para o outro genitor.",
      "A guarda compartilhada não desobriga o pagamento de pensão alimentícia, pois o genitor que não reside majoritariamente com a criança continua responsável pelos custos ordinários de criação.",
    ],
    oabDisclaimer: "Conteúdo estritamente informativo e pedagógico, em conformidade com o Provimento 205/2021 do CFOAB.",
  },
  {
    id: "artigo-03",
    number: "03",
    title: "Se Eu Sair de Casa, Perco o Direito aos Bens no Divórcio?",
    category: "Direito de Família",
    readTime: "3 min de leitura",
    summary: "Como funciona a preservação da meação patrimonial e por que a saída do lar não retira seus direitos conquistados.",
    content: [
      "Muitas pessoas permanecem em relacionamentos insustentáveis ou conflituosos por medo de que a saída do imóvel familiar seja considerada 'abandono de lar' e cause a perda do patrimônio. Isso é um equívoco.",
      "A saída do lar para preservar a paz emocional ou a segurança física jamais retira o direito de meação aos bens adquiridos durante o casamento no regime da comunhão parcial. Os bens permanecem protegidos para a futura partilha.",
      "A figura do abandono de lar no Código Civil exige a ausência voluntária e injustificada por mais de 2 anos consecutivos somada ao descumprimento total de assistência financeira à família, situação completamente distinta de quem se afasta do convívio para iniciar a dissolução da união.",
    ],
    oabDisclaimer: "Conteúdo estritamente informativo e pedagógico, em conformidade com o Provimento 205/2021 do CFOAB.",
  },
  {
    id: "artigo-04",
    number: "04",
    title: "Como Funciona a Divisão de Dívidas e Financiamentos no Divórcio?",
    category: "Direito de Família",
    readTime: "4 min de leitura",
    summary: "Entenda a comunicação das obrigações financeiras contraídas em benefício da entidade familiar.",
    content: [
      "No regime da comunhão parcial de bens (o mais comum no Brasil), assim como os bens adquiridos onerosamente se comunicam, as dívidas contraídas durante o casamento em proveito da família também devem ser partilhadas igualmente entre os cônjuges.",
      "Isso abrange saldos devedores de financiamento imobiliário, parcelamentos de veículos, empréstimos bancários e faturas de cartão de crédito utilizados na manutenção do lar.",
      "A partilha correta exige a elaboração de um plano transparente de liquidação ou compensação financeira, assegurando que um dos parceiros não fique injustamente sobrecarregado com os passivos deixados pelo relacionamento.",
    ],
    oabDisclaimer: "Conteúdo estritamente informativo e pedagógico, em conformidade com o Provimento 205/2021 do CFOAB.",
  },
];

export const REVIEWS: Review[] = [
  {
    id: "rev-01",
    author: "Genival Pereira Costa",
    rating: 5,
    timeAgo: "há 3 anos",
    comment: "A Dra. Janaina é uma excelente profissional, transparente em tudo que faz e possui um diferencial que me faz ter uma admiração imensa: humanidade. Ela é totalmente humana nas relações e isso é uma qualidade que quase não vemos nos profissionais atuais. Super recomendo!",
    source: "Google Reviews",
  },
  {
    id: "rev-02",
    author: "Rafaelly Priscila",
    rating: 5,
    timeAgo: "há 3 anos",
    comment: "Ela é uma profissional muito dedicada, consegue esclarecer todas as minhas dúvidas. Além disso ela acompanhou todo o meu processo e não me deixou perdida no curso do mesmo. Obrigada Dra Janaína pelo profissionalismo!",
    source: "Google Reviews",
  },
  {
    id: "rev-03",
    author: "Viviane Ferreira da Silva",
    rating: 5,
    timeAgo: "há 3 anos",
    comment: "Excelente profissional, trabalha muito bem sem deixar os seus clientes na mão. Super recomendo.",
    source: "Google Reviews",
  },
  {
    id: "rev-04",
    author: "Dicarlyelle Freitas",
    rating: 5,
    timeAgo: "há 3 anos",
    comment: "Excelente profissional, atenciosa, esclareceu todas as minhas dúvidas sobre meu processo e foi brilhante.",
    source: "Google Reviews",
  },
  {
    id: "rev-05",
    author: "Ernani Plumer",
    rating: 5,
    timeAgo: "há 3 anos",
    comment: "A Dra. Janaina é uma ótima profissional e super dedicada. Esclarece tudo perfeitamente, sem nos deixar perdido durante o processo.",
    source: "Google Reviews",
  },
  {
    id: "rev-06",
    author: "Brunna Molato",
    rating: 5,
    timeAgo: "há 3 anos",
    comment: "Excelente profissional, extremamente competente e dedicada! Super indico seu trabalho.",
    source: "Google Reviews",
  },
  {
    id: "rev-07",
    author: "Michel Farah Serednicki",
    rating: 5,
    timeAgo: "há 3 anos",
    comment: "É uma profissional que trabalha muito bem, além de bem eloquente, e que sabe resolver os problemas sem enrolação.",
    source: "Google Reviews",
  },
  {
    id: "rev-08",
    author: "Anacleia Portela",
    rating: 5,
    timeAgo: "há 3 anos",
    comment: "Uma super profissional, muito atenciosa, explica tudo certinho de uma forma que consegui entender perfeitamente. Super indico.",
    source: "Google Reviews",
  },
  {
    id: "rev-09",
    author: "Nathalia Fabris Metello",
    rating: 5,
    timeAgo: "há 3 anos",
    comment: "Excelente profissional! Competente e comprometida a dar o melhor atendimento jurídico aos clientes.",
    source: "Google Reviews",
  },
  {
    id: "rev-10",
    author: "Íris Carvalho",
    rating: 5,
    timeAgo: "há 3 anos",
    comment: "Advogada muito atenciosa, esclareceu todas as minhas dúvidas e foi muito eficiente e comprometida durante todo o processo. Recomendo.",
    source: "Google Reviews",
  },
  {
    id: "rev-11",
    author: "Jane Oliveira De Carvalho",
    rating: 5,
    timeAgo: "há 3 anos",
    comment: "Profissional muito comprometida com atendimento e capacidade intelectual indiscutível. Super atenciosa.",
    source: "Google Reviews",
  },
  {
    id: "rev-12",
    author: "Mateus dos Santos Oliveira",
    rating: 5,
    timeAgo: "há 3 anos",
    comment: "Ótimo atendimento, excelente profissional, me ajudou bastante no processo!",
    source: "Google Reviews",
  },
  {
    id: "rev-13",
    author: "Daniela Karla",
    rating: 5,
    timeAgo: "há 3 anos",
    comment: "Excelente Advogada!! Atuou no meu processo de forma brilhante. Recomendo!!!",
    source: "Google Reviews",
  },
  {
    id: "rev-14",
    author: "Victor Hugo Rodrigues",
    rating: 5,
    timeAgo: "há 3 anos",
    comment: "Ótima profissional!!! Muito atenciosa e dedicada.",
    source: "Google Reviews",
  },
];

export const WORK_STEPS: Step[] = [
  {
    number: "01",
    title: "Acolhimento & Escuta Humanizada",
    subtitle: "Compreensão da sua realidade sem julgamentos",
    description: "Você conversa diretamente com a Dra. Janaina Manhani de Carvalho via WhatsApp ou presencialmente em Curitiba. Analisamos com calma as particularidades emocionais, os filhos e os bens da família.",
  },
  {
    number: "02",
    title: "Diagnóstico Estratégico & Alternativas",
    subtitle: "Transparência total sobre direitos e viabilidade",
    description: "Apresentamos os melhores caminhos: a possibilidade de um divórcio consensual amigável e econômico em cartório ou a necessidade de medidas judiciais firmes de proteção patrimonial.",
  },
  {
    number: "03",
    title: "Elaboração Técnica & Rigor Probatório",
    subtitle: "Petições detalhadas e proteção aos filhos",
    description: "Redação minuciosa de acordos de partilha, cálculos de pensão alimentícia ou peças litigiosas com fundamentação jurisprudencial atualizada e firmeza técnica.",
  },
  {
    number: "04",
    title: "Acompanhamento Próximo & Atualização Contínua",
    subtitle: "Você nunca fica sem saber o andamento do seu processo",
    description: "Cada movimentação relevante é explicada em linguagem clara e acessível, com atendimento pessoal da Dra. Janaina até a conclusão segura de todas as pendências.",
  },
];

export const FAQ_DATA: FaqCategory[] = [
  {
    id: "divorcio",
    label: "Divórcio & Separação",
    iconName: "FileHeart",
    items: [
      {
        id: "faq-d1",
        question: "Quanto tempo demora um divórcio consensual em cartório?",
        answer: "O divórcio extrajudicial em cartório é o procedimento mais ágil do ordenamento jurídico brasileiro. Havendo acordo entre o casal e a documentação completa, a escritura pública de divórcio pode ser lavrada e assinada em questão de poucos dias, sem a morosidade e o desgaste emocional de um processo judicial.",
      },
      {
        id: "faq-d2",
        question: "Quando o divórcio precisa obrigatoriamente ser feito pela via judicial?",
        answer: "O divórcio deve tramitar na via judicial sempre que não houver consenso entre as partes (divórcio litigioso) ou quando houver filhos menores de idade ou incapazes não emancipados, casos em que a intervenção do Ministério Público e a homologação do juiz são obrigatórias para proteger o melhor interesse dos filhos.",
      },
      {
        id: "faq-d3",
        question: "Se eu sair de casa antes de oficializar o divórcio, perco meus direitos aos bens?",
        answer: "Não. A saída do lar conjugal para preservar a paz ou a saúde emocional não configura perda da meação patrimonial. O 'abandono de lar' que gera perda de fração imobiliária exige ausência involuntária de mais de 2 anos com abandono material completo da família. Ao se afastar, seus direitos sobre o patrimônio comum permanecem intactos.",
      },
      {
        id: "faq-d4",
        question: "Como funciona a divisão das dívidas e empréstimos feitos durante o casamento?",
        answer: "No regime da comunhão parcial de bens, as dívidas contraídas em favor do sustento e administração da família comunicam-se entre os cônjuges. Isso significa que financiamentos imobiliários, de veículos e empréstimos bancários comuns devem ser divididos proporcionalmente entre as partes na partilha.",
      },
    ],
  },
  {
    id: "pensao",
    label: "Pensão Alimentícia",
    iconName: "Coins",
    items: [
      {
        id: "faq-p1",
        question: "Existe um percentual fixo de 30% do salário para a pensão alimentícia?",
        answer: "Não. A legislação brasileira não determina percentual fixo obrigatório. A quantia é fixada pelo magistrado com base no binômio necessidade da criança (gastos com alimentação, moradia, colégio, saúde e vestuário) e capacidade financeira de quem paga, buscando sempre o equilíbrio e a dignidade do sustento.",
      },
      {
        id: "faq-p2",
        question: "Se o alimentante ficar desempregado, a pensão é cancelada automaticamente?",
        answer: "Não. O desemprego não cancela automaticamente o dever de prestar alimentos. Caso o devedor não consiga arcar com o montante anteriormente estipulado, é imperativo ajuizar uma Ação Revisional de Alimentos para que o juiz ajuste o valor à nova realidade probatória.",
      },
      {
        id: "faq-p3",
        question: "Como cobrar parcelas atrasadas de pensão alimentícia com eficácia?",
        answer: "A cobrança pode ser feita judicialmente através do cumprimento de sentença pelo rito da prisão civil (para as últimas 3 parcelas vencidas e as que vencerem no curso da ação) ou pelo rito da penhora de bens, veículos e contas bancárias via sistema SisbaJud para cobrança do débito acumulado.",
      },
      {
        id: "faq-p4",
        question: "A mãe grávida tem direito a pensão antes mesmo do bebê nascer?",
        answer: "Sim. A Lei nº 11.804/2008 assegura os chamados 'Alimentos Gravídicos', destinados a cobrir os custos do pré-natal, exames, medicamentos, internações e alimentação especial da gestante. Após o nascimento com vida, esses alimentos convertem-se automaticamente em pensão alimentícia em favor do recém-nascido.",
      },
    ],
  },
  {
    id: "guarda",
    label: "Guarda & Convivência",
    iconName: "Users",
    items: [
      {
        id: "faq-g1",
        question: "Guarda compartilhada significa que a criança deve alternar de casa constantemente?",
        answer: "Não. Isso é guarda alternada. A guarda compartilhada, preconizada pela legislação brasileira, refere-se à tomada conjunta de decisões sobre a criação, educação e saúde dos filhos por ambos os pais. A criança tem um lar de referência onde reside habitualmente, garantindo estabilidade e rotina.",
      },
      {
        id: "faq-g2",
        question: "A mãe tem sempre prioridade automática na guarda dos filhos?",
        answer: "Não. A legislação atual estabelece a guarda compartilhada como regra geral, independentemente do gênero dos genitores, salvo se um deles declarar expressamente que não deseja a guarda ou se for comprovada situação de inaptidão ou risco para a integridade dos menores.",
      },
      {
        id: "faq-g3",
        question: "O que fazer se o outro genitor estiver praticando Alienação Parental?",
        answer: "A Alienação Parental (interferência psicológica para fazer a criança rejeitar o outro genitor) é conduta ilícita grave tipificada pela Lei 12.318/2010. Diante de indícios, pode-se requerer medida judicial de advertência, ampliação do regime de convivência, multa, perícia psicológica ou até alteração da guarda.",
      },
    ],
  },
  {
    id: "partilha",
    label: "Partilha & Patrimônio",
    iconName: "Building2",
    items: [
      {
        id: "faq-pt1",
        question: "Como funciona a partilha quando existem empresas ou bens em nome de terceiros?",
        answer: "Na hipótese de ocultação patrimonial ou transferência fraudulenta de bens para terceiros ou 'laranjas', a advocacia especializada pode ingressar com incidente de desconsideração da personalidade jurídica ou ação pauliana, promovendo a quebra de sigilo e a reintegração do patrimônio à partilha justa do casal.",
      },
      {
        id: "faq-pt2",
        question: "Quem vive em união estável sem documento tem direito a dividir os bens?",
        answer: "Sim. Pela legislação brasileira, na união estável não formalizada por pacto prévio aplica-se a comunhão parcial de bens. Todos os bens onerosos conquistados durante a convivência do casal presumem-se fruto do esforço comum e devem ser divididos na proporção de 50% para cada parte.",
      },
    ],
  },
];