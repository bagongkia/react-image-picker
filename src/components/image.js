import * as React from "react";


const ImageStyle = (size) => {
    if (typeof size === "undefined" || typeof size.width === "undefined" || typeof size.height === "undefined") {
        return {
            objectFit: "cover"
        }
    }
    return {
        width: size.width,
        height: size.height,
        objectFit: "cover"
    }
}

const Image = ({src, isSelected, clickHandler, size}) => {
    return (
        <div className={"responsive " + (isSelected ? "selected" : "")}
             onClick={clickHandler}>
            <img src={src}
                 className={"thumbnail " + (isSelected ? "selected" : "")}
                 style={ImageStyle(size)}
            />
            <div className="checked">
                {/*<img src={imgCheck} style={{ width: 75, height: 75, objectFit: "cover" }}/>*/}
                <div className="icon"/>
            </div>
        </div>
    );
}

export default Image;
