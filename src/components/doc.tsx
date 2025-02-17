import React from "react";
import { Card, CardDescription, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { content } from "@/lib/content";
import Link from "next/link";
import CopyLink from "./copyLink";

type contentProps = (typeof content)[number];

export default function Doc({ title, Img, date, link }: contentProps) {

  return (
    <div className="flex justify-center">
      <Card className="sm:h-[30rem] sm:w-[36rem] w-[28rem] h-[26rem] p-8 !rounded-xl">
        <CardTitle className="w-full flex flex-col gap-3">
          <div className="flex gap-3 items-center">
            <Link href={link}>
              <Button className="flex items-center gap-3 rounded-xl">
                read Doc <ExternalLink />
              </Button>
            </Link>
            <CopyLink link={link} />
          </div>
          <div className="justify-start text-4xl">{title}</div>
        </CardTitle>
        <CardDescription className="mt-3">
          <Image src={Img} width={300} height={300} alt="item" className="w-[200px] md:w-[300px]"/>
          <span className="block mt-1">{date}</span>
        </CardDescription>
      </Card>
    </div>
  );
}
