"use client";
import Link from "next/link";

const getProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("error lodading topics cause: ", error);
  }
};

export default async function Product() {
  const { products } = await getProducts();

  return (
    <>
      {products.map((p) => (
        <div
          key={p._id}
          className="card bg-base-100 shadow-xl m-3 max-sm:mx-2 w-full md:w-1/2 lg:w-1/4 "
        >
          <figure>
            <img src="1.jfif" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{p.brand}</h2>
            <p>{p.description}</p>
            <div className="card-actions justify-end">
              <Link href={`/productDetails/${p._id}`}>
                <button className="btn btn-primary max-sm:mx-auto">
                  See details
                </button>
              </Link>
              <Link href={"/checkoutForm"}>
                <button className="btn btn-primary max-sm:mx-auto">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
