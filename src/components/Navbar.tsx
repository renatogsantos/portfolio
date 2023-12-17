"use client";
import { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Avatar,
} from "@nextui-org/react";
import MainSwitch from "./Switch";
import { LinkedinLogo } from "@phosphor-icons/react";

export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      isBordered
      maxWidth="2xl"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <div className="flex items-center gap-2">
            <Avatar
              isBordered
              color="success"
              src="https://github.com/renatogsantos.png"
            />
            <div className="flex flex-col gap-1">
              <span className="text-small font-bold m-0 p-0 leading-none">Renato G Santos</span>
              <Link
                href="https://www.linkedin.com/in/renato-g-santos/"
                className="text-[12px] font-medium m-0 p-0 leading-none text-main-700 dark:text-white"
              >
                <LinkedinLogo size={16} weight="duotone" /> Perfil Linkedin
              </Link>
            </div>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link
            href="#"
            className="text-main-700 dark:text-white font-medium hover:text-main-100"
          >
            Início
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="https://calendar.app.google/7ZiptucnE3S7YABH7"
            target="_blank"
            className="text-main-700 dark:text-white font-medium hover:text-main-100"
          >
            Agendamento
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            className="text-main-700 dark:text-white font-medium hover:text-main-100"
          >
            Sobre nós
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="#"
            className="text-main-700 dark:text-white font-medium hover:text-main-100"
          >
            Soluções
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <MainSwitch />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
