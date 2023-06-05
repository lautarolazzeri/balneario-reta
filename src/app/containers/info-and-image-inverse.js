const { default: Image } = require("next/image");

function InforAndImageInverse() {
  return (
    <section className='info'>
      <div className='container-info'>
        <div className='container-text inverse'>
          <h2>El destino perfecto en la costa Argentina</h2>
          <p>
            Descubre la belleza natural de Balneario Reta, disfruta de sus playas de ensueño, conoce su rica cultura y déjate enamorar por los espectaculares atardeceres que pintan el cielo de naranjas y rosas sobre el mar. Un destino turístico imprescindible en la costa argentina
          </p>
        </div>
        <div className='container-image inverse-image' >
          <Image src='/svg/destinoperfecto.svg' width={500} height={500} />
        </div>
      </div>
    </section>
  )
}

export default InforAndImageInverse