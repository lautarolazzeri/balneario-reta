import Image from 'next/image'
import '../../styles/globals.css'
import Header from './containers/header'
import Cards from './containers/cards'
import Link from 'next/link'


export default function Home() {

  return (
    <>
      <Header />
      <Cards />
      <section>
        <div className='alquileres-top'>
          <div className='text-alquileres'>
            <h1>Alquileres en Balneario Reta</h1>
            <p>Conoce las mejores opciones de alquiler para tu estadía en Reta</p>
          </div>
          <Link href='#'>
            <div className='button-alquileres'>
              <p>Ver todos</p>
              <div className='arrow-container'>
                <Image src='/svg/arrow.svg' width={20} height={20} />
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  )
}
