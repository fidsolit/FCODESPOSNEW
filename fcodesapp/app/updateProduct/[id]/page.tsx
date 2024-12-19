import EditProductForm from "@/app/components/editproductForm";

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

export default async function EditTopic({ params }) {
  const { id } = params;
  const { product } = await getProductById(id);
  // const { brand, description } = product;
  const { productDetails } = product;
  console.log("product details from update page", productDetails);
  const {
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
  } = product;
  //  brand: String,
  //   description: String,
  //   sellingprice: String,
  //   unitprice: String,
  //   availableqty: String,
  //   sku: String,
  //   ram: String,
  //   Videocard: String,
  //   storage: String,
  //   color: String,
  //   inches: String,
  //   Freebies: String,
  //   Warranty: String,

  return (
    <EditProductForm
      id={id}
      brand={brand}
      description={description}
      sellingprice={sellingprice}
      unitprice={unitprice}
      availableqty={availableqty}
      sku={sku}
      ram={ram}
      Videocard={videocard}
      storage={storage}
      color={color}
      inches={inches}
      Freebies={Freebies}
      Warranty={Warranty}
    />
  );
}
