"use client";
import { Button } from "@nextui-org/react";

type buttonData = {
  title: string;
};

export default function MainButton({ title }: buttonData) {
  return (
    <Button size="lg" className="bg-gradient-to-r from-main-400 to-main-200 text-white font-bold w-fit">
      {title}
    </Button>
  );
}
