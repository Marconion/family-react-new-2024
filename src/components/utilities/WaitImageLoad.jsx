import React, { useState } from "react";

function WaitImageLoad() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div>
      {!imageLoaded && <div>Loading...</div>}
      <img
        src="path/to/your/image.jpg"
        alt="Your Image"
        onLoad={handleImageLoad}
        style={{ display: imageLoaded ? "block" : "none" }}
      />
    </div>
  );
}

export default WaitImageLoad;
