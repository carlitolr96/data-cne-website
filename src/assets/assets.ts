import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { PiSolarPanelDuotone } from "react-icons/pi";
import { TbHome } from "react-icons/tb";
import { Home, Inbox, Calendar, Search, Settings } from "lucide-react";
import { IconType } from "react-icons";

//Components
import TapIcon from "./Tap-Icon.svg";

//Home Page Menu
import logoCNE from "./Logo-CNE.svg";
import logoDataCNE from "./Logo-DataCNE.svg";
import logoAzulDataCNE from "./logo-Azul-DataCNE.svg";
import DevelopingMarketing from "./Developing-Marketing.svg";
import LawDoc from "./Law-Doc.svg";
import NuclearMark from "./Nuclear-Mark.svg";
import PowerManagement from "./Power-Management.svg";
import RenewableEnergy from "./Renewable-Energy.svg";
import PanelEnergy from "./Panel-Energy.svg";
import GrapChart from "./Grap-Chart.svg";

//LandingPage Plan Energetico Nacional
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
import MapaOneSVG from "../assets/MapaOne-SVG.svg";
import MapaTwoSVG from "../assets/MapaTwo-SVG.svg";
import EllipseSVG from "../assets/Ellipse-SVG.svg";
import SolarPanel from "../assets/Solar-Panel.svg";
import EolicAir from "../assets/Eolic-Air.svg";
import BiomasaRSU from "../assets/Biomasa-RSU.svg";
import Minihidraulic from "../assets/Mini-Hidraulic.svg";
import DoneSheck from "../assets/Done-Sheck.svg";
import Generation from "../assets/Generation.svg";
import Transmicion from "../assets/Transmicion.svg";
import Electricity from "../assets/HomeEnergy.svg";
import HomeEnergy from "../assets/HomeEnergy.svg";
import Distribucion from "../assets/Distribucion.svg";
import Energy from "../assets/Energy.svg";
import Storage from "../assets/Storage.svg";
import Batery from "../assets/Batery-Icon.svg";
import AmericanLider from "../assets/American-Latin.svg";
import FireCard from "../assets/Fire-Card.svg";
import HeolicCard from "../assets/Heolic-Card.svg";
import HidraulicCard from "../assets/Hidraulic-Card.svg";
import SolarCard from "../assets/Solar-Card.svg";
import CardDerecho from "../assets/Card-Derecho.svg";
import CardIzquierdo from "../assets/Card-Izquierdo.svg";

//Cultura de Ahorro Energetico
import FemaleIcon from "../assets/FemaleIcon.svg";
import MasculeIcon from "../assets/MasculeIcon.svg";
import BackPackIcon from "../assets/BackpackIcon.svg";
import ClassIcon from "../assets/ClassIcon.svg";
import Conference from "../assets/ConferenceIcon.svg";

//Sidebar Tablero Dinamico
import ChartRenovableBar from "../assets/ChartRenovableBar.svg";
import EolicBar from "../assets/EolicBar.svg";
import MapaRDBar from "../assets/MapsRDBar.svg";
import MonitorBar from "../assets/MonitorBar.svg";
import NuclearBar from "../assets/NuclearBar.svg";
import PanelBar from "../assets/PanelBar.svg";
import PetroliumBar from "../assets/PetroliumBar.svg";
import VoltageTowerBar from "../assets/VoltageTowerBar.svg";
import HomeBar from "../assets/HomeBar.svg";
import TeamsIcon from "../assets/TemsIcon.svg";

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
  MapaOneSVG,
  MapaTwoSVG,
  EllipseSVG,
  SolarPanel,
  EolicAir,
  BiomasaRSU,
  Minihidraulic,
  DoneSheck,
  Home,
  Inbox,
  Calendar,
  Search,
  Settings,
  ChartRenovableBar,
  EolicBar,
  MapaRDBar,
  MonitorBar,
  NuclearBar,
  PanelBar,
  PetroliumBar,
  VoltageTowerBar,
  HomeBar,
  Generation,
  Transmicion,
  HomeEnergy,
  Electricity,
  Distribucion,
  Energy,
  Storage,
  Batery,
  AmericanLider,
  FireCard,
  HeolicCard,
  HidraulicCard,
  SolarCard,
  FemaleIcon,
  MasculeIcon,
  BackPackIcon,
  ClassIcon,
  Conference,
  TeamsIcon,
  logoAzulDataCNE,
  PiSolarPanelDuotone,
  TbHome,
  CardDerecho,
  CardIzquierdo,
} as const;

export interface TableroDinamicoBar {
  icon: IconType;
  title: string;
  url: string;
}

