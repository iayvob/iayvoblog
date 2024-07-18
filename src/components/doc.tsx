import React from "react";
import { Card, CardDescription, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { CopyIcon, DoorOpenIcon } from "lucide-react";
import Image from "next/image";
import { content } from "@/lib/content";

type contentProps = (typeof content)[number];

export default function Doc({ title, Img, date }: contentProps) {
  return (
      <div className="flex justify-center">
        <Card className="sm:h-[30rem] sm:w-[36rem] w-[28rem] h-[26rem] p-8 !rounded-xl">
        <CardTitle className="w-full flex flex-col gap-3">
            <div className="flex gap-3">
                <Button variant={"default"}>
                    read Doc <DoorOpenIcon />
                </Button>
                <button>
                    <CopyIcon />
                </button>
            </div>
            <div className="justify-start text-4xl">
                {title}
            </div>
        </CardTitle>
        <CardDescription className="mt-3">
            <Image src={Img} width={20} height={30} alt="item"/>
             <span className="block mt-1">{date}</span>
        </CardDescription>
      </Card>
      </div>
  );
}
