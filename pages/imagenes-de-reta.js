import { useState } from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import '../styles/globals.css'
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import photos from "../src/app/components/photos";
import OtherNav from "../src/app/containers/others-navbar";
import Image from "next/image";
import CtaSection from "../src/app/containers/cta-section";
import Footer from "../src/app/containers/footer";
import Script from "next/script";


export default function ImagenesPage() {
  const [index, setIndex] = useState(-1);
  return (
    <>

      <OtherNav />
      <div className="tourism-page" >
        <div className="top-tourism-page">
          <h1>Las mejores imágenes de Balneario Reta</h1>
          <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500</p>
          <Image src="/favicon.ico" width={60} height={60} placeholder="/svg/blur.svg" />
        </div>
      </div>


      <div className="photo-album">
        <PhotoAlbum photos={photos} layout="rows" targetRowHeight={200} onClick={({ index }) => setIndex(index)} spacing={10} />

        <Lightbox
          slides={photos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          plugins={[Slideshow, Thumbnails]}
        />

        <CtaSection />
        <Footer />
      </div>

      <Script async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7215423654996673' crossorigin="anonymous">
      </Script>
    </>
  );
}
