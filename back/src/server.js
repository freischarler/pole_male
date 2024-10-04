import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import  syncModels  from './models/index.js';
import userRoutes from './routes/userRoutes.js';
import eventRoutes from './routes/eventRoutes.js';
import qrsRoutes from './routes/qrsRoutes.js';
import teamsRoutes from './routes/teamsRoutes.js';
import eventPriceRoutes from './routes/eventPriceRoutes.js';
import ticketRoutes from './routes/ticketRoutes.js';
import mpRoutes from './routes/mpRoutes.js';
import loginRoutes from './routes/loginRoutes.js';
import registrationRoutes from './routes/registrationRoutes.js';
import eventParametersRoutes from './routes/eventParametersRoutes.js';
import athleteCategoriesRoutes from './routes/athleteCategoriesRoutes.js';
import ageRoutes from './routes/ageRoutes.js';
import styleRoutes from './routes/styleRoutes.js';

dotenv.config();



const app = express();
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(cors());
  console.log('CORS-enabled for all origins');
} else {
  app.use(cors({ origin: 'https://your-production-url.com' }));
  console.log('CORS-enabled for a single domain');
}

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);
  next();
});

connectDB().then(syncModels);

app.use('/api/age', ageRoutes);
app.use('/api/athleteCategories', athleteCategoriesRoutes);
app.use('/api/eventParameters', eventParametersRoutes);
app.use('/api/eventPrice', eventPriceRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/mp', mpRoutes);
app.use('/api/qrs', qrsRoutes);
app.use('/api/registration', registrationRoutes);
app.use('/api/style', styleRoutes);
app.use('/api/teams', teamsRoutes);
app.use('/api/tickets', ticketRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
