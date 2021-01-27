import React, { Component } from 'react'
import { render } from 'react-dom'
import ImagePicker from './react-image-picker'

import img1 from './assets/images/kitten/200.jpg'
import img2 from './assets/images/kitten/201.jpg'
import img3 from './assets/images/kitten/202.jpg'
import img4 from './assets/images/kitten/203.jpg'

const imageList = [img1, img2, img3, img4]

class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: '',
      images: [],
      max_images: [],
      max_message: ''
    }
  }

  onPickImage(image) {
    this.setState({image})
  }

  onPickImages(images) {
    this.setState({images})
  }

  onPickImagesWithLimit(max_images) {
    this.setState({max_images})
  }

  onPickMaxImages(last_image) {
    let image = JSON.stringify(last_image)
    let max_message = `Max images reached. ${image}`

    this.setState({max_message})
  }

  render() {
    return (
      <div>
        <h1>React Image Picker</h1>
        <h3>Single Select</h3>
        <ImagePicker
          images={imageList.map((image, i) => ({src: image, value: i}))}
          onPick={this.onPickImage.bind(this)}
        />
        <textarea rows="4" cols="100" value={this.state.image && JSON.stringify(this.state.image)} disabled/>
        
        <h3>Multiple Select</h3>
        <ImagePicker
          images={imageList.map((image, i) => ({src: image, value: i}))}
          onPick={this.onPickImages.bind(this)}
          multiple
        />
        <textarea rows="4" cols="100" value={this.state.images && JSON.stringify(this.state.images)} disabled/>

        <h3>Multiple Select with Limit</h3>
        <ImagePicker
          images={imageList.map((image, i) => ({src: image, value: i}))}
          onPick={this.onPickImagesWithLimit.bind(this)}
          maxPicks={2}
          onMaxPicks={this.onPickMaxImages.bind(this)}
          multiple
        />
        <textarea rows="4" cols="100" value={this.state.max_images && JSON.stringify(this.state.max_images)} disabled/>
        <textarea rows="4" cols="100" value={this.state.max_message && JSON.stringify(this.state.max_message)} disabled/>
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#root'))