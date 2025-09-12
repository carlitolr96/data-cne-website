import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiSolarPanelDuotone } from "react-icons/pi";
import { Home, Inbox, Calendar, Search, Settings } from "lucide-react";
import { IconType } from "react-icons";

//Components
import TapIcon from "./Tap-Icon.svg";
import GrapChart from "./Grap-Chart.svg";

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
import ImageLoader from "../../public/ImageLoader.jpg";
import BoxLine from "../assets/Box-Line.svg";
import BoxPlus from "../assets/Box-Plus.svg";
import DocumentIcon from "../assets/Document-Icon.svg";
import HansStageIcon from "../assets/Hans-Stage-Icon.svg";
import SavingIcon from "../assets/Saving-Icon.svg";
import HomeNav from "../assets/Home-Nav.svg";
import ZapNav from "../assets/Zap-Nav.svg";
import LightBulbNav from "../assets/LightBulb-Nav.svg";
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
import TeamsIcon from "../assets/TemsIcon.svg";

//Sidebar Tablero Dinamico
import VoltageTowerBar from "../assets/VoltageTowerBar.svg";
import MapaRDBar from "../assets/MapaRDBar.svg";
import ChartRenovableBar from "../assets/ChartRenovableBar.svg";
import EolicBar from "../assets/EolicBar.svg";
import PetroliumBar from "../assets/PetroliumBar.svg";
import NuclearBar from "../assets/NuclearBar.svg";
import PanelBar from "../assets/PanelBar.svg";
import ElectricBar from "../assets/ElectricBar.svg";
import PanelSolarBar from "../assets/PanelSolarBar.svg";
import VoltageTowerAzulBar from "../assets/VoltageTowerAzulBar.svg";
import MapaRDAzulBar from "../assets/MapaRDAzulBar.svg";
import ChartRenovableAzulBar from "../assets/ChartRenovableAzulBar.svg";
import EolicAzulBar from "../assets/EolicAzulBar.svg";
import PetroliumAzulBar from "../assets/PetroliumAzulBar.svg";
import NuclearAzulBar from "../assets/NuclearAzulBar.svg";
import PanelAzulBar from "../assets/PanelAzulBar.svg";
// import ElectricAzulBar from "../assets/ElectricAzulBar.svg";
import PanelSolarAzulBar from "../assets/PanelSolarAzulBar.svg";

//Plan Energetico Nacional
import METARD2036 from "../assets/METARD2036.svg";
import CityPEN from "../assets/City-PEN.svg";
import ArrowBottomIcon from "../assets/Arrow-Bottom-Icon.svg";

//Generacion Distribuida
import SolarHomeGD from "../assets/SolarHomeGD.svg";
import RequestApprovalGD from "../assets/RequestApprovalGD.svg";
import QuoteGD from "../assets/QuoteGD.svg";
import CertificateGD from "../assets/CertificateGD.svg";
import BusinessBankingGD from "../assets/BusinessBankingGD.svg";
import FinanceBankingGD from "../assets/FinanceBankingGD.svg";
import PowerEnergyGD from "../assets/PowerEnergyGD.svg";
import RenewableEnergyGD from "../assets/RenewableEnergyGD.svg";
import CurrencyGD from "../assets/CurrencyGD.svg";

//Nuclear
import MedicineHeartNuclear from "../assets/MedicineHeartNuclear.svg";
import IndystryNuclear from "../assets/IndustryNuclear.svg";
import MedicineLiquidNuclear from "../assets/MedicineLiquidNuclear.svg";

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
  FaXTwitter,
  FaYoutube,
  BoxPlus,
  BoxLine,
  DocumentIcon,
  HansStageIcon,
  SavingIcon,
  HomeNav,
  ZapNav,
  LightBulbNav,
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
  NuclearBar,
  PanelBar,
  PetroliumBar,
  VoltageTowerBar,
  Generation,
  Transmicion,
  HomeEnergy,
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
  CardDerecho,
  CardIzquierdo,
  METARD2036,
  CityPEN,
  ArrowBottomIcon,
  ElectricBar,
  PanelSolarBar,
  VoltageTowerAzulBar,
  MapaRDAzulBar,
  ChartRenovableAzulBar,
  EolicAzulBar,
  PetroliumAzulBar,
  NuclearAzulBar,
  PanelAzulBar,
  PanelSolarAzulBar,
  SolarHomeGD,
  RequestApprovalGD,
  QuoteGD,
  CertificateGD,
  BusinessBankingGD,
  FinanceBankingGD,
  PowerEnergyGD,
  RenewableEnergyGD,
  CurrencyGD,
  MedicineHeartNuclear,
  IndystryNuclear,
  MedicineLiquidNuclear,
} as const;

