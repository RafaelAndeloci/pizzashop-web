import { Search, X } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function OrderTableFilters() {
  return (
    <form className="my-2.5 flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros: </span>
      <Input placeholder="ID do pedido" className="h-8 w-[320px]" />
      <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
      <Select defaultValue="all">
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos Status</SelectItem>
          <SelectItem value="pending">Pendente</SelectItem>
          <SelectItem value="canceled">Cancelado</SelectItem>
          <SelectItem value="processing">Em preparo</SelectItem>
          <SelectItem value="delivering">Em entrega</SelectItem>
          <SelectItem value="delivered">Entregue</SelectItem>
        </SelectContent>
      </Select>

      <Button variant={"secondary"} size={"xs"} type="submit">
        <Search className="h-4 w-4 mr-2" />
        Filtrar Resultados
      </Button>
      <Button variant={"outline"} size={"xs"} type="button">
        <X className="h-4 w-4 mr-2" />
        Remover Filtros
      </Button>
    </form>
  );
}
