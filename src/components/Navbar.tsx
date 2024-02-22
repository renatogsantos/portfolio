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
  Modal,
  useDisclosure,
  ModalContent,
} from "@nextui-org/react";
import MainSwitch from "./Switch";
import {
  CalendarPlus,
  GithubLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";

export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Navbar onMenuOpenChange={setIsMenuOpen} isBordered maxWidth="2xl">
        <NavbarContent>
          <NavbarBrand>
            <span className="text-2xl font-extrabold">
              Studio<span className="text-main-100">Digital</span>
            </span>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <a href="#" className="font-medium text-main-700 dark:text-white">
              Início
            </a>
          </NavbarItem>
          <NavbarItem>
            <a
              href="#presenca"
              className="font-medium text-main-700 dark:text-white"
            >
              Presença Online
            </a>
          </NavbarItem>
          <NavbarItem>
            <a
              href="#sobre"
              className="font-medium text-main-700 dark:text-white"
            >
              Sobre nós
            </a>
          </NavbarItem>
          <NavbarItem>
            <a
              href="#showcase"
              className="font-medium text-main-700 dark:text-white"
            >
              Showcase
            </a>
          </NavbarItem>
          <NavbarItem>
            <a
              href="#jornada"
              className="font-medium text-main-700 dark:text-white"
            >
              Jornada
            </a>
          </NavbarItem>
          <NavbarItem>
            <a
              href="#contato"
              className="font-medium text-main-700 dark:text-white"
            >
              Contato
            </a>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end" className="gap-2">
          <NavbarItem>
            <MainSwitch />
          </NavbarItem>
        </NavbarContent>

        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />

        <NavbarMenu>
          <NavbarMenuItem>
            <Link
              className="font-medium w-full text-main-700 dark:text-white flex items-center gap-2"
              href="https://calendar.app.google/7ZiptucnE3S7YABH7"
              target="_blank"
              size="lg"
            >
              <CalendarPlus size={24} weight="duotone" /> Reservar horário
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <a
              href="#presenca"
              className="font-medium text-main-700 dark:text-white"
            >
              Presença Online
            </a>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <a
              href="#sobre"
              className="font-medium text-main-700 dark:text-white"
            >
              Sobre nós
            </a>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <a
              href="#showcase"
              className="font-medium text-main-700 dark:text-white"
            >
              Showcase
            </a>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <a
              href="#jornada"
              className="font-medium text-main-700 dark:text-white"
            >
              Jornada
            </a>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <a
              href="#contato"
              className="font-medium text-main-700 dark:text-white"
            >
              Contato
            </a>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
}
