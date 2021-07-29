import React, { Suspense } from 'react';
import { Gif } from '../../types/GifApiResponse';
import GifDisplay from './GifDisplay';
import ImagePlaceholder from './ImagePlaceholder';
import { ErrorBoundary } from './ErrorBoundary';

export interface GifLoaderProps {
  data: Gif;
}

const GifLoader: React.FC<GifLoaderProps> = ({ data }) => {
  return (
    <ErrorBoundary fallback={<h4>Could not fetch gif</h4>}>
      <Suspense fallback={<ImagePlaceholder defaultHeight={200} />}>
        <GifDisplay gif={data} />
      </Suspense>
    </ErrorBoundary>
  );
};

export default GifLoader;
