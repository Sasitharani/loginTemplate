import bcrypt from 'bcryptjs';
import db from '../db.js';

export const signUpController = async (req, res) => {
  const { username, email, password, phoneNumber } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO iitiusers (username, email, password, phoneNumber, membership) VALUES (?, ?, ?, ?, ?)';
    const values = [username, email, password, phoneNumber, 'free'];
    db.query(query, values, (err) => {
      if (err) return res.status(500).json({ message: 'Failed to register user' });
      res.status(200).json({ message: 'User registered successfully' });
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
