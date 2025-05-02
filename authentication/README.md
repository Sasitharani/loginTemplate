# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.


## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Authentication Starter Template

This project is a React + Express authentication starter template, inspired by the `trainingNew` project. It includes:
- React frontend with Login, Sign Up, and Header (admin logic included)
- Express backend with login and signup controllers
- Example routes file (expand as needed)

## Prerequisites
- Node.js and npm installed
- MySQL database set up (update db.js with your credentials)

## Setup Steps

### 1. Install dependencies
```sh
npm install
npm install mysql
npm install dotenv
npm install cors
npm install axis
npm 
```

### 2. Set up the database
- Create a MySQL database and a table named `iitiusers` with columns: `username`, `email`, `password`, `phoneNumber`, `membership`.
- Update `src/db.js` with your database credentials.

### 3. Start the backend server
```sh
node server.js
```

### 4. Start the frontend (Vite dev server)
```sh
npm run dev
```

### 5. Access the app
- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend API: [http://localhost:3004/api](http://localhost:3004/api)

## File Structure
- `src/components/` — React components (Header, Login, SignUp)
- `src/controllers/` — Express controllers (login, signup)
- `src/routes/routes.js` — Example Express routes
- `server.js` — Express server entry point

## Notes
- The backend expects a MySQL database. You must create `src/db.js` (see `trainingNew/db.js` for reference).
- Update API endpoints in the frontend if you change backend ports.
- For production, secure your API and environment variables.

---

This template is ready for you to extend with more features as needed!
