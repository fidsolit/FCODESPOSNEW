// import ProductDescription from "../../components/productdescription";
// export default function productDetails(id) {
//   // Sample product data

//   return (
//     <div>
//       <p>
//         {" "}
//         <ProductDescription />
//       </p>
//     </div>
//   );
// }

import ProductDescription from "@/app/components/productdescription";

const getProductById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function ProductDetails({ params }) {
  const { id } = params;
  const { product } = await getProductById(id);
  const { brand, description, sellingprice } = product;

  return (
    <ProductDescription
      id={id}
      brand={brand}
      description={description}
      sellingprice={sellingprice}
      product={product}
    />
  );
}
