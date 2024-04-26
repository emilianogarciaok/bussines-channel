import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";


const Avenir = localFont({
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
      <body className={Avenir.className}>{children}</body>
    </html>
  );
}
