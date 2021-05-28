import React from 'react';
import { useExample } from '@react-monorepo/common'

function App() {

  const { example, setExample } = useExample();

  return (
    <div className="App">
      { example }
    </div>
  );
}

export default App;
