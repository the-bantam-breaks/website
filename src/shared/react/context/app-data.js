import React, { useContext } from 'react';
const AppDataContext = React.createContext({});

export const AppDataProvider = AppDataContext.Provider;
export const AppDataConsumer = AppDataContext.Consumer;
export const useAppDataContext = () => useContext(AppDataContext) || {};
export const useAppData = (key) => useContext(AppDataContext)[key];
