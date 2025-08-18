"use client";

import Hero from "@/components/impulso-energias-renovables/Hero";
import Operations from "@/components/impulso-energias-renovables/Operations";
import ReportingTiles from "@/components/impulso-energias-renovables/ReportingTiles";
import FeedGrid from "@/components/impulso-energias-renovables/FeedGrid";
import Concession from "@/components/impulso-energias-renovables/Concession";
import GenerationCapacity from "@/components/impulso-energias-renovables/GenerationCapacity";
import RenewableEnergies from "@/components/impulso-energias-renovables/RenewableEnergies";
import ElectricityHome from "@/components/impulso-energias-renovables/ElectricityHome";
import Loarder from "@/components/impulso-energias-renovables/Loarder";
import MapsLocation from "@/components/impulso-energias-renovables/MapsLocation"
import Storage from "@/components/impulso-energias-renovables/Storage"
import Stage from "@/components/impulso-energias-renovables/Stage";

import Saving from "@/components/impulso-energias-renovables/Saving"

export default function ImpulsoEnergíasRenovables() {
  return (
    <>
      <Hero />
      <RenewableEnergies />
      <ElectricityHome />
      <Loarder />
      <GenerationCapacity />
      <Operations />
      <ReportingTiles />
      <MapsLocation />
      <Concession />
      <Storage />
      <Stage />
      <FeedGrid />
      <Saving />
    </>
  );
}
