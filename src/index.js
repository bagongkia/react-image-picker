import React, {useState} from 'react'
import { Map } from 'immutable'
import './index.scss'
import Image from './components/image'

const ImagePicker = ({multiple, pickHandler, images}) => {

  const [imageList, setImages] = useState(images)
  const [picked, setPicked] = useState(Map())
  const [multipleActive, setMultipleActive] = useState(multiple)

  const handleImageClick = (image) => {
    console.log(pickHandler)
    const pickedImage = multipleActive ? picked : Map()
    const newerPickedImage =
        pickedImage.has(image.value) ?
            pickedImage.delete(image.value) :
            pickedImage.set(image.value, image.src)

    setPicked(newerPickedImage)
    const pickedImageToArray = []
    newerPickedImage.map((image, i) => pickedImageToArray.push({src: image, value: i}))
    pickHandler(multipleActive ? pickedImageToArray : pickedImageToArray[0])
  }

  return (
      <div className="image_picker">
        { imageList.map( (image, i) =>
            <Image
                src={image.src}
                isSelected={picked.has(image.value)}
                clickHandler={() => handleImageClick(image)}
                key={i}
            />
        ) }
        <div className="clear"/>
      </div>
  );
}

export default ImagePicker