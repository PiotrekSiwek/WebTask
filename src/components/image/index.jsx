import './index.css'
import React, {useState} from "react";

const Image = ({
                           src,
                           alt,
                           width,
                           height,
                           loading = 'lazy',
                           placeholder = true,
                           srcSet,
                           sizes,
                           title,
                           classname = '',
                           loadingElement,
                           fallbackElement,
                           onError,
                           ...props
                         }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
    onError();
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
      <div className={`imageContainer ${classname}`} style={{width,height}} >
        <img
            src={src}
            title={title}
            srcSet={srcSet}
            sizes={sizes}
            alt={alt}
            style={{width, height}}
            className={`image ${isLoaded ? 'loaded' : ''}`}
            loading={loading}
            onLoad={handleLoad}
            onError={handleError}
            {...props}
        />

        {placeholder && !isLoaded && !hasError && (
            <div className="imagePlaceholder" style={{width,height}} >
              {loadingElement? loadingElement : <span>Loading...</span>}
            </div>
        )}
        {placeholder && hasError  && (
            <div className="imagePlaceholder" style={{width,height}} >
              {fallbackElement ? fallbackElement : <span>Failed to load image.</span>}
            </div>
        )}
      </div>
  );
};

export default Image;
