import React from 'react';
import './features.css';
import { FeatureCard, Neurons } from '../../components';
import { neuralGif, dataQualityGif, cpuGif, speedGif, protectionGif, recyclingGif } from '../../assets/features_gif';
import { useTranslation } from 'react-i18next';

const Features = () => {
  const [t] = useTranslation("global");
  return (
    <div className='fg__features'>
      <div class="fg__features-topborder">
        <svg version="1.1" id="curved-border" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1600 116.19" xmlSpace="preserve">
          <path class="wave" d="M0.1,119.43V67.45c0,0,99.87,71.51,322.45,8.12c5.56-1.66,92.01-26.52,125.74-35.72
            c77.28-21.08,219.28-41.4,311.28-38.34c233,7.77,323.98,82.1,469.23,96.61c149.64,14.94,288.45-12.46,371.26-36.99v55.34L0.1,119.43
            z"
          />
        </svg>
      </div>
      <div className='fg__features-container'>
        {/* <h2>{t("features.title")}</h2> */}
        <div className='fg__features_cards'>
          <div className="fg__features_cards-card">
            <FeatureCard icon={neuralGif} title={t("features.graph-neural-networks.title")} description={t("features.graph-neural-networks.description")}></FeatureCard>
          </div>
          <div className="fg__features_cards-card">
            <FeatureCard icon={dataQualityGif} title={t("features.data-reliability.title")} description={t("features.data-reliability.description")}></FeatureCard>
          </div>
          <div className="fg__features_cards-card">
            <FeatureCard icon={speedGif} title={t("features.real-time-response.title")} description={t("features.real-time-response.description")}></FeatureCard>
          </div>
          <div className="fg__features_cards-card">
            <FeatureCard icon={cpuGif} title={t("features.plc-scada-integration.title")} description={t("features.plc-scada-integration.description")}></FeatureCard>
          </div>
          <div className="fg__features_cards-card">
            <FeatureCard icon={protectionGif} title={t("features.risk-management.title")} description={t("features.risk-management.description")}></FeatureCard>
          </div>
          <div className="fg__features_cards-card">
            <FeatureCard icon={recyclingGif} title={t("features.environment-impact.title")} description={t("features.environment-impact.description")}></FeatureCard>
          </div>
        </div>
      </div>

      <div className='fg__features-background'>
        <Neurons></Neurons>
      </div>
    </div>
  );
};

export default Features;