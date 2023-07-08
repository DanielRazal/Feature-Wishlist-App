async function addItem(itemData: FeatureItem): Promise<void> {
    try {
        await fetch('http://localhost:3000/api/addItem', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(itemData),
        });
    } catch (error) {
        console.error('Error adding item:', error);
        throw error; // Rethrow the error to handle it in the component
    }
}

async function getAllItems(): Promise<FeatureItem[]> {
    try {
        const response = await fetch('http://localhost:3000/api/getAlltems');
        if (!response.ok) {
            throw new Error('Failed to fetch items');
        }
        const items = await response.json();
        return items;
    } catch (error) {
        console.error('Error fetching items:', error);
        throw error;
    }
}

async function updateItem(itemId: number, updatedVotes: any): Promise<void> {
    try {
        await fetch(`/api/updateItem?itemId=${itemId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedVotes)
        });
    } catch (error) {
        console.error('Error updating item votes:', error);
        throw error;
    }
}





export { addItem, getAllItems, updateItem };

