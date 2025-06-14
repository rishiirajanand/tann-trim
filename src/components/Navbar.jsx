import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-center">
      <div className="flex gap-[3.5rem] text-[14px]">
        <Link href={"/bag"}>Bags</Link>
        <Link href={"/travel"}>Travel</Link>
        <Link href={"/accesories"}>Accesories</Link>
        <Link href={"/gifting"}>Gifting</Link>
        <Link href={"/jewelery"}>Jewelery</Link>
      </div>
    </nav>
  );
}

export default Navbar;
