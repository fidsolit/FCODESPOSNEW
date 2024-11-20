import EditProductForm from "@/app/components/editproductForm";

const editProductById = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
    console.log("this is the response", res);
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const { product } = await editProductById(id);
  const {
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
  } = product;

  return <EditProductForm id={id} product={product} />;
}
