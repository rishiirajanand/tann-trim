import Image from "next/image";
import React from "react";
import { sidebarList } from "@/utils/sidebarList";

// Icon
import bag from "../../public/bag.svg";

function Sidebar() {
  return (
    <div className="mt-[2.5rem] flex gap-[56px]">
      {sidebarList?.map((list, index) => (
        <div
          key={index}
          className="w-[115px] h-[130px] flex flex-col justify-center items-center gap-[1rem]"
        >
          <Image src={list.image} alt="image" />
          <span className="text-[13px]">{list.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
