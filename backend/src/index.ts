// packages/backend/src/index.ts
import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT: number = parseInt(process.env.PORT || '5000');

app.use(cors());
app.use(express.json());

app.get('/api', (req: Request, res: Response) => {
  res.json({ message: 'Hello from the backend with TypeScript!' });
});

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
