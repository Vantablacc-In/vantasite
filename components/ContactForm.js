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

// Sendgrid Method

// const [formData, setFormData] = useState({
//   name: "",
//   email: "",
// });

// const [showPopup, setShowPopup] = useState(false);
// const [showEmptyFormPopup, setShowEmptyFormPopup] = useState(false);

// const handleChange = (e) => {
//   setFormData({ ...formData, [e.target.name]: e.target.value });
//   console.log("FormData after handleChange: ", formData);
// };

// dotenv.config();

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!formData.name.trim() || !formData.email.trim()) {
//     setShowEmptyFormPopup(true);
//     return;
//   }

//   const { data, error } = await supabase.from("contacts").insert({
//     full_name: formData.name,
//     email_id: formData.email,
//   });

//   if (error) {
//     console.error("Error saving form data:", error);
//   } else {
//     console.log("Form data saved successfully:", data);
//     setFormData({
//       name: "",
//       email: "",
//     });
//     setShowPopup(true);
//     console.log(process.env.SENDGRID_API_KEY);
//     sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
//     const msg = {
//       to: "rajiv1628@gmail.com", // Change to your recipient
//       from: "churrovan@vantablacc.in", // Change to your verified sender
//       templateId: "d-99e92129c9c54743be70628d8b98de90",
//       dynamicTemplateData: {
//         subject: "Thanks for signing up!",
//         name: formData.name,
//       },
//     };
//     // sendgrid
//     //   .send(msg)
//     //   .then(() => {
//     //     console.log("Email sent");
//     //   })
//     //   .catch((error) => {
//     //     console.error(error);
//     //   });
//     try {
//       await mail.send(msg);
//       console.log("Email sent");
//     } catch (error) {
//       console.error(error);
//     }
//   }
// };

// Send email with SendGrid API and axios

// const sendgridApiKey = process.env.SENDGRID_API_KEY;
// const url = "https://api.sendgrid.com/v3/mail/send";
// const headers = {
//   Authorization: `Bearer ${sendgridApiKey}`,
//   "Content-Type": "application/json",
// };
// const data = {
//   personalizations: [
//     {
//       to: [{ email: "rajiv1628@gmail.com" }], // Change to your recipient
//       dynamic_template_data: {
//         subject: "Thanks for signing up!",
//         name: formData.name,
//       },
//     },
//   ],
//   from: { email: "churrovan@vantablacc.in" }, // Change to your verified sender
//   template_id: "d-99e92129c9c54743be70628d8b98de90",
// };
// try {
//   const response = await axios.post(url, data, { headers });
//   console.log("Email sent", response.data);
// } catch (error) {
//   console.error("Error sending email:", error);
// }

//Backend API method,

//     const response = await fetch("/api/send-email", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
//       },
//       body: JSON.stringify({
//         name: formData.name,
//         email: formData.email, // add email field to the formData object
//       }),
//     });

//     const data = await response.json();

//     const responseData = await response.text();
//     console.log(responseData);

//     if (response.ok) {
//       sendEmail(formData.email);
//       setFormData({
//         name: "",
//         email: "",
//       });
//       setShowPopup(true);
//     } else {
//       console.error(data.message);
//     }
//   }
// };
