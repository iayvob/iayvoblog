import React from "react";
import { comments } from "@/lib/topComments";
import { Card, CardDescription, CardTitle } from "./ui/card";

type commentProps = (typeof comments)[number];

export default function Comment({ date, Content, user }: commentProps) {
  return (
    <div>
      <Card className="h-[5rem] w-[15rem] p-2 rounded-xl">
        <CardTitle className="flex text-xs items-center">
          {user} <span className="text-[0.5rem]">⭐</span>
        </CardTitle>
        <CardDescription className="text-[0.6rem]">
          {Content} <span className="block">{date}</span>
        </CardDescription>
      </Card>
    </div>
  );
}
