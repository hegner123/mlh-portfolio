import Drawer from "@mui/material/Drawer";
import Link from "next/link";
export default function Navigation() {
  return (
    <nav className="grid grid-cols-12 col-span-full py-2 px-8  max-h-20 fixed w-[100%] ">
      <div className="grid grid-cols-12 col-span-full justify-between items-center  bg-black">
        <div className="col-span-3">
          <Link href="/">
            <h1 className="text-3xl">Michael Hegner</h1>
          </Link>
        </div>
      </div>
    </nav>
  );
}
