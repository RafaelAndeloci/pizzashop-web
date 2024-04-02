import { Inter } from 'next/font/google'
import '../globals.css'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={cn(inter.className, 'h-full bg-black text-white')}>
      <h1>Cabeçalho</h1>

      <div>{children}</div>
    </div>
  )
}
