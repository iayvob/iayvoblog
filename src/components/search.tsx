"use client";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { CopyIcon, DoorOpenIcon, Settings2Icon } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card, CardDescription, CardTitle } from "./ui/card";
import Image from "next/image";
import { content } from "@/lib/content";

export default function Search() {
  const [searchText, setSearchText] = useState<string>("");
  const [searchResult, setSearchResult] = useState<{
    title: string;
    index: number;
    date: string;
    img: any;
  } | null>(null);
  const [searchPerformed, setSearchPerformed] = useState<boolean>(false);
  const [currentUrl, setCurrentUrl] = useState<string>('');

  useEffect(() => {
    // Ensure this runs only on the client side
    setCurrentUrl(window.location.href);
  }, []);

  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      alert('Link copied to clipboard!');
    }).catch((err) => {
      console.error('Failed to copy the link: ', err);
    });
  };

  let doc = content;

  const handleSearch = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    const searchTerm = searchText.trim().toLowerCase();

    const matchingDocs = doc.find((art: any) =>
      art.title.toLowerCase().includes(searchTerm)
    );

    if (matchingDocs) {
      setSearchResult({
        title: matchingDocs.title,
        img: matchingDocs.Img,
        date: matchingDocs.date,
        index: matchingDocs.index,
      });
    } else {
      setSearchResult(null);
    }

    setSearchPerformed(true);
  };

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -75 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col"
      >
        <h1 className="mt-24 flex text-xl font-semibold justify-center">
          All Documentations
        </h1>
        <div className="flex justify-end">
          <form
            className="mt-8 w-full flex justify-center gap-3"
            onSubmit={handleSearch}
          >
            <Button className="rounded-l-xl" variant={"default"}>
              <Settings2Icon />
            </Button>
            <Input
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="max-w-[60%] !rounded-lg"
              required
            />
            <Button type="submit" className="rounded-r-xl" variant={"default"}>
              Search
            </Button>
          </form>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-100 mt-10 mb-10 duration-100"
      >
        {searchPerformed ? (
          searchResult !== null ? (
            <div className="flex flex-col justify-center gap-y-8">
              <div className="flex justify-center"><Card className="sm:h-[30rem] sm:w-[36rem] w-[28rem] h-[26rem] p-8 !rounded-xl">
                <CardTitle className="w-full flex flex-col gap-3">
                  <div className="flex gap-3">
                    <Link href={`/${searchResult.index}`}>
                      <Button variant={"default"}>
                        read Doc <DoorOpenIcon />
                      </Button>
                    </Link>
                    <button onClick={copyLinkToClipboard}>
                      <CopyIcon />
                    </button>
                  </div>
                  <div className="justify-start text-4xl">
                    {searchResult.title}
                  </div>
                </CardTitle>
                <CardDescription className="mt-3">
                  <Image
                    src={searchResult.img}
                    width={20}
                    height={30}
                    alt="item"
                  />
                  <span className="block mt-1">{searchResult.date}</span>
                </CardDescription>
              </Card></div>
              <h1 className="flex justify-center text-2xl -mb-12 underline">Other Docs</h1>
            </div>
          ) : (
            <div className="text-center w-full mb-16">
              <p>No matching articles found.</p>
            </div>
          )
        ) : null}
      </motion.div>
    </div>
  );
}