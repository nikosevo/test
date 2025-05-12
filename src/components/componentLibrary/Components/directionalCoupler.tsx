import { Handle, Position } from 'reactflow';
import '../../../css/workspace/node.css'

import ComponentIcon from '../../common/icon';


const DirectionalCoupler = ({ data }) => {
    return (
      <div className='node'>
        <ComponentIcon name={'Directional Coupler'}></ComponentIcon>
        <strong>
        </strong>
        <Handle
          className='handle top'
          type="source"
          position={Position.Right}
          id="a"
        />
        <Handle
          className='handle bottom'
          type="source"
          position={Position.Right}
          id="b"
        />
        <Handle
          className='handle top'
          type="target"
          position={Position.Left}
          id="c"
        />
        <Handle
          className='handle bottom'
          type="target"
          position={Position.Left}
          id="d"
        />


      </div>
      
    );
  };

  export default DirectionalCoupler