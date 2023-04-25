import React from "react";
import { ElementsType, TextTile, ImageTile, ButtonTile } from "../model";

// TextTile Component
export const TextTileComponent: React.FC<{ element: TextTile }> = ({
  element,
}) => {
  return (
    <div className={`textTile ${element.color}`} key={element.elementKey}>
      <h3>{element.title}</h3>
      <p>{element.text}</p>
    </div>
  );
};

// ImageTile Component
export const ImageTileComponent: React.FC<{ element: ImageTile }> = ({
  element,
}) => {
  return (
    <div className="imageTile" key={element.elementKey}>
      <img src={element.source} alt={element.title} />
    </div>
  );
};

// ButtonTile Component
export const ButtonTileComponent: React.FC<{
  element: ButtonTile;
  setMainImage: React.Dispatch<React.SetStateAction<ImageTile | undefined>>;
}> = ({ element, setMainImage }) => {
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

// Function to render different elements based on their type
// ...

// Function to render different elements based on their type
export function renderElement(
  element: ElementsType,
  setMainImage: React.Dispatch<React.SetStateAction<ImageTile | undefined>>
): JSX.Element | null {
  switch (element.type) {
    // Render TextTile
    case "textTile":
      return <TextTileComponent key={element.elementKey} element={element} />;
    // Render ImageTile
    case "imageTile":
      return <ImageTileComponent key={element.elementKey} element={element} />;
    // Render ButtonTile
    case "buttonTile":
      return (
        <ButtonTileComponent
          key={element.elementKey}
          element={element}
          setMainImage={setMainImage}
        />
      );
    // Render HorizontalSplitter
    case "horizontalSplitter":
      return (
        <div key={element.elementKey} className="horizontal-splitter">
          {element.elements.map((child) => renderElement(child, setMainImage))}
        </div>
      );
    // Render VerticalSplitter
    case "verticalSplitter":
      return (
        <div key={element.elementKey} className="vertical-splitter">
          {element.elements.map((child) => renderElement(child, setMainImage))}
        </div>
      );
    default:
      return null;
  }
}
