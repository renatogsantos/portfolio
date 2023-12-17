"use client";
import { Code, PaintBrush, RocketLaunch } from "@phosphor-icons/react";
import MainButton from "../Button";

export default function HomeSection() {
  return (
    <>
      <div className="container mx-auto rounded-3xl dark:bg-slate-800 bg-white mt-12 shadow-lg grid lg:grid-cols-2">
        <div className="flex flex-col gap-6 p-10 lg:p-24">
          <p className="text-main-700 dark:text-white text-1xl xl:text-2xl font-bold">
            Construindo o futuro
            <br /> através de design e tecnologia
          </p>
          <h1
            className="text-4xl lg:text-6xl xl:text-8xl font-extrabold text-main-700 dark:text-white"
            defaultValue="Studio Digital"
          >
            Studio<span className="text-main-100">Digital</span>
          </h1>
          <p className="text-main-700 dark:text-white text-2xl xl:text-3xl font-bold">
            Seu sucesso é nossa missão
          </p>
          <MainButton title="Entre em contato" onClick={()=>{console.log("oi")}} />
          <div className="flex items-center gap-4">
            <span className="flex items-center font-medium text-main-700 dark:text-white">
              <PaintBrush size={24} weight="duotone" />
              Design
            </span>
            <span className="flex items-center font-medium text-main-700 dark:text-white">
              <Code size={24} weight="duotone" />
              Coding
            </span>
            <span className="flex items-center font-medium text-main-700 dark:text-white">
              <RocketLaunch size={24} weight="duotone" />
              Business
            </span>
          </div>
        </div>
        <div className="relative hidden lg:flex">
          <img
            draggable={false}
            src="/arrow-line.svg"
            alt="Linha pontilhada"
            className="arrow-line-home"
          />
          <img
            draggable={false}
            src="/man-home.png"
            alt="Homem gritando"
            className="man-home"
          />
        </div>
      </div>
    </>
  );
}
