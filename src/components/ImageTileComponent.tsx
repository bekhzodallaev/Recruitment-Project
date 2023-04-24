import * as React from "react";
import { ImageTile } from "../model";

interface ImageTileComponentProps {
  element: ImageTile;
}

const ImageTileComponent: React.FC<ImageTileComponentProps> = ({ element }) => {
  return (
    <div className="imageTile" key={element.elementKey}>
      <img src={element.source} alt={element.title} />
    </div>
  );
};

export default ImageTileComponent;
