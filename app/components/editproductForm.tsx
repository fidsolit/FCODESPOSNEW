"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface EditProductFormProps {
  product: any;
  id: string;
  // Modify this type according to your product structure if needed
}

export default function EditProductForm({ id, product }: EditProductFormProps) {
  const router = useRouter();
  console.log("this is the id");
  // Initialize formData with the product object directly
  const [formData, setFormData] = useState({ ...product, id });
  const [idtoUpdate, setidtoUPdate] = useState(id);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    console.log("this is the form data", formData);

    try {
      const res = await fetch(
        `http://localhost:3000/api/products/${idtoUpdate}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) throw new Error("Failed to update product");

      router.push("/admindashboard");
      router.refresh();
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const formFields = [
    { label: "Brand", name: "brand" },
    { label: "Description", name: "description" },
    { label: "Selling Price", name: "sellingprice" },
    { label: "Unit Price", name: "unitprice" },
    { label: "Available Quantity", name: "availableqty" },
    { label: "SKU", name: "sku" },
    { label: "RAM", name: "ram" },
    { label: "Videocard", name: "Videocard" },
    { label: "Storage", name: "storage" },
    { label: "Color", name: "color" },
    { label: "Inches", name: "inches" },
    { label: "Freebies", name: "Freebies" },
    { label: "Warranty", name: "Warranty" },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 p-4 border rounded-lg shadow-lg bg-white"
    >
      <h2 className="text-xl font-bold text-center mb-4">Edit Product</h2>
      {error && <div className="text-red-600 mb-2">{error}</div>}

      {formFields.map(({ label, name }) => (
        <div key={name} className="flex flex-col">
          <label className="mb-1 text-gray-700">{label}</label>
          <input
            name={name}
            value={formData[name] || ""} // Ensure the input fields have controlled values
            onChange={handleChange}
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
