"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Define the props interface
interface EditProductFormProps {
  id: string;
  brand: string;
  description: string;
  sellingprice: string;
  unitprice: string;
  availableqty: string;
  sku: string;
  ram: string;
  Videocard: string;
  storage: string;
  color: string;
  inches: string;
  Freebies: string;
  Warranty: string;
}

export default function EditProductForm({
  id,
  brand,
  description,
  sellingprice,
  unitprice,
  availableqty,
  sku,
  ram,
  Videocard,
  storage,
  color,
  inches,
  Freebies,
  Warranty,
}: EditProductFormProps) {
  const [newBrand, setNewBrand] = useState<string>(brand);
  const [newDescription, setNewDescription] = useState<string>(description);
  const [newSellingPrice, setNewSellingPrice] = useState<string>(sellingprice);
  const [newUnitPrice, setNewUnitPrice] = useState<string>(unitprice);
  const [newAvailableQty, setNewAvailableQty] = useState<string>(availableqty);
  const [newSku, setNewSku] = useState<string>(sku);
  const [newRam, setNewRam] = useState<string>(ram);
  const [newVideocard, setNewVideocard] = useState<string>(Videocard);
  const [newStorage, setNewStorage] = useState<string>(storage);
  const [newColor, setNewColor] = useState<string>(color);
  const [newInches, setNewInches] = useState<string>(inches);
  const [newFreebies, setNewFreebies] = useState<string>(Freebies);
  const [newWarranty, setNewWarranty] = useState<string>(Warranty);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          brand: newBrand,
          description: newDescription,
          sellingprice: newSellingPrice,
          unitprice: newUnitPrice,
          availableqty: newAvailableQty,
          sku: newSku,
          ram: newRam,
          Videocard: newVideocard,
          storage: newStorage,
          color: newColor,
          inches: newInches,
          Freebies: newFreebies,
          Warranty: newWarranty,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update product");
      }

      router.push("/admindashboard");
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        onChange={(e) => setNewBrand(e.target.value)}
        value={newBrand}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Brand"
      />
      <input
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Description"
      />
      <input
        onChange={(e) => setNewSellingPrice(e.target.value)}
        value={newSellingPrice}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Selling Price"
      />
      <input
        onChange={(e) => setNewUnitPrice(e.target.value)}
        value={newUnitPrice}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Unit Price"
      />
      <input
        onChange={(e) => setNewAvailableQty(e.target.value)}
        value={newAvailableQty}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Available Quantity"
      />
      <input
        onChange={(e) => setNewSku(e.target.value)}
        value={newSku}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="SKU"
      />
      <input
        onChange={(e) => setNewRam(e.target.value)}
        value={newRam}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="RAM"
      />
      <input
        onChange={(e) => setNewVideocard(e.target.value)}
        value={newVideocard}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Videocard"
      />
      <input
        onChange={(e) => setNewStorage(e.target.value)}
        value={newStorage}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Storage"
      />
      <input
        onChange={(e) => setNewColor(e.target.value)}
        value={newColor}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Color"
      />
      <input
        onChange={(e) => setNewInches(e.target.value)}
        value={newInches}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Inches"
      />
      <input
        onChange={(e) => setNewFreebies(e.target.value)}
        value={newFreebies}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Freebies"
      />
      <input
        onChange={(e) => setNewWarranty(e.target.value)}
        value={newWarranty}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Warranty"
      />
      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update product
      </button>
    </form>
  );
}
