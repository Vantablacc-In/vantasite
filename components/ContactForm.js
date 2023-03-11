import React, { useState } from "react";

import EmptyPopup from "./EmptyPopup";
import SuccessPopup from "./SuccessPopup";
import { supabase } from "@/lib/supabaseClient";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [showEmptyFormPopup, setShowEmptyFormPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log("FormData after handleChange: ", formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      setShowEmptyFormPopup(true);
      return;
    }

    try {
      const { data, error } = await supabase.from("contacts").insert({
        full_name: formData.name,
        email_id: formData.email,
      });

      if (error) {
        console.error("Error saving form data:", error);
      } else {
        setFormData({
          name: "",
          email: "",
        });
        setShowPopup(true);


        // Automated email integration working with SendGrid

        // const res = await fetch("/api/sendgrid", {
        //   body: JSON.stringify({
        //     email: formData.email,
        //     fullname: formData.name,
        //   }),
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   method: "POST",
        // });

        // const { error } = await res.json();
        // if (error) {
        //   console.log(error);
        //   return;
        // }
      }
    } catch (error) {
      console.error("Error saving form data:", error);
    }
  };

  console.log("FormData at render: ", formData);

  return (
    <div className="flex flex-col justify-center items-center py-6 lg:flex-row lg:justify-center">
      <div className="flex flex-col space-y-5 lg:flex-row lg:space-x-10 lg:space-y-0">
        <input
          type="text"
          id="name"
          name="name"
          className="w-full lg:w-auto border-transparent appearance-none border-white border-b-2 focus:outline-none hover:bg-black focus:border-[#6600DB] py-2 px-3 md:px-5 bg-black text-gray-100 placeholder-white focus:placeholder-opacity-40 shadow-sm"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          id="email"
          name="email"
          className="w-full lg:w-auto border-transparent appearance-none border-white border-b-2 focus:outline-none hover:bg-black focus:border-[#6600DB] py-2 px-3 md:px-5 bg-black text-gray-100 placeholder-white focus:placeholder-opacity-40 shadow-sm"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="pb-5 lg:pb-0 lg:pl-5">
        <button
          className="w-full lg:w-auto justify-center mt-7 px-4 py-2 text-base font-semibold text-white bg-[#6600DB] rounded-sm shadow-md hover:bg-[#803ad0] "
          type="submit"
          id="submit"
          name="submit"
          onClick={handleSubmit}
        >
          Hey!
        </button>
      </div>
      {/* Success popup */}
      {showPopup && <SuccessPopup onClose={() => setShowPopup(false)} />}

      {/* Empty form popup */}
      {showEmptyFormPopup && (
        <EmptyPopup onClose={() => setShowEmptyFormPopup(false)} />
      )}
    </div>
  );
}

export default Form;


