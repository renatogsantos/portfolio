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
            <a href="#" className="font-medium text-main-700 dark:text-white">
              Início
            </a>
          </NavbarItem>
          <NavbarItem>
            <a
              href="#presence"
              className="font-medium text-main-700 dark:text-white"
            >
              Presença Online
            </a>
          </NavbarItem>
          <NavbarItem>
            <a
              href="#aboutus"
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
              href="#contact"
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
        </NavbarMenu>
      </Navbar>
    </>
  );
}
