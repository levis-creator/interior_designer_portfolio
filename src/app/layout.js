import Navbar from "@/components/Navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { DisplayContextProvider } from "@/context/DisplayContext";
import Footer from "@/components/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Shani Interior designer",
  description:
    "My name is shani and I am a professional interior designee with over 5yrs of experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <DisplayContextProvider>
          <Navbar />
          {children}
          <Footer/>
        </DisplayContextProvider>
      </body>
    </html>
  );
}
