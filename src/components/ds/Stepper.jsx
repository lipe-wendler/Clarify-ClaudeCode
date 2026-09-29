/**
 * Stepper (DS): processo em passos numerados. Vertical no celular,
 * horizontal a partir de 1024px (ver .fw-stepper em fwendler.css).
 * - current: índice do passo atual (anteriores ficam "feitos");
 *   sem `current`, todos aparecem neutros.
 * - Cada passo pode trazer `children` extras (ex.: objetivo/atividade/resultado).
 */
export default function Stepper({ steps, current, className = '' }) {
  return (
    <ol className={`fw-stepper ${className}`}>
      {steps.map((s, i) => {
        const state = current == null ? 'todo' : i < current ? 'done' : i === current ? 'current' : 'todo'
        return (
          <li key={s.title} className={`fw-step fw-step-${state}`} aria-current={state === 'current' ? 'step' : undefined}>
            <span className="fw-step-dot">{String(i + 1).padStart(2, '0')}</span>
            <span className="fw-step-title">{s.title}</span>
            {s.description && <span className="fw-step-sub">{s.description}</span>}
            {s.extra}
          </li>
        )
      })}
    </ol>
  )
}
