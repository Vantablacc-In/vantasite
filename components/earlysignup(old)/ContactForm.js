import React, { useState } from "react";

import EmptyPopup from "../EmptyPopup";
import ExistingPopup from "./ExistingPopup";
import SuccessPopup from "./SuccessPopup";
import { supabase } from "@/lib/supabaseClient";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [showEmptyFormPopup, setShowEmptyFormPopup] = useState(false);
  const [showExistingPopup, setShowExistingPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log("FormData after handleChange: ", formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      setShowEmptyFormPopup(true);
      return;
    }

    try {
      const { data: existingData, error: existingError } = await supabase
        .from("contacts")
        .select()
        .eq("email_id", formData.email)
        .single();

      if (existingData && !existingError) {
        setShowExistingPopup(true);
        setFormData({
          name: "",
          email: "",
        });
        return;
      }
      const { data, error } = await supabase.from("contacts").insert({
        full_name: formData.name,
        email_id: formData.email,
      });

      if (error) {
        console.error("Error saving form data:", error);
      } else {
        setTimeout(() => {
          setShowPopup(true);
        }, 1000);

        setFormData({
          name: "",
          email: "",
        });

        // Automated email integration working with SendGrid

        const res = await fetch("/api/sendgrid", {
          body: JSON.stringify({
            email: formData.email,
            fullname: formData.name,
          }),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        });

        const { error } = await res.json();
        if (error) {
          console.log(error);
          return;
        }
      }
    } catch (error) {
      console.error("Error saving form data:", error);
    }
  };

  // console.log("FormData at render: ", formData);

  return (
    <div className="flex flex-col justify-center items-center py-6 lg:flex-row lg:justify-center">
      <div className="flex flex-col space-y-5 lg:flex-row lg:space-x-10 lg:space-y-0">
        <input
          type="text"
          id="name"
          name="name"
          className="w-full lg:w-auto border-transparent appearance-none border-white border-b-2 focus:outline-none hover:bg-black focus:border-red-600 py-2 px-3 md:px-5 bg-black text-gray-100 placeholder-white focus:placeholder-opacity-40 shadow-sm"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          id="email"
          name="email"
          className="w-full lg:w-auto border-transparent appearance-none border-white border-b-2 focus:outline-none hover:bg-black focus:border-red-600 py-2 px-3 md:px-5 bg-black text-gray-100 placeholder-white focus:placeholder-opacity-40 shadow-sm"
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

      {/* Existing popup */}
      {showExistingPopup && (
        <ExistingPopup onClose={() => setShowExistingPopup(false)} />
      )}

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

// This is a React component that renders a form for collecting user data and saves it to a Supabase database. It also integrates with SendGrid to send automated emails to the user's email address.

// The component has four states managed with the useState hook: formData, showPopup, showEmptyFormPopup, and showExistingPopup. formData is an object that contains the name and email entered by the user. showPopup is a boolean that controls whether to show the SuccessPopup component after the form is submitted. showEmptyFormPopup is a boolean that controls whether to show the EmptyPopup component when the user submits an empty form. showExistingPopup is a boolean that controls whether to show the ExistingPopup component when the user submits a form with an email address that already exists in the database.

// The handleChange function updates the formData state as the user types in the form inputs. The handleSubmit function is called when the user clicks on the submit button. It first checks if both name and email inputs are filled. If not, it shows the EmptyPopup. If the form is not empty, it checks if an email address already exists in the database by querying the Supabase API. If there is a match, it shows the ExistingPopup. If there is no match, it saves the form data to the database using the Supabase API and shows the SuccessPopup. It also sends an automated email to the user's email address using the SendGrid API.

// The component renders two input fields for name and email, and a submit button. It also conditionally renders the EmptyPopup, ExistingPopup, and SuccessPopup components based on the state of showEmptyFormPopup, showExistingPopup, and showPopup, respectively.
