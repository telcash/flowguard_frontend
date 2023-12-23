import React from 'react';
import './process-slider.css';
import { SlideCard } from '../../components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { dataPreprocessingImg, dataTopologyImg, implementationMainteinance, integrationTestImg, realTimeDataImg } from '../../assets/process_img';
import { useTranslation } from 'react-i18next';

const ProcessSlider = () => {
  const [t] = useTranslation("global");
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  return (
    <div className='fg__processSlider'>
        <Swiper 
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            loop={true}
            initialSlide={0}
            navigation={true}
            spaceBetween={20}
            coverflowEffect={{
                rotate: 50,
                stretch: -60,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={pagination}
            modules={[EffectCoverflow, Pagination, Navigation ]}
            className='mySwiper'
        >
            <SwiperSlide>
                <SlideCard 
                    imgSrc={dataPreprocessingImg}
                    title={t("project-plan.step1.title")}
                    description={t("project-plan.step1.description")}
                />
            </SwiperSlide>
            <SwiperSlide>
                <SlideCard 
                    imgSrc={dataTopologyImg}
                    title={t("project-plan.step2.title")}
                    description={t("project-plan.step2.description")}
                />
            </SwiperSlide>
            <SwiperSlide>
                <SlideCard 
                    imgSrc={realTimeDataImg}
                    title={t("project-plan.step3.title")}
                    description={t("project-plan.step3.description")}
                />
            </SwiperSlide>
            <SwiperSlide>
                <SlideCard 
                    imgSrc={integrationTestImg}
                    title={t("project-plan.step4.title")}
                    description={t("project-plan.step4.description")}
                />
            </SwiperSlide>
            <SwiperSlide>
                <SlideCard 
                    imgSrc={implementationMainteinance}
                    title={t("project-plan.step5.title")}
                    description={t("project-plan.step5.description")}
                />
            </SwiperSlide>
        </Swiper>
    </div>
  );
};

export default ProcessSlider;
