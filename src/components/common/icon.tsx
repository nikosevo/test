import { SlArrowRightCircle } from "react-icons/sl";
import { SlShuffle } from "react-icons/sl";


interface ComponentIcon  {
    children?: React.ReactNode[];  // Allow multiple children

    name?:string
}


const ComponentIcon= ({name}) => {
    if(name === 'Directional Coupler') return(<SlShuffle/>)
    if(name === 'Source') return(<SlArrowRightCircle />
)
}

export default ComponentIcon