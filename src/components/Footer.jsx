import { profile } from '../data/profile'

// Rodapé com assinatura da marca. O ano é calculado automaticamente.
export default function Footer() {
  return (
    <footer className="pt-7 pb-[max(1.75rem,env(safe-area-inset-bottom))]">
      <div className="container-page flex flex-col gap-2 text-[0.8125rem] text-muted sm:flex-row sm:justify-between">
        <span>
          © {new Date().getFullYear()} {profile.name} · {profile.brand}
        </span>
        <span>{profile.manifesto.join(' ')}</span>
      </div>
    </footer>
  )
}
