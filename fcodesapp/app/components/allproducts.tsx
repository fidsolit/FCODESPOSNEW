"use client";
import Link from "next/link";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import RemoveBtn from "./removeBtn";
import { useRouter } from "next/navigation";

// import Productlist from "./productlist";

const getallProducts = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("error lodading topics cause: ", error);
  }
};

export default async function AllProduct() {
  const { products } = await getallProducts();

  return (
    <div className="md:w-1/2 mx-auto shadow mt-4">
      <div className="overflow-x-auto">
        <Link
          className="mx-2 my-3  p-2 font-bold bg-cyan-700 border-emerald-600"
          href={"/addProduct"}
        >
          {" "}
          ADD NEW
        </Link>

        <input
          className="p-2 mx-2 my-3 "
          type="text"
          placeholder="search product"
        />

        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>BRAND</th>
              <th>Description</th>
              <th>Price</th>
              <th>ACTION</th>
            </tr>
          </thead>
          {products.map((p: String) => (
            <tbody key={p._id}>
              {/* //   row 1 */}
              <tr className="hover:bg-slate-200">
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div
                    className="flex items-center gap-3"
                    onClick={() => {
                      console.log("you have click ", p._id);
                    }}
                  >
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/1.jfif"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{p.brand}</div>
                      {/* <div className="text-sm opacity-50">United States</div> */}
                    </div>
                  </div>
                </td>
                <td>
                  {p.description}
                  <br />
                  {/* <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span> */}
                </td>
                <td>{p.sellingprice}</td>
                <th>
                  <RemoveBtn id={p._id} />
                  <Link href={`/updateProduct/${p._id}`}>
                    {/* <button className="btn btn-ghost btn-xs"> */}
                    <button className="hover:scale-125">
                      <HiOutlinePencilSquare size={25} />
                    </button>
                  </Link>
                </th>
              </tr>
            </tbody>
            // <Productlist key={p.id} props={p} />
          ))}
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>BRAND</th>
              <th>Description</th>
              <th>Price</th>
              <th>ACTION</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
