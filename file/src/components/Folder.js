import { useState } from "react";

const Folder = ({ handleInsertNode = () => { }, explorer }) => {
    console.log("data:", explorer);

    const [expand, setExpand] = useState(false);
    const [showInput, setShowInput] = useState({
        visible: false,
        isFolder: null
    });

    const handleNewFolder = (e, folder) => {
        e.stopPropagation();
        setExpand(true);
        setShowInput({
            visible: true,
            isFolder: folder
        })
    }

    const onAddHandler = (e) => {
        if (e.keyCode === 13 && e.target.value) {


            //add logic
            handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
            setShowInput((prevState) => ({
                ...prevState,
                visible: false,
            }));
        }
    }
    if (explorer.isFolder) {
        return (
            <div style={{ marginTop: 5 }}>
                <div onClick={() => { setExpand(!expand) }} className="folder">
                    <span>📁 {explorer.name}</span>
                    <div>
                        <button onClick={(e) => {
                            handleNewFolder(e, true)
                        }}>Folder +</button>
                        <button onClick={(e) => {
                            handleNewFolder(e, false)
                        }}>File +</button>
                    </div>
                </div>

                <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
                    {
                        showInput.visible && (
                            <div className="inputContainer">
                                <span>
                                    {
                                        showInput.isFolder ? "📁" : "📑"
                                    }
                                </span>
                                <input
                                    type="text"
                                    onKeyDown={onAddHandler}
                                    onBlur={() => {
                                        setShowInput({ ...showInput, visible: false })
                                    }}
                                    className="inputContainer__input"
                                    autoFocus></input>
                            </div>
                        )
                    }
                    {
                        (explorer.items || []).map((exp) => {
                            return <Folder handleInsertNode={handleInsertNode}
                                explorer={exp} key={exp.id} />
                        }
                        )
                    }
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <span>📑{explorer.name}</span>
            </div>
        )
    }

}

export default Folder;