import React from 'react';
import './process-slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { dataPreprocessingImg, dataTopologyImg, implementationMainteinance, integrationTestImg, normalBehaviourLearnImg, realTimeDataImg, sensorsOptimizationImg} from '../../assets/process_img';

const ProcessSlider = () => {
  return (
    <div className='container'>
        <h1 className='heading'>Titulo</h1>
        <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} loop={true} slidesPerView={'auto'}
            coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5}}
            pagination={{el: '.swiper-pagination', clickable: true}}
            navigation={{nextEl:'.swiper-button-next', prevEl:'.swiper-button-next', clickable: true,}}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className='swiper_container'
        >
            <SwiperSlide>
                <img src={dataPreprocessingImg} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={dataTopologyImg} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={normalBehaviourLearnImg} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={realTimeDataImg} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={sensorsOptimizationImg} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={integrationTestImg} alt='' />
            </SwiperSlide>
            <SwiperSlide>
                <img src={implementationMainteinance} alt='' />
            </SwiperSlide>
            <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow">
                    <button>P</button>
                </div>
                <div className="swiper-button-next slider-arrow">
                    <button>N</button>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </Swiper>
    </div>
  );
};

export default ProcessSlider;
