import Link from "next/link";
import '../styles/globals.css'
import CtaSection from "../src/app/containers/cta-section";
import Footer from "../src/app/containers/footer";
import OtherNav from "../src/app/containers/others-navbar";

export default function NotHave() {
  return (
    <>
      <OtherNav />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="error-page">
        <h3>UPS! se ve que el servicio que intentaste acceder no tiene esa forma de contacto...</h3>
        <p class="zoom-area">Cierra esta pestaña y prueba con otro método!</p>
        <div class="link-container">
          <button onClick={
            () => {
              //close tab
              window.close();
            }
          } class="more-link">Volver atrás</button>
        </div>
      </div>

      <CtaSection />
      <Footer />
    </>
  )
}