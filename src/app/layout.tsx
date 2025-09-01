import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Data CNE Website",
  description: "Conectando datos, impulsando energía",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
