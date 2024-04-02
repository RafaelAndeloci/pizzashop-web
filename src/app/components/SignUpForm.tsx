'use client'

import { toast, Toaster } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const signUpForm = z.object({
  email: z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  async function handleSignUp(data: SignUpForm) {
    try {
      console.log(data)

      await new Promise((resolve) => setTimeout(resolve, 2000))

      // toast.success('Enviamos um link de autenticação para o seu e-mail', {
      //   action: {
      //     label: 'Reenviar',
      //     // Possível criação de uma closure para verificar quantas vezes clickou em reenviar e bloquear caso tenha reenviado muitas vezes
      //     onClick: () => handleSignUp(data),
      //   },
      // })
    } catch {
      toast.error('Credenciais incorretas')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Seu e-mail</Label>
          <Input
            disabled={isSubmitting}
            id="email"
            type="email"
            {...register('email')}
          />
        </div>

        <Button disabled={isSubmitting} className="w-full" type="submit">
          Acessar painel
        </Button>
      </form>
      <Toaster richColors />
    </>
  )
}
