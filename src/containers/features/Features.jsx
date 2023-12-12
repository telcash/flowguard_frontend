import React from 'react';
import './features.css';
import { FeatureCard } from '../../components';
import { neuralGif, dataQualityGif, cpuGif, speedGif, protectionGif, recyclingGif } from '../../assets/features_gif';
import { useTranslation } from 'react-i18next';

const Features = () => {
  const [t] = useTranslation("global");
  return (
    <div className='fg__features'>
      <div className='fg__features-container'>
        <h2>{t("features.title")}</h2>
        <div className='fg__features_cards'>
          <FeatureCard icon={neuralGif} title={t("features.graph-neural-networks.title")} description={t("features.graph-neural-networks.description")}></FeatureCard>
          <FeatureCard icon={dataQualityGif} title={t("features.data-reliability.title")} description={t("features.data-reliability.description")}></FeatureCard>
          <FeatureCard icon={speedGif} title={t("features.real-time-response.title")} description={t("features.real-time-response.description")}></FeatureCard>
          <FeatureCard icon={cpuGif} title={t("features.plc-scada-integration.title")} description={t("features.plc-scada-integration.description")}></FeatureCard>
          <FeatureCard icon={protectionGif} title={t("features.risk-management.title")} description={t("features.risk-management.description")}></FeatureCard>
          <FeatureCard icon={recyclingGif} title={t("features.environment-impact.title")} description={t("features.environment-impact.description")}></FeatureCard>
        </div>
      </div>
    </div>
  );
};

export default Features;