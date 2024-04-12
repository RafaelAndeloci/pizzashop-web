"use client";

import { toast, Toaster } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

const signUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string(),
});

type SignUpForm = z.infer<typeof signUpForm>;

export default function SignUpForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>();

  async function handleSignUp(data: SignUpForm) {
    try {
      console.log(data);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Restaurante cadastrado com sucesso", {
        action: {
          label: "Login",
          // Possível criação de uma closure para verificar quantas vezes clickou em reenviar e bloquear caso tenha reenviado muitas vezes
          onClick: () => router.push("/sign-in"),
        },
      });
    } catch {
      toast.error("Erro ao cadastrar restaurante.");
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
          <Input
            disabled={isSubmitting}
            id="restaurantName"
            type="text"
            {...register("restaurantName")}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="managerName">Seu nome</Label>
          <Input
            disabled={isSubmitting}
            id="managerName"
            type="text"
            {...register("managerName")}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Seu e-mail</Label>
          <Input
            disabled={isSubmitting}
            id="email"
            type="email"
            {...register("email")}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Seu celular</Label>
          <Input
            disabled={isSubmitting}
            id="phone"
            type="tel"
            {...register("phone")}
          />
        </div>

        <Button disabled={isSubmitting} className="w-full" type="submit">
          Acessar painel
        </Button>

        <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
          Ao continuar, você concorda com nossos{" "}
          <a className="underline underline-offset-4" href="#">
            termos de serviço
          </a>{" "}
          e{" "}
          <a className="underline underline-offset-4" href="#">
            políticas de privacidade
          </a>
        </p>
      </form>
      <Toaster richColors />
    </>
  );
}
