"use client";
import React from "react";
import { CodeBlock, atomOneLight } from "react-code-blocks";
import { code1, code2 } from "@/lib/strictjson";

export default function Body() {
  return (
    <div className="flex flex-col gap-7 -mt-8 p-10 items-center">
      <div className="w-full flex flex-col gap-7 text-center">
        <h1 className="font-semibold text-2xl text-indigo-600">Who can benfit of this doc?</h1>
        <p className="font-normal text-lg">
          This doc is dedicated for developers working for generating{" "}
          <span className="font-semibold">Strict JSON</span> using{" "}
          <span className="font-semibold underline">Generative AI</span> or{" "}
          <span className="font-semibold underline">AI Models</span> with{" "}
          <span className="font-semibold">Java Script</span>, now for Generating
          like this form of data we need to make a great prompt which will
          control our{" "}
          <span className="font-semibold text-indigo-600">Output</span> or or
          results so for doing that we gonna provid you by the general way as a
          separated function for{" "}
          <span className="font-semibold">Gemini AI</span> which will help to
          get results.
        </p>
      </div>
      <div className="w-full flex flex-col gap-7">
        <h1 className="font-semibold text-2xl text-center text-indigo-600">
          For Google Gemini AI
        </h1>
        <p className="font-normal text-lg text-center">
          for this model the way is very easy by geting directly the result in
          form json :
        </p>
        <div className="w-full flex justify-center">
          <div className="md:w-[75%] lg:w-[60%]">
            <CodeBlock theme={atomOneLight} language="text" text={`${code1}`} />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-7">
        <h1 className="font-semibold text-2xl text-center text-indigo-600">Calling:</h1>
        <p className="font-normal text-lg text-center">
          for calling this function from other components you can just add the
          needed <span className="font-semibold">prams</span>, here is an
          example:
        </p>
        <div className="w-full flex justify-center">
          <div className="md:w-[75%] lg:w-[60%]">
            <CodeBlock theme={atomOneLight} language="text" text={`${code2}`} />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-7 text-center">
        <h1 className="font-semibold text-2xl text-indigo-600">Attention</h1>
        <p className="font-normal text-lg">
          before doing any thing get credenital from Gemini AI
          <span className="font-semibold">Public</span> Key which we will use it
          to access to your model.
        </p>
      </div>
    </div>
  );
}
