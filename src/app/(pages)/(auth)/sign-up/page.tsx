import SignUpForm from "@/components/auth/SignUpForm";
import { Button } from "@/components/ui/button";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pizza Shop | Cadastro",
  description: "Pizzaaa",
};

export default function SignOut() {
  return (
    <div className="p-8">
      <Button variant="ghost" className="absolute right-8 top-8" asChild>
        <Link href="/sign-in">Fazer login</Link>
      </Button>

      <div className="w-[350px] flex flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="font-semibold text-2xl tracking-tight">
            Criar conta grátis
          </h1>
          <p className="text-sm text-muted-foreground">
            Seja um parceiro e comece suas vendas!
          </p>
        </div>

        <SignUpForm />
      </div>
    </div>
  );
}
