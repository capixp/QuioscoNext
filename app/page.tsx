export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { unstable_noStore as noStore } from "next/cache";
import OrderSidebar from "@/components/order/OrderSidebar";

export default async function Page() {
  noStore();

  return (
    <main className="flex">
      <OrderSidebar />
      <section className="p-4">HOME</section>
    </main>
  );
}
