import React from 'react';

const ExampleCarouselImage = ({ background }) => {
  return (
    <div className="d-block w-100 hero-bg" style={{ backgroundImage: `url(${background})` }}>
    </div>
  );
}

export default ExampleCarouselImage;

