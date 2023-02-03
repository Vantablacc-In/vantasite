import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <div className="bg-black h-auto flex items-center justify-center mt-9">
      <Image src="/logo.png" alt="Your logo" loading="lazy" height={150} width={300} />
    </div>
  );
}

export default Logo;
