"use client";

import React from "react";
import Link from "next/link";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import RemoveBtn from "./removeBtn";

const Productlist = (p) => {
  console.log("this is the p from prodcut list: ");
  return (
    <tr className="hover:bg-slate-200">
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src="/1.jfif" alt="Avatar Tailwind CSS Component" />
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
      <td>12000</td>
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
  );
};

export default Productlist;
