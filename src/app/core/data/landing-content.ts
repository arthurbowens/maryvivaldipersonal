import type { NavItem, ServiceItem, SocialLink } from '../models/landing.types';

export const SITE_NAME = 'Mary Vivaldi';

/** Texto exibido na logo do topo (wordmark). */
export const SITE_LOGO = 'Mary Vivaldi Personal';

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Início', fragment: 'inicio' },
  { label: 'Serviços', fragment: 'servicos' },
  { label: 'Sobre', fragment: 'sobre' },
  { label: 'Depoimentos', fragment: 'depoimentos' },
  { label: 'Contato', fragment: 'contato' },
] as const;

export const HERO = {
  eyebrow: 'Wellness 10× · Personal trainer',
  headline: 'Obsessão vence talento.',
  subheadline:
    'Transformo corpos com estratégia — musculação, condicionamento e hábitos alinhados ao seu objetivo, com acompanhamento presencial ou online.',
  primaryCta: 'Quero começar',
  secondaryCta: 'Ver serviços',
  panelKicker: 'Wellness 10×',
  panelTitle: 'Transformo corpos com estratégia.',
  panelBody:
    'Plano sob medida, progressão inteligente e constância no centro: resultado que sustenta no dia a dia.',
} as const;

export const SERVICES_INTRO = {
  title: 'Como posso te ajudar',
  subtitle:
    'Estratégia antes de improviso: cada protocolo respeita seu tempo, seu corpo e o padrão Wellness 10× — evolução com segurança.',
} as const;

export const SERVICES: readonly ServiceItem[] = [
  {
    title: 'Personal presencial',
    description:
      'Sessões guiadas com técnica, progressão e segurança. Ideal para quem busca correção postural e intensidade bem dosada.',
    icon: 'target',
  },
  {
    title: 'Consultoria online',
    description:
      'Treinos estruturados, vídeos de referência e ajustes semanais. Perfeito para quem precisa de flexibilidade de horário.',
    icon: 'clock',
  },
  {
    title: 'Avaliação e planejamento',
    description:
      'Mapeamento de objetivos, histórico e limitações. Plano com metas claras e indicadores para acompanhar evolução.',
    icon: 'chart',
  },
  {
    title: 'Hábitos e recuperação',
    description:
      'Orientação sobre sono, nutrição básica e mobilidade para potencializar resultados e reduzir risco de lesões.',
    icon: 'heart',
  },
] as const;

export const ABOUT = {
  title: 'Quem sou eu?',
  paragraphs: [
    'Sou profissional da área da saúde e performance há mais de 12 anos.',
    'Ex-dançarina, fisiculturista há 10 anos e apaixonada por transformar vidas através do treino e da constância.',
    'Aos 38, minha missão é te ajudar a conquistar sua melhor versão com disciplina, foco e resultados reais.',
  ] as const,
  stats: [
    { value: '12+', label: 'Anos em saúde e performance' },
    { value: '10 anos', label: 'Fisiculturista' },
    { value: '10 mil+', label: 'Atendimentos realizados' },
  ] as const,
} as const;

export const TESTIMONIALS_INTRO = {
  title: 'O que dizem por aí',
  subtitle: 'Resultados de quem colocou consistência em primeiro lugar.',
} as const;

export const CTA = {
  title: 'Pronta para o próximo passo?',
  subtitle:
    'Agende uma conversa rápida para alinharmos objetivos, disponibilidade e o formato ideal para você.',
  button: 'Falar no WhatsApp',
  note: 'Resposta em até 24 horas em dias úteis.',
} as const;

export const FOOTER = {
  rights: 'Todos os direitos reservados.',
  tagline: 'Wellness 10× — obsessão vence talento. Transformo corpos com estratégia.',
} as const;

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/maryvivaldi?igsh=Z3dqeXJiZ282YzRm',
  },
] as const;

/** Brasil (55) + DDD 27 + número, só dígitos. */
export const WHATSAPP_E164 = '5527997691058';

export const WHATSAPP_MESSAGE =
  'Olá, Mary! Vim pelo site e gostaria de saber mais sobre os planos de personal trainer.';

export const INSTAGRAM_URL =
  'https://www.instagram.com/maryvivaldi?igsh=Z3dqeXJiZ282YzRm';
