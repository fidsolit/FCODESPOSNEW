// components/RemoveBtn.tsx
"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CSSTransition } from "react-transition-group";

export default function RemoveBtn({ id }: { id: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const removeProduct = async () => {
    const res = await fetch(`http://localhost:3000/api/products/?id=${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      router.refresh();
      closeModal();
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button
        onClick={openModal}
        className="text-red-400 hover:scale-125 hover:invert transition-transform duration-150"
      >
        <HiOutlineTrash size={25} />
      </button>

      {isModalOpen && (
        <div
          className={`fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center z-50 transition-opacity duration-300 ease-out ${isModalOpen ? "opacity-100" : "opacity-0"}`}
        >
          <div
            className={`bg-white p-6 rounded-lg shadow-lg max-w-sm w-full transform transition-transform duration-300 ease-out ${isModalOpen ? "scale-100" : "scale-95"}`}
          >
            <h2 className="text-lg font-semibold mb-4">
              Are you sure you want to delete this product?
            </h2>
            <div className="flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={removeProduct}
                className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
