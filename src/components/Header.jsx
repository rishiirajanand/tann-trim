"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import Image from "next/image";

// Icons
import searchIcon from "../../public/search-icon.svg";
import personIcon from "../../public/person-icon.svg";
import saveIcon from "../../public/save-icon.svg";
import bagIcon from "../../public/bag-icon.svg";
import Link from "next/link";
import { useSelector } from "react-redux";

function Header() {
  const product = useSelector((state) => state.product.cartProduct);

  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex justify-between items-center mb-[2rem]">
        <Link href={"/"} className="headingFont tracking-[0.6rem] text-[20px]">
          TANN TRIM
        </Link>
        <div className="relative flex gap-4">
          <div className="absolute right-[-5px] bottom-[12px] bg-green-600 w-[16px] h-[16px] rounded-full flex justify-center items-center">
            <span className="text-[10px] font-bold">{product.length || 0}</span>
          </div>
          <Image src={searchIcon} width={22} alt="" />
          <Image src={personIcon} width={22} alt="" />
          <Image src={saveIcon} width={22} alt="" />
          <Link href={"/cart"}>
            <Image src={bagIcon} width={22} alt="" />
          </Link>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
