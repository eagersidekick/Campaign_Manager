import { createContext, useContext, useState } from 'react';

const CampaignContext = createContext();

export const useCampaign = () => useContext(CampaignContext);

export const CampaignProvider = ({ children }) => {
  const [selectedCampaignId, setSelectedCampaignId] = useState({ id: null, name: ''});

  const value = {
    selectedCampaignId,
    setSelectedCampaignId,
  };

  return <CampaignContext.Provider value={value}>{children}</CampaignContext.Provider>;
};
