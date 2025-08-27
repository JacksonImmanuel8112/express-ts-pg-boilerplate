# Express + TypeScript + PostgreSQL Boilerplate

A clean boilerplate for building Node.js backends with **Express**, **TypeScript**, and **PostgreSQL** using `pg.Pool`.

## 🚀 Features
- Express + TypeScript setup
- PostgreSQL connection pool (`pg`)
- Route → Controller → Service structure
- Centralized error handling
- Ready for environment configs

## .env Configuration
- Create a .env file with the following variables:
### Server
PORT=5000

### PostgreSQL
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=yourpassword
DB_NAME=mydatabase

### JWT
JWT_SECRET=supersecretkey
JWT_EXPIRES_IN=1h
- Make sure to never commit .env to GitHub!
## 📦 Setup
```bash
git clone https://github.com/JacksonImmanuel8112/express-ts-pg-boilerplate.git
cd express-ts-pg-boilerplate
npm install
npm run dev
