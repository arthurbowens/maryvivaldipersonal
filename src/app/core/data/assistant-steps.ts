export type AssistantStepKey =
  | 'name'
  | 'age'
  | 'height'
  | 'weight'
  | 'goal'
  | 'experience'
  | 'gymSchedule'
  | 'frequency'
  | 'modality'
  | 'medical'
  | 'difficulty';

export interface AssistantStep {
  readonly key: AssistantStepKey;
  readonly question: (firstName: string) => string;
  readonly placeholder: string;
  readonly inputType: 'text' | 'number';
  /** Quando existe, mostra botões de resposta rápida. */
  readonly options?: readonly string[];
  /** Opções que abrem o campo de texto para detalhar. */
  readonly detailOptions?: readonly string[];
  readonly validate: (value: string) => string | null;
}

const num = (v: string): number => Number(v.replace(',', '.'));

export const ASSISTANT_INTRO: readonly string[] = [
  'Oi! Aqui é o assistente da Mary Vivaldi Personal. Vou te fazer uma anamnese bem prática para conhecer melhor você e traçar o melhor caminho para o seu objetivo.',
  'Para começar, como você se chama?',
];

export const ASSISTANT_STEPS: readonly AssistantStep[] = [
  {
    key: 'name',
    question: () => 'Para começar, como você se chama?',
    placeholder: 'Seu nome',
    inputType: 'text',
    validate: (v) => (v.trim().length < 2 ? 'Informe seu nome.' : null),
  },
  {
    key: 'age',
    question: (n) => `Prazer, ${n}! Qual a sua idade?`,
    placeholder: 'Ex: 28',
    inputType: 'number',
    validate: (v) => {
      const n = num(v);
      return !Number.isFinite(n) || n < 14 || n > 90 ? 'Informe uma idade entre 14 e 90.' : null;
    },
  },
  {
    key: 'height',
    question: () => 'Qual a sua altura, em centímetros?',
    placeholder: 'Ex: 165',
    inputType: 'number',
    validate: (v) => {
      const n = num(v);
      return !Number.isFinite(n) || n < 120 || n > 230
        ? 'Informe a altura em centímetros (120 a 230).'
        : null;
    },
  },
  {
    key: 'weight',
    question: () => 'E o seu peso atual, em kg?',
    placeholder: 'Ex: 68',
    inputType: 'number',
    validate: (v) => {
      const n = num(v);
      return !Number.isFinite(n) || n < 30 || n > 250 ? 'Informe o peso em kg (30 a 250).' : null;
    },
  },
  {
    key: 'goal',
    question: () => 'Qual o seu principal objetivo com os treinos?',
    placeholder: 'Qual o seu objetivo?',
    inputType: 'text',
    options: [
      'Emagrecimento',
      'Ganho de massa muscular',
      'Definição corporal',
      'Condicionamento',
      'Qualidade de vida',
      'Competição',
      'Outro',
    ],
    detailOptions: ['Outro'],
    validate: (v) => (v.trim().length < 2 ? 'Escolha ou digite seu objetivo.' : null),
  },
  {
    key: 'experience',
    question: () => 'Você já treina? Há quanto tempo?',
    placeholder: 'Ex: Sim, há 1 ano',
    inputType: 'text',
    options: [
      'Não treino ainda',
      'Menos de 3 meses',
      '3 a 6 meses',
      '6 a 12 meses',
      'Mais de 1 ano',
    ],
    validate: (v) => (v.trim().length < 2 ? 'Conte se você já treina e há quanto tempo.' : null),
  },
  {
    key: 'gymSchedule',
    question: () =>
      'Em qual academia (ou local) você pretende treinar? E qual horário você tem disponível?',
    placeholder: 'Ex: Academia X, manhã',
    inputType: 'text',
    validate: (v) =>
      v.trim().length < 3 ? 'Informe o local de treino e o horário disponível.' : null,
  },
  {
    key: 'frequency',
    question: () => 'Quantas vezes por semana você consegue treinar?',
    placeholder: 'Ex: 3x',
    inputType: 'text',
    options: ['2x', '3x', '4x', '5x ou mais'],
    validate: (v) => (v.trim().length < 1 ? 'Escolha quantas vezes por semana.' : null),
  },
  {
    key: 'modality',
    question: (n) => `${n}, você tem preferência por qual modalidade de atendimento?`,
    placeholder: 'Modalidade de atendimento',
    inputType: 'text',
    options: ['Personal presencial', 'Consultoria online', 'Ainda não sei'],
    validate: (v) => (v.trim().length < 2 ? 'Escolha a modalidade de atendimento.' : null),
  },
  {
    key: 'medical',
    question: () => 'Possui alguma restrição médica, lesão ou dor que devemos considerar?',
    placeholder: 'Descreva a restrição',
    inputType: 'text',
    options: ['Nenhuma', 'Lesão', 'Dor', 'Outro'],
    detailOptions: ['Lesão', 'Dor', 'Outro'],
    validate: (v) => (v.trim().length < 2 ? 'Informe se há restrição, lesão ou dor.' : null),
  },
  {
    key: 'difficulty',
    question: () => 'Por último, qual a sua maior dificuldade hoje?',
    placeholder: 'Sua maior dificuldade',
    inputType: 'text',
    options: [
      'Consistência',
      'Alimentação',
      'Falta de tempo',
      'Técnica nos exercícios',
      'Motivação',
      'Lesão ou dores',
      'Outro',
    ],
    detailOptions: ['Outro'],
    validate: (v) => (v.trim().length < 2 ? 'Conte qual é a sua maior dificuldade.' : null),
  },
];
