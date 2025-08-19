import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IconType } from "react-icons";

import logoCNE from "./Logo-CNE.svg";
import logoDataCNE from "./Logo-DataCNE.svg";
import DevelopingMarketing from "./Developing-Marketing.svg";
import LawDoc from "./Law-Doc.svg";
import NuclearMark from "./Nuclear-Mark.svg";
import PowerManagement from "./Power-Management.svg";
import RenewableEnergy from "./Renewable-Energy.svg";
import PanelEnergy from "./Panel-Energy.svg";
import GrapChart from "./Grap-Chart.svg";

import TapIcon from "./Tap-Icon.svg";

import ImageEscuela from "../../public/image-1.jpg";
import ImageComunidad from "../../public/image-2.jpg";
import ImageGente from "../../public/image-3.jpg";
import ImageBarrio from "../../public/image-4.jpg";
import LogoEnergiaCambio from "./Logo-Energia-Cambio.svg";
import Bulk from "../assets/Bulk.svg";
import Money from "../assets/Money.svg";
import Oil from "../assets/Oil.svg";
import Petrolium from "../assets/Petrolium.svg";
import BoxChart from "../assets/Box-Chart.svg";
import LocartionIcon from "../assets/Location-Icon.svg";
import HansIcon from "../assets/Hans-Icon.svg";
import ArrowUpWideIcon from "../assets/Arrow-Up-Wide-Icon.svg";
import ImageLoader from "../../public/image-loader.jpg";
import BoxLine from "../assets/Box-Line.svg";
import BoxPlus from "../assets/Box-Plus.svg";
import DocumentIcon from "../assets/Document-Icon.svg";
import HansStageIcon from "../assets/Hans-Stage-Icon.svg";
import SavingIcon from "../assets/Saving-Icon.svg";
import HomeNav from "../assets/Home-Nav.svg";
import ZapNav from "../assets/Zap-Nav.svg";
import LightBulbNav from "../assets/LightBulb-Nav.svg";
import FileTextNav from "../assets/FileText-Nav.svg";
import SolarNav from "../assets/Solar-Nav.svg";
import BatteryNav from "../assets/Battery-Nav.svg";
import NuclearNav from "../assets/Nuclear-Nav.svg";
import BarChartNav from "../assets/BarChart-Nav.svg";
import MapaSVG from "../assets/Mapa-SVG.svg"

export const assets = {
  logoCNE,
  logoDataCNE,
  LawDoc,
  DevelopingMarketing,
  NuclearMark,
  PowerManagement,
  RenewableEnergy,
  PanelEnergy,
  GrapChart,
  ImageEscuela,
  ImageComunidad,
  ImageGente,
  ImageBarrio,
  LogoEnergiaCambio,
  Bulk,
  Money,
  Oil,
  Petrolium,
  BoxChart,
  LocartionIcon,
  HansIcon,
  TapIcon,
  ArrowUpWideIcon,
  ImageLoader,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  BoxPlus,
  BoxLine,
  DocumentIcon,
  HansStageIcon,
  SavingIcon,
  HomeNav,
  ZapNav,
  LightBulbNav,
  FileTextNav,
  SolarNav,
  BatteryNav,
  NuclearNav,
  BarChartNav,
  MapaSVG
} as const;

export interface NavItemsOne {
  icon: string;
  label: string;
  url?: string;
  active?: boolean;
}

export interface SocialIcon {
  id: string;
  icon: IconType;
  url: string;
}

export interface StageIcon {
  id: string;
  title: string;
  description: string;
  icon: string;
  leftLabel?: string;
  rightLabel?: string;
}

export interface SlideOperations {
  img: string;
  location: string;
}

export interface ReportingTile {
  id: string;
  number: string;
  description: string;
  icon: string;
}

export interface Category {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
}

export const navitemsone: NavItemsOne[] = [
  { icon: HomeNav, label: "INICIO", url: "/" },
  { icon: ZapNav, label: "PLAN ENERGÉTICO NACIONAL", url: "/plan-energetico" },
  { icon: BatteryNav, label: "IMPULSO A LAS ENERGÍAS RENOVABLES", url: "/impulso" },
  { icon: SolarNav, label: "GENERACIÓN DISTRIBUIDA", url: "/generacion" },
  { icon: FileTextNav, label: "PLANES Y NORMATIVAS", url: "/planes" },
  { icon: NuclearNav, label: "ASUNTOS RADIOLÓGICOS Y NUCLEARES", url: "/nuclear" },
  { icon: LightBulbNav, label: "CULTURA DE AHORRO ENERGÉTICO", url: "/cultura" },
  { icon: BarChartNav, label: "TABLEROS INTERACTIVOS", url: "/tableros" },
];

