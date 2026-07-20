import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });

export const metadata = {
  title: "Dr. Ade Irfansyah | Transformasi Pendidikan Berbasis AI",
  description: "Portofolio praktisi, trainer, dan konsultan transformasi pendidikan berbasis AI.",
};

export default function RootLayout({ children }) {
  return <html lang="id" className={geist.variable}><body>{children}</body></html>;
}
