"use client";

import Hero from "@/components/generacion-distribuida/Hero";
import ElectricalSystem from "@/components/generacion-distribuida/ElectricalSystem"
import DistributedGeneration from "@/components/generacion-distribuida/DistributedGeneration"
import Best from "@/components/generacion-distribuida/Best"
import StorySession from "@/components/generacion-distribuida/StorySession";
import Benefits from "@/components/generacion-distribuida/Benefits";
import CNEContribution from "@/components/generacion-distribuida/CNEContribution";
import PMNSection from "@/components/generacion-distribuida/PMNSection"
import Sector from "@/components/generacion-distribuida/Sector"
import Regulations from "@/components/generacion-distribuida/Regulations";

export default function GeneracionDistribuida() {
  return (
    <>
      <Hero />
      <ElectricalSystem />
      <DistributedGeneration />
      <Best />
      <StorySession />
      <Benefits />
      <CNEContribution />
      <PMNSection />
      <Sector />
      <Regulations />
    </>
  );
}
