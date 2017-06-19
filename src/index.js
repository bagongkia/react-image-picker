import React, { Component } from 'react'
import { render } from 'react-dom'
import { Map } from 'immutable'
import './index.scss'

import img1 from './images/kitten/200.jpg'
import img2 from './images/kitten/201.jpg'
import img3 from './images/kitten/202.jpg'
import img4 from './images/kitten/203.jpg'

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
      <div className="responsive" key={key}>
        <img className={`thumbnail${selected ? " selected" : ""}`} src={image} onClick={this.handleImageClick(key)}/>
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
    multiple={false}
  />, document.querySelector('#root')
)