import ContactForm from "@/components/ContactForm";
import Gooey from "@/components/Gooey";
import Logo from "@/components/Logo";
import React from "react";
import Timer from "@/components/Timer";

function Home() {
  return (
      <div className="bg-black h-screen w-screen justify-center">
        <Logo />
        <Timer />
        <Gooey />
        <ContactForm />
      </div>
  );
}

export default Home;
