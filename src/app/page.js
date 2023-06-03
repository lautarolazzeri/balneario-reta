'use client'
import Image from 'next/image'
import '../../styles/globals.css'
import Header from './containers/header'
import Cards from './containers/cards'
import Script from 'next/script'
import Alojamientos from './containers/alojamiento'
import Information from './containers/information'
import GradientSection from './components/gradient-section'
import { useEffect, useRef } from 'react'
import { register } from "swiper/element/bundle";

register();
export default function Home() {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: true,
      spaceBetween: 30,
      slidesPerView: 4,
      paginationClickable: true,

      injectStyles: [
        `
          .swiper-container {
            width: 100% !important;
          }
          .swiper-button-next,
          .swiper-button-prev {
            background: var(--linear-gradient);
            padding: 4px 12px;
            border-radius: 100%;
            color: white;
          }
          .swiper-button-prev {
            left: 0;
          }
          .swiper-button-next {
            right: 0;
          }
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 20px;
          }
          .swiper-pagination-bullet{
            width: 10px;
            height: 10px;
            background: var(--linear-gradient);
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);
  return (
    <>
      <Header />
      <Cards />
      <Alojamientos />
      <Information />

      <section className='tourism'>
        <GradientSection title='Atracciones turísticas en Balneario Reta 2023' subtitle='Conoce y visita los mejores lugares para recorrer en Reta y sus cercanías!' url='#' />
        <div className='tourism-carousel'>
          <swiper-container class="mySwiper" ref={swiperRef} init="false">

            <swiper-slide>
              <div className='tourism-card littledown'>
                <div className='tourism-card-image'>
                  <Image src='/svg/palmeras.svg' width={300} height={200} />
                </div>
                <div className='tourism-card-text'>
                  <h3>asd</h3>
                  <p className='cant-personas'>askdmasd</p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>

              <div className='tourism-card '>
                <div className='tourism-card-image'>
                  <Image src='/svg/usina.svg' width={300} height={200} />
                </div>
                <div className='tourism-card-text'>
                  <h3>asd</h3>
                  <p className='cant-personas'>askdmasd</p>
                </div>

              </div>
            </swiper-slide>
            <swiper-slide>
              <div className='tourism-card littledown'>
                <div className='tourism-card-image'>
                  <Image src='/svg/cifuentes.svg' width={300} height={200} />
                </div>
                <div className='tourism-card-text'>
                  <h3>asd</h3>
                  <p className='cant-personas'>askdmasd</p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className='tourism-card'>
                <div className='tourism-card-image'>
                  <Image src='/svg/cueva-del-tigre.svg' width={300} height={200} />
                </div>
                <div className='tourism-card-text'>
                  <h3>asd</h3>
                  <p className='cant-personas'>askdmasd</p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className='tourism-card littledown'>
                <div className='tourism-card-image'>
                  <Image src='/a.jpg' width={300} height={200} />
                </div>
                <div className='tourism-card-text'>
                  <h3>asd</h3>
                  <p className='cant-personas'>askdmasd</p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div className='tourism-card'>
                <div className='tourism-card-image'>
                  <Image src='/a.jpg' width={300} height={200} />
                </div>
                <div className='tourism-card-text'>
                  <h3>asd</h3>
                  <p className='cant-personas'>askdmasd</p>
                </div>
              </div>
            </swiper-slide>

          </swiper-container>

        </div>
      </section>



      <Script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js"></Script>






      <br />
      <br />
      <br />
      <br />
      <br />      <br />
      <br />
      <br />
      <br />
      <br />      <br />
      <br />
      <br />
      <br />
      <br />

    </>
  )
}
