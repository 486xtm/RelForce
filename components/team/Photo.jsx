import React from "react";
import Image from "next/image";
export default function Photo ({image,title, name}) => {
  return (
    <div>
      <Image
            src={image}
            className="inline cursor-pointer lg:block hidden"
            alt={name}
      />
  </div>
  );
}