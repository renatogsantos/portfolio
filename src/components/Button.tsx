"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";

type buttonData = {
  title: string;
  onClick: () => void;
  onPress: () => void;
  typeButton: "button" | "submit" | "reset";
  icon: any;
  size: boolean;
  link: string;
};

export default function MainButton({
  title,
  onClick,
  onPress,
  typeButton,
  icon,
  size,
  link,
}: buttonData) {
  return (
    <>
      {link ? (
        <Button
          size="lg"
          type={typeButton}
          className={`bg-gradient-to-r from-main-400 via-main-300 to-main-100 shadow-md text-white font-bold flex gap-2 ${
            size ? "w-full" : "w-fit"
          }`}
          as={Link}
          href={link}
          target="_blank"
        >
          {icon}
          {title}
        </Button>
      ) : (
        <Button
          size="lg"
          type={typeButton}
          className={`bg-gradient-to-r from-main-400 via-main-300 to-main-100 shadow-md text-white font-bold flex gap-2 ${
            size ? "w-full" : "w-fit"
          }`}
          onClick={onClick}
          onPress={onPress}
        >
          {icon}
          {title}
        </Button>
      )}
    </>
  );
}
