import React, { useRef, useState } from 'react';
import './process-slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { dataPreprocessingImg, dataTopologyImg, implementationMainteinance, integrationTestImg, normalBehaviourLearnImg, realTimeDataImg, sensorsOptimizationImg} from '../../assets/process_img';

const ProcessSlider = () => {
  return (
    <div className='fg__processSlider'>
        <Swiper 
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            initialSlide={1}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className='mySwiper'
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
        </Swiper>
    </div>
  );
};

export default ProcessSlider;
