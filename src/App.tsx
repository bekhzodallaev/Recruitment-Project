import * as React from "react";
import { Layout, ElementsType, ImageTile } from "./model";
import exampleLayoutData from "../src/assets/example.json";
import "./style.css";
import TextTileComponent from "./components/TextTileComponent";
import ImageTileComponent from "./components/ImageTileComponent";
import ButtonTileComponent from "./components/ButtonTileComponent";
import HorizontalSplitterComponent from "./components/HorizontalSplitterComponent";
import VerticalSplitterComponent from "./components/VerticalSplitterComponent";

const exampleLayout: Layout = exampleLayoutData as Layout;

export function renderElement(
  element: ElementsType,
  setMainImage: React.Dispatch<React.SetStateAction<ImageTile | undefined>>
): JSX.Element | null {
  switch (element.type) {
    case "textTile":
      return <TextTileComponent key={element.elementKey} element={element} />;
    case "imageTile":
      return <ImageTileComponent key={element.elementKey} element={element} />;
    case "buttonTile":
      return (
        <ButtonTileComponent
          key={element.elementKey}
          element={element}
          setMainImage={setMainImage}
        />
      );
    case "horizontalSplitter":
      return (
        <HorizontalSplitterComponent
          key={element.elementKey}
          element={element}
          setMainImage={setMainImage}
        />
      );
    case "verticalSplitter":
      return (
        <VerticalSplitterComponent
          key={element.elementKey}
          element={element}
          setMainImage={setMainImage}
        />
      );
    default:
      return null;
  }
}

export default function App() {
  const [mainImage, setMainImage] = React.useState<ImageTile>();

  return (
    <div className="main">
      <div className="title">
        <h1>{exampleLayout.title}</h1>
      </div>
      <div className="container">
        <div className="image-container">
          {mainImage && (
            <img
              className="main-image"
              src={mainImage.source}
              alt={mainImage.title}
            />
          )}
          <div className="image-description">
            {mainImage && mainImage.title}
          </div>
        </div>
        <div className="elements-container">
          {exampleLayout.rootElement.type === "verticalSplitter" &&
            exampleLayout.rootElement.elements.map((element) =>
              renderElement(element, setMainImage)
            )}
        </div>
      </div>
    </div>
  );
}
