/**
 * Icon: ícones de traço do Design System F.Wendler (24×24, linha 1.6, pontas
 * arredondadas). Herdam a cor do texto (currentColor).
 * Portado de project/components/bundle.js do DS; os ícones "globe" e
 * "external" foram acrescentados no mesmo estilo (compatível com Lucide).
 */
const ICONS = {
  'arrow-right': ['M5 12h14', 'M13 6l6 6-6 6'],
  'arrow-left': ['M19 12H5', 'M11 6l-6 6 6 6'],
  search: ['M11 4a7 7 0 1 0 0 14a7 7 0 1 0 0-14z', 'M20 20l-4-4'],
  user: ['M12 4a4 4 0 1 0 0 8a4 4 0 1 0 0-8z', 'M4 20c1.5-3.5 4.5-5 8-5s6.5 1.5 8 5'],
  users: ['M9 5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 1 0 0-7z', 'M2.5 20c1-3.2 3.5-5 6.5-5s5.5 1.8 6.5 5', 'M16 5.3a3.5 3.5 0 0 1 0 6.4', 'M18 15.2c1.8.7 3 2.3 3.5 4.8'],
  database: ['M12 3c4.4 0 8 1.3 8 3s-3.6 3-8 3s-8-1.3-8-3s3.6-3 8-3z', 'M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6', 'M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3'],
  settings: ['M12 9a3 3 0 1 0 0 6a3 3 0 1 0 0-6z', 'M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1'],
  zap: ['M13 2L4 14h7l-1 8l9-12h-7z'],
  'bar-chart': ['M5 20v-6', 'M10 20V9', 'M15 20v-9', 'M20 20V5', 'M3 20h18'],
  link: ['M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1', 'M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1'],
  box: ['M12 2.8l8 4.6v9.2l-8 4.6l-8-4.6V7.4z', 'M4 7.4l8 4.6l8-4.6', 'M12 12v9.2'],
  file: ['M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z', 'M14 3v5h5', 'M9 13h6M9 17h6'],
  folder: ['M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'],
  download: ['M12 4v11', 'M7 10l5 5l5-5', 'M4 20h16'],
  heart: ['M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.3A4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z'],
  mail: ['M4 6h16v12H4z', 'M4 7l8 6l8-6'],
  'chevron-down': ['M6 9l6 6l6-6'],
  check: ['M5 12.5l4.5 4.5L19 7.5'],
  alert: ['M12 3.5l9 16H3z', 'M12 10v4', 'M12 17h.01'],
  star: ['M12 3.5l2.6 5.4l5.9.8l-4.3 4.1l1 5.8L12 16.8l-5.2 2.8l1-5.8l-4.3-4.1l5.9-.8z'],
  triangle: ['M12 4l8.5 15h-17z', 'M12 10v5'],
  target: ['M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18z', 'M12 7.5a4.5 4.5 0 1 0 0 9a4.5 4.5 0 1 0 0-9z', 'M12 11.2a.8.8 0 1 0 0 1.6a.8.8 0 1 0 0-1.6z'],
  sun: ['M12 8a4 4 0 1 0 0 8a4 4 0 1 0 0-8z', 'M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4'],
  menu: ['M4 7h16M4 12h16M4 17h16'],
  close: ['M6 6l12 12M18 6L6 18'],
  // Acréscimos no estilo do DS
  globe: ['M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18z', 'M3 12h18', 'M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9s1.3-6.4 3.8-9z'],
  external: ['M14 4h6v6', 'M20 4l-9 9', 'M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5'],
  code: ['M8 7l-5 5l5 5', 'M16 7l5 5l-5 5'],
  refresh: ['M20 11a8 8 0 0 0-14.3-4.9L4 8', 'M4 3v5h5', 'M4 13a8 8 0 0 0 14.3 4.9L20 16', 'M20 21v-5h-5'],
}

export default function Icon({ name, size, label, className = '' }) {
  const paths = ICONS[name] || ICONS.box
  const cls = ['fw-icon', size && `fw-icon-${size}`, className].filter(Boolean).join(' ')
  return (
    <svg
      className={cls}
      viewBox="0 0 24 24"
      aria-hidden={label ? undefined : 'true'}
      role={label ? 'img' : undefined}
      aria-label={label}
    >
      {paths.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  )
}
