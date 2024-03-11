"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function addProduct() {
  const [brand, setProduct] = useState("");
  const [description, setDescription] = useState("");
  const [sellingprice, setsellingprice] = useState("");
  const [unitprice, setunitprice] = useState("");
  const [availableqty, setAvailableqty] = useState("");
  const [sku, setSku] = useState("");
  const [videocard, setVideocard] = useState("");
  const [storage, setstorage] = useState("");
  const [color, setcolor] = useState("");
  const [ram, setram] = useState("");
  const [inches, setinches] = useState("");
  const [Freebies, setFreebies] = useState("");

  const [Warranty, setWarranty] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!brand || !description) {
      alert("product name and description are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          brand,
          description,
          sellingprice,
          unitprice,
          availableqty,
          sku,
          ram,
          videocard,
          storage,
          color,
          inches,
          Freebies,
          Warranty,
        }),
      });

      if (res.ok) {
        router.push("/admindashboard");
        router.refresh();
      } else {
        throw new Error("Failed to create a product");
      }
    } catch (error) {
      console.log("this is the error", error);
    }
  };

  return (
    <div className=" flex  rounded-md mt-3  flex-wrap border shadow md:w-1/2 justify-center mx-auto ">
      <form
        onSubmit={handleSubmit}
        className="flex mx-3 my-1 flex-col w-full my-3 p-3 gap-3"
      >
        <input
          onChange={(e) => setProduct(e.target.value)}
          value={brand}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Product Brand"
        />

        <input
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Product Description"
        />
        <input
          onChange={(e) => setsellingprice(e.target.value)}
          value={sellingprice}
          className="border border-slate-500 px-8 py-2"
          type="number"
          placeholder="Selling price"
        />
        <input
          onChange={(e) => setunitprice(e.target.value)}
          value={unitprice}
          className="border border-slate-500 px-8 py-2"
          type="number"
          placeholder="unit price"
        />
        <input
          onChange={(e) => setAvailableqty(e.target.value)}
          value={availableqty}
          className="border border-slate-500 px-8 py-2"
          type="number"
          placeholder="Available "
        />

        <input
          onChange={(e) => setSku(e.target.value)}
          value={sku}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="SKU"
        />
        <input
          onChange={(e) => setram(e.target.value)}
          value={ram}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="RAM"
        />
        <input
          onChange={(e) => setVideocard(e.target.value)}
          value={videocard}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Videocard"
        />
        <input
          onChange={(e) => setstorage(e.target.value)}
          value={storage}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="storage: "
        />
        <input
          onChange={(e) => setcolor(e.target.value)}
          value={color}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="COLOR "
        />
        <input
          onChange={(e) => setinches(e.target.value)}
          value={inches}
          className="border border-slate-500 px-8 py-2"
          type="number"
          placeholder="INCHES "
        />
        <input
          onChange={(e) => setFreebies(e.target.value)}
          value={Freebies}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Freebies:  "
        />

        <input
          onChange={(e) => setWarranty(e.target.value)}
          value={Warranty}
          className="border border-slate-500 px-8 py-2"
          type="text"
          placeholder="Warranty  "
        />
        <button
          type="submit"
          className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
        >
          Add product
        </button>
      </form>
    </div>
  );
}
