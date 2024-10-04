// app/products/page.tsx (Server Component)
import Link from "next/link";
import ProductList from "./clientproduct";

const getProducts = async () => {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
};

export default async function ProductsPage() {
  const { products } = await getProducts();

  return <ProductList products={products} />;
}
