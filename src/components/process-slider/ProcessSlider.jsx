import React, { useRef, useState } from 'react';
import './process-slider.css';
import { ProcessSlide } from '../../components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { dataPreprocessingImg, dataTopologyImg, implementationMainteinance, integrationTestImg, normalBehaviourLearnImg, realTimeDataImg, sensorsOptimizationImg} from '../../assets/process_img';
import { useTranslation } from 'react-i18next';

const ProcessSlider = () => {
  const [t] = useTranslation("global");
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
                stretch: -50,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className='mySwiper'
        >
            <SwiperSlide>
                <ProcessSlide 
                    imgSrc={dataPreprocessingImg}
                    title={t("project-plan.step1.title")}
                    description={t("project-plan.step1.description")}
                />
            </SwiperSlide>
            <SwiperSlide>
                <ProcessSlide 
                    imgSrc={dataTopologyImg}
                    title={t("project-plan.step2.title")}
                    description={t("project-plan.step2.description")}
                />
            </SwiperSlide>
            <SwiperSlide>
                <ProcessSlide 
                    imgSrc={normalBehaviourLearnImg}
                    title={t("project-plan.step3.title")}
                    description={t("project-plan.step3.description")}
                />
            </SwiperSlide>
            <SwiperSlide>
                <ProcessSlide 
                    imgSrc={realTimeDataImg}
                    title={t("project-plan.step4.title")}
                    description={t("project-plan.step4.description")}
                />
            </SwiperSlide>
            <SwiperSlide>
                <ProcessSlide 
                    imgSrc={sensorsOptimizationImg}
                    title={t("project-plan.step5.title")}
                    description={t("project-plan.step5.description")}
                />
            </SwiperSlide>
            <SwiperSlide>
                <ProcessSlide 
                    imgSrc={integrationTestImg}
                    title={t("project-plan.step6.title")}
                    description={t("project-plan.step6.description")}
                />
            </SwiperSlide>
            <SwiperSlide>
                <ProcessSlide 
                    imgSrc={implementationMainteinance}
                    title={t("project-plan.step7.title")}
                    description={t("project-plan.step7.description")}
                />
            </SwiperSlide>
        </Swiper>
    </div>
  );
};

export default ProcessSlider;
