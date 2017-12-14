import React, { Component } from 'react'
import TetherComponent from 'react-tether'
import { SketchPicker } from 'react-color'
import { Input } from 'antd'

class ColorField extends Component {

  state = {
    colorPickerVisible: false
  }

  handleChange = color => {
    let colorCss = ''
    if(color.rgb.a === 1) {
      colorCss = `rgb(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b})`
    } else {
      colorCss = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`
    }
    this.props.onChange(colorCss)
  }

  handleInputFocus = () => {
    this.setState({
      colorPickerVisible: true
    })
  }

  handleInputBlur = () => {
    this.setState({
      colorPickerVisible: false
    })
  }

  render() {
    return (
      <div>
        <TetherComponent
          attachment="top center"
          constraints={[{
            to: 'scrollParent',
            attachment: 'together'
          }]}
          >
          <Input
            value={this.props.value}
            onFocus={this.handleInputFocus}
            onBlur={this.handleInputBlur}
            suffix={<div className="color-swatch" style={{ backgroundColor: this.props.value }}/>}
          />
          {this.state.colorPickerVisible && <SketchPicker
            color={this.props.value}
            onChange={this.handleChange}
          />}
        </TetherComponent>
      </div>
    )
  }
}

export default ColorField
