import Link from "next/link"

function CtaSection() {
  return (
    <section className="cta-section" id="contacto">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      </p>
      <Link href='https://api.whatsapp.com/send?phone=541159333523&text=Hola! te contacto desde la página web de Balneario Reta, mi consulta es...'>
        <button>
          <p>Contactános</p>
        </button>
      </Link>
    </section>
  )
}

export default CtaSection