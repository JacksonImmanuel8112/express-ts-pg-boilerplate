# Express + TypeScript + PostgreSQL Boilerplate

A clean and minimal boilerplate for building **Node.js** backends using **Express**, **TypeScript**, and **PostgreSQL** with connection pooling (`pg.Pool`).
Structured for scalability with routes, controllers, services, and centralized error handling.

---

## 🚀 Features

* Express + TypeScript setup
* PostgreSQL connection pool (`pg`)
* Route ➔ Controller ➔ Service architecture
* Centralized error handling
* Environment-based configuration ready

---

## ⚙️ Setup

1. Clone the repository:

```bash
git clone https://github.com/JacksonImmanuel8112/express-ts-pg-boilerplate.git
cd express-ts-pg-boilerplate
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file:

```bash
cp .env.example .env   # Unix/macOS
# or on Windows PowerShell
copy .env.example .env
```

4. Run the app in development mode:

```bash
npm run dev
```

---

## 📑 Environment Variables

Add the following to your `.env` file:

```env
# Server
PORT=5000

# PostgreSQL
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=yourpassword
DB_NAME=mydatabase

# JWT
JWT_SECRET=supersecretkey
JWT_EXPIRES_IN=1h
```

> ⚠️ Do **not** commit your `.env` file to GitHub.

---

## 📚 Project Structure

```
src/
├── config/
│   └── db.ts              # PostgreSQL pool setup
├── controllers/
│   └── user.controller.ts
├── routes/
│   └── user.routes.ts
├── services/
│   └── user.service.ts
├── middleware/
│   └── errorHandler.ts
├── utils/
│   └── logger.ts
├── constants.ts            # App-wide constants
├── app.ts                  # Express app setup
└── server.ts               # Server entry point

.env.example               # Example environment variables
tsconfig.json              # TypeScript config
package.json
README.md
```

---

## 👤 Contributing

We welcome contributions!

1. Fork the repository
2. Create a new branch:

```bash
git checkout -b feature-name
```

3. Commit your changes:

```bash
git commit -m "Add feature description"
```

4. Push to your branch:

```bash
git push origin feature-name
```

5. Open a Pull Request

**Before submitting:**

* Ensure your code follows the project style guidelines
* Test your changes locally
