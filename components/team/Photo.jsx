import React from "react";
import Image from "next/image";
export default function Photo({ image, title, name }) {
  return (
    <div className="relative w-full text-center justify-center items-center flex flex-col">
      <Image src={image} className="inline cursor-pointer" alt={name} />
      <div className="absolute bottom-0">
      <div
        className=" lg:text-[36px]  text-[20px]  leading-[100%] font-bold text-transparent "
        style={{
          background:
            "linear-gradient(54.35deg, #FF3D12 0%, #FF7253 79.88%), #FFFFFF",
          backgroundClip: "text",
        }}
      >
        {name}
      </div>
      <div className="text-white lg:text-[18px] text-[10px] lg:mb-5 mb-[40px]">
        {title}
      </div>
      </div>
    </div>
  );
}
