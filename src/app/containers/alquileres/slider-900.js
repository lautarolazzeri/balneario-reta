import SliderItem from "@/app/components/slide-item";

const { default: Script } = require("next/script");

function Slider900() {
  return (
    <>
      <swiper-container class="mySwiper" pagination="true" pagination-clickable="true" space-between="30"
        slides-per-view="3">

        <SliderItem title='hola' people='3,4,5 persoas' location='asdnaksn daksnk' />
        <SliderItem title='hola' people='3,4,5 persoas' location='asdnaksn daksnk' />
        <SliderItem title='hola' people='3,4,5 persoas' location='asdnaksn daksnk' />
        <SliderItem title='hola' people='3,4,5 persoas' location='asdnaksn daksnk' />
        <SliderItem title='hola' people='3,4,5 persoas' location='asdnaksn daksnk' />
        <SliderItem title='hola' people='3,4,5 persoas' location='asdnaksn daksnk' />
        <SliderItem title='hola' people='3,4,5 persoas' location='asdnaksn daksnk' />
        <SliderItem title='hola' people='3,4,5 persoas' location='asdnaksn daksnk' />
      </swiper-container>
      <Script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js"></Script>
    </>
  )
}


export default Slider900