import { useState,useRef,useEffect} from 'react'
import '../../css/componentLibrary/componentLibrary.css'


interface LibraryContainer {
  children?: React.ReactNode[];  // Allow multiple children
  collapsed?:boolean;
  onCollapse?: (collapsed: boolean) => void;


}

const LibraryContainer = ({children,collapsed=false,onCollapse}) => {

  const [size,setWidth] = useState(200)
  const [resizing,setResizing] = useState(false)

  const MAX_WIDTH = 1000
  const MIN_WIDTH = 100
  const COLLAPSED = 50
  const DEFAULT = 250

  const startX = useRef(0);


  const handleResizing = (e:any) =>{
     e.preventDefault();

      // Set the initial mouse position when drag starts
      startX.current = e.clientX;

      // Start dragging
      setResizing(true);
  }

  const handleResize = (e:any) =>{
    let w
    if(e.clientX<MIN_WIDTH){
      //supposed to be closed
      w = COLLAPSED
      onCollapse(true)
    }
    else if(e.clientX>MAX_WIDTH){
      w = MAX_WIDTH
    }
    else{
      w=e.clientX
    }
    setWidth(w); // Minimum width of 100px
  }
  const stopResizing = () => {
    setResizing(false);

  }

  // Attach global event listeners when component mounts
  useEffect(() => {
    if (resizing) {
      window.addEventListener('mousemove', handleResize); // Listen globally
      window.addEventListener('mouseup', stopResizing); // Stop resizing on mouse up globally
    } else {
      window.removeEventListener('mousemove', handleResize); // Remove listener when done
      window.removeEventListener('mouseup', stopResizing);
    }

    // Clean up event listeners when component unmounts or dragging state changes
    return () => {
      window.removeEventListener('mousemove', handleResize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [resizing]); // Only add/remove listeners when dragging state changes

  useEffect(()=>{

    if(collapsed){
      setWidth(COLLAPSED)
    }else{
      setWidth(DEFAULT)
    }
  },[collapsed])

  return(
    <div className="container" style={{width:size}}>

      <div style={{zIndex:100}}>
        {children}
      </div>
      <div className="resizeBar" onMouseDown={handleResizing} style={{zIndex:100}}>

      </div>
    </div>
  )
}

export default LibraryContainer