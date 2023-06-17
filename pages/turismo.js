import OtherNav from "@/app/containers/others-navbar";
import '../styles/globals.css'
import CtaSection from "@/app/containers/cta-section";
import Footer from "@/app/containers/footer";
import { currentYear } from "@/app/constants/constants";
import Image from "next/image";
import Script from "next/script";
import Link from "next/link";

export default function Turismo() {
  return (
    <>
        <OtherNav />
        <div className="tourism-page" >
          <div className="top-tourism-page">
            <h1>Cuáles son las atracciones turísticas más elegidas por los turistas en Balneario Reta {currentYear}</h1>
            <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
            <Image src="/favicon.ico" width={60} height={60} />
          </div>

        <div className="item-tourism-page">
          <Link href='#' > <h3>Palmera´s Center Reta</h3></Link>
          <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500 Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500 Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500 Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
          <Link href='/'> <Image src='/svg/as.svg' width={1273} height={832} /></Link>
        </div>
        <div className="item-tourism-page">
          <Link href='#' > <h3>Palmera´s Center Reta</h3></Link>
          <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500 Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500 Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500 Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
          <Link href='/'> <Image src='/svg/as.svg' width={1273} height={832} /></Link>
        </div>
        <div className="item-tourism-page">
          <Link href='#' > <h3>Palmera´s Center Reta</h3></Link>
          <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500 Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500 Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500 Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
          <Link href='/'> <Image src='/svg/as.svg' width={1273} height={832} /></Link>
        </div>
        <div className="item-tourism-page">
          <Link href='#' > <h3>Palmera´s Center Reta</h3></Link>
          <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500 Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500 Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500 Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
          <Link href='/'> <Image src='/svg/as.svg' width={1273} height={832} /></Link>
        </div>

        <CtaSection />
        <Footer />
      </div>
      <Script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js"></Script>
    </>
  )
}