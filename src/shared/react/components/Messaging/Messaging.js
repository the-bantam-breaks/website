import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AppDataProvider } from '../../context';
import { Hero } from '../Hero';
import { Footer } from '../Footer';

class Messaging extends Component {
    constructor (props) {
        super(props)

        let appData;

        // eslint-disable-next-line
        if (__isBrowser__) {
            appData = window.__INITIAL_DATA__;
            delete window.__INITIAL_DATA__;
        } else {
            appData = {}
        }

        this.state = {
            appData
        };
    }

    render () {
        const { appData = {} } = this.state
        const { heading, showForm, subHeading } = this.props;

        return (
            <AppDataProvider value={appData}>
                <Hero
                    heading={heading}
                    showForm={showForm}
                    subHeading={subHeading} />
                <Footer />
            </AppDataProvider>
        );
    }
}

Messaging.propTypes = {
    heading: PropTypes.string.isRequired,
    showForm: PropTypes.bool,
    subHeading: PropTypes.string.isRequired
};

Messaging.defaultProps = {
    showForm: true
};

export default Messaging;