export interface NavItemsOne {
  icon: string;
  label: string;
  url?: string;
  active?: boolean;
}

export interface RenewableEnergiesList {
  description: string;
}

export interface RenewableEnergiesFonts {
  icon: string;
  title: string;
}

export interface SocialIcon {
  id: string;
  icon: IconType;
  url: string;
}

export interface StageIcon {
  id: number;
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
  url?: string;
}

export interface AttractiveReliable {
  label: string;
}

export interface TeamsNavBar {
  name: string;
  logo: React.ElementType;
  plan: string;
}

export interface ItemsNavBar {
  title: string;
  url: string;
  icon: React.ElementType;
}

export interface TeamMembers {
  name: string;
  role: string;
  img: string;
}

export interface EditionPen {
  image: string;
  description: string;
}

export const teammembers: TeamMembers[] = [
  {
    name: "John Doe",
    role: "Software Engineer",
    img: "https://spacema-dev.com/elevate/assets/images/team/1.jpg",
  },
  {
    name: "Jane Smith",
    role: "Graphic Designer",
    img: "https://spacema-dev.com/elevate/assets/images/team/4.jpg",
  },
  {
    name: "Alex Johnson",
    role: "Marketing Manager",
    img: "https://spacema-dev.com/elevate/assets/images/team/3.jpg",
  },
  {
    name: "Peter Johnson",
    role: "SEO Specialist",
    img: "https://spacema-dev.com/elevate/assets/images/team/2.jpg",
  },
  {
    name: "Emily Brown",
    role: "UX Designer",
    img: "https://spacema-dev.com/elevate/assets/images/team/5.jpg",
  },
  {
    name: "Michael Davis",
    role: "Frontend Developer",
    img: "https://spacema-dev.com/elevate/assets/images/team/6.jpg",
  },
  {
    name: "Sarah Johnson",
    role: "Content Writer",
    img: "https://spacema-dev.com/elevate/assets/images/team/7.jpg",
  },
  {
    name: "David Wilson",
    role: "Project Manager",
    img: "https://spacema-dev.com/elevate/assets/images/team/8.jpg",
  },
];

export const editionpen: EditionPen[] = [
  {
    image: "/portadas-pen-2025-04.png",
    description:
      "Un análisis detallado de cómo está hoy nuestro sistema eléctrico: generación, demanda, renovables, precios y cobertura.",
  },
  {
    image: "/portadas-pen-2025-1.png",
    description:
      "Modelos técnicos que indican qué tipo de plantas se necesitan, dónde y cuándo construirlas para responder a la demanda proyectada.",
  },
  {
    image: "/portadas-pen-2025-03.png",
    description:
      "Evaluación del potencial solar, eólico, hidráulico y de biomasa del país, con metas claras de expansión limpia.",
  },
  {
    image: "/portadas-pen-2025-01.png",
    description:
      "Proyecciones de consumo, crecimiento económico y necesidades futuras para asegurar energía suficiente y sostenible.",
  },
  {
    image: "/portadas-pen-2025-02.png",
    description:
      "Define cómo asegurar el suministro confiable de gas natural, GLP y otros combustibles clave en la matriz energética.",
  },
];

export const tablerodinamicobar: TableroDinamicoBar[] = [
  {
    icon: TbHome,
    title: "Inicio",
    url: "/tablero-dinamico/",
  },
  {
    icon: FaFacebookF,
    title: "Demanda Eléctrica Nacional",
    url: "/tablero-dinamico/demanda-electrica-nacional",
  },
  {
    icon: FaFacebookF,
    title: "Programa Medición Neta",
    url: "/tablero-dinamico/programa-medicion-neta",
  },
  {
    icon: FaFacebookF,
    title: "Mapa Energético Nacional",
    url: "/tablero-dinamico/mapa-energetico-nacional",
  },
  {
    icon: FaFacebookF,
    title: "Variables Macroeconómicas",
    url: "/tablero-dinamico/variable-macroeconomicas",
  },
  {
    icon: FaFacebookF,
    title: "Proyectos Renovables",
    url: "/tablero-dinamico/proyectos-renovables",
  },
  {
    icon: FaFacebookF,
    title: "Importación de Hidrocarburos",
    url: "/tablero-dinamico/importancia-hidrocarburos",
  },
  {
    icon: FaFacebookF,
    title: "Asuntos Nucleares",
    url: "/tablero-dinamico/asuntos-nucleares",
  },
  {
    icon: FaFacebookF,
    title: "Monitoreo SENI",
    url: "/tablero-dinamico/monitoreo-seni",
  },
];

