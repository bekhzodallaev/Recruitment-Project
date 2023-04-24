import * as React from "react";
import { ImageTile, VerticalSplitter } from "../model";
import { renderElement } from "../App";

interface VerticalSplitterComponentProps {
  element: VerticalSplitter;
  setMainImage: React.Dispatch<React.SetStateAction<ImageTile | undefined>>;
}

const VerticalSplitterComponent: React.FC<VerticalSplitterComponentProps> = ({
  element,
  setMainImage,
}) => {
  return (
    <div key={element.elementKey} className="vertical-splitter">
      {element.elements.map((child) => renderElement(child, setMainImage))}
    </div>
  );
};

export default VerticalSplitterComponent;
