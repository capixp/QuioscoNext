// components/order/OrderSidebar.tsx
import { prisma } from "@/src/lib/prisma"; // ✅ importa desde lib/prisma
import CategoryIcon from "./ui/CategoryIcon";

async function getCategories() {
  return await prisma.category.findMany();
}

export default async function OrderSidebar() {
  //const categories = await prisma.category.findMany();
  const categories = await getCategories();
  console.log(categories);
  return (
    <aside className="md:w-72 md:h-screen bg-white p-4">
      <nav className="mt-10">
        {categories.map((category) => (
          <CategoryIcon key={category.id} category={category} />
        ))}
      </nav>
    </aside>
  );
}
