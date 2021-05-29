import React from 'react';

export const useExample = () => {
  const [example, setExample] = React.useState<string>('example string');

  return { example , setExample }
}