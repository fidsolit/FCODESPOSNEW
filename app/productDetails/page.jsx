"use client";
import React from "react";

const ProductDescription = () => {
  // Sample product data
  const product = {
    name: "Sample Product",
    price: "$19.99",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget gravida quam, eget condimentum enim.",
    reviews: [
      {
        id: 1,
        username: "User1",
        review: "Great product, highly recommended!",
        rating: 5,
      },
      {
        id: 2,
        username: "User2",
        review: "Not bad, but could be better.",
        rating: 3,
      },
    ],
  };

  return (
    <div className="product-description">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>

      <div className="reviews">
        <h3>Reviews</h3>
        {product.reviews.map((review) => (
          <div key={review.id} className="review">
            <p>
              <strong>{review.username}</strong> - Rating: {review.rating}
            </p>
            <p>{review.review}</p>
          </div>
        ))}
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .product-description {
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          margin-top: 20px;
        }

        .reviews {
          margin-top: 20px;
        }

        .review {
          border: 1px solid #eee;
          padding: 10px;
          margin-bottom: 10px;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default ProductDescription;