export const slideoperations: SlideOperations[] = [
  {
    img: "https://api.dataifx.co:8010/sites/default/files/styles/original/public/2023-01/CATATUMBO%201.jpg?itok=k7bPKQIp",
    location: "Location 1",
  },
  {
    img: "https://api.dataifx.co:8010/sites/default/files/styles/original/public/2023-01/CATATUMBO%201.jpg?itok=k7bPKQIp",
    location: "Location 2",
  },
  {
    img: "https://api.dataifx.co:8010/sites/default/files/styles/original/public/2023-01/CATATUMBO%201.jpg?itok=k7bPKQIp",
    location: "Location 3",
  },
];

export const reportingtile: ReportingTile[] = [
  {
    id: "1",
    number: "7,179 MM",
    description: "Recomendación de incentivos a concesionarios",
    icon: Money,
  },
  {
    id: "2",
    number: "55,138",
    description: "Empleos Creados, concesiones definitivas",
    icon: Bulk,
  },
  {
    id: "3",
    number: "3,201,007",
    description: "Estimación de toneladas de co2 equivalentes evitadas",
    icon: Petrolium,
  },
  {
    id: "4",
    number: "7,697,586",
    description: "Estimación de barriles equivalentes de petróleo ahorrados",
    icon: Oil,
  },
];

export const categories: Category[] = [
  {
    id: "1",
    title: "Impulso a las",
    subtitle: "Energías Renovables",
    icon: RenewableEnergy,
    color: "text-red-500",
  },
  {
    id: "2",
    title: "Plan Energético",
    subtitle: "Nacional",
    icon: DevelopingMarketing,
    color: "text-red-500",
  },
  {
    id: "3",
    title: "Planes y",
    subtitle: "normativas",
    icon: LawDoc,
    color: "text-red-500",
  },
  {
    id: "4",
    title: "Cultura de",
    subtitle: "ahorro energético",
    icon: PowerManagement,
    color: "text-red-500",
  },
  {
    id: "5",
    title: "Asuntos radiológicos",
    subtitle: "y Nucleares",
    icon: NuclearMark,
    color: "text-yellow-500",
  },
  {
    id: "6",
    title: "Generación",
    subtitle: "Distribuida",
    icon: PanelEnergy,
    color: "text-red-500",
  },
];

export const socialicon: SocialIcon[] = [
  {
    id: "1",
    url: "https://facebook.com",
    icon: FaFacebookF,
  },
  {
    id: "2",
    url: "https://instagram.com",
    icon: FaInstagram,
  },
  {
    id: "3",
    url: "https://linkedin.com",
    icon: FaTwitter,
  },
  {
    id: "4",
    url: "https://youtube.com",
    icon: FaYoutube,
  },
];

export const stageicon: StageIcon[] = [
  {
    id: "01",
    title: "FASE INICIAL (CONCESIÓN PROVISIONAL)",
    description:
      "Significa que un proyecto de energía renovable tiene un permiso inicial que autoriza estudios para evaluar la viabilidad del proyecto, pero no su construcción ni operación.",
    icon: DocumentIcon,
  },
  {
    id: "02",
    title: "CONCESIÓN DEFINITIVA",
    description:
      "Significa que el proyecto cuenta con una autorización oficial tras cumplir con todos los requisitos legales, técnicos y ambientales, permitiendo la construcción y operación.",
    icon: HansStageIcon,
  },
  {
    id: "03",
    title: "CONSTRUCCIÓN",
    description:
      "El proyecto está en la fase de instalación de la infraestructura necesaria para generar electricidad, como paneles solares, aerogeneradores o turbinas hidroeléctricas.",
    icon: BoxPlus,
  },
  {
    id: "04",
    title: "OPERACIÓN",
    description:
      "El proyecto entra en funcionamiento, generando y suministrando energía a la red con monitoreo y mantenimiento continuo.",
    icon: BoxLine,
  },
];
