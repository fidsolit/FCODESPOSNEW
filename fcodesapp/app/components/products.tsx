// app/products/serverproduct.tsx (Server Component)
"use client";
import Link from "next/link";

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

  return (
    <>
      {products.map((p: any) => (
        <div
          key={p._id}
          className="card bg-base-100 shadow-xl mt-10 md:m-3 m-3 max-sm:mx-2 w-full md:w-1/2 lg:w-1/4"
        >
          <figure>
            <img src="1.jfif" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{p.brand}</h2>
            <div className="card-actions justify-end">
              <Link href={`/productDetails/${p._id}`}>
                <button className="btn btn-primary max-sm:mx-auto">
                  See details
                </button>
              </Link>
              <Link href="/checkoutForm">
                <button className="btn btn-primary max-sm:mx-auto">
                  Buy Now
                </button>
              </Link>
              <button
                onClick={() => console.log(`Added ${p.brand} to cart`)}
                className="btn btn-primary max-sm:mx-auto"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
