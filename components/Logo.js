import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <div className="relative justify-center">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <Image src="/logo.png" height={120} width={250} />
      </div>
      <Image
        src="/eyes.gif"
        className="w-full h-auto object-contain"
        height={550}
        width={700} 
      />
    </div>
  );
}

export default Logo;
