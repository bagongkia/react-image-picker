import React, {Component, useState} from 'react'
import {render} from 'react-dom'
import ImagePicker from './index'

import img1 from './assets/images/kitten/200.jpg'
import img2 from './assets/images/kitten/201.jpg'
import img3 from './assets/images/kitten/202.jpg'
import img4 from './assets/images/kitten/203.jpg'

const imageList = [img1, img2, img3, img4]

const Demo = () => {
    const [image, setImage] = useState();
    const [images, setImages] = useState([]);

    const onPickImage = (newImage) => {
        setImage(newImage);
        console.log(image)
    }
    const onPickImages = (newImages) => {
        setImages(newImages);
        console.log(images)
    }

    return (
        <div>
            <h1>React Image Picker</h1>
            <h3>Single Select</h3>
            <ImagePicker
                images={imageList.map((image, i) => ({src: image, value: i}))}
                pickHandler ={onPickImage}
            />
            <textarea rows="4" cols="100" value={image && JSON.stringify(image)} disabled/>

            <h3>Multiple Select</h3>
            <ImagePicker
                images={imageList.map((image, i) => ({src: image, value: i}))}
                pickHandler={onPickImages}
                multiple
            />
            <textarea rows="4" cols="100" value={images && JSON.stringify(images)} disabled/>
        </div>
    )
}

render(<Demo/>, document.querySelector('#root'))