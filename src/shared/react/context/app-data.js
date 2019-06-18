import React, { useContext } from 'react';
import PropTypes from 'prop-types';
const AppDataContext = React.createContext({});

export const AppDataProvider = ({
    appImages,
    instagramData,
    showData,
    children
}) => {
    return (
        <AppDataContext.Provider
            appImages={appImages}
            instagramData={instagramData}
            showData={showData}
        >
            {children}
        </AppDataContext.Provider>
    );
};

AppDataProvider.propTypes = {
    appImages: PropTypes.object,
    instagramData: PropTypes.object,
    showData: PropTypes.arrayOf(PropTypes.object),
    children: PropTypes.node.isRequired
};

AppDataProvider.defaultProps = {
    appImages: {
        hero: undefined,
        band: {},
        logo: {}
    },
    instagramData: {},
    showData: {}
};

export const AppDataConsumer = AppDataContext.Consumer;
export const useAppDataContext = () => useContext(AppDataContext);
export const useAppData = (key) => (useContext(AppDataContext) || {})[key];
