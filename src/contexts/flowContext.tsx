// src/context/FlowContext.jsx
import { createContext, useContext, useState } from 'react';
import {
  Node,
  Edge,
  OnNodesChange,
  OnEdgesChange,
  addEdge,
  Connection,
  useNodesState,
  useEdgesState,
} from 'reactflow';

type FlowContextType = {
  nodes: Node[];
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
  onNodesChange: OnNodesChange;
  edges: Edge[];
  setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
  onEdgesChange: OnEdgesChange;
  onConnect: (connection: Connection) => void;
  addNode: (nodeType: string, data?: any) => void;
};

const FlowContext = createContext<FlowContextType | undefined>(undefined);

export const FlowProvider = ({ children }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [nodeId, setNodeId] = useState(1);

  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

  const addNode = (type:string='default',data: any = {}) => {
    const newNode = {
      id: nodeId.toString(),
      type: type,
      data: data,
      position: { x: Math.random() * 250, y: Math.random() * 250 }, // optionally control this
    };
    setNodeId((prev) => prev + 1);
    setNodes((prev) => [...prev, newNode]);
  };

  return (
    <FlowContext.Provider value={{
      nodes, setNodes, onNodesChange,
      edges, setEdges, onEdgesChange,
      onConnect,
      addNode
    }}>
      {children}
    </FlowContext.Provider>
  );
};

export const useFlow = () => useContext(FlowContext);
