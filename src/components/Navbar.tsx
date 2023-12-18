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
  Tooltip,
} from "@nextui-org/react";
import MainSwitch from "./Switch";
import { CalendarPlus, LinkedinLogo } from "@phosphor-icons/react";

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
              color="primary"
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

      <NavbarContent justify="end" className="gap-2">
        <NavbarItem>
          <MainSwitch />
        </NavbarItem>
        <NavbarItem>
          <Tooltip
            placement="bottom"
            showArrow={true}
            content="Agendar Reunião"
            color="primary"
          >
            <Button
              isIconOnly
              variant="bordered"
              aria-label="Agendar Reunião"
              as={Link}
              target="_blank"
              href="https://calendar.app.google/7ZiptucnE3S7YABH7"
            >
              <CalendarPlus size={24} weight="duotone" />
            </Button>
          </Tooltip>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        <NavbarMenuItem>
          <Link
            className="font-medium w-full text-main-700 dark:text-white flex items-center gap-2"
            href="https://calendar.app.google/7ZiptucnE3S7YABH7"
            target="_blank"
            size="lg"
          >
            <CalendarPlus size={24} weight="duotone" /> Agendar Reunião
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
