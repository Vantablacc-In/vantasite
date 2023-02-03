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
    <div className="pb-10">
      <form className=" flex flex-row items-center justify-evenly space-y-10 my-9">
        <div className="space-x-5 relative justify-center">
          <input
            type="text"
            id="name"
            name="name"
            className="border-transparent appearance-none border-white border-b-2 focus:outline-none hover:bg-black focus:border-white py-2 px-auto bg-black text-white placeholder-white focus:placeholder-opacity-40 shadow-sm"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            id="email"
            name="email"
            className="border-transparent appearance-none border-white border-b-2 focus:outline-none hover:bg-black focus:border-white py-2 px-auto bg-black focus:bg-black text-white placeholder-white focus:placeholder-opacity-40 shadow-sm"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button
          className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-[#6600DB] rounded-sm shadow-md hover:bg-[#803ad0] "
          type="submit"
          id="submit"
          name="submit"
          onClick={handleChange}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Form;


// <form
    //   onSubmit={handleSubmit}
    //   className="bg-white p-10 rounded-lg shadow-md"
    // >
    //   <div className="mb-6">
    //     <label className="block font-bold mb-2" htmlFor="name">
    //       Name
    //     </label>
    //     <input
    //       type="text"
    //       id="name"
    //       name="name"
    //       value={formData.name}
    //       onChange={handleChange}
    //       className="w-full border p-2"
    //     />
    //   </div>
    //   <div className="mb-6">
    //     <label className="block font-bold mb-2" htmlFor="email">
    //       Email
    //     </label>
    //     <input
    //       type="email"
    //       id="email"
    //       name="email"
    //       value={formData.email}
    //       onChange={handleChange}
    //       className="w-full border p-2"
    //     />
    //   </div>
    //   <button type="submit" className="bg-black text-white p-2 rounded-lg">
    //     Submit
    //   </button>
    // </form>

    // <form class="flex flex-col justify-center w-3/4 max-w-sm space-y-10 md:flex-row md:w-full md:space-x-3 md:space-y-0 items-center">
    //   <div class=" flex space-x-5 relative items-center justify-center">
    //     <input
    //       type="text"
    //       id="name"
    //       name="name"
    //       class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
    //       placeholder="Full Name"
    //       value={formData.name}
    //       onChange={handleChange}
    //     />
    //     <input
    //       type="email"
    //       id="email"
    //       name="email"
    //       class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
    //       placeholder="Email"
    //       value={formData.email}
    //       onChange={handleChange}
    //     />
    //   </div>
    //   <button
    //     class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
    //     type="submit"
    //     id="submit"
    //     name="submit"
    //     onClick={handleChange}
    //   >
    //     Subscribe
    //   </button>
    // </form>