import Link from "next/link"

function CtaSection() {
  return (
    <section className="cta-section">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
      </p>
      <Link href='#'>
        <button>
          <p>Contactános</p>
        </button>
      </Link>
    </section>
  )
}

export default CtaSection