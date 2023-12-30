"use client";
import { Button } from "@nextui-org/react";

type buttonData = {
  title: string;
  onClick: () => void;
  typeButton: "button" | "submit" | "reset"
};

export default function MainButton({ title, onClick, typeButton }: buttonData) {
  return (
    <Button
      size="lg"
      type={typeButton}
      className="bg-gradient-to-r from-main-400 via-main-300 to-main-100 shadow-md text-white font-bold w-fit"
      onClick={onClick}
    >
      {title}
    </Button>
  );
}
