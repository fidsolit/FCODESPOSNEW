"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

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
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  // const [productDetails, setproductdetails] = useState<string>(productdetails);

  const router = useRouter();
  // console.log("this is the whole product details", product);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

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
      setError("An error occurred. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 p-4 border rounded-lg shadow-lg bg-white"
    >
      <h2 className="text-xl font-bold text-center mb-4">Edit Product</h2>
      {error && <div className="text-red-600 mb-2">{error}</div>}
      {[
        { label: "Brand", value: newBrand, setter: setNewBrand },
        {
          label: "Description",
          value: newDescription,
          setter: setNewDescription,
        },
        {
          label: "Selling Price",
          value: newSellingPrice,
          setter: setNewSellingPrice,
        },
        { label: "Unit Price", value: newUnitPrice, setter: setNewUnitPrice },
        {
          label: "Available Quantity",
          value: newAvailableQty,
          setter: setNewAvailableQty,
        },
        { label: "SKU", value: newSku, setter: setNewSku },
        { label: "RAM", value: newRam, setter: setNewRam },
        { label: "Videocard", value: newVideocard, setter: setNewVideocard },
        { label: "Storage", value: newStorage, setter: setNewStorage },
        { label: "Color", value: newColor, setter: setNewColor },
        { label: "Inches", value: newInches, setter: setNewInches },
        { label: "Freebies", value: newFreebies, setter: setNewFreebies },
        { label: "Warranty", value: newWarranty, setter: setNewWarranty },
      ].map(({ label, value, setter }) => (
        <div key={label} className="flex flex-col">
          <label className="mb-1 text-gray-700">{label}</label>
          <input
            onChange={(e) => setter(e.target.value)}
            value={value}
            className="border border-slate-300 rounded-lg px-4 py-2 focus:outline-none focus:border-green-500 transition"
            type="text"
            placeholder={label}
          />
        </div>
      ))}
      <button
        className={`bg-green-600 font-bold text-white py-3 px-6 w-full rounded-lg transition duration-200 hover:bg-green-500 ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={loading}
      >
        {loading ? "Updating..." : "Update Product"}
      </button>
    </form>
  );
}
