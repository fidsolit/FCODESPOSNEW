"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ProductDescriptionProps {
  product: {
    id: string;
    brand: string;
    description: string;
    sellingprice: number;
    warranty: string;
    freebies: string;
  };
}

export default function ProductDescription({
  product,
}: ProductDescriptionProps) {
  const [products] = useState([product]);
  const router = useRouter();

  return (
    <div className="container mx-auto px-4 py-8 flex flex-wrap -mx-4">
      <div className="w-full md:w-1/2 px-4">
        <img
          src="/1.jfif"
          alt="Product Image"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 px-4">
        <h2 className="text-2xl font-semibold mb-2">{products[0].brand}</h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          {products[0].description}
        </p>
        <div className="flex items-center mb-4">
          <span className="text-xl font-bold text-zinc-800 dark:text-zinc-200 mr-2">
            ₱ {Number(products[0].sellingprice).toLocaleString()}
          </span>
          <span className="text-sm text-zinc-500 dark:text-zinc-400 line-through">
            ₱ {(Number(products[0].sellingprice) + 3000).toLocaleString()}
          </span>
        </div>
        <select
          id="size"
          name="size"
          className="block w-full p-2 border border-zinc-300 rounded-md mb-6"
        >
          <option value="small">black</option>
          <option value="medium">red</option>
          <option value="large">white</option>
        </select>

        {/* <p>{products[0].description}</p> */}
        <Link href="/checkoutForm">
          <button className="bg-black text-white px-6 py-2 rounded-md mr-2">
            CHECK OUT
          </button>
        </Link>
        <div className="flex space-x-4 mt-4">
          <a
            href="#"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-white"
          >
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
              <path d="M12 2.04c-5.5 0-10 4.48-10 10.02 0 5 3.66 9.14 8.44 9.88v-7h-2.54v-2.88h2.54v-2.12c0-2.5 1.5-3.88 3.78-3.88 1.08 0 2.22.18 2.22.18v2.44h-1.24c-1.22 0-1.62.76-1.62 1.54v1.84h2.78l-.44 2.88h-2.34v7c4.78-.74 8.44-4.88 8.44-9.88 0-5.54-4.5-10.02-10-10.02z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-white"
          >
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.37-.83.49-1.75.85-2.73 1.04-1.56-1.66-4.15-1.76-5.8-.24-1.65 1.52-2.04 4.01-.99 5.95-3.42-.17-6.56-1.81-8.63-4.31-.71 1.22-.56 2.67.37 3.65.92.98 2.28 1.52 3.57 1.58-.85-.03-1.65-.26-2.34-.65v.07c0 1.77 1.26 3.26 2.93 3.6.71.17 1.45.13 2.15-.11-.66.2-1.36.23-2.05.08.58 1.8 2.29 3.11 4.3 3.15-1.58 1.24-3.57 1.98-5.73 1.98-.37 0-.74-.02-1.1-.07 2.04 1.31 4.47 2.07 7.08 2.07 8.5 0 13.14-7.04 13.14-13.14 0-.2 0-.4-.01-.6.9-.65 1.68-1.48 2.3-2.41z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
