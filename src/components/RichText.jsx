// Renderiza um texto simples em que trechos entre **asteriscos duplos**
// aparecem em destaque (<strong>). Assim o conteúdo em src/data fica legível
// e sem HTML.
export default function RichText({ text, strongClassName = 'font-semibold text-fg' }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={i} className={strongClassName}>
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    ),
  )
}
