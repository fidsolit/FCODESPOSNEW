import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-slate-400 flex  w-screen justify-between">
      <Link href={"/"} className="mx-3 p-3 font-bold">
        {" "}
        HOME
      </Link>
      <Link href={"/admindashboard"} className="mx-3 p-3 font-bold">
        ADMIN DASHBOARD
      </Link>
      <Link href={"/store"} className="mx-3 p-3 font-bold">
        {" "}
        STORE
      </Link>
    </nav>
  );
}
