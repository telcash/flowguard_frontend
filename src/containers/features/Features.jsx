import React from 'react';
import './features.css';
import { FeatureCard, Rain } from '../../components';
import neuralNetworkIcon from '../../assets/neural-network.png';
import dataReliabilityIcon from '../../assets/data-quality.png';
import realTimeIcon from '../../assets/in-time.png';
import riskManagementIcon from '../../assets/risk-management.png';
import environmentImpactIcon from '../../assets/environment.png';
import electronicsIcon from '../../assets/electronics.png';
import { useTranslation } from 'react-i18next';

const Features = () => {
  const [t] = useTranslation("global");
  return (
    <div className='fg__features'>
      <div className='fg__features-container'>
        <h2>{t("features.title")}</h2>
        <div className='fg__features_cards'>
          <FeatureCard icon={neuralNetworkIcon} title={t("features.graph-neural-networks.title")} description={t("features.graph-neural-networks.description")}></FeatureCard>
          <FeatureCard icon={dataReliabilityIcon} title={t("features.data-reliability.title")} description={t("features.data-reliability.description")}></FeatureCard>
          <FeatureCard icon={realTimeIcon} title={t("features.real-time-response.title")} description={t("features.real-time-response.description")}></FeatureCard>
          <FeatureCard icon={electronicsIcon} title={t("features.plc-scada-integration.title")} description={t("features.plc-scada-integration.description")}></FeatureCard>
          <FeatureCard icon={riskManagementIcon} title={t("features.risk-management.title")} description={t("features.risk-management.description")}></FeatureCard>
          <FeatureCard icon={environmentImpactIcon} title={t("features.environment-impact.title")} description={t("features.environment-impact.description")}></FeatureCard>
        </div>
      </div>
    </div>
  );
};

export default Features;