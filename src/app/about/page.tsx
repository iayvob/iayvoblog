import About from "@/components/about";
import Contact from "@/components/contact";
import SectionName from "@/components/sectionName";
import React from "react";

export default function about() {
  return (
    <main>
      <div className="w-full flex justify-center mb-8">
        <div>
          <SectionName text="About" />
        </div>
      </div>
      <div className="flex justify-center">
        <About />
      </div>
      <section className="flex justify-center w-full py-18 mt-20">
        <Contact />
      </section>
    </main>
  );
}
