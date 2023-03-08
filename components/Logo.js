import Image from "next/image";
import React from "react";

function Logo() {
  return (

    // Differernt tried variants.
    
    // <div className="relative justify-center">
    //   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
    //     <Image src="/logo.png" height={120} width={250} />
    //   </div>
    //   <Image
    //     src="/eyes.gif"
    //     className="w-full h-auto object-contain"
    //     height={550}
    //     width={700}
    //   />
    // </div>
    
    // <div className="relative h-full w-full">
    //   <Image
    //     src="/eyes.gif"
    //     className="h-full w-full object-contain"
    //     height={450}
    //     width={700}
    //   />
    //   <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8">
    //     <Image src="/logo.png" height={120} width={250} />
    //   </div>
    // </div>
    
    <div className="relative h-full w-full">
      <Image
        src="/eyes.gif"
        className="h-full w-full object-contain"
        height={450}
        width={700}
      />
      <div className="relative inset-x-0 bottom-0 flex justify-center pb-8">
        <Image src="/logo.png" height={100} width={220} />
      </div>
    </div>
  );
}

export default Logo;
