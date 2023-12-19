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
import { CalendarPlus, LinkedinLogo } from "@phosphor-icons/react";

export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="5xl">
        <ModalContent>
          <div className="py-12">
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0bRWPoffqHJ4DJg74H-HKmLTzhAZYoNR8lKCf790odddlQjauIx03_s0ygb5C66R6oi6sb1M_D?gv=true"
              style={{ border: 0 }}
              width="100%"
              height="600"
            />
          </div>
        </ModalContent>
      </Modal>
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
              content="Reservar horário"
              color="primary"
            >
              <Button
                isIconOnly
                variant="bordered"
                aria-label="Reservar horário"
                target="_blank"
                onClick={onOpen}
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
              <CalendarPlus size={24} weight="duotone" /> Reservar horário
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
}
