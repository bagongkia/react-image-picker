import React, { Component } from "react";
import PropTypes from "prop-types";
import { Map } from "immutable";

import "./index.scss";
import Image from "./components/image";

class ImagePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picked: Map()
    };
    this.handleImageClick = this.handleImageClick.bind(this);
    this.renderImage = this.renderImage.bind(this);
  }
  componentDidMount() {
    const { multiple, selected } = this.props;
    if (multiple) {
      if (selected[0]) {
        this.changeState(this.props);
      }
    } else if (selected) {
      this.changeState(this.props);
    }
  }
  componentWillReceiveProps = newProps => {
    if (newProps.selected !== this.props.selected) {
      this.changeState(newProps);
    }
  };
  changeState = props => {
    const { onPick, selected, multiple } = props;
    const pickedImage = Map();
    let newerPickedImage = Map();
    if (multiple) {
      selected.forEach(image => {
        newerPickedImage = newerPickedImage.set(image.value, image.src);
      });
    } else {
      const image = selected;
      newerPickedImage = pickedImage.has(image.value)
        ? pickedImage.delete(image.value)
        : pickedImage.set(image.value, image.src);
    }
    this.setState({ picked: newerPickedImage });
  };
  handleImageClick(image) {
    const { multiple, onPick, selected } = this.props;
    const pickedImage = multiple ? this.state.picked : Map();
    const newerPickedImage = pickedImage.has(image.value)
      ? pickedImage.delete(image.value)
      : pickedImage.set(image.value, image.src);
    const pickedImageToArray = [];
    newerPickedImage.map((image, i) =>
      pickedImageToArray.push({ src: image, value: i })
    );
    onPick(multiple ? pickedImageToArray : pickedImageToArray[0]);
  }

  renderImage(image, i) {
    return (
      <Image
        src={image.src}
        isSelected={this.state.picked.has(image.value)}
        onImageClick={() => this.handleImageClick(image)}
        key={i}
      />
    );
  }

  render() {
    const { images } = this.props;
    return (
      <div className="image_picker">
        {images.map(this.renderImage)}
        <div className="clear" />
      </div>
    );
  }
}

ImagePicker.propTypes = {
  images: PropTypes.array,
  multiple: PropTypes.bool,
  onPick: PropTypes.func,
  selected: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default ImagePicker;
