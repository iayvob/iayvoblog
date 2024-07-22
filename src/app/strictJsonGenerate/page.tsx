import Contact from "@/components/contact";
import Body from "@/components/strictJson/body";
import Header from "@/components/strictJson/header";
import React from "react";

export default function page() {
  return (
    <div>
      <Header />
      <Body />
      <section className="w-full flex justify-center items-center">
        <Contact />
      </section>
    </div>
  );
}
