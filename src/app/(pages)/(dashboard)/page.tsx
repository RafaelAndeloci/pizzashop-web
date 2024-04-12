import DayOrdersAmountCard from "@/components/dashboard/day-orders-amount-card";
import MonthCanceledOrdersAmountCard from "@/components/dashboard/month-canceled-amout-card";
import MonthOrdersAmoutCard from "@/components/dashboard/month-orders-amount-card";
import MonthRevenueCard from "@/components/dashboard/month-revenue-card";
import PopularProductsChart from "@/components/dashboard/popular-products-chart";
import RevenueChart from "@/components/dashboard/revenue-chart";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pizza Shop | Pedidos",
  description: "Pizzaaa",
};

export default function DashBoard() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

      <div className="grid grid-cols-4 gap-4">
        <MonthRevenueCard />
        <MonthOrdersAmoutCard />
        <DayOrdersAmountCard />
        <MonthCanceledOrdersAmountCard />
      </div>

      <div className="grid grid-cols-9 gap-4">
        <RevenueChart />
        <PopularProductsChart />
      </div>
    </div>
  );
}
