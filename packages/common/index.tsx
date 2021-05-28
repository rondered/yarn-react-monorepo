import React from 'react';

export const useExample = () => {
  const [example, setExample] = React.useState<string>('example');

  return { example , setExample }
}