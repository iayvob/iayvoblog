"use client";
import Image from "next/image";
import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import { code1, code2, card } from "@/lib/flw";
import flwCanc from "../../../public/flutterwave/flwCanc.png"

export default function Body() {
  return (
    <div className="flex flex-col gap-7 mt-8 p-10 items-center">
      <div className="w-full flex flex-col text-left gap-7">
        <h1 className="font-semibold text-2xl">Who can benfit of this doc?</h1>
        <p className="font-normal text-lg">
          This doc is dedicated for developers working with{" "}
          <span className="font-semibold">NextJS</span> using{" "}
          <span className="font-semibold underline">TypeScript</span> or{" "}
          <span className="font-semibold underline">JavaScript</span> with{" "}
          <span className="font-semibold">ReactJS</span>, now for integrating
          this method of payment which called{" "}
          <span className="font-semibold text-yellow-500">Flutterwave</span> you
          need to know that there is tow method of making payment which is :{" "}
          <span className="font-semibold">Recuring Payment</span> like for
          suscreptions and payment plan, and there is type of{" "}
          <span className="font-semibold">One Time Payment</span> for now we are
          focusing to make it with both:
        </p>
      </div>
      <div className="w-full flex flex-col text-left gap-7">
        <h1 className="font-semibold text-2xl">First One Time Payment</h1>
        <p className="font-normal text-lg">
          here where we gonna make on{" "}
          <span className="font-semibold">Script</span> which make one time
          transaction and here is the {" "}
          <span className="font-semibold underline">function</span> we will use
          in the component:
        </p>
        <div className="md:w-[75%] lg:w-[60%]">
          <CodeBlock theme={dracula} language="text" 
            text={`${code1}`} />
        </div>
      </div>
      <div className="w-full flex flex-col text-left gap-7">
        <h1 className="font-semibold text-2xl">Recuring Payment</h1>
        <p className="font-normal text-lg">
          here where we gonna make on{" "}
          <span className="font-semibold">Script</span> which make recuring
          transaction where we add a member to the plan by the plan id we have created from flutterwave and here is the {" "}
          <span className="font-semibold underline">function</span> we will use
          in the component:
        </p>
        <div className="md:w-[75%] lg:w-[60%]">
          <CodeBlock theme={dracula} language="text" 
            text={`${code2}`} />
        </div>
        <p className="font-normal text-lg">Here is a testing card</p>
        <div className="md:w-[75%] lg:w-[60%]">
          <CodeBlock theme={dracula} language="text" 
            text={`${card}`} />
        </div>
      </div>
      <div className="w-full flex flex-col text-left gap-7">
        <h1 className="font-semibold text-2xl">Attention</h1>
        <p className="font-normal text-lg">
          befor making all this try to create an account on flutterwave and if you want to recring payment: create plans ,and get also the id of this plans, get also the{" "}
          <span className="font-semibold">Public, Secret, Enc</span> Keys which we will use it to access to your account.
        </p>
      </div>
      <div className="w-full flex flex-col text-left gap-7">
        <h1 className="font-semibold text-2xl">Cancellation of Subscription</h1>
        <p className="font-normal text-lg">
         This only could be maked through the{" "}
          <span className="font-semibold">Email sended</span> To the submited email,
        </p>
        <Image src={flwCanc} width={600} height={400} alt='cancel the payment flutterwave' />
      </div>
    </div>
  );
}
