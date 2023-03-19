import ContactForm from "@/components/earlysignup(old)/ContactForm";
import Footer from "@/components/earlysignup(old)/Footer";
import Logo from "@/components/earlysignup(old)/Logo";
import React from "react";
import Timer from "@/components/earlysignup(old)/Timer";

function Home() {
  return (
    <div className="max-w-2xl mx-auto space-y-3 font-sans antialiased selection:bg-red-600 selection:text-black">
      <Logo />
      <div>
        <Timer />
        <ContactForm />
      </div>
      {/* <Timer />
        <ContactForm /> */}
      <Footer />
    </div>
  );
}

export default Home;
