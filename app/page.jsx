"use client"

import { createContext } from "react";

import { Noto_Sans, Noto_Nastaliq_Urdu } from "next/font/google";

import { Hero } from "@/app/components/Hero";
import { Catering } from "@/app/components/Catering";
import { Bento } from "@/app/components/Bento";

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
export const UserFont = createContext();
const Fonts = {
  Noto,
  NotoNum
}

export default function Home() {
  return (
    <>
      <Hero />
      <UserFont.Provider value={Fonts}>
        <Catering />
        <Bento/>
      </UserFont.Provider>
    </>
  )
}
