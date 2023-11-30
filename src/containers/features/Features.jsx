import React from 'react';
import './features.css';
import Feature from '../../components/feature/Feature';
import neuralNetworkIcon from '../../assets/neural-network.png';
import dataReliabilityIcon from '../../assets/data-quality.png';
import realTimeIcon from '../../assets/in-time.png';
import contImprovementIcon from '../../assets/improvement.png';
import riskManagementIcon from '../../assets/risk-management.png';
import environmentImpactIcon from '../../assets/environment.png';
import { useTranslation } from 'react-i18next';

const Features = () => {
  const [t] = useTranslation("global");
  return (
    <div className='fg__features'>
      <h1>¿Por qué Flowguard?</h1>
      <div className='fg__features-container'>
        <Feature icon={neuralNetworkIcon} title={t("features.graph-neural-networks.title")} description={t("features.graph-neural-networks.description")}></Feature>
        <Feature icon={dataReliabilityIcon} title={t("features.data-reliability.title")} description={t("features.data-reliability.description")}></Feature>
        <Feature icon={realTimeIcon} title={t("features.real-time-response.title")} description={t("features.real-time-response.description")}></Feature>
        <Feature icon={contImprovementIcon} title={t("features.cont-improvement.title")} description={t("features.cont-improvement.description")}></Feature>
        <Feature icon={riskManagementIcon} title={t("features.risk-management.title")} description={t("features.risk-management.description")}></Feature>
        <Feature icon={environmentImpactIcon} title={t("features.environment-impact.title")} description={t("features.environment-impact.description")}></Feature>
      </div>
    </div>
  );
};

export default Features;