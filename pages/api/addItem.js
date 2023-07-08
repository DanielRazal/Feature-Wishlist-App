import path from 'path';
import { promises as fs } from 'fs';

// POST // http://localhost:3000/api/addItem

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const jsonDirectory = path.join(process.cwd(), 'public', 'data');

            const newItem = {
                title: req.body.title,
                description: req.body.description,
            };

            // Read the JSON file
            const fileContents = await fs.readFile(path.join(jsonDirectory, 'featureItem.json'), 'utf8');

            let items = JSON.parse(fileContents);

            // Generate a new ID by incrementing the last item's ID by 1
            const lastItem = items[items.length - 1];
            const newId = lastItem ? lastItem.id + 1 : 1;

            // Assign the generated ID and add the new item with votes to the array
            const newItemWithVotes = {
                id: newId,
                ...newItem,
                votes: {
                    counter: 0,
                    unlike: true,
                    like: false
                }
            };
            items.push(newItemWithVotes);

            // Write the updated data back to the file
            await fs.writeFile(path.join(jsonDirectory, 'featureItem.json'), JSON.stringify(items), 'utf8');

            res.status(200).json({ message: 'Item added successfully' });
        } catch (error) {
            console.error('Error handling request:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}

