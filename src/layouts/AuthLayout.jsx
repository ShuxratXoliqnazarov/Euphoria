import { Outlet } from 'react-router-dom'
import AuthHeader from '@/components/layout/AuthHeader'
import ScrollToTop from '@/components/layout/ScrollToTop'

// Каркас страниц авторизации: свой хедер и без футера (как в Figma)
export default function AuthLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <AuthHeader />
      <main className="flex flex-1">
        <Outlet />
      </main>
    </div>
  )
}
