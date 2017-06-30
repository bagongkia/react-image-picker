[![NPM](https://img.shields.io/npm/v/react-image-picker.svg)](https://www.npmjs.com/package/react-image-picker)
[![npm](https://img.shields.io/npm/dt/react-image-picker.svg)](https://www.npmjs.com/package/react-image-picker)
[![npm](https://img.shields.io/npm/dm/react-image-picker.svg)](https://www.npmjs.com/package/react-image-picker)
[![npm](https://img.shields.io/npm/l/react-image-picker.svg)](http://opensource.org/licenses/MIT)

# React Image Picker
The image picker is used for selecting single or multiple images from gallery.

## Features
- jQuery Free
- Single or multiple images selection
- Styling (...in progress)
- ...

## Installation
```
npm install react-image-picker
```

### Examples
![React Image Picker Demo](https://raw.githubusercontent.com/bagongkia/react-image-picker/master/docs/img/react-image-picker-demo.jpg)

```javascript
//ES6
import React, { Component } from 'react'
import ImagePicker from 'react-image-picker'
import 'react-image-picker/dist/index.css'

//import images from local
import img1 from './images/kitten/200.jpg'
import img2 from './images/kitten/201.jpg'
import img3 from './images/kitten/202.jpg'
import img4 from './images/kitten/203.jpg'

const imageList = [img1, img2, img3, img4]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      image: null
    }
    this.onPick = this.onPick.bind(this)
  }

  onPick(image) {
    this.setState({image})
  }

  render() {
    return (
      <div>
        <ImagePicker 
          images={imageList.map((image, i) => ({src: image, value: i}))}
          onPick={this.onPick}
        />
        <button type="button" onClick={() => console.log(this.state.image)}>OK</button>
      </div>
    )
  }
}

export default App
```