export interface Requirements {
  icon: string;
  title: string;
}

export interface Benefits {
  icon: string;
  title: string;
  description: string;
  color: string;
}

export interface ItemSystem {
  icon: string;
  description: string;
}

export interface MainAxes {
  number: string;
  title: string;
  description: string;
}

export interface TableroDinamicoBar {
  icon: string;
  iconActive: string;
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

export interface LocationPoint {
  id: string;
  name: string;
  description: string;
  x: number;
  y: number;
}

export interface Regulations {
  image: string;
  title: string;
  description: string;
}

export interface itemsionizantes {
  icon: string;
  description: string;
}

export const itemsystem: ItemSystem[] = [
  {
    icon: DoneSheck,
    description:
      "Grandes plantas generan la electricidad (hidroeléctricas, térmicas, solares, etc.).",
  },
  {
    icon: DoneSheck,
    description:
      "Esa energía viaja por líneas de transmisión hasta llegar a nuestras casas, negociose industrias.",
  },
  {
    icon: DoneSheck,
    description: "Es un sistema centralizado, donde la mayoría solo consume.",
  },
];

export const mainaxes: MainAxes[] = [
  {
    number: "1",
    title: "PLANIFICACIÓN ESTRATÉGICA",
    description:
      " QUE RESPONDA AL CRECIMIENTO ECONÓMICO Y A LA CRECIENTE DEMANDA DE ELECTRICIDAD.",
  },
  {
    number: "2",
    title: "INVERSIONES EN INFRAESTRUCTURA",
    description: " Y TECNOLOGÍA PARA FORTALECER LA SEGURIDAD ENERGÉTICA.",
  },
  {
    number: "3",
    title: "INTEGRACIÓN DE TECNOLOGÍAS",
    description:
      " DE ALMACENAMIENTO PARA OPTIMIZAR EL USO DE ENERGÍAS RENOVABLES.",
  },
  {
    number: "4",
    title: "GENERACIÓN TÉRMICA FLEXIBLE,",
    description:
      " CON EL GAS NATURAL COMO ALIADO CLAVE PARA GARANTIZAR UN SUMINISTRO CONFIABLE Y UNA TRANSICIÓN EQUILIBRADA.",
  },
];

export const teammembers: TeamMembers[] = [
  {
    name: "Rosalina García",
    role: "representante",
    img: "/img-difucion/RosalinaGarcia.jpg",
  },
  {
    name: "Alejandrina Girón",
    role: "representante",
    img: "/img-difucion/AlejandrinaGiron.png",
  },
  {
    name: "Anny Lorena Vásquez",
    role: "representante",
    img: "/img-difucion/AnnyVasquez.png",
  },
  {
    name: "Betty Brazobán",
    role: "representante",
    img: "/img-difucion/BettyBrazoban.png",
  },
  {
    name: "Warni Liriano",
    role: "representante",
    img: "/img-difucion/WarniLiriano.png",
  },
  {
    name: "Madeline Romero",
    role: "representante",
    img: "/img-difucion/MadelineRomero.png",
  },
  {
    name: "Lenny Francisco",
    role: "representante",
    img: "/img-difucion/LennyFrancisco.png",
  },
  {
    name: "Sandrelys Revi",
    role: "representante",
    img: "/img-difucion/SandrelysRevi.png",
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
    icon: VoltageTowerBar,
    iconActive: VoltageTowerAzulBar,
    title: "Demanda Eléctrica Nacional",
    url: "/tablero-dinamico/demanda-electrica-nacional",
  },
  {
    icon: PanelSolarBar,
    iconActive: PanelSolarAzulBar,
    title: "Programa Medición Neta",
    url: "/tablero-dinamico/programa-medicion-neta",
  },
  {
    icon: MapaRDBar,
    iconActive: MapaRDAzulBar,
    title: "Mapa Energético Nacional",
    url: "/tablero-dinamico/mapa-energetico-nacional",
  },
  {
    icon: ChartRenovableBar,
    iconActive: ChartRenovableAzulBar,
    title: "Variables Macroeconómicas",
    url: "/tablero-dinamico/variable-macroeconomicas",
  },
  {
    icon: EolicBar,
    iconActive: EolicAzulBar,
    title: "Proyectos Renovables",
    url: "/tablero-dinamico/proyectos-renovables",
  },
  {
    icon: PetroliumBar,
    iconActive: PetroliumAzulBar,
    title: "Importación de Hidrocarburos",
    url: "/tablero-dinamico/importancia-hidrocarburos",
  },
  {
    icon: NuclearBar,
    iconActive: NuclearAzulBar,
    title: "Asuntos Nucleares",
    url: "/tablero-dinamico/asuntos-nucleares",
  },
  {
    icon: PanelBar,
    iconActive: PanelAzulBar,
    title: "Monitoreo SENI",
    url: "/tablero-dinamico/monitoreo-seni",
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
  {
    icon: HomeNav,
    label: "Inicio",
    url: "/",
  },
  {
    icon: ZapNav,
    label: "Plan Energético Nacional",
    url: "/plan-energetico-nacional",
  },
  {
    icon: BatteryNav,
    label: "Impulso A Las Energías Renovables",
    url: "/impulso-energias-renovables",
  },
  {
    icon: SolarNav,
    label: "Generación Distribuida",
    url: "/generacion-distribuida",
  },
  {
    icon: NuclearNav,
    label: "Asuntos Radiológicos Y Nucleares",
    url: "/nuclear",
  },
  {
    icon: LightBulbNav,
    label: "Cultura De Ahorro Energético",
    url: "/cultura-ahorro-energetico",
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
    title: "Cultura de",
    subtitle: "ahorro energético",
    icon: PowerManagement,
    color: "text-red-500",
    url: "/cultura-ahorro-energetico",
  },
  {
    id: "4",
    title: "Asuntos radiológicos",
    subtitle: "y Nucleares",
    icon: NuclearMark,
    color: "text-yellow-500",
    url: "nuclear",
  },
  {
    id: "5",
    title: "Generación",
    subtitle: "Distribuida",
    icon: PanelEnergy,
    color: "text-red-500",
    url: "/generacion-distribuida",
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
    url: "https://x.com/",
    icon: FaXTwitter,
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

export const locationspoint: LocationPoint[] = [
  {
    id: "santo-domingo",
    name: "Santo Domingo",
    description: "Capital del país con proyectos solares y eólicos en marcha.",
    x: 55,
    y: 60,
  },
  {
    id: "santiago",
    name: "Santiago",
    description: "Centro de proyectos hidroeléctricos en la zona norte.",
    x: 40,
    y: 35,
  },
  {
    id: "punta-cana",
    name: "Punta Cana",
    description: "Expansión de energía renovable para turismo sostenible.",
    x: 80,
    y: 65,
  },
  {
    id: "san-cristobal",
    name: "San Cristobal",
    description: "Expansión de energía renovable para turismo sostenible.",
    x: 50,
    y: 65,
  },
];

export const requirements: Requirements[] = [
  {
    icon: SolarHomeGD,
    title: "Tener un sistema de energía renovable (como paneles solares).",
  },
  {
    icon: QuoteGD,
    title:
      "El diseño debe cumplir con las normativas establecidas en el Programa de Medición Neta",
  },
  {
    icon: RequestApprovalGD,
    title:
      "Firmar acuerdo de interconexión a la red con la empresa distribuidora de tu área",
  },
  {
    icon: CertificateGD,
    title: "Instalar y conectar a la red, siempre con tu medidor bidireccional",
  },
];

export const benefits: Benefits[] = [
  {
    icon: CurrencyGD,
    title: "Ahorros:",
    description: "puedes reducir hasta un 90% tu factura eléctrica.",
    color: "text-red-600",
  },
  {
    icon: PowerEnergyGD,
    title: "Independencia:",
    description: "usas menos energía del sistema nacional.",
    color: "text-red-600",
  },
  {
    icon: FinanceBankingGD,
    title: "Créditos:",
    description: "si aportas energía extra, se descuenta de tu factura.",
    color: "text-red-600",
  },
  {
    icon: BusinessBankingGD,
    title: "Valor agregado:",
    description: "tu propiedad vale más con un sistema solar.",
    color: "text-red-600",
  },
  {
    icon: RenewableEnergyGD,
    title: "Sostenibilidad:",
    description: "reduces tu huella de carbono y usas energía limpia.",
    color: "text-red-600",
  },
];

export const regulations: Regulations[] = [
  {
    title: "Ley 57-07:",
    description: "Promueve el uso de energías renovables en todo el país.",
    image: "",
  },
  {
    title: "Reglamento de Medición Neta:",
    description:
      "Explica cómo se mide la energía que los usuarios envían a la red y cómo se descuenta de su factura.",
    image: "",
  },
  {
    title: "Reglamento de Interconexión de Generación Distribuida:",
    description:
      "Establece los requisitos técnicos para conectar estos sistemas a la red.",
    image: "",
  },
];

export const itemsionizantes: itemsionizantes[] = [
  {
    description: "Medicina (por ejemplo, rayos X y tratamientos de cáncer)",
    icon: MedicineHeartNuclear,
  },
  {
    description: "Industria (como pruebas de soldadura o medición de niveles)",
    icon: IndystryNuclear,
  },
  {
    description: "Investigación (en universidades o laboratorios).",
    icon: MedicineLiquidNuclear,
  },
];