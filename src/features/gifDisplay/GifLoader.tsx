import React, { Suspense } from 'react';
import { GifProps } from './Gif';
import Gif from './Gif';
import ImagePlaceholder from './ImagePlaceholder';

const GifLoader: React.FC<GifProps> = ({ imageSrc, alt }) => {
  return (
    <Suspense fallback={<ImagePlaceholder defaultHeight={200} />}>
      <Gif imageSrc={imageSrc} alt={alt} />
    </Suspense>
  );
};

export default GifLoader;
