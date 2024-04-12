import { Separator } from "@/components/ui/separator";
import { Home, Pizza, UtensilsCrossed } from "lucide-react";
import Link from "next/link";
import { ModeToggle } from "./theme/theme-toggle";
import AccountMenu from "./account-menu";

export default function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza size={24} />
        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <Link className="flex items-center gap-2" href={"/"}>
            <Home className="h-4 w-4" />
            Início
          </Link>
          <Link className="flex items-center gap-2" href={"/orders"}>
            <UtensilsCrossed className="h-4 w-4" size={16} />
            Pedidos
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ModeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  );
}
