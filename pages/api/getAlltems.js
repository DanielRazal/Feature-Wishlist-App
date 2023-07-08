import path from 'path';
import { promises as fs } from 'fs';

export default async function getAllItems(req, res) {
  try {
    const jsonDirectory = path.join(process.cwd(), 'public', 'data');

    // Read the JSON file
    const fileContents = await fs.readFile(
      path.join(jsonDirectory, 'featureItem.json'),
      'utf8'
    );

    const items = JSON.parse(fileContents);

    res.status(200).json(items);
  } catch (error) {
    console.error('Error handling request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
