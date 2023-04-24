import * as React from "react";
import { HorizontalSplitter, ImageTile } from "../model";
import { renderElement } from "../App";

interface HorizontalSplitterComponentProps {
  element: HorizontalSplitter;
  setMainImage: React.Dispatch<React.SetStateAction<ImageTile | undefined>>;
}

const HorizontalSplitterComponent: React.FC<
  HorizontalSplitterComponentProps
> = ({ element, setMainImage }) => {
  return (
    <div key={element.elementKey} className="horizontal-splitter">
      {element.elements.map((child) => renderElement(child, setMainImage))}
    </div>
  );
};

export default HorizontalSplitterComponent;
