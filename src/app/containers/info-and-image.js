const { default: Image } = require("next/image");

function InfoAndImage() {
  return (
    <section className='info'>
      <div className='container-info'>
        <div className='container-image'>
          <Image src='/reta-img/amanecer-reta.avif' width={500} height={500} />
        </div>
        <div className='container-text'>
          <h2>Esse excepteur ex laboris voluptate</h2>
          <p>
            Voluptate fugiat qui in qui elit aliqua sit nulla. Laborum aute et amet exercitation aliqua eiusmod dolore sint labore nostrud. Et aliquip cillum anim cillum do esse esse irure dolor commodo adipisicing. Aliquip proident deserunt elit ut quis ipsum aliqua in aliqua esse<br></br><br></br> irure aliqua in aliqua esse ex excepteur irure laborum. Consectetur qui qui dolor nulla ipsum.irure dolor commodo adipisicing. Aliquip proident deserunt elit ut quis ipsum aliqua in aliqua esse ex excepteur irure laborum. Consectetur qui qui dolor nulla ipsum.
          </p>
        </div>
      </div>
    </section>
  )
}

export default InfoAndImage