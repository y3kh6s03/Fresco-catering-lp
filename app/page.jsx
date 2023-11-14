"use client"

import { createContext } from "react";

import { Noto_Sans, Noto_Nastaliq_Urdu } from "next/font/google";

import { Hero } from "@/app/components/Hero";
import { Catering } from "@/app/components/Catering";
import cateringContents from "app/JSON/cateringContents.json";
import { Staff } from "@/app/components/staff";
import { Contact } from "@/app/components/Contact";

const Noto = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "800"],
  display: "swap"
})
const NotoNum = Noto_Nastaliq_Urdu({
  subsets: ["latin"],
  weight: ["700"],
  display: "swap"
})
export const UseFont = createContext();
const Fonts = {
  Noto,
  NotoNum
}

export const UseContents = createContext();

export default function Home() {
  return (
    <>
      <UseContents.Provider value={cateringContents}>
        <UseFont.Provider value={Fonts}>
          <Hero />
          <Catering />
          <Staff />
          <Contact />
        </UseFont.Provider>
      </UseContents.Provider>
    </>
  )
}
