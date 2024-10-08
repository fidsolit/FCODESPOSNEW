import Product from "../components/products";
export default function Store() {
  return (
    <div className="flex flex-wrap    justify-center ">
      {/* // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 "> */}
      {/* <div className="flex flex-col md:flex-row  m-3"> */}
      {/* h-screen w-screen */}
      <Product />
    </div>
  );
}
