import React from 'react'

import Temperature from './Temperature.js'
import WeatherSymbol from './WeatherSymbol.js'
import ClockCoordinates from './ClockCoordinates.js'

class Weather extends React.Component {
  renderTemperatures = renderUs => {
    return renderUs
      .filter(forecast => forecast.celsius !== undefined)
      .map(forecast => {
        const coords = new ClockCoordinates(forecast.timestamp)
        return (
          <Temperature
            key={`hour-${coords.decimalHour}`}
            coordinates={coords}
            degreesCelsius={forecast.celsius}
          />
        )
      })
  }

  renderWeathers = renderUs => {
    return renderUs
      .filter(forecast => forecast.symbol !== undefined)
      .map(forecast => {
        const hour = forecast.timestamp.getHours() + forecast.timestamp.getMinutes() / 60.0

        // FIXME: Actually compute this based on date, latitude and longitude?
        const isNight = hour < 7 || hour > 20

        return (
          <WeatherSymbol
            key={`weather-${hour}`}
            hour={hour}
            night={isNight}
            symbol={forecast.symbol}
          />
        )
      })
  }

  getForecastsToRender = () => {
    const renderUs = []

    const now_ms = new Date().getTime()
    const start = new Date(now_ms + 0.75 * 3600 * 1000)
    const end = new Date(now_ms + 11.75 * 3600 * 1000)

    // eslint-disable-next-line
    for (const [timestamp_ms, forecast] of Object.entries(this.props.forecast)) {
      const timestamp_date = new Date(timestamp_ms)

      if (timestamp_date < start) {
        continue
      }

      if (timestamp_date > end) {
        continue
      }

      renderUs.push(forecast)
    }

    console.log(renderUs)
    return renderUs
  }

  render = () => {
    // FIXME: After rendering, send stats to Google Analytics

    const renderUs = this.getForecastsToRender()
    return (
      <React.Fragment>
        {this.renderTemperatures(renderUs)}
        {this.renderWeathers(renderUs)}
      </React.Fragment>
    )
  }
}

export default Weather
