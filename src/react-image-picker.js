import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Image from './components/image'
import './index.scss'

class ImagePicker extends Component {
  constructor(props) {
    super(props)
    this.state = { selected: [] }
    this.getSelected = this.getSelected.bind(this)
    this.handleImageClick = this.handleImageClick.bind(this)
    this.renderImage = this.renderImage.bind(this)
  }

  componentDidUpdate(prevProps, prevState) {
    const { images, onPick } = this.props
    if (prevProps.images !== images) {
      this.setState(Array(this.props.images.length).fill(false))
    }
    if (prevState.selected !== this.state.selected) {
      onPick(this.getSelected())
    }
  }

  getSelected() {
    const { images, multiple } = this.props
    const selected = []
    images.map((image, i) => {
      if (this.state.selected[i]) {
        selected.push(images[i])
      }
    })

    return multiple ? selected : selected[0]
  }

  handleImageClick(i) {
    const { images, multiple } = this.props
    const selected = multiple ? this.state.selected : Array(images.length).fill(false)
    selected[i] = !selected[i]
    this.setState({selected: selected})
  }

  renderImage(image, i) {
    return <Image src={image.src} isSelected={this.state.selected[i]} onImageClick={() => this.handleImageClick(i)} key={i}/>
  }

  render() {
    const { images, buttonOK } = this.props
    return (
      <div className="image_picker">
        { images.map(this.renderImage) }
        <div className="clear"/>
      </div>
    )
  }
}

ImagePicker.propTypes = {
  images: PropTypes.array,
  multiple: PropTypes.bool
}

export default ImagePicker