import React from 'react';
import ComponentLibrary from './components/componentLibrary/componentLibrary';
import FlowEditor from './components/workspace/workspace';
import { FlowProvider } from './contexts/flowContext';

import './css/main.css'
import { ReactFlowProvider } from 'reactflow';


function App(){
  return(
    <>
      <FlowProvider>

        <ComponentLibrary></ComponentLibrary>
        <ReactFlowProvider>
          <FlowEditor></FlowEditor>
        </ReactFlowProvider>
      </FlowProvider>
    </>
  )
  // return <NodeCanvas />;
};

export default App;
