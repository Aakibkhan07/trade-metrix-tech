import { redirect } from "next/navigation";

export const metadata = {
  title: "Redirecting to TradeMetrix",
  description: "Redirecting to TradeMetrix Trading Platform",
};

export default function LoginPage() {
  redirect("https://trade.trademetrix.tech/user");
}
