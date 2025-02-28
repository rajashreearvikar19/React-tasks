import explorer from "./data/fileData"
import Folder from './components/Folder';
import { useState } from 'react';
import "./Styles.css";
import UseNodeTreverse from "./hooks/UseNodeTreverse"


function App() {
  const [exploerData, setExploreData] = useState(explorer);
  const { insertNode } = UseNodeTreverse();
  console.log(exploerData);

  const handleInsertNode=(folderId,item,isFolder)=>{
    const finalNode= insertNode(exploerData,folderId,item,isFolder);
    setExploreData(finalNode);
  } 
  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} explorer={exploerData} />
    </div>
  );
}

export default App;
