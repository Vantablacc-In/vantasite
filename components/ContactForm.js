import React, { useState } from "react";

import { supabase } from "@/lib/supabaseClient";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const query = `
    //   INSERT INTO contacts (full_name, email_id)
    //   VALUES ('${formData.name}', '${formData.email}')
    //   RETURNING *
    // `;

    const { data, error } = await supabase.from("contacts").insert({
      full_name: formData.name,
      email_id: formData.email,
    });

    if (error) {
      console.error("Error saving form data:", error);
    } else {
      console.log("Form data saved successfully:", data);
    }
  };

  return (
    <div class=" lg:flex justify-center">
      <div className="flex space-x-10 lg:space-x-24">
        <div className="space-y-5 lg:space-x-10">
          <input
            type="text"
            id="name"
            name="name"
            className="border-transparent appearance-none border-white border-b-2 focus:outline-none hover:bg-black focus:border-white py-2 px-auto bg-black text-gray-600 placeholder-white focus:placeholder-opacity-40 shadow-sm"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            id="email"
            name="email"
            className="border-transparent appearance-none border-white border-b-2 focus:outline-none hover:bg-black focus:border-white py-2 px-auto bg-black text-gray-600 placeholder-white focus:placeholder-opacity-40 shadow-sm"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="pb-5 ">
          <button
            className="justtify-center mt-7 px-4 py-2 text-base font-semibold text-white bg-[#6600DB] rounded-sm shadow-md hover:bg-[#803ad0] "
            type="submit"
            id="submit"
            name="submit"
            onClick={handleChange}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
