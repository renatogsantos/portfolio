"use client";
import { Button } from "@nextui-org/react";

type buttonData = {
  title: string;
  onClick: () => void;
};

export default function MainButton({ title, onClick }: buttonData) {
  return (
    <Button
      size="lg"
      className="bg-gradient-to-r from-main-400 via-main-300 to-main-100 shadow-lg shadow-main-300/30 text-white font-bold w-fit"
      onClick={onClick}
    >
      {title}
    </Button>
  );
}
