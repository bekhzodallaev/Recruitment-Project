import * as React from "react";
import { Layout, ImageTile } from "./model";
import exampleLayoutData from "../src/assets/example.json";
import "./style.css";
import { renderElement } from "./components/Component-pack";

// Main App component
export default function App() {
  // State for the main image
  const [mainImage, setMainImage] = React.useState<ImageTile>();

  // State for the example layout
  const [exampleLayout, setExampleLayout] = React.useState<Layout>(
    exampleLayoutData as Layout
  );

  // Fetch layout data from API on component mount
  React.useEffect(() => {
    fetch("http://localhost:8080/definition")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setExampleLayout(data[0]); // Update this line to access the first element of the "definition" array
      });
  }, []);

  // Show loading message while layout data is being fetched
  if (!exampleLayout) {
    return <div>Loading...</div>;
  }

  // Render main app layout
  return (
    <div className="main">
      {/* Render layout title */}
      <div className="title">
        <h1>{exampleLayout.title}</h1>
      </div>
      {/* Render container */}
      <div className="container">
        {/* Render image container */}
        <div className="image-container">
          {/* Render main image if source exists */}
          {mainImage && mainImage.source && (
            <img
              className="main-image"
              src={mainImage.source}
              alt={mainImage.title}
            />
          )}
          {/* Render image description */}
          {mainImage && mainImage.title && (
            <div className="image-description">{mainImage.title}</div>
          )}
        </div>
        {/* Render elements container */}
        <div className="elements-container">
          {/* Render elements if rootElement is a verticalSplitter */}
          {exampleLayout.rootElement &&
            exampleLayout.rootElement.type === "verticalSplitter" &&
            exampleLayout.rootElement.elements.map((element) =>
              renderElement(element, setMainImage)
            )}
        </div>
      </div>
    </div>
  );
}
