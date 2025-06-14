import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";

// Icons
import searchIcon from "../../public/search-icon.svg";
import personIcon from "../../public/person-icon.svg";
import saveIcon from "../../public/save-icon.svg";
import bagIcon from "../../public/bag-icon.svg";
import Link from "next/link";

function Header() {
  return (
    <div className="">
      <div className="flex justify-between items-center mb-[2rem]">
        <Link href={"/"} className="headingFont tracking-[0.6rem] text-[20px]">
          TANN TRIM
        </Link>
        <div className="flex gap-4">
          <Image src={searchIcon} width={22} alt="" />
          <Image src={personIcon} width={22} alt="" />
          <Image src={saveIcon} width={22} alt="" />
          <Image src={bagIcon} width={22} alt="" />
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
