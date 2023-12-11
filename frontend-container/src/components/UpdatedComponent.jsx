/**
 * This code was generated by Builder.io.
 */
import React, { useState, useEffect } from "react";

function UpdatedComponent(props) {
  const [figmaImports, setFigmaImports] = useState(() => null);

  useEffect(() => {
    fetch(
      "https://cdn.builder.io/api/v3/content/figma-imports?apiKey=2c87660801bc48878f989ed5ac733863&includeRefs=true&fields=data&limit=10"
    )
      .then((res) => res.json())
      .then((result) => {
        setFigmaImports(result);
      });
  }, []);

  return (
    <form>
      <header className="header"></header>
      <div className="image-container">
        <img src="image1.jpg" alt="Image 1" />
        <img src="image2.jpg" alt="Image 2" />
      </div>
      <div className="input-container">
        <label htmlFor="input1">Input 1</label>
        <input type="text" id="input1" aria-label="Input 1" />
      </div>
      <div className="input-container">
        <label htmlFor="input2">Input 2</label>
        <input type="text" id="input2" aria-label="Input 2" />
      </div>
      <div className="button-container">
        <button>Submit</button>
      </div>
      <div className="link-container">
        <a href="https://example.com">Link 1</a>
        <a href="https://example.com">Link 2</a>
      </div>
      <div className="div-container">
        <div>Content 1</div>
        <div>Content 2</div>
      </div>
    </form>
  );
}

export default UpdatedComponent;
