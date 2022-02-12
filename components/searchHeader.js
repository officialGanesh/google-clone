import {
  CogIcon,
  DotsVerticalIcon,
  MicrophoneIcon,
  SearchIcon,
  XIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import HeaderTagItems from "./headerTagItems";

function SearchHeader() {
  const router = useRouter(null);
  const inputRef = useRef(null);

  const formHandler = (e) => {
    e.preventDefault();
    const term = inputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 space-x-4 items-center ">
        <Image
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          alt="google-logo"
          height={40}
          width={120}
          onClick={() => {
            router.push("/");
          }}
          className="cursor-pointer"
        />

        <form className="flex border flex-grow border-gray-200 rounded-full shadow-lg px-6 py-2 ml-10  max-w-3xl mr-3">
          <input
            type="text"
            ref={inputRef}
            className="flex-grow w-full focus:outline-none"
            
          />

          <XIcon
            className="h-7 sm:mr-3
            text-gray-500 cursor-pointer
            transition duration-100 transform hover:scale-125
            "
            onClick={() => {
              inputRef.current.value = "";
            }}
          />

          <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 " />

          <SearchIcon className=" h-6 text-blue-500 hidden sm:inline-flex  " />

          <button type="submit" hidden onClick={formHandler}></button>
        </form>
      </div>
      <HeaderTagItems />
    </header>
  );
}

export default SearchHeader;
