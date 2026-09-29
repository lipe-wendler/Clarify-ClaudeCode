// Configuração do Vite.
// - @vitejs/plugin-react: suporte a JSX e Fast Refresh no desenvolvimento.
// - @tailwindcss/vite: integra o Tailwind CSS v4 direto no build (sem PostCSS).
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
