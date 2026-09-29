// Renderiza um texto simples em que trechos entre **asteriscos duplos**
// aparecem em destaque (<strong>). Assim o conteúdo em src/content fica
// legível e sem HTML. (O DS pede no máximo uma ênfase por parágrafo.)
export default function RichText({ text, strongClassName = 'font-semibold text-ink' }) {
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
