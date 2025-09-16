"use client";

import Hero from "@/components/asuntos-radialogicos-nucleares/Hero";
import WarningSession from "@/components/asuntos-radialogicos-nucleares/WarningSession";
import RadiationSession from "@/components/asuntos-radialogicos-nucleares/RadiationSession";
import Ionizantes from "@/components/asuntos-radialogicos-nucleares/Ionizantes";
import Resolution from "@/components/asuntos-radialogicos-nucleares/Resolution";
import Importance from "@/components/asuntos-radialogicos-nucleares/Importance";
import Radiological from "@/components/asuntos-radialogicos-nucleares/Radiological";
import EmitionsSession from "@/components/asuntos-radialogicos-nucleares/EmitionsSession";
import ProgressBar from "@/components/asuntos-radialogicos-nucleares/ProgressBar";
import NuclearEvolution from "@/components/asuntos-radialogicos-nucleares/NuclearEvolution";
import AuthorizationTypes from "@/components/asuntos-radialogicos-nucleares/AuthorizationTypes";
import UsedCountry from "@/components/asuntos-radialogicos-nucleares/UsedCountry";

export default function Nuclear() {
  return (
    <>
      <Hero />
      <RadiationSession />
      <Ionizantes />
      <WarningSession />
      
      <UsedCountry />
      <Radiological />
      <ProgressBar currentStep={5} />
      <AuthorizationTypes />
      <EmitionsSession />
      <NuclearEvolution />
      <Resolution />
      <Importance />
    </>
  );
}