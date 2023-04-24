import * as React from "react";
import { ButtonTile, ImageTile } from "../model";

interface ButtonTileComponentProps {
  element: ButtonTile;
  setMainImage: React.Dispatch<React.SetStateAction<ImageTile | undefined>>;
}

const ButtonTileComponent: React.FC<ButtonTileComponentProps> = ({
  element,
  setMainImage,
}) => {
  const handleClick = () => {
    if (element.action.type === "update") {
      setMainImage({
        type: "imageTile",
        elementKey: element.action.referenceElementkey,
        source: element.action.value.source,
        title: element.action.value.title,
      });
    }
  };

  return (
    <button className="buttonTile" onClick={handleClick}>
      {element.text}
    </button>
  );
};

export default ButtonTileComponent;
