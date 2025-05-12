import LibraryContainer from '../common/ResizableBox';
import '../../css/componentLibrary/tabs.css'
import { FileText, Search, GitBranch, Turtle } from 'lucide-react'; // Or any icon set you prefer
import GridView from './gridView';


import { useState } from 'react';
const ComponentLibrary = () => {
  const [activeTab, setActiveTab] = useState('explorer');
  const [collapsed,setCollapsed] = useState(false);
  const toggleBar = () => {
    if(collapsed){
      setCollapsed(false)
    }
    else{
      setCollapsed(true)
    }
  }

  const handleTabChange = (active:string) => {
    if(activeTab === active){
      toggleBar()
    }else{
        console.log(collapsed)
        setCollapsed(false)
    }
    setActiveTab(active)

  }

  const renderPanel = () => {
    switch (activeTab) {
      case 'explorer':
        return <div><GridView></GridView></div>;
      case 'search':
        return <div className="p-4">🔍 Search Content</div>;
      case 'git':
        return <div className="p-4">🐙 Git Content</div>;
      default:
        return <div className="p-4">Select a tab</div>;
    }
  };

  return (
    <LibraryContainer collapsed={collapsed} onCollapse={(e)=>setCollapsed(e)}>

      <div className='containerLib'>
        {/* Left sidebar */}
        <div className="sidebar">
          <button onClick={() => handleTabChange('explorer')}>
            <FileText size={24} />
          </button>
          <button onClick={() => handleTabChange('search')}>
            <Search size={24} />
          </button>
          <button onClick={() => handleTabChange('git')}>
            <GitBranch size={24} />
          </button>
        </div>

        <div className="content">
          {renderPanel()}
        </div>
      </div>
    </LibraryContainer>
  );
};

export default ComponentLibrary;
