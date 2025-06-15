"use client";

import React from "react";
import Image from "next/image";
import saveIcon from "../../../public/plus-icon.svg";
import bookmarkIcon from "../../../public/Bookmark.svg";
import { useDispatch, useSelector } from "react-redux";
import { setRemoveFromCart } from "@/slice/productSlice";

function page() {
  const productList = useSelector((state) => state.product.cartProduct);
  const dispatch = useDispatch();

  const handleRemove = (product) => {
    dispatch(setRemoveFromCart(product.id));
    alert("Product is deleted");
  };

  if (productList.length <= 0) {
    return (
      <div className="flex w-full h-[300px] justify-center items-center">
        No product
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[2rem] p-4 mt-[4rem]">
      {productList?.map((product, index) => (
        <div
          key={index}
          className="w-full max-w-[265px] bg-[#1A1A1A] rounded-[7px] overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <div className="relative w-full h-[350px]">
            <Image
              src={product.image}
              alt={product.name || "Product image"}
              fill
              className="object-cover"
            />
            <button className="absolute top-2 right-2 p-2 cursor-pointer">
              <Image src={bookmarkIcon} alt="Bookmark" width={20} height={20} />
            </button>
          </div>

          <div className="p-4">
            {/* Product Name */}
            <h2 className="text-[1rem] font-[500] text-center line-clamp-2 h-12 mb-2">
              {product.title || "The Brown Metro Movers"}
            </h2>

            {/* Price Section */}
            <div className=" flex items-center justify-between ">
              <div className="flex gap-[0.3rem]">
                <h4 className=" text-[18px] font-bold">₹ {product.price}</h4>
                <div className="flex items-center gap-2 text-[11px]">
                  <span className="text-[#E5DFD9] line-through">₹ {4999}</span>
                  <span className="text-[#2FC14F] font-medium">50% Off</span>
                </div>
              </div>
              <button
                onClick={() => handleRemove(product)}
                className="cursor-pointer text-[10px] text-red-600"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default page;
