"use client";
import { Button } from "@nextui-org/react";

type buttonData = {
  title: string;
  onClick: () => void;
  onPress: () => void;
  typeButton: "button" | "submit" | "reset";
  icon: any;
  size: boolean;
};

export default function MainButton({
  title,
  onClick,
  onPress,
  typeButton,
  icon,
  size,
}: buttonData) {
  return (
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
  );
}
