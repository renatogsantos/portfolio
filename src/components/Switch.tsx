"use client";
import React, { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { Moon, SunDim } from "@phosphor-icons/react";
import { useTheme } from "next-themes";

export default function MainSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <Switch
      id="tema"
      name="tema"
      aria-label="Alterar tema"
      defaultSelected
      size="lg"
      color="primary"
      startContent={<SunDim size={24} weight="duotone" />}
      endContent={<Moon size={24} weight="duotone" />}
      onChange={(e) => {
        let tema = e.target.checked ? "light" : "dark";
        setTheme(tema);
      }}
    />
  );
}
