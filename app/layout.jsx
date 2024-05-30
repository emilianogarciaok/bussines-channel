import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { AvenirMedium } from "./ui/fonts";


const Avenir = localFont({
  src: '../app/public/font/avenir-next/AvenirNextCyr-Regular.ttf',
  display: 'swap',
})

const AvenirBold = localFont({
  src: '../app/public/font/avenir-next/AvenirNextCyr-Bold.ttf',
  display: 'swap',
})




const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Business Channel",
  icons:{
    icon:[
      '/favicon.ico'
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={AvenirMedium.className}>{children}</body>
    </html>
  );
}
