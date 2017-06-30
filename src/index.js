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
    this.state = {image: null}
  }

  onPick(image) {
    this.setState({image})
  }

  render() {
    return (
      <div>
        <ImagePicker 
          images={imageList.map((image, i) => ({src: image, value: i}))}
          onPick={this.onPick.bind(this)}
        />
        <button type="button" onClick={() => console.log(this.state.image)}>OK</button>
      </div>
    )
  }
}

render(<Demo/>, document.querySelector('#root'))