import { Inter } from "next/font/google";
import "../../globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={cn(inter.className, "h-full")}>
      <div>{children}</div>
    </div>
  );
}
