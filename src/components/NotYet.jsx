import React from "react";
import { Button } from "../utils";
import { useRouter } from "next/router";

const NotYet = () => {
  const router = useRouter();
  return (
    <>
      <div className="w-full" id="notyet">
        <div className="container flex flex-col items-center justify-center">
          <h1 className="text-blue dark:text-gray uppercase mb-4">
            not yet ready this page!
          </h1>
          <Button onClick={() => router.push("/")} className="capitalize">
            Come back soon
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotYet;
