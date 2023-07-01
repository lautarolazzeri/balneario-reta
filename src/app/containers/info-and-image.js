const { default: Image } = require("next/image");

function InfoAndImage() {
  return (
    <section className='info'>
      <div className='container-info'>
        <div className='container-image'>
          <Image src='/reta-img/amanecer-reta.webp' alt="amanecer en Reta" width={500} height={500} />
        </div>
        <div className='container-text'>
          <h2>Explora la belleza de Balneario Reta</h2>
          <p>
            Sumérgete en la serenidad de Balneario Reta, un paraíso costero en la costa argentina. Disfruta de sus playas de arena dorada, impresionantes atardeceres y emocionantes actividades acuáticas. Escapa del bullicio urbano y conecta con la belleza natural deL pueblo, es tu refugio perfecto donde podrás relajarte, explorar y crear recuerdos inolvidables. Ven y experimenta la serenidad y la belleza natural de Balneario Reta, un destino perfecto para escapar y rejuvenecer.
          </p>
        </div>
      </div>
    </section>
  )
}

export default InfoAndImage