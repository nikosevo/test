import { availableComponents } from "./Components/components";
import '../../css/componentLibrary/gridView.css'
import { VscFold,VscTriangleRight} from "react-icons/vsc";
import { CgUnavailable } from "react-icons/cg";
import { useFlow } from "../../contexts/flowContext";
import ComponentIcon from "../common/icon";



// Reusable component logic
const GenericComponent = ({ name,short}) => {
  const{ addNode } = useFlow()

  const nodeData = {label:name}

  return (
    <div onClick={ () => addNode(short,nodeData)} className={`component-box ${name}`}>
      <p className="title">{short}</p>
      <h3 className="icon"><ComponentIcon name={name}></ComponentIcon></h3>
    </div>
  );
};


// Grid Display
const GridView = () => {
    return (
        <div className="containerGridView">

            <div className="gridview">
                {availableComponents.map(({ id, name,short}) => (
                    <GenericComponent key={id} name={name} short={short}/>
                ))}
            </div>
        </div>
    );
};

export default GridView