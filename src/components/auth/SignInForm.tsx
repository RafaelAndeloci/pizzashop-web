"use client";

import { toast, Toaster } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/api/sign-in";

const signInForm = z.object({
  email: z.string().email(),
});

type SignInForm = z.infer<typeof signInForm>;

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>();

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  });

  async function handleSignIn(data: SignInForm) {
    try {
      await authenticate({ email: data.email });

      toast.success("Enviamos um link de autenticação para o seu e-mail", {
        action: {
          label: "Reenviar",
          // Possível criação de uma closure para verificar quantas vezes clickou em reenviar e bloquear caso tenha reenviado muitas vezes
          onClick: () => handleSignIn(data),
        },
      });
    } catch {
      toast.error("Credenciais incorretas");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Seu e-mail</Label>
          <Input
            disabled={isSubmitting}
            id="email"
            type="email"
            {...register("email")}
          />
        </div>

        <Button disabled={isSubmitting} className="w-full" type="submit">
          Finalizar Cadastro
        </Button>
      </form>
      <Toaster richColors />
    </>
  );
}
