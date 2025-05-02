// This file is based on quizRoutes.js from trainingNew, renamed as routes.js
// Please copy the actual content of quizRoutes.js here for full functionality.

import express from 'express';
import { signUpController } from '../controllers/signUpController.js';
import login from '../controllers/loginController.js';

const router = express.Router();

// Example route
router.get('/test', (req, res) => {
  res.send('Routes working!');
});

// Signup route
router.post('/signup', signUpController);

// Login route
router.post('/login', login);

export default router;
