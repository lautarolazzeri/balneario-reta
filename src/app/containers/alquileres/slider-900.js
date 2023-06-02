const { default: Script } = require("next/script");

function Slider900() {
  return (
    <>
      <swiper-container class="mySwiper" pagination="false" pagination-clickable="true" space-between="30"
        slides-per-view="3">
        <swiper-slide>
          <div className='alquileres-card'>
            <div className='alquileres-card-image'>
              <Image src='/a.jpg' width={300} height={200} />
            </div>
            <div className='alquileres-card-text'>
              <h3>Cabañas Marsu</h3>
              <p className='cant-personas'>4,5,6 personas</p>
              <p className='direction'>Calle 38 entre 15 y 17</p>
              <div className='contact'>
                <Link href='#'>
                  <div className='whatsapp-contact'>
                    <Image src='/svg/whatsapp.svg' width={20} height={20} />
                    <p>Whatsapp</p>
                  </div>
                </Link>
                <Link href='#'>
                  <div className='phone-contact'>
                    <Image src='/svg/phone.svg' width={20} height={20} />
                    <p>Llamar</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
      <Script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js"></Script>
    </>
  )
}


export default Slider900