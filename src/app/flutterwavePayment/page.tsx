import React from "react";
import Header from "@/components/flutterwave/header";
import Body from "@/components/flutterwave/body";
import Contact from "@/components/contact";

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
