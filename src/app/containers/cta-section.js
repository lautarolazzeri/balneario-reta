import Link from "next/link"

function CtaSection() {
  return (
    <section className="cta-section" id="contacto">
      <p>
        Si deseas enviarnos una foto de Reta, o si deseas publicar en nuestro sitio, no dudes en contactarnos.
      </p>
      <Link href=''>
        <button>
          <p>Contactános</p>
        </button>
      </Link>
    </section>
  )
}

export default CtaSection