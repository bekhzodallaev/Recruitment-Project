import * as React from "react";
import { TextTile } from "../model";

interface TextTileComponentProps {
  element: TextTile;
}

const TextTileComponent: React.FC<TextTileComponentProps> = ({ element }) => {
  return (
    <div className={`textTile ${element.color}`} key={element.elementKey}>
      <h3>{element.title}</h3>
      <p>{element.text}</p>
    </div>
  );
};

export default TextTileComponent;
