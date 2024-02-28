import React, { useState } from "react";

const ImageFadeIn = ({ src }) => {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div className={`image-container ${loaded ? "fade-in" : ""}`}>
      <img
        className="img"
        src={src}
        alt="Loaded image"
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default ImageFadeIn;
