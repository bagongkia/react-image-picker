[![NPM](https://img.shields.io/npm/v/react-image-picker.svg)](https://www.npmjs.com/package/react-image-picker)
[![npm](https://img.shields.io/npm/dt/react-image-picker.svg)](https://www.npmjs.com/package/react-image-picker)
[![npm](https://img.shields.io/npm/dm/react-image-picker.svg)](https://www.npmjs.com/package/react-image-picker)
[![npm](https://img.shields.io/npm/l/react-image-picker.svg)](http://opensource.org/licenses/MIT)

# React Image Picker
The image picker is used for selecting single or multiple images from the list.

[Live Demo](https://vashkevichsj16.github.io/node-image-picker-demo/)

## Features
- jQuery Free
- Single or multiple images selection
- Size selection
- PreSelected images
- ...

## Installation
```
npm install simple-react-image-picker - will install source, not current proyect
```

### Examples
![How its looks](https://raw.githubusercontent.com/bagongkia/react-image-picker/master/docs/img/react-image-picker-demo.jpg)


#### Component style
```javascript
//ES6
import React, { Component } from 'react'
import ImagePicker from 'simple-react-image-picker'

//import images from local
import img1 from './images/kitten/200.jpg'
import img2 from './images/kitten/201.jpg'
import img3 from './images/kitten/202.jpg'
import img4 from './images/kitten/203.jpg'

const imageList = [img1, img2, img3, img4]

const App = () => {
    const [image, setImage] = useState();
    const [images, setImages] = useState([]);
    const [imagesPreselect, setImagesPreselect] = useState([]);
    const [imagesSize, setImagesSize] = useState([]);

    const onPickImage = (newImage) => {
        setImage(newImage);
    }
    const onPickImages = (newImages) => {
        setImages(newImages);
    }
    const onPickImagesPreselect = (newImages) => {
        setImagesPreselect(newImages);
    }
    const onPickImagesChangedSize = (newImages) => {
        setImagesSize(newImages);
    }
    return (
      <div>
        <ImagePicker 
          images={
              imageList.map(
                  (image, i) => (
                      {
                          src: image, 
                          value: i,
                          isSelected: i % 2 === 0,
                          size: {height: 200, width: 200}
                      })
              )
          }
          pickHandler={onPickImage}
        />
        <button type="button" onClick={() => console.log(this.state.image)}>OK</button>
      </div>
    )
}

export default App
```

##
Current project is fork of [source](https://github.com/bagongkia/react-image-picker)

## License

React-Image-Picker is open-sourced software licensed under the [MIT license](http://opensource.org/licenses/MIT)
