"use client";
import AllProduct from "../components/allproducts";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../Globalredux/store";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();
  const authState = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  if (authState.isAdmin === false) {
    router.push("/");
    return null;
  }

  return (
    <>
      <AllProduct />
    </>
  );
}
