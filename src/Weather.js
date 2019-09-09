import React from 'react';

import Temperature from './Temperature.js';

class Weather extends React.Component {
    renderTemperatures = (renderUs) => {
        // FIXME: Add the actual temperatures

        console.log(renderUs);

        return (
            <Temperature degreesCelsius={25} hour={1} />
        );
    }

    getForecastsToRender = () => {
        const renderUs = [];

        const now_ms = (new Date()).getTime();
        const start = new Date(now_ms + 0.75 * 3600 * 1000);
        const end = new Date(now_ms + 11.75 * 3600 * 1000);

        // eslint-disable-next-line
        for (const [timestamp_ms, forecast] of Object.entries(this.props.forecast)) {
            const timestamp_date = new Date(timestamp_ms);

            if (timestamp_date < start) {
                continue;
            }

            if (timestamp_date > end) {
                continue;
            }

            renderUs.push(forecast);
        }

        console.log(renderUs);
        return renderUs;
    }

    render = () => {
        // FIXME: After rendering, send stats to Google Analytics

        const renderUs = this.getForecastsToRender()
        return (
            <React.Fragment>
                {this.renderTemperatures(renderUs)}
            </React.Fragment>
        );
    }
}

export default Weather;
