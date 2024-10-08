// app/products/serverproduct.tsx (Server Component)
"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const getProducts = async () => {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
};

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(4); // Number of products per page

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { products } = await getProducts();
        setProducts(products);
        setFilteredProducts(products); // Initial load, no filter
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  // Handle search functionality
  useEffect(() => {
    if (searchQuery === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product: any) =>
        product.brand.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
      setCurrentPage(1); // Reset to page 1 after searching
    }
  }, [searchQuery, products]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / pageSize);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* Search Box */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by brand..."
          className="input input-bordered w-full max-w-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Products List */}
      <div className="flex flex-wrap justify-center">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((p: any) => (
            <div
              key={p._id}
              className="card bg-base-100 shadow-xl mt-10 md:m-3 m-3 max-sm:mx-2 w-full md:w-1/2 lg:w-1/4"
            >
              <figure>
                <img src="1.jfif" alt={p.brand} />
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
          ))
        ) : (
          <p className="text-center text-xl">No products found.</p>
        )}
      </div>

      {/* Pagination Controls */}
      {filteredProducts.length > pageSize && (
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="btn btn-secondary"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="btn btn-secondary"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
