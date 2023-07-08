import path from 'path';
import { promises as fs } from 'fs';

// PUT http://localhost:3000/api/updateItem?itemId={item_id}

export default async function handler(req, res) {
  if (req.method === 'PUT') {
    try {
      const jsonDirectory = path.join(process.cwd(), 'public', 'data');
      const itemId = parseInt(req.query.itemId, 10); // Assuming itemId is passed as a query parameter

      // Read the JSON file
      const fileContents = await fs.readFile(path.join(jsonDirectory, 'featureItem.json'), 'utf8');
      let items = JSON.parse(fileContents);

      // Find the item by ID
      const itemIndex = items.findIndex(item => item.id === itemId);

      if (itemIndex === -1) {
        // Item not found
        res.status(404).json({ error: 'Item not found' });
        return;
      }

      // Update the item's votes object
      items[itemIndex].votes = req.body;

      // Write the updated data back to the file
      await fs.writeFile(path.join(jsonDirectory, 'featureItem.json'), JSON.stringify(items), 'utf8');

      res.status(200).json({ message: 'Item updated successfully' });
    } catch (error) {
      console.error('Error handling request:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
