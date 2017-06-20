import React, { Component } from 'react'
import { render } from 'react-dom'
import { Map } from 'immutable'
import './index.scss'

import img1 from './images/kitten/200.jpg'
import img2 from './images/kitten/201.jpg'
import img3 from './images/kitten/202.jpg'
import img4 from './images/kitten/203.jpg'
import imgCheck from './images/check.png'

const imageList = [img1, img2, img3, img4]

class ImagePicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: Map()
    }
    this.handleImageClick = this.handleImageClick.bind(this)
    this.renderImage = this.renderImage.bind(this)
  }

  handleImageClick(key) {
    const multiple = this.props.multiple || false
    const prevSelected = multiple ? this.state.selected : Map()

    const selected = prevSelected.set(key, !this.state.selected.get(key) || false)
    return () => {
      this.setState({ selected })
    }
  }

  renderImage(image, key) {
    const selected = this.state.selected.get(key) || false
    return (
      <div key={key}
        className={`responsive${selected ? " selected" : ""}`} 
        onClick={this.handleImageClick(key)}>
        <img src={image}
          className={`thumbnail${selected ? " selected" : ""}`}
          style={{ width: 150, height: 150, objectFit: "cover" }}
        />
        <div className="checked">
          <img src={imgCheck} style={{ width: 75, height: 75, objectFit: "cover" }}/>
        </div>
      </div>
    )
  }

  render() {
    const { images } = this.props
    return (
      <div className="image_picker">
        { images.map(this.renderImage) }
      </div>
    )
  }
}

render(
  <ImagePicker images={imageList}
    
  />, document.querySelector('#root')
)

export default ImagePicker