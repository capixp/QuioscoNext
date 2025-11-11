import ProductCard from "@/components/products/ProductCard";
import { prisma } from "@/src/lib/prisma";

// app/order/[category]/page.tsx
type Params = { category: string };

async function getProducts(category: string) {
  const products = await prisma.product.findMany({
    where: {
      category: {
        slug: category,
      },
    },
  });
  return products;
}
export default async function OrderPage(
  { params }: { params: Promise<Params> } // 👈 llega como Promise
) {
  const { category } = await params; // 👈 hay que await

  const products = await getProducts((await params).category);

  return (
    <>
      <h1 className="text-2xl my-10">
        Elige y personaliza tu pedido a continuación
      </h1>
      <div className="grid grid-col-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-start">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
