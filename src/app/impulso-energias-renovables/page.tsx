"use client";

import Hero from "@/components/impulso-energias-renovables/Hero";
import Operations from "@/components/impulso-energias-renovables/Operations";
import ReportingTiles from "@/components/impulso-energias-renovables/ReportingTiles";
import FeedGrid from "@/components/impulso-energias-renovables/FeedGrid";
import Concession from "@/components/impulso-energias-renovables/Concession";
import GenerationCapacity from "@/components/impulso-energias-renovables/GenerationCapacity";

export default function ImpulsoEnergíasRenovables() {
  return (
    <>
      <Hero />
      <GenerationCapacity />
      <Operations />
      <ReportingTiles />
      <Concession />
      <FeedGrid />
    </>
  );
}
