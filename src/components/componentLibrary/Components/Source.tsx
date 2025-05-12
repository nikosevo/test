import { Handle, Position } from 'reactflow';
import '../../../css/workspace/node.css'

import ComponentIcon from '../../common/icon';


const Source = ({ data }) => {
    return (
      <div className='node'>
        <ComponentIcon name={'Source'}></ComponentIcon>
        <strong>
        </strong>
        <Handle
          className='handle'
          type="source"
          position={Position.Right}
          id="a"
        />



      </div>
      
    );
  };

  export default Source