export const itemsnavbar: ItemsNavBar[] = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export const teamsnavbar: TeamsNavBar[] = [
  {
    name: "Acme Inc.",
    logo: Home,
    plan: "Enterprise",
  },
  {
    name: "Startup XYZ",
    logo: Settings,
    plan: "Pro",
  },
];

export const renewableenergieslist: RenewableEnergiesList[] = [
  { description: "NO CONTAMINAN" },
  { description: "FUENTE INAGOTABLE DE RECURSOS" },
  { description: "GENERAN EMPLEOS" },
  { description: "AUMENTAN LA SEGURIDAD ENERGÉTICA" },
];

export const renewableenergiesfonts: RenewableEnergiesFonts[] = [
  {
    icon: SolarPanel,
    title: "Solar",
  },
  {
    icon: EolicAir,
    title: "Eolica",
  },
  {
    icon: BiomasaRSU,
    title: "Biomasa / RSU",
  },
  {
    icon: Minihidraulic,
    title: "Minihidraulica",
  },
];

export const navitemsone: NavItemsOne[] = [
  { icon: HomeNav, label: "INICIO", url: "/" },
  { icon: ZapNav, label: "PLAN ENERGÉTICO NACIONAL", url: "/plan-energetico" },
  {
    icon: BatteryNav,
    label: "IMPULSO A LAS ENERGÍAS RENOVABLES",
    url: "/impulso",
  },
  { icon: SolarNav, label: "GENERACIÓN DISTRIBUIDA", url: "/generacion" },
  { icon: FileTextNav, label: "PLANES Y NORMATIVAS", url: "/planes" },
  {
    icon: NuclearNav,
    label: "ASUNTOS RADIOLÓGICOS Y NUCLEARES",
    url: "/nuclear",
  },
  {
    icon: LightBulbNav,
    label: "CULTURA DE AHORRO ENERGÉTICO",
    url: "/cultura",
  },
  { icon: BarChartNav, label: "TABLEROS INTERACTIVOS", url: "/tableros" },
];

export const attractivereliable: AttractiveReliable[] = [
  {
    label: "Seguridad jurídica",
  },
  {
    label: "Agilidad administrativa",
  },
  {
    label: "Política atractiva de incentivos",
  },
  {
    label: "Transparencia en los contratos de compra y venta de energía",
  },
  {
    label: "Innovación y tecnología",
  },
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
    title: "Plan Energético",
    subtitle: "Nacional",
    icon: DevelopingMarketing,
    color: "text-red-500",
    url: "/plan-energetico-nacional",
  },
  {
    id: "2",
    title: "Impulso a las",
    subtitle: "Energías Renovables",
    icon: RenewableEnergy,
    color: "text-red-500",
    url: "/impulso-energias-renovables",
  },
  {
    id: "3",
    title: "Planes y",
    subtitle: "normativas",
    icon: LawDoc,
    color: "text-red-500",
    url: "",
  },
  {
    id: "4",
    title: "Cultura de",
    subtitle: "ahorro energético",
    icon: PowerManagement,
    color: "text-red-500",
    url: "/cultura-ahorro-energetico",
  },
  {
    id: "5",
    title: "Asuntos radiológicos",
    subtitle: "y Nucleares",
    icon: NuclearMark,
    color: "text-yellow-500",
    url: "",
  },
  {
    id: "6",
    title: "Generación",
    subtitle: "Distribuida",
    icon: PanelEnergy,
    color: "text-red-500",
    url: "",
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
    id: 1,
    title: "FASE INICIAL (CONCESIÓN PROVISIONAL)",
    description:
      "Significa que un proyecto de energía renovable tiene un permiso inicial que autoriza estudios para evaluar la viabilidad del proyecto, pero no su construcción ni operación.",
    icon: DocumentIcon,
  },
  {
    id: 2,
    title: "CONCESIÓN DEFINITIVA",
    description:
      "Significa que el proyecto cuenta con una autorización oficial tras cumplir con todos los requisitos legales, técnicos y ambientales, permitiendo la construcción y operación.",
    icon: HansStageIcon,
  },
  {
    id: 3,
    title: "CONSTRUCCIÓN",
    description:
      "El proyecto está en la fase de instalación de la infraestructura necesaria para generar electricidad, como paneles solares, aerogeneradores o turbinas hidroeléctricas.",
    icon: BoxPlus,
  },
  {
    id: 4,
    title: "OPERACIÓN",
    description:
      "El poyecto entra en funcionamiento, generando y suministrando energía a la red con monitoreo y mantenimiento continuo.",
    icon: BoxLine,
  },
];
