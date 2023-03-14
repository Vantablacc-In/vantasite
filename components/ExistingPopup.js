import React, { useEffect } from "react";

function ExistingPopup({ onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-sm">
      <div className="bg-black text-white p-6 rounded-lg shadow-lg border-2 border-lime-600">
        <div className="text-2xl mb-4">Hum ch***ye nai hai!</div>
        <div className="text-sm">You have already signed up! ✔</div>
      </div>
    </div>
  );
}

export default ExistingPopup;
