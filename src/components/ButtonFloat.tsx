"use client";
import { Avatar, Link } from "@nextui-org/react";
import { LinkedinLogo } from "@phosphor-icons/react";

export default function ButtonFloat() {
  return (
    <div className="bg-white dark:bg-main-700 p-3 pr-6 shadow-xl rounded-full lg:flex items-center gap-2 fixed bottom-6 left-6 hidden">
      <Avatar
        isBordered
        color="success"
        src="https://github.com/renatogsantos.png"
      />
      <div className="flex flex-col gap-1">
        <span className="text-small font-bold m-0 p-0 leading-none">
          Renato G Santos
        </span>
        <Link
          href="https://www.linkedin.com/in/renato-g-santos/"
          aria-label="Perfil Linkedin"
          target="_blank"
          className="text-[12px] font-medium m-0 p-0 leading-none text-main-700 dark:text-white"
        >
          <LinkedinLogo size={16} weight="duotone" /> Perfil Linkedin
        </Link>
      </div>
    </div>
  );
}
