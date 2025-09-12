"use client";

import Hero from "@/components/nuclear/Hero";
import WarningSession from "@/components/nuclear/WarningSession";
import RadiationSession from "@/components/nuclear/RadiationSession";
import Ionizantes from "@/components/nuclear/Ionizantes";

import Resolution from "@/components/nuclear/Resolution";
import Importance from "@/components/nuclear/Importance";
import Radiological from "@/components/nuclear/Radiological";

export default function Nuclear() {
  return (
    <>
      <Hero />
      <RadiationSession />
      <Ionizantes />
      <WarningSession />

      <Radiological />
      <Resolution />
      <Importance />
    </>
  );
}