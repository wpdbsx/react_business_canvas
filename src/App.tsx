import React from 'react';
import ResourceView from './pages/ResourceView';
import "./App.css"
const App: React.FC = () => {

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: "black"
    }}>
      <ResourceView />
    </div >
  );
}

export default App;
