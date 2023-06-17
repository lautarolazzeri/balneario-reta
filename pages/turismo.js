import OtherNav from "@/app/containers/others-navbar";
import '../styles/globals.css'
import CtaSection from "@/app/containers/cta-section";
import Footer from "@/app/containers/footer";
import { currentYear } from "@/app/constants/constants";
import Image from "next/image";

export default function Turismo() {
  return (
    <>
      <div>
        <OtherNav />
        <div className="tourism-page" >
          <div className="top-tourism-page">
            <h1>Cuáles son las atracciones turísticas más elegidas por los turistas en Balneario Reta {currentYear}</h1>
            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
            <Image src="/favicon.ico" width={60} height={60} />
          </div>


          <CtaSection />
          <Footer />
        </div>
      </div>
    </>
  )
}