import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  signal,
  viewChild,
} from '@angular/core';
import {
  ASSISTANT_INTRO,
  ASSISTANT_STEPS,
  type AssistantStep,
  type AssistantStepKey,
} from '../../core/data/assistant-steps';
import { WHATSAPP_E164 } from '../../core/data/landing-content';
import { buildWhatsAppLink } from '../../core/utils/whatsapp.util';

interface ChatMessage {
  readonly id: number;
  readonly role: 'bot' | 'user';
  readonly text: string;
}

@Component({
  selector: 'app-assistant',
  standalone: true,
  templateUrl: './assistant.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AssistantComponent {
  private readonly feedEl = viewChild<ElementRef<HTMLElement>>('chatFeed');
  private readonly inputEl = viewChild<ElementRef<HTMLInputElement>>('composerInput');
  private messageId = 0;

  protected readonly steps = ASSISTANT_STEPS;
  protected readonly open = signal(false);
  protected readonly started = signal(false);
  protected readonly finished = signal(false);
  protected readonly showCustomInput = signal(true);
  protected readonly stepIndex = signal(0);
  protected readonly draft = signal('');
  protected readonly error = signal('');
  protected readonly messages = signal<readonly ChatMessage[]>([]);
  protected readonly whatsappHref = signal('');
  private answers: Partial<Record<AssistantStepKey, string>> = {};

  protected currentStep(): AssistantStep {
    return this.steps[this.stepIndex()];
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    if (this.open()) this.close();
  }

  protected openAssistant(): void {
    this.open.set(true);
    document.body.style.overflow = 'hidden';
    if (!this.started() || this.finished()) this.begin();
    else {
      this.scrollFeed();
      this.focusInput();
    }
  }

  protected close(): void {
    this.open.set(false);
    document.body.style.overflow = '';
  }

  protected restart(): void {
    this.begin();
  }

  private begin(): void {
    this.started.set(true);
    this.finished.set(false);
    this.stepIndex.set(0);
    this.answers = {};
    this.draft.set('');
    this.error.set('');
    this.whatsappHref.set('');
    this.messages.set(ASSISTANT_INTRO.map((text) => this.make('bot', text)));
    this.syncInputVisibility();
    this.scrollFeed();
    this.focusInput();
  }

  protected pickOption(option: string): void {
    const step = this.currentStep();
    if (step.detailOptions?.includes(option)) {
      this.showCustomInput.set(true);
      this.draft.set(option === 'Outro' ? '' : `${option}: `);
      this.error.set('');
      this.focusInput();
      return;
    }
    this.draft.set(option);
    this.submitAnswer();
  }

  protected onDraftInput(event: Event): void {
    this.draft.set((event.target as HTMLInputElement).value);
    this.error.set('');
  }

  protected submitAnswer(): void {
    if (this.finished()) return;
    const step = this.currentStep();
    const raw = this.draft().trim();
    const value = step.inputType === 'number' ? raw.replace(/[^\d.,]/g, '').replace(',', '.') : raw;
    const problem = step.validate(value);
    if (problem) {
      this.error.set(problem);
      return;
    }
    const shown =
      step.key === 'height' ? `${value} cm` : step.key === 'weight' ? `${value} kg` : value;
    this.answers[step.key] = value;
    this.push('user', shown);
    this.draft.set('');
    this.error.set('');

    const next = this.stepIndex() + 1;
    if (next >= this.steps.length) {
      this.finish();
      return;
    }
    this.stepIndex.set(next);
    this.syncInputVisibility();
    const firstName = (this.answers.name ?? '').split(' ')[0];
    window.setTimeout(() => {
      this.push('bot', this.steps[next].question(firstName));
      this.focusInput();
    }, 220);
  }

  private syncInputVisibility(): void {
    this.showCustomInput.set(!this.currentStep().options);
  }

  private finish(): void {
    const a = this.answers;
    const text = [
      'Olá, Mary! Vim pelo Assistente do site (anamnese).',
      '',
      `Nome: ${a.name}`,
      `Idade: ${a.age}`,
      `Altura: ${a.height} cm`,
      `Peso: ${a.weight} kg`,
      `Objetivo: ${a.goal}`,
      `Experiência: ${a.experience}`,
      `Local/horário: ${a.gymSchedule}`,
      `Frequência: ${a.frequency}`,
      `Modalidade: ${a.modality}`,
      `Restrição médica: ${a.medical}`,
      `Maior dificuldade: ${a.difficulty}`,
      '',
      'Quero iniciar o acompanhamento.',
    ].join('\n');
    const href = buildWhatsAppLink(WHATSAPP_E164, text);
    this.whatsappHref.set(href);
    this.finished.set(true);
    this.push(
      'bot',
      `${(a.name ?? '').split(' ')[0]}, anotei tudo. Abrindo o WhatsApp com sua mensagem...`,
    );
    window.setTimeout(() => {
      window.open(href, '_blank', 'noopener,noreferrer');
    }, 450);
  }

  private make(role: ChatMessage['role'], text: string): ChatMessage {
    return { id: ++this.messageId, role, text };
  }

  private push(role: ChatMessage['role'], text: string): void {
    this.messages.update((list) => [...list, this.make(role, text)]);
    this.scrollFeed();
  }

  private scrollFeed(): void {
    requestAnimationFrame(() => {
      const el = this.feedEl()?.nativeElement;
      if (el) el.scrollTop = el.scrollHeight;
    });
  }

  private focusInput(): void {
    requestAnimationFrame(() => {
      if (this.showCustomInput()) this.inputEl()?.nativeElement.focus();
    });
  }
}
