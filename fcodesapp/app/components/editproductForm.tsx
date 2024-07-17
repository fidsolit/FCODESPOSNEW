"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Define the props interface
interface EditProductFormProps {
  id: string;
  brand: string;
  description: string;
}

export default function EditProductForm({
  id,
  brand,
  description,
}: EditProductFormProps) {
  const [newBrand, setNewBrand] = useState<string>(brand);
  const [newDescription, setNewDescription] = useState<string>(description);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newBrand, newDescription }),
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
      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update product
      </button>
    </form>
  );
}
