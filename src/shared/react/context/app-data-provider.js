import React, { useContext } from 'react';
import PropTypes from 'prop-types';
const Context = React.createContext({});

export const AppDataProvider = ({
    instagramData,
    showData,
    children
}) => {
    return (
        <Context.Provider
            instagramData={instagramData}
            showData={showData}
        >
            {children}
        </Context.Provider>
    );
};

AppDataProvider.propTypes = {
    instagramData: PropTypes.object,
    showData: PropTypes.arrayOf(PropTypes.object),
    children: PropTypes.node.isRequired
};

AppDataProvider.defaultProps = {
    instagramData: {},
    showData: {}
};

export const useAppDataContext = () => useContext(Context);
