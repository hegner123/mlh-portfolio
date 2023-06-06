import Link from "next/link";
export default function Navigation() {
  return (
    <nav className="grid grid-cols-12 col-span-full py-2 px-8 bg-slate-500 max-h-20">
      <div className="grid grid-cols-12 col-span-full justify-between items-center">
        <div className="col-span-3">
          <Link href="/">
            <h1 className="text-3xl">Michael Hegner</h1>
          </Link>
        </div>
        <ul className="flex col-span-9 justify-end align-middle h-fit gap-3">
          <li>
            <Link className="link" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" href="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
