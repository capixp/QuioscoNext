// app/layout.tsx
export const runtime = "nodejs";
export const dynamic = "force-dynamic"; // o: export const revalidate = 0;

import { unstable_noStore as noStore } from "next/cache";
import OrderSidebar from "@/components/order/OrderSidebar";
import OrderSummary from "@/components/order/OrderSummary";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  noStore(); // asegura que este segmento no se cachee
  console.log("Render <RootLayout>"); // <-- DEBE verse en el terminal de `npm run dev`

  return (
    <html lang="es">
      <body>
        <div className="md:flex">
          <OrderSidebar />
          <main className="md:flex-1 md:h-screen md:overflow-y-scroll p-5">
            {children}
          </main>
          <OrderSummary />
        </div>
      </body>
    </html>
  );
}
