/**
 * Tabs (DS): controle segmentado em pill. Controlado por `value`/`onChange`.
 * - variant: accent | neutral
 * - size="sm": versão compacta em Space Mono (seletor de idioma)
 */
export default function Tabs({ items, value, onChange, variant = 'accent', size, label, className = '' }) {
  const cls = ['fw-tabs', `fw-tabs-${variant}`, size === 'sm' && 'fw-tabs-sm', className].filter(Boolean).join(' ')
  return (
    <div role="tablist" aria-label={label} className={cls}>
      {items.map((it) => {
        const v = typeof it === 'string' ? it : it.value
        const l = typeof it === 'string' ? it : it.label
        const title = typeof it === 'string' ? undefined : it.title
        const selected = v === value
        return (
          <button
            key={v}
            role="tab"
            type="button"
            className="fw-tab"
            aria-selected={selected ? 'true' : 'false'}
            tabIndex={selected ? 0 : -1}
            title={title}
            lang={typeof it === 'string' ? undefined : it.lang}
            onClick={() => onChange?.(v)}
          >
            {l}
          </button>
        )
      })}
    </div>
  )
}
