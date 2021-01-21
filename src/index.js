import React, {useState} from 'react'
import './index.scss'
import Image from './components/image'

const ImagePicker = ({multiple, pickHandler, images}) => {

    const [imageList, setImageList] = useState(images);
    const [multipleActive, setMultipleActive] = useState(multiple)

    const handleImageClick = (image) => {
        if (!multipleActive) {
            imageList.map(el => el.isSelected = false)
        }
        imageList
            .filter(element => element.value === image.value)
            .map(el => el.isSelected = (el.isSelected === 'undefined' || !el.isSelected));
        setImageList(imageList);
        const result = imageList.filter(el => el.isSelected);
        pickHandler(multipleActive ? result: result[0]);
    }

    return (
        <div className="image_picker">
            {imageList.map((image, i) =>
                <Image
                    src={image.src}
                    isSelected={image.isSelected}
                    clickHandler={() => handleImageClick(image)}
                    key={i}
                    size={image.size}
                />
            )}
            <div className="clear"/>
        </div>
    );
}

export default ImagePicker