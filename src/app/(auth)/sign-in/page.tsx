import SignInForm from '@/app/components/SignInForm'
import { Button } from '@/components/ui/button'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pizza Shop | Login',
  description: 'Pizzaaa',
}

export default function SignIn() {
  return (
    <div className="p-8">
      <Button variant="ghost" className="absolute right-8 top-8" asChild>
        <Link href="/sign-up">Novo estabelecimento</Link>
      </Button>

      <div className="w-[350px] flex flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="font-semibold text-2xl tracking-tight">
            Acessar painel
          </h1>
          <p className="text-sm text-muted-foreground">
            Acompanhe suas vendas pelo painel do parceiro
          </p>
        </div>

        <SignInForm />
      </div>
    </div>
  )
}
