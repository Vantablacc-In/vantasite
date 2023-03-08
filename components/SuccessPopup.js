import React, { useEffect } from "react";

function SuccessPopup({ onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  // return (
  //     <div>
  //         <div className="flex shadow-md gap-6 rounded-lg overflow-hidden divide-x max-w-2xl dark:dark:bg-gray-900 dark:dark:text-gray-100 divide-gray-700">
  //             <div className="flex flex-1 flex-col p-4 border-l-8 dark:dark:border-violet-400">
  //                 <span className="text-2xl">Great things await you!</span>
  //                 <span className="text-xs dark:dark:text-gray-400">May the force be with you. 🖖🏽</span>
  //             </div>
  //             <button className="px-4 flex items-center text-xs uppercase tracking-wide dark:dark:text-gray-400 dark:dark:border-gray-700">Dismiss</button>
  //         </div>
  //     </div>
  // )
  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-sm">
      <div className="bg-black text-white p-6 rounded-lg shadow-lg border-4 border-[#6600DB]">
        <div className="text-2xl mb-4">Great things await you!</div>
        <div className="text-xs">May the fashion gods be with thee. 🖖🏽</div>
      </div>
    </div>
  );
}

export default SuccessPopup;
