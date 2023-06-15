import Link from "next/link"

function CtaSection() {
  return (
    <section className="cta-section" id="contacto">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      </p>
      <Link href='/sobre-balneario-reta'>
        <button>
          <p>Contactános</p>
        </button>
      </Link>
    </section>
  )
}

export default CtaSection