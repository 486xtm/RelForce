import React from "react";
import Image from "next/image";
export default ({image,title, name}) => {
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