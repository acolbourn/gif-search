import React, { Suspense } from 'react';
import { Gif } from '../../types/GifApiResponse';
import GifDisplay from './GifDisplay';
import ImagePlaceholder from './ImagePlaceholder';

export interface GifLoaderProps {
  data: Gif;
}

const GifLoader: React.FC<GifLoaderProps> = ({ data }) => {
  return (
    <Suspense fallback={<ImagePlaceholder defaultHeight={200} />}>
      <GifDisplay gif={data} />
    </Suspense>
  );
};

export default GifLoader;
