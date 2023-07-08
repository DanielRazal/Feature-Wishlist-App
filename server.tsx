// import express, { Request, Response, NextFunction } from 'express';
// import next from 'next';

// const app = next({ dev: process.env.NODE_ENV !== 'production' });
// const handle = app.getRequestHandler();

// const PORT = process.env.PORT || 3000;

// app.prepare().then(() => {
//   const server = express();

//   server.use(express.json());

//   // server.post('/api/post', async (_req: Request, res: Response, next: NextFunction) => {
//   //   const { title, description } = _req.body;

//   //   if (!title || !description) {
//   //     res.status(400).json({ message: 'Missing required data' });
//   //   } 

//   //   // your POST logic here

//   //   res.status(200).json({ success: true });
//   // });

//   server.post('/api/post', async (_req: Request, res: Response, next: NextFunction) => {
//     const { title, description } = _req.body;

//     if (!title || !description) {
//       res.status(400).json({ message: 'Missing required data' });
//       return;
//     }

//     // Set cache control headers
//     res.setHeader('Cache-Control', 'no-cache'); // Disable caching

//     // Your POST logic here

//     res.status(200).json({ success: true });
//   });

//   server.all('*', (req: Request, res: Response) => {
//     return handle(req, res);
//   });

//   server.listen(PORT, () => {
//     console.log(`Server listening on port ${PORT}`);
//   });
// }).catch((err) => {
//   console.error(err);
// });


import express, { Request, Response, NextFunction } from 'express';
import next from 'next';

const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();

  server.use(express.json());

  server.post('/api/post', async (_req: Request, res: Response, next: NextFunction) => {
    const { title, description } = _req.body;

    if (!title || !description) {
      res.status(400).json({ message: 'Missing required data' });
      return;
    }

    // Set cache control headers
    res.setHeader('Cache-Control', 'no-cache'); // Disable caching

    res.status(200).json({ success: true });
  });

  server.all('*', (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
}).catch((err) => {
  console.error(err);
});
