import React, { Component } from "react";
import { render } from "react-dom";
import ImagePicker from "./react-image-picker";

import img1 from "./assets/images/kitten/200.jpg";
import img2 from "./assets/images/kitten/201.jpg";
import img3 from "./assets/images/kitten/202.jpg";
import img4 from "./assets/images/kitten/203.jpg";

const imageList = [img1, img2, img3, img4];

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: {},
      images: [],
      selectedImage: { src: img3, value: 3 },
      selectedImages: [{ src: img1, value: 0 }, { src: img2, value: 1 }]
    };
  }

  onPickImage(image) {
    this.setState({ image });
  }
  onSelectImage(selectedImage) {
    this.setState({ selectedImage });
  }
  onSelectImages(selectedImages) {
    this.setState({ selectedImages });
  }
  onPickImages(images) {
    this.setState({ images });
  }

  render() {
    return (
      <div>
        <div>
          <h1>React Image Picker</h1>
          <h3>Single Select</h3>
          <ImagePicker
            images={imageList.map((image, i) => ({ src: image, value: i }))}
            onPick={this.onPickImage.bind(this)}
          />
          <textarea
            rows="4"
            cols="100"
            value={this.state.image && JSON.stringify(this.state.image)}
            disabled
          />
          <h3>Multiple Select</h3>
          <ImagePicker
            images={imageList.map((image, i) => ({ src: image, value: i }))}
            onPick={this.onPickImages.bind(this)}
            multiple
          />
          <textarea
            rows="4"
            cols="100"
            value={this.state.images && JSON.stringify(this.state.images)}
            disabled
          />
        </div>
        <div>
          <h3>Single Select with preselected Image</h3>
          <ImagePicker
            images={imageList.map((image, i) => ({ src: image, value: i }))}
            onPick={this.onSelectImage.bind(this)}
            selected={this.state.selectedImage}
          />
          <textarea
            rows="4"
            cols="100"
            value={
              this.state.selectedImage &&
              JSON.stringify(this.state.selectedImage)
            }
            disabled
          />
          <h3>Multiple Select with preselected image</h3>
          <ImagePicker
            images={imageList.map((image, i) => ({ src: image, value: i }))}
            onPick={this.onSelectImages.bind(this)}
            multiple
            selected={this.state.selectedImages}
          />
          <textarea
            rows="4"
            cols="100"
            value={
              this.state.selectedImages &&
              JSON.stringify(this.state.selectedImages)
            }
            disabled
          />
        </div>
      </div>
    );
  }
}

render(<Demo />, document.querySelector("#root"));
