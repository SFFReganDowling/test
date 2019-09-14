import React from 'react'
import PropTypes from 'prop-types'

import './Display.css'

import ClockCoordinates from './ClockCoordinates'

const WIND_TEXT_RADIUS = 13
const WINDBOX_SCALE = 1.2

/**
 * This is supposed to mimic a display on the clock face.
 */
class Display extends React.Component {
  state = {
    textWidth: 0,
    textHeight: 0
  }

  constructor (props) {
    super(props)
    this.textRef = React.createRef()
  }

  componentDidMount = () => {
    const boundingBox = this.textRef.current.getBBox()
    this.setState({
      textWidth: boundingBox.width,
      textHeight: boundingBox.height
    })
  }

  render = () => {
    const x = this.props.coords.hourDx(WIND_TEXT_RADIUS)
    const y = this.props.coords.hourDy(WIND_TEXT_RADIUS)

    const rw = this.state.textWidth * WINDBOX_SCALE
    const rh = this.state.textHeight * WINDBOX_SCALE

    return (
      <React.Fragment>
        <rect x={x - rw / 2} y={y - rh / 2} width={rw} height={rh} rx='2' ry='2' className='wind' />
        <text
          ref={this.textRef}
          x={x}
          y={y}
          className='wind'
          dominantBaseline='middle'
          textAnchor='middle'
        >
          {this.props.children}
        </text>
      </React.Fragment>
    )
  }
}

Display.propTypes = {
  coordinates: PropTypes.instanceOf(ClockCoordinates)
}

export default Display
