import Script from 'next/script'
import '../../styles/globals.css'
import '../../styles/globals.css'
import { Analytics } from '@vercel/analytics/react'


export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <title>Página Oficial de Reta - Alojamientos, Servicios, Info y más...</title>

        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7215423654996673"
          crossorigin="anonymous"></Script>
        <Script type="application/ld+json">{{ "@context": "http://schema.org", "@type": "Organization", "name": "Balneario Reta Oficial", "url": "https://balnearioreta.vercel.app", "address": "", "sameAs": ["https://www.facebook.com/balnearioretaoficial", "https://www.instagram.com/balnearioreta_oficial"] }}</Script>
        <meta name="google" content="notranslate" />

        <link rel="icon" href="../favicon.ico" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="content-language" content="es" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@BalnearioRetaOficial" />
        <meta name="twitter:title" content="Balneario Reta Oficial - Alojamiento, Servicios, Información y más..." />
        <meta name="twitter:description" content="Descubre la página web de Balneario Reta, tu guía completa para conocer todo sobre Reta. Explora alojamientos, atracciones turísticas, información interesante, eventos, festivales y muchas imágenes." />
        <meta name="twitter:image" content="https://balnearioreta.vercel.app/reta-img/imagen-reta%20(51).webp" />

        <meta name="title" content="Reta - Los mejores Alojamientos, Servicios, Información y más..." />
        <meta name="description" content="Página oficial de RETA. Cabañas en alquiler, alojamientos, atracciones turísticas, información de reta, eventos y muchas imágenes en un solo lugar" />
        <meta name="keywords" content="balneario reta, tres arroyos, cabañas en reta, turismo reta, imagenes de reta, reta, alojamientos, alquileres en reta, cabañas, playas, costa Buenos Aires" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Spanish" />
        <meta name="revisit-after" content="15 days" />
        <meta name="author" content="Lautaro Sebastián Lazzeri" />

        <meta property="og:title" content="Página oficial de RETA. Cabañas en alquiler, atracciones turísticas, información de reta, eventos y muchas imágenes en un solo lugar" />
        <meta property="og:description" content="Descubre la página web de Balneario Reta, tu guía completa para conocer todo sobre Reta. Explora alojamientos, atracciones turísticas, información interesante, eventos, festivales y muchas imágenes." />
        <meta property="og:locale" content="es" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://balnearioreta.vercel.app" />
        <meta property="og:image" content="https://balnearioreta.vercel.app/reta-img/imagen-reta (51).webp" />
        <meta property="og:site_name" content="Balneario Reta Oficial" />


        <meta name="google-site-verification" content="-rYbNK-k7gowXvE_JTaWgT-KvrFxn3yFJuz8XbY9nWY" />
      </head>
      <body>
        <Analytics />

        {children}

      </body>
    </html>
  )
}
