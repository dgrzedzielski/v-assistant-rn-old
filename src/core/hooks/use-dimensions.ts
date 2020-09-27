import { useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

export const useDimensions = () => {
  const [width, setWidth] = useState(Dimensions.get('window').width);
  const [height, setHeight] = useState(Dimensions.get('window').height);

  const handleChange = () => {
    const dims = Dimensions.get('window');

    setWidth(dims.width);
    setHeight(dims.height);
  };

  useEffect(() => {
    Dimensions.addEventListener('change', handleChange);
    return () => {
      Dimensions.removeEventListener('change', handleChange);
    };
  });

  return { windowWidth: width, windowHeight: height };
};
