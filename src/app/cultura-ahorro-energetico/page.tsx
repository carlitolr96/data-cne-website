"use client";

import Hero from "@/components/cultura-ahorro-energetico/Hero"
import TextoSection from "@/components/cultura-ahorro-energetico/TextoSection";
import DisseminationProgram from "@/components/cultura-ahorro-energetico/DisseminationProgram";
import Sensitized from "@/components/cultura-ahorro-energetico/Sensitized";
import Goal from "@/components/cultura-ahorro-energetico/Goal"
import Satisfaction from "@/components/cultura-ahorro-energetico/Satisfaction"
import Teams from "@/components/cultura-ahorro-energetico/Teams";
import MapsLocation from "@/components/cultura-ahorro-energetico/MapsLocation"
import Syllabus from "@/components/cultura-ahorro-energetico/Syllabus";

export default function CulturaAhorroEnergetico() {
  return (
    <>
      <Hero />
      <TextoSection />
      <DisseminationProgram />
      <Syllabus />
      <Sensitized />
      <Goal />
      <Satisfaction />
      <Teams />
      <MapsLocation />
    </>
  )
}
