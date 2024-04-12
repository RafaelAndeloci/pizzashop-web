import { Ban, DollarSign } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

export default function MonthCanceledOrdersAmountCard() {
  return (
    <Card>
      <CardHeader className="flex-row space-y-0 items-center justify-between pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês){" "}
        </CardTitle>
        <Ban className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">32</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400">-2%</span> em
          relação ao mês passado
        </p>
      </CardContent>
    </Card>
  );
}
