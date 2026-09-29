/**
 * Destaca UMA palavra de um título em amarelo (accent-text), regra do DS.
 * No conteúdo, a palavra vem entre asteriscos simples: "Projetos em *destaque*".
 */
export default function Highlight({ text }) {
  const parts = text.split(/(\*[^*]+\*)/g)
  return parts.map((part, i) =>
    part.startsWith('*') && part.endsWith('*') && part.length > 2 ? (
      <span key={i} className="fw-hl">
        {part.slice(1, -1)}
      </span>
    ) : (
      part
    ),
  )
}
