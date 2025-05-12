import ReactFlow, { 
                    // useEdgesState,
                    // ReactFlowProvider,
                    // useNodesState,
                    // addEdge,
                    Background,
                    MiniMap,
                    Controls
                    } from 'reactflow';
import 'reactflow/dist/style.css';
import '../../css/workspace/canvas.css'
import { nodeTypes } from './nodeTypes';
import { useFlow } from '../../contexts/flowContext';

// const initialNodes = [
//   {
//     id: '1',
//     type: 'custom',
//     data: { label: 'Start Node' },
//     position: { x: 100, y: 100 },
//   },
//   {
//     id: '2',
//     type: 'default',
//     data: { label: 'Start Node' },
//     position: { x: 200, y: 100 },
//   },
// ];

// const initialEdges = [];

export default function ReactFlowCanvas() {

    const {nodes,edges,onNodesChange,onEdgesChange,onConnect} = useFlow()

    // const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
    // const [edges,setEdges,onEdgesChange] = useEdgesState(initialEdges)
    // const [ID, increaseID] = useState(3) 

    // const onConnect = (params) => setEdges((eds)=> addEdge(params,eds))
    // const addNode = () => {

    //     increaseID((prev) => (prev + 1))

    //     var newNode = {
    //         id: ID.toString(),
    //         type: 'default',
    //         data: {label: 'new node'},
    //         position : {x:100, y:100},

    //     };

    //     setNodes((prev) => [...prev, newNode])
    // }


    return (
      <div className="workspaceCanvas">
            <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} 
                        onNodesChange={onNodesChange} 
                        onEdgesChange={onEdgesChange} 
                        onConnect={onConnect}
                        panOnDrag
                        translateExtent={[[-Infinity, -Infinity], [Infinity, Infinity]]}
                        fitView
                    >

                <Background />
                <MiniMap />
                <Controls />
            </ReactFlow>
        </div>
  );
}
