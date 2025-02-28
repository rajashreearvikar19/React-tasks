const UseNodeTreverse = () => {
    const insertNode = (tree, folderId, item, isFolder) => {
        console.log("tree:", tree);
        if (tree.id === folderId) {
            const newNode = {
                id: new Date().getTime(),
                name: item,
                isFolder: isFolder,
                items: [] // For folders, initialize with an empty array of items
            };
            
        
            return { 
                ...tree, 
                items: [newNode, ...tree.items] // Adds the new node at the beginning of the items array
            };
        }
        let latestNode = [];
        latestNode = tree.items.map((ob) => {
            return insertNode(ob, folderId, item, isFolder);
        });

        return { ...tree, items: latestNode };

    }
    return { insertNode }
}


export default UseNodeTreverse;