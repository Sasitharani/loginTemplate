import bcrypt from 'bcryptjs';
import db from '../db.js';

const login = async (req, res) => {
  console.log('Login controller hit');
  const { email, password } = req.body;
  try {
    // Check DB connection
    db.query('SELECT 1', (dbErr) => {
      if (dbErr) {
        console.error('Database connection failed:', dbErr);
      } else {
        console.log('Database connection successful');
      }
    });
    const query = 'SELECT * FROM iitiusers WHERE email = ?';
    db.query(query, [email], async (err, results) => {
      if (err) return res.status(500).send('Login failed. Please try again.');
      if (results.length === 0) return res.status(401).send({ message: 'Invalid email or password.' });
      const user = results[0];
      const isPasswordValid = await bcrypt.compare(password.trim(), user.password);
      if (!isPasswordValid) return res.status(401).send({ message: 'Invalid email or password.' });
      res.status(200).send({ message: 'Login successful.', user: { username: user.username, email: user.email, membership: user.membership } });
    });
  } catch (error) {
    res.status(500).send({ message: 'Internal server error' });
  }
};

export default login;
