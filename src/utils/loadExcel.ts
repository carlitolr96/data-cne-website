import * as XLSX from "xlsx";
import path from "path";
import { LocationPoint } from "@/components/MapWithPoints";

export const loadMapPoints = (): LocationPoint[] => {
  const filePath = path.resolve("../../public/data/map-points-2025.xlsx");
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  const data: any[] = XLSX.utils.sheet_to_json(sheet);

  // Mapear datos al formato LocationPoint
  return data.map((row: any) => ({
    id: String(row.id),
    name: row.name,
    description: row.description,
    x: Number(row.x),
    y: Number(row.y),
    icon: row.icon || undefined,
  }));
};
