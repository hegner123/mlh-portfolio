import Drawer from "@mui/material/Drawer";
import Link from "next/link";
export default function Navigation() {
  return (
    <nav className="grid grid-cols-12 col-span-full py-2 px-8  max-h-20 fixed w-[100%] ">
      <h1 className="grid items-center justify-between grid-cols-12 text-3xl bg-black col-span-full">
        <Link href="/">Michael Hegner</Link>
      </h1>
    </nav>
  );
}
