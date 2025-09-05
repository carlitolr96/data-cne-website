"use client";

import Hero from "@/components/generacion-distribuida/Hero";
import ElectricalSystem from "@/components/generacion-distribuida/ElectricalSystem"
import DistributedGeneration from "@/components/generacion-distribuida/DistributedGeneration"

export default function GeneracionDistribuida() {
  return (
    <>
      <Hero />
      <ElectricalSystem />
      <DistributedGeneration />
    </>
  );
